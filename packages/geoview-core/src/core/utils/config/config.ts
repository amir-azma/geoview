/* eslint-disable no-console */
import { TypeDisplayLanguage, TypeListOfLayerEntryConfig } from '../../../geo/map/map-schema-types';
import { CONST_LAYER_ENTRY_TYPE, TypeGeoviewLayerType } from '../../../geo/layer/geoview-layers/abstract-geoview-layers';
import { TypeMapFeaturesConfig } from '../../types/global-types';
import { ConfigValidation } from './config-validation';
import { InlineDivConfigReader } from './reader/div-config-reader';
import { JsonConfigReader } from './reader/json-config-reader';
import { URLmapConfigReader } from './reader/url-config-reader';

export const catalogUrl = 'https://maps.canada.ca/geonetwork/srv/api/v2/docs';

// ******************************************************************************************************************************
// ******************************************************************************************************************************
/** *****************************************************************************************************************************
 * Class to read and validate the GeoView map features configuration. Will validate every item for structure and valid values.
 * If error found, will replace by default values and sent a message in the console for developers to know something went wrong.
 *
 * @exports
 * @class Config
 */
// ******************************************************************************************************************************
export class Config {
  /** The element associated to the map properties configuration.. */
  private mapElement: Element;

  /** Config validation object used to validate the configuration and define default values */
  configValidation: ConfigValidation;

  /** ***************************************************************************************************************************
   * The Config class constructor used to instanciate an object of this type.
   * @param {Element} mapElement The map element.
   *
   * @returns {Config} An instance of the Config class.
   */
  constructor(mapElement: Element) {
    this.mapElement = mapElement;

    // Instanciate the configuration validator.
    this.configValidation = new ConfigValidation();
  }

  /** ***************************************************************************************************************************
   * Get mapId value.
   *
   * @returns {string} The ID of the Geoview map.
   */
  get mapId(): string {
    return this.configValidation.mapId;
  }

  /** ***************************************************************************************************************************
   * Set mapId value.
   * @param {string} mapId The ID of the Geoview map.
   */
  set mapId(mapId: string) {
    this.configValidation.mapId = mapId;
  }

  /** ***************************************************************************************************************************
   * Get triggerReadyCallback value.
   *
   * @returns {boolean} The triggerReadyCallback flag of the Geoview map.
   */
  get triggerReadyCallback(): boolean {
    return this.configValidation.triggerReadyCallback;
  }

  /** ***************************************************************************************************************************
   * Set triggerReadyCallback value.
   * @param {string} triggerReadyCallback The value to assign to the triggerReadyCallback flag for the Geoview map.
   */
  set triggerReadyCallback(triggerReadyCallback: boolean) {
    this.configValidation.triggerReadyCallback = triggerReadyCallback;
  }

  /** ***************************************************************************************************************************
   * Get displayLanguage value.
   *
   * @returns {TypeDisplayLanguage} The display language of the Geoview map.
   */
  get displayLanguage(): TypeDisplayLanguage {
    return this.configValidation.displayLanguage;
  }

  /** ***************************************************************************************************************************
   * Set displayLanguage value.
   * @param {TypeDisplayLanguage} displayLanguage The display language of the Geoview map.
   */
  set displayLanguage(displayLanguage: TypeDisplayLanguage) {
    this.configValidation.displayLanguage = displayLanguage;
  }

  /** ***************************************************************************************************************************
   * Get map properties configuration from a function call.
   *
   * @param {TypeMapFeaturesConfig} mapFeaturesConfig Config object passed in the function.
   *
   * @returns {TypeMapFeaturesConfig} A valid map config.
   */
  getMapConfigFromFunc(mapFeaturesConfig: TypeMapFeaturesConfig): TypeMapFeaturesConfig | undefined {
    // get the id from the map element
    const mapId = this.mapElement.getAttribute('id');

    // update map id if provided in map element
    if (mapId) this.mapId = mapId;

    // get the triggerReadyCallback from the map element
    const triggerReadyCallback = this.mapElement.getAttribute('triggerReadyCallback');

    // update triggerReadyCallback if provided in map element
    if (triggerReadyCallback) this.triggerReadyCallback = triggerReadyCallback === 'true';

    // get the display language from the map element
    const displayLanguage = this.mapElement.getAttribute('data-lang');

    // update display language if provided in map element
    if (displayLanguage) this.displayLanguage = displayLanguage as TypeDisplayLanguage;

    if (mapFeaturesConfig?.map?.listOfGeoviewLayerConfig) {
      mapFeaturesConfig.map.listOfGeoviewLayerConfig.forEach((geoviewLayerEntry) => {
        if (Object.keys(CONST_LAYER_ENTRY_TYPE).includes(geoviewLayerEntry.geoviewLayerType))
          this.setLayerEntryType(geoviewLayerEntry.listOfLayerEntryConfig!, geoviewLayerEntry.geoviewLayerType);
        else throw new Error(`Invalid GeoView Layer Type ${geoviewLayerEntry.geoviewLayerType}`);
      });
    }
    return this.configValidation.validateMapConfigAgainstSchema(mapFeaturesConfig);
  }

  /** ***************************************************************************************************************************
   * Initialize all layer entry type fields accordingly to the GeoView layer type..
   * @param {TypeListOfLayerEntryConfig} listOfLayerEntryConfig The list of layer entry configuration to adjust.
   * @param {TypeGeoviewLayerType} geoviewLayerType The GeoView layer type.
   */
  private setLayerEntryType(listOfLayerEntryConfig: TypeListOfLayerEntryConfig, geoviewLayerType: TypeGeoviewLayerType): void {
    listOfLayerEntryConfig?.forEach((layerEntryConfig) => {
      if (layerEntryConfig.entryType === 'group') this.setLayerEntryType(layerEntryConfig.listOfLayerEntryConfig!, geoviewLayerType);
      else {
        // eslint-disable-next-line no-param-reassign
        layerEntryConfig.schemaTag = geoviewLayerType;
        // eslint-disable-next-line no-param-reassign
        layerEntryConfig.entryType = CONST_LAYER_ENTRY_TYPE[geoviewLayerType];
      }
    });
  }

  /** ***************************************************************************************************************************
   * Initialize a map config from either inline div, url params, json file.
   *
   * @returns {Promise<TypeMapFeaturesConfig | undefined>} The initialized valid map config.
   */
  async initializeMapConfig(): Promise<TypeMapFeaturesConfig | undefined> {
    // get the id from the map element
    const mapId = this.mapElement.getAttribute('id');

    // update map id if provided in map element
    if (mapId) this.mapId = mapId;

    // get the triggerReadyCallback from the map element
    const triggerReadyCallback = this.mapElement.getAttribute('triggerReadyCallback');

    // update triggerReadyCallback if provided in map element
    if (triggerReadyCallback) this.triggerReadyCallback = triggerReadyCallback === 'true';

    // get the display language from the map element
    const displayLanguage = this.mapElement.getAttribute('data-lang');

    // update display language if provided in map element
    if (displayLanguage) this.displayLanguage = displayLanguage as TypeDisplayLanguage;

    // create a new config object to store provided config by user
    let mapFeaturesConfig: TypeMapFeaturesConfig | undefined;

    // check if inline div config has been passed
    const inlineDivConfig = InlineDivConfigReader.getMapFeaturesConfig(this.mapId, this.mapElement);

    // use inline config if provided
    if (inlineDivConfig) mapFeaturesConfig = { ...inlineDivConfig };

    // check if a config file url is provided.
    const jsonFileConfig = await JsonConfigReader.getMapFeaturesConfig(this.mapId, this.mapElement);

    if (jsonFileConfig) mapFeaturesConfig = { ...jsonFileConfig };

    // get the value that will check if any url params passed will override existing map
    const shared = this.mapElement.getAttribute('data-shared');

    // check if config params have been passed
    const urlParamsConfig = await URLmapConfigReader.getMapFeaturesConfig(this.mapId);

    // use the url params config if provided
    if (urlParamsConfig && shared === 'true') mapFeaturesConfig = { ...urlParamsConfig };

    // NOTE: URL config has precedence on JSON file config that has precedence on inline config
    if (!mapFeaturesConfig) {
      console.log(`- Map: ${mapId} - Empty JSON configuration object, using default -`);
    }

    if (mapFeaturesConfig?.map?.listOfGeoviewLayerConfig) {
      mapFeaturesConfig.map.listOfGeoviewLayerConfig.forEach((geoviewLayerEntry) => {
        if (Object.keys(CONST_LAYER_ENTRY_TYPE).includes(geoviewLayerEntry.geoviewLayerType))
          this.setLayerEntryType(geoviewLayerEntry.listOfLayerEntryConfig!, geoviewLayerEntry.geoviewLayerType);
        else throw new Error(`Invalid GeoView Layer Type ${geoviewLayerEntry.geoviewLayerType}`);
      });
    }
    return this.configValidation.validateMapConfigAgainstSchema(mapFeaturesConfig);
  }
}
