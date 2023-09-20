/*! Package:geoview-details-panel: 0.1.0 - "8b83a921a91dc72474f421876e433bb484d7c0ec" - 2023-09-20T02:58:02.845Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[138],{35888:(e,t,n)=>{var a=n(98124),i=n(46623),o=n(78630),r=n(34313),s=n(61987),l=n(18879),u=n(84421),c=n(60558),p=n(38736),d=n(29541),f=window;function h(e){var t,n=e.mapId,a=e.buttonId,i=f.cgpv,o=i.api,r=i.react,s=r.useState,l=r.useEffect,u=s([]),h=(0,p.Z)(u,2),m=h[0],v=h[1],g=s(),y=(0,p.Z)(g,2),P=y[0],I=y[1],_=s([]),b=(0,p.Z)(_,2),E=b[0],N=b[1],Z=s(null),k=(0,p.Z)(Z,2),L=k[0],w=k[1],B=null===(t=o.maps[n].appBarButtons.getAppBarButtonPanelById(void 0===a?"":a))||void 0===t?void 0:t.panel,C=function(e){if((0,c.gNW)(e)){var t=e.resultSets,a=[];Object.keys(t).forEach((function(e){var i=(0,c.dIw)(o.maps[n].layer.registeredLayers[e].layerName,n),r=t[e].data;r.length>0&&a.push({layerPath:e,layerName:i,features:r})})),a.length>0?(v(a),null==B||B.open()):v([])}else v([])},A=function(e){if((0,c.gux)(e)){var t=e.coordinates;w(e.handlerName),N(t.lnglat)}else N([])};return l((function(){return o.event.on(o.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,C,"".concat(n,"/$FeatureInfoLayerSet$")),o.event.on(o.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,A,n),function(){o.event.off(o.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,n,C),o.event.off(o.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,n,A)}}),[]),l((function(){I(o.maps[n].details.createDetails(n,m,{mapId:n,location:E,backgroundStyle:"dark",singleColumn:!0,handlerName:L}))}),[m,E]),(0,d.jsx)("div",{children:P})}const m=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Details Panel/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),v=JSON.parse('{"suportedLanguages":["en","fr"]}');function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var y=window,P=function(e){(0,r.Z)(n,e);var t=g(n);function n(e,i){var r;return(0,a.Z)(this,n),r=t.call(this,e,i),(0,u.Z)((0,o.Z)(r),"schema",(function(){return m})),(0,u.Z)((0,o.Z)(r),"defaultConfig",(function(){return(0,c.ZQJ)(v)})),(0,u.Z)((0,o.Z)(r),"translations",(0,c.ZQJ)({en:{detailsPanel:"Details",nothing_found:"Nothing found",click_map:"Choose a point on the map to start",action_back:"Back"},fr:{detailsPanel:"Détails",nothing_found:"Aucun résultat",click_map:"Choisissez un point sur la carte pour commencer",action_back:"Retour"}})),r.buttonPanel=null,r}return(0,i.Z)(n,[{key:"added",value:function(){var e,t=this.pluginProps.mapId,n=y.cgpv,a=n.api,i=n.ui.elements.DetailsIcon,o=a.maps[t].displayLanguage,r={id:"detailsPanelButton",tooltip:this.translations[o].detailsPanel,tooltipPlacement:"right",children:(0,d.jsx)(i,{}),visible:!0},s={title:this.translations[o].detailsPanel,icon:'<i class="material-icons">details</i>',width:350};this.buttonPanel=a.maps[t].appBarButtons.createAppbarPanel(r,s,null),null===(e=this.buttonPanel)||void 0===e||null===(e=e.panel)||void 0===e||e.changeContent((0,d.jsx)(h,{mapId:t,buttonId:r.id}))}},{key:"removed",value:function(){var e=this.pluginProps.mapId,t=y.cgpv.api;this.buttonPanel&&t.maps[e].appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId)}}]),n}(c.Vw$);y.plugins=y.plugins||{},y.plugins["details-panel"]=P}},e=>{var t;t=35888,e(e.s=t)}]);
//# sourceMappingURL=geoview-details-panel.js.map