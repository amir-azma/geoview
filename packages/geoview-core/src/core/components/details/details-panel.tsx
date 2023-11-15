/* eslint-disable react/require-default-props */
import React, { useEffect, useState, useRef, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { useTheme } from '@mui/material/styles';

import { getUid } from 'ol/util'; // TODO no ol in component

import {
  ListItem,
  ListItemButton,
  List,
  ListItemIcon,
  Tooltip,
  IconButton,
  Grid,
  Paper,
  Typography,
  ArrowForwardIosOutlinedIcon,
  ArrowBackIosOutlinedIcon,
  LayersClearOutlinedIcon,
  ChevronRightIcon,
  Box,
} from '@/ui';
import { FeatureInfo } from './feature-info-new';
import { PayloadBaseClass, api, IconStack } from '@/app';
import { EVENT_NAMES } from '@/api/events/event-types';
import {
  payloadIsAFeatureHighlight,
  payloadIsAClearHighlights,
  clearHighlightsPayload,
  featureHighlightPayload,
  TypeFeatureInfoEntry,
  TypeArrayOfFeatureInfoEntries,
  TypeGeometry,
  TypeArrayOfLayerData,
  TypeLayerData,
} from '@/api/events/payloads';
import { getSxClasses } from './details-style';
import {
  useDetailsStoreActions,
  useDetailsStoreLayerDataArray,
  useDetailsStoreSelectedLayerPath,
} from '@/core/stores/store-interface-and-intial-values/details-state';
import { ResponsiveGrid, CloseButton, EnlargeButton } from '../common';

interface DetailsPanelProps {
  mapId: string;
}

/**
 * layers list
 *
 * @param {DetailsPanelProps} props The properties passed to LayersListFooter
 * @returns {JSX.Element} the layers list
 */
export function Detailspanel({ mapId }: DetailsPanelProps): JSX.Element {
  const { t } = useTranslation<string>();

  const theme = useTheme();
  const sxClasses = getSxClasses(theme);

  // internal state
  const selectedFeatures = useRef<string[]>([]);
  const [layerDataInfo, setLayerDataInfo] = useState<TypeLayerData | null>(null);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState<number>(0);
  const [isClearAllCheckboxes, setIsClearAllCheckboxes] = useState<boolean>(false);
  const [disableClearAllBtn, setDisableClearAllBtn] = useState<boolean>(false);
  const [isLayersPanelVisible, setIsLayersPanelVisible] = useState(false);
  const [isEnlargeDataTable, setIsEnlargeDataTable] = useState(false);

  // get values from store
  const selectedLayerPath = useDetailsStoreSelectedLayerPath();
  const { setSelectedLayerPath } = useDetailsStoreActions();
  const arrayOfLayerData = useDetailsStoreLayerDataArray();

  // Returns the index of matching layer based on the found layer path
  const findLayerPathIndex = (layerDataArray: TypeArrayOfLayerData, layerPathSearch: string): number => {
    return layerDataArray.findIndex((item) => item.layerPath === layerPathSearch);
  };

  const highlightCallbackFunction = (payload: PayloadBaseClass) => {
    if (payloadIsAFeatureHighlight(payload) && payload.feature.geometry) {
      selectedFeatures.current.push(getUid(payload.feature.geometry));
    }
  };

  const clearHighlightCallbackFunction = (payload: PayloadBaseClass) => {
    if (payloadIsAClearHighlights(payload)) {
      if (payload.id === 'all') {
        selectedFeatures.current = [];
      }
      if (selectedFeatures.current.indexOf(payload.id) !== -1)
        selectedFeatures.current.splice(selectedFeatures.current.indexOf(payload.id), 1);
    }
  };

  const handleClearAllFeatures = () => {
    // clear all highlights from features on the map in all layers,
    api.event.emit(clearHighlightsPayload(EVENT_NAMES.FEATURE_HIGHLIGHT.EVENT_HIGHLIGHT_CLEAR, mapId, 'all'));
    // add the highlight to the current feature
    api.event.emit(
      featureHighlightPayload(
        EVENT_NAMES.FEATURE_HIGHLIGHT.EVENT_HIGHLIGHT_FEATURE,
        mapId,
        layerDataInfo?.features![currentFeatureIndex] as TypeFeatureInfoEntry
      )
    );

    setIsClearAllCheckboxes(true);
  };

  const allUncheckedFeatures = (
    checkedFeatures: Exclude<TypeArrayOfFeatureInfoEntries, null | undefined>,
    allFeatures: Exclude<TypeArrayOfFeatureInfoEntries, null | undefined>
  ) => {
    const uncheckedFeatures = allFeatures.filter(
      (feature) =>
        !checkedFeatures.some(
          (checkedFeature) => (checkedFeature.geometry as TypeGeometry)?.ol_uid === (feature.geometry as TypeGeometry)?.ol_uid
        )
    );
    return uncheckedFeatures;
  };

  const handleFeatureNavigateChange = (
    checkedFeatures: Exclude<TypeArrayOfFeatureInfoEntries, null | undefined>,
    currentFeature: TypeFeatureInfoEntry
  ) => {
    // remove the highlight for unchecked feature
    arrayOfLayerData.forEach((layer: TypeLayerData) => {
      const getAllUnCheckedFeatures = allUncheckedFeatures(checkedFeatures, layer.features!);

      getAllUnCheckedFeatures.forEach((obj: TypeFeatureInfoEntry) => {
        if (obj.geometry)
          api.event.emit(clearHighlightsPayload(EVENT_NAMES.FEATURE_HIGHLIGHT.EVENT_HIGHLIGHT_CLEAR, mapId, getUid(obj.geometry)));
      });
    });

    // add highlight to current feature
    api.event.emit(featureHighlightPayload(EVENT_NAMES.FEATURE_HIGHLIGHT.EVENT_HIGHLIGHT_FEATURE, mapId, currentFeature));
  };

  useEffect(() => {
    api.event.on(EVENT_NAMES.FEATURE_HIGHLIGHT.EVENT_HIGHLIGHT_FEATURE, highlightCallbackFunction, mapId);
    api.event.on(EVENT_NAMES.FEATURE_HIGHLIGHT.EVENT_HIGHLIGHT_CLEAR, clearHighlightCallbackFunction, mapId);

    return () => {
      api.event.off(EVENT_NAMES.FEATURE_HIGHLIGHT.EVENT_HIGHLIGHT_FEATURE, mapId, highlightCallbackFunction);
      api.event.off(EVENT_NAMES.FEATURE_HIGHLIGHT.EVENT_HIGHLIGHT_CLEAR, mapId, clearHighlightCallbackFunction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (arrayOfLayerData.length > 0) {
      // Check if have the previous selected layer path in incoming arrayOfLayerData
      // if so, get the index of the found layer, we need to pass to setLayerDataInfo to load layer in left panel
      const commonLayerPathIndex = selectedLayerPath ? findLayerPathIndex(arrayOfLayerData, selectedLayerPath) : -1;
      setLayerDataInfo(arrayOfLayerData[commonLayerPathIndex > -1 ? commonLayerPathIndex : 0]);
      setCurrentFeatureIndex(0);
    } else setLayerDataInfo(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayOfLayerData]);

  /**
   * Create layer tooltip
   * @param {string} layerName en/fr layer name
   * @param {number} numOfFeatures number of features for a layer.
   * @returns
   */
  const getLayerTooltip = (layerName: string, numOfFeatures: number): React.ReactNode => {
    return `${layerName ?? t('details.clickOnMap')}, ${numOfFeatures} ${t('details.feature')}${numOfFeatures > 1 ? 's' : ''}`;
  };

  const renderLayerList = useCallback(() => {
    return (
      <List sx={sxClasses.list}>
        {arrayOfLayerData.map((layerData) => {
          const isSelectedBorder = layerData.layerPath === layerDataInfo?.layerPath;
          const numOfFeatures = layerData.features!.length;

          return (
            <Paper
              sx={{ ...sxClasses.paper, border: isSelectedBorder ? sxClasses.borderWithIndex : sxClasses.borderNone }}
              key={layerData.layerPath}
            >
              <Tooltip title={getLayerTooltip(layerData.layerName, numOfFeatures)} placement="top" arrow>
                <Box>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setLayerDataInfo(layerData);
                        setCurrentFeatureIndex(0);
                        setSelectedLayerPath(layerData.layerPath);
                        setIsLayersPanelVisible(false);
                      }}
                    >
                      <ListItemIcon>
                        <IconStack layerPath={layerData.layerPath} />
                      </ListItemIcon>
                      <Box sx={sxClasses.listPrimaryText}>
                        <Typography component="p">{layerData.layerName ? layerData.layerName : t('details.clickOnMap')}</Typography>
                        <Box sx={{ display: 'flex', alignContent: 'center' }}>
                          <Typography component="p" variant="subtitle1" noWrap>
                            {`${numOfFeatures} ${t('details.feature')}${numOfFeatures > 1 ? 's' : ''}`}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          padding: isEnlargeDataTable ? '0.25rem' : '1rem',
                          paddingRight: isEnlargeDataTable ? '0.25rem' : '1rem',
                          [theme.breakpoints.down('xl')]: {
                            display: isEnlargeDataTable ? 'none !important' : 'block',
                          },
                          [theme.breakpoints.down('sm')]: {
                            display: 'none',
                          },
                        }}
                      >
                        <IconButton
                          disabled
                          edge="end"
                          size="small"
                          sx={{ color: `${theme.palette.primary.main} !important`, background: `${theme.palette.grey.A100} !important` }}
                        >
                          <ChevronRightIcon />
                        </IconButton>
                      </Box>
                    </ListItemButton>
                  </ListItem>
                </Box>
              </Tooltip>
            </Paper>
          );
        })}
      </List>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layerDataInfo, arrayOfLayerData, isEnlargeDataTable]);

  return (
    <Box sx={sxClasses.detailsContainer}>
      {!layerDataInfo && (
        <ResponsiveGrid.Root>
          <ResponsiveGrid.Left xs={12} isLayersPanelVisible={isLayersPanelVisible}>
            <Typography component="p">{t('details.selectVisbleLayer')}</Typography>
          </ResponsiveGrid.Left>
        </ResponsiveGrid.Root>
      )}
      {layerDataInfo && (
        <>
          <ResponsiveGrid.Root>
            <ResponsiveGrid.Left xs={isLayersPanelVisible ? 12 : 0} md={3} isLayersPanelVisible={isLayersPanelVisible}>
              <Typography component="div" sx={sxClasses.panelHeaders}>
                {t('details.availableLayers')}
              </Typography>
            </ResponsiveGrid.Left>
            <ResponsiveGrid.Right
              isLayersPanelVisible={false}
              xs={!isLayersPanelVisible ? 12 : 0}
              md={9}
              sx={{ display: 'flex', justifyContent: 'right' }}
            >
              <EnlargeButton isEnlargeDataTable={isEnlargeDataTable} setIsEnlargeDataTable={setIsEnlargeDataTable} />
              <CloseButton isLayersPanelVisible={isLayersPanelVisible} setIsLayersPanelVisible={setIsLayersPanelVisible} />
            </ResponsiveGrid.Right>
          </ResponsiveGrid.Root>
          <ResponsiveGrid.Root sx={{ marginTop: '1rem' }}>
            <ResponsiveGrid.Left
              isLayersPanelVisible={isLayersPanelVisible}
              xs={isLayersPanelVisible ? 12 : 0}
              md={!isEnlargeDataTable ? 4 : 1.25}
            >
              {renderLayerList()}
            </ResponsiveGrid.Left>
            <ResponsiveGrid.Right
              xs={!isLayersPanelVisible ? 12 : 0}
              md={!isEnlargeDataTable ? 8 : 10.75}
              isLayersPanelVisible={isLayersPanelVisible}
            >
              <Box sx={sxClasses.rightPanleContainer}>
                <Grid container sx={sxClasses.rightPanelBtnHolder}>
                  <Grid item xs={6}>
                    <Box style={{ marginLeft: '22px' }}>
                      Feature {currentFeatureIndex + 1} of {layerDataInfo?.features!.length}
                      <IconButton
                        sx={{ marginLeft: '20px' }}
                        aria-label="clear-all-features"
                        tooltip="details.clearAllfeatures"
                        tooltipPlacement="top"
                        onClick={() => handleClearAllFeatures()}
                        disabled={disableClearAllBtn}
                      >
                        <LayersClearOutlinedIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'right', marginRight: '26px' }}>
                      <IconButton
                        aria-label="backward"
                        tooltip="details.previousFeatureBtn"
                        tooltipPlacement="top"
                        onClick={() => setCurrentFeatureIndex(currentFeatureIndex - 1)}
                        disabled={currentFeatureIndex === 0}
                      >
                        <ArrowBackIosOutlinedIcon />
                      </IconButton>
                      <IconButton
                        sx={{ marginLeft: '20px' }}
                        aria-label="forward"
                        tooltip="details.nextFeatureBtn"
                        tooltipPlacement="top"
                        onClick={() => setCurrentFeatureIndex(currentFeatureIndex + 1)}
                        // eslint-disable-next-line no-unsafe-optional-chaining
                        disabled={currentFeatureIndex === layerDataInfo?.features!.length - 1}
                      >
                        <ArrowForwardIosOutlinedIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
                <FeatureInfo
                  features={layerDataInfo?.features}
                  currentFeatureIndex={currentFeatureIndex}
                  selectedFeatures={selectedFeatures}
                  mapId={mapId}
                  onClearCheckboxes={() => setIsClearAllCheckboxes(false)}
                  onFeatureNavigateChange={handleFeatureNavigateChange}
                  clearAllCheckboxes={isClearAllCheckboxes}
                  setDisableClearAllBtn={setDisableClearAllBtn}
                />
              </Box>
            </ResponsiveGrid.Right>
          </ResponsiveGrid.Root>
        </>
      )}
    </Box>
  );
}
