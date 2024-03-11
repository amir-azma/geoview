import { EVENT_NAMES } from '@/api/events/event-types';
import {
  GetFeatureInfoPayload,
  PayloadBaseClass,
  payloadIsQueryResult,
  payloadIsLayerSetChangeLayerStatus,
  payloadIsAMapMouseEvent,
  TypeLayerData,
} from '@/api/events/payloads';
import { api } from '@/app';
import { LayerSet } from './layer-set';
import { FeatureInfoEventProcessor } from '@/api/event-processors/event-processor-children/feature-info-event-processor';
import { logger } from '@/core/utils/logger';
import { getLocalizedValue } from '@/core/utils/utilities';
import { Coordinate, TypeLayerStatus, TypeQueryStatus } from '@/core/types/cgpv-types';

export type TypeFeatureInfoResultSetEntry = {
  layerName?: string;
  layerStatus: TypeLayerStatus;
  data: TypeLayerData;
};

export type TypeFeatureInfoResultSet = {
  [layerPath: string]: TypeFeatureInfoResultSetEntry;
};

type TypeFeatureInfoLayerSetInstance = { [mapId: string]: FeatureInfoLayerSet };

/** ***************************************************************************************************************************
 * A class containing a set of layers associated with a TypeLayerData object, which will receive the result of a
 * "get feature info" request made on the map layers when the user click a location on the map.
 *
 * @class FeatureInfoLayerSet
 */
export class FeatureInfoLayerSet extends LayerSet {
  /** Private static variable to keep the single instance that can be created by this class for a mapId (see singleton design pattern) */
  private static featureInfoLayerSetInstance: TypeFeatureInfoLayerSetInstance = {};

  /** An object containing the result sets indexed using the layer path */
  declare resultSet: TypeFeatureInfoResultSet;

  /** ***************************************************************************************************************************
   * The class constructor that instanciate a set of layer.
   *
   * @param {string} mapId The map identifier the layer set belongs to.
   *
   */
  private constructor(mapId: string) {
    super(mapId, `${mapId}/click/FeatureInfoLayerSet`, {});
    this.setRegistrationConditionFunction();
    this.setUserRegistrationInitFunction();
    this.setMapClickListener();
    this.setQueryResultListener();
  }

  /* **************************************************************************************************************************
   * This function determines whether a layer can be registered or not.
   */
  setRegistrationConditionFunction() {
    this.registrationConditionFunction = (layerPath: string): boolean => {
      // Log
      logger.logTraceCore('FEATURE-INFO-LAYER-SET setRegistrationConditionFunction', layerPath, Object.keys(this.resultSet));

      const layerConfig = api.maps[this.mapId].layer.registeredLayers[layerPath];
      const queryable = layerConfig?.source?.featureInfo?.queryable;
      return !!queryable;
    };
  }

  /** ***************************************************************************************************************************
   * Define the initialization function that the registration process will use to create a new entry in the layer set for a
   * specific layer path.
   */
  setUserRegistrationInitFunction() {
    this.registrationUserInitialisation = (layerPath: string) => {
      // Log
      logger.logTraceCore('FEATURE-INFO-LAYER-SET setUserRegistrationInitFunction', layerPath, Object.keys(this.resultSet));

      const layerConfig = api.maps[this.mapId].layer.registeredLayers[layerPath];
      this.resultSet[layerPath] = {
        layerName: getLocalizedValue(layerConfig.layerName, this.mapId) ?? '',
        layerStatus: layerConfig.layerStatus!,
        data: {
          layerName: getLocalizedValue(layerConfig.layerName, this.mapId) ?? '',
          layerStatus: layerConfig.layerStatus!,
          eventListenerEnabled: true,
          queryStatus: 'processed',
          features: [],
          layerPath,
        },
      };
      FeatureInfoEventProcessor.propagateFeatureInfoToStore(this.mapId, layerPath, 'click', this.resultSet);
    };
  }

  /** ***************************************************************************************************************************
   * The listener that will handle the CHANGE_LAYER_STATUS event triggered on the map.This method is called by the parent class
   * LayerSet via the listener created by the setChangeLayerStatusListenerFunctions method.
   *
   * @param {PayloadBaseClass} payload The payload to process.
   */
  protected changeLayerStatusListenerFunctions(payload: PayloadBaseClass) {
    if (payloadIsLayerSetChangeLayerStatus(payload)) {
      // Log
      logger.logTraceCoreAPIEvent('FEATURE-INFO-LAYER-SET on EVENT_NAMES.LAYER_SET.CHANGE_LAYER_STATUS', this.mapId, payload);

      const { layerPath, layerStatus } = payload;
      // if layer's status flag exists and is different than the new one
      if (this.resultSet?.[layerPath]?.layerStatus && this.resultSet?.[layerPath]?.layerStatus !== layerStatus) {
        if (layerStatus === 'error') delete this.resultSet[layerPath];
        else {
          const layerConfig = api.maps[this.mapId].layer.registeredLayers[layerPath];
          super.changeLayerStatusListenerFunctions(payload);
          if (this?.resultSet?.[layerPath]?.data) {
            this.resultSet[layerPath].data.layerStatus = layerStatus;
            FeatureInfoEventProcessor.propagateFeatureInfoToStore(this.mapId, layerConfig.layerPath, 'click', this.resultSet);
          }
        }
      }
    }
  }

  /* **************************************************************************************************************************
   * Private method used to emit a query layer event for all layers in the result set that are loaded. Layers that has an error
   * are set with an undefined features array and a queryStatus equal to 'error'.
   *
   * @param {EventType} eventType The event type (ex.: "click" | "hover" | "crosshaire-enter" | "all-features")
   * @param {QueryType} queryType The query type (ex.: "all" | "at_pixel" | "at_coordinate" | "at_long_lat", ...)
   * @param {Coordinate} coordinate The coordinate of the event
   */
  private createQueryLayerPayload = (coordinate: Coordinate): void => {
    // Reinitialize the resultSet
    // Loop on each layer path in the resultSet
    Object.keys(this.resultSet).forEach((layerPath) => {
      const layerConfig = api.maps[this.mapId].layer.registeredLayers[layerPath];
      const { data } = this.resultSet[layerPath];
      if (!data.eventListenerEnabled) return;
      if (layerConfig.layerStatus === 'loaded') {
        data.features = undefined;
        data.queryStatus = 'processing';
      } else {
        data.features = null;
        data.queryStatus = 'error';
      }

      if (data.eventListenerEnabled && data.queryStatus !== ('error' as TypeQueryStatus)) {
        api.event.emit(GetFeatureInfoPayload.createQueryLayerPayload(`${this.mapId}/${layerPath}`, 'at_long_lat', coordinate, 'click'));
      }
    });
  };

  /** ***************************************************************************************************************************
   * Listen to "map click" and send a query layers event to queryable layers. These layers will return a result set of features.
   */
  setMapClickListener() {
    api.event.on(
      EVENT_NAMES.MAP.EVENT_MAP_SINGLE_CLICK,
      (payload) => {
        if (payloadIsAMapMouseEvent(payload)) {
          // Log
          logger.logTraceCoreAPIEvent('FEATURE-INFO-LAYER-SET on EVENT_NAMES.MAP.EVENT_MAP_SINGLE_CLICK', this.mapId, payload);

          this.createQueryLayerPayload(payload.coordinates.lnglat);
        }
      },
      this.mapId
    );
  }

  /** ***************************************************************************************************************************
   * Listen to "query result" events and send an all query done event when all the layers have returned their result set of
   * features.
   */
  private setQueryResultListener() {
    api.event.on(
      EVENT_NAMES.GET_FEATURE_INFO.QUERY_RESULT,
      (payload) => {
        // Log
        logger.logTraceCoreAPIEvent('FEATURE-INFO-LAYER-SET - QUERY_RESULT', this.mapId, payload);

        if (payloadIsQueryResult(payload)) {
          const { layerPath, queryType, arrayOfRecords, eventType } = payload;
          if (eventType === 'click') {
            const layerConfig = api.maps[this.mapId].layer.registeredLayers[layerPath];
            if (this.resultSet?.[layerPath]?.data) {
              const { data } = this.resultSet[layerPath];
              data.features = arrayOfRecords;
              data.layerStatus = layerConfig.layerStatus!;
              // When property features is undefined, we are waiting for the query result.
              // when Array.isArray(features) is true, the features property contains the query result.
              // when property features is null, the query ended with an error.
              data.queryStatus = arrayOfRecords === null ? 'error' : 'processed';
              FeatureInfoEventProcessor.propagateFeatureInfoToStore(this.mapId, layerPath, eventType, this.resultSet);
            }

            const allDone = Object.keys(this.resultSet).reduce((doneFlag, layerPathToTest) => {
              return doneFlag && this.resultSet[layerPathToTest].data.features !== undefined;
            }, true);

            if (allDone) {
              api.event.emit(
                GetFeatureInfoPayload.createAllQueriesDonePayload(
                  this.layerSetId,
                  eventType,
                  layerPath,
                  queryType,
                  this.layerSetId,
                  this.resultSet
                )
              );
            }
          }
        }
      },
      this.mapId
    );
  }

  /**
   * Function used to enable listening of click events. When a layer path is not provided,
   * click events listening is enabled for all layers
   *
   * @param {string} layerPath Optional parameter used to enable only one layer
   */
  enableClickListener(layerPath?: string) {
    if (layerPath) this.resultSet[layerPath].data.eventListenerEnabled = true;
    else
      Object.keys(this.resultSet).forEach((key: string) => {
        this.resultSet[key].data.eventListenerEnabled = true;
      });
  }

  /**
   * Function used to disable listening of click events. When a layer path is not provided,
   * click events listening is disable for all layers
   *
   * @param {string} layerPath Optional parameter used to disable only one layer
   */
  disableClickListener(layerPath?: string) {
    if (layerPath) this.resultSet[layerPath].data.eventListenerEnabled = false;
    else
      Object.keys(this.resultSet).forEach((key: string) => {
        this.resultSet[key].data.eventListenerEnabled = false;
      });
  }

  /**
   * Function used to determine whether click events are disabled for a layer. When a layer path is not provided,
   * the value returned is undefined if the map flags are a mixture of true and false values.
   *
   * @param {string} layerPath Optional parameter used to get the flag value of a layer.
   *
   * @returns {boolean | undefined} The flag value for the map or layer.
   */
  isClickListenerEnabled(layerPath?: string): boolean | undefined {
    if (layerPath) return !!this.resultSet?.[layerPath]?.data?.eventListenerEnabled;

    let returnValue: boolean | undefined;
    Object.keys(this.resultSet).forEach((key: string, i) => {
      if (i === 0) returnValue = this.resultSet[key].data.eventListenerEnabled;
      if (returnValue !== this.resultSet[key].data.eventListenerEnabled) returnValue = undefined;
    });
    return returnValue;
  }

  /**
   * Helper function used to instanciate a FeatureInfoLayerSet object. This function
   * must be used in place of the "new FeatureInfoLayerSet" syntax.
   *
   * @param {string} mapId The map identifier the layer set belongs to.
   *
   * @returns {FeatureInfoLayerSet} the FeatureInfoLayerSet object created
   */
  static get(mapId: string): FeatureInfoLayerSet {
    if (!FeatureInfoLayerSet.featureInfoLayerSetInstance[mapId])
      FeatureInfoLayerSet.featureInfoLayerSetInstance[mapId] = new FeatureInfoLayerSet(mapId);
    return FeatureInfoLayerSet.featureInfoLayerSetInstance[mapId];
  }

  /**
   * Function used to delete a FeatureInfoLayerSet object associated to a mapId.
   *
   * @param {string} mapId The map identifier the layer set belongs to.
   */
  static delete(mapId: string) {
    if (FeatureInfoLayerSet.featureInfoLayerSetInstance[mapId]) delete FeatureInfoLayerSet.featureInfoLayerSetInstance[mapId];
  }
}
