/*! Package:geoview-footer-panel: 0.1.0 - "3c23569b492c382b8f4931f29b1d9d0ac443bedc" - 2023-10-27T14:25:36.124Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{65986:(e,t,n)=>{var a=n(98124),r=n(46623),o=n(78630),i=n(34313),s=n(61987),u=n(18879),c=n(84421),l=n(60558);const f=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":true,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","details","data-table"]},"minItems":0,"default":["legend","details","data-table"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."},"collapsed":{"type":"boolean","default":true,"description":"State of footer panel when map is loaded"}},"required":["suportedLanguages","tabs"]}'),d=JSON.parse('{"tabs":{"defaultTabs":["legend","details","data-table"],"customTabs":[]},"suportedLanguages":["en","fr"]}');var v=n(38736),p=n(29541),E=window;function m(e){var t=e.mapId,n=E.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o([]),u=(0,v.Z)(s,2),c=u[0],f=u[1],d=o(),m=(0,v.Z)(d,2),g=m[0],y=m[1],b=o([]),h=(0,v.Z)(b,2),_=h[0],N=h[1],T=o(null),L=(0,v.Z)(T,2),A=L[0],I=L[1],D=function(e){if((0,l.gNW)(e)&&"at_long_lat"===e.queryType){var n=e.resultSets,r=[];Object.keys(n).forEach((function(e){var o,i=(0,l.dIw)(a.maps[t].layer.registeredLayers[e].layerName,t),s=null===(o=n[e])||void 0===o?void 0:o.data.at_long_lat;null!=s&&s.length&&(null==s?void 0:s.length)>0&&r.push({layerPath:e,layerName:i,features:s})})),r.length>0?f(r):f([])}else f([])},Z=function(e){if((0,l.gux)(e)){var t=e.coordinates;I(e.handlerName),N(t.lnglat)}else N([])};return i((function(){return a.event.on(a.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,D,"".concat(t,"/FeatureInfoLayerSet")),a.event.on(a.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,Z,t),function(){a.event.off(a.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,t,D),a.event.off(a.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,t,Z)}}),[]),i((function(){y(a.maps[t].details.createDetails(t,c,{mapId:t,location:_,handlerName:A}))}),[c,_]),(0,p.jsx)("div",{children:g})}var g=n(53358),y=window;function b(e){var t=e.mapId,n=y.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(),u=(0,v.Z)(s,2),c=u[0],f=u[1],d=o([]),E=(0,v.Z)(d,2),m=E[0],b=E[1],h=function(){var e;void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&b((0,g.Z)(a.maps[t].layer.layerOrder).reverse())},_=function(){return h()},N=function(e){(0,l.UKz)(e)&&b((function(t){return t.filter((function(t){return t!==e.geoviewLayer.geoviewLayerId}))}))},T=function(e){(0,l.riW)(e)&&a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){h(),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,_,t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,N,t),a.event.on(a.eventNames.LAYER.EVENT_ADD_LAYER,T,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,_),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t,N),a.event.off(a.eventNames.LAYER.EVENT_ADD_LAYER,t,T)}}),[]),i((function(){f(a.maps[t].legend.createLegend({layerIds:m,isRemoveable:!1,canSetOpacity:!0,canZoomTo:!0}))}),[m]),(0,p.jsx)("div",{children:c})}var h=n(11468),_=n(69291),N=n.n(_),T=window;function L(e){var t,n=e.mapId,a=T.cgpv,r=a.api,o=a.react,i=o.useState,s=o.useEffect,u=i(null),c=(0,v.Z)(u,2),l=c[0],f=c[1],d=function(){setTimeout((function(){!function(){(t=t||(0,h.Z)(N().mark((function e(){var t;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.api.maps[n].dataTable.createDataPanel();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}()}),1e3)};return s((function(){return r.event.on(r.eventNames.MAP.EVENT_MAP_LOADED,d,n),function(){r.event.off(r.eventNames.MAP.EVENT_MAP_LOADED,n,d)}}),[]),(0,p.jsx)("div",{children:l})}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.Z)(e);if(t){var r=(0,u.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var I=window,D=function(e){(0,i.Z)(n,e);var t=A(n);function n(e,r){var i;return(0,a.Z)(this,n),i=t.call(this,e,r),(0,c.Z)((0,o.Z)(i),"schema",(function(){return f})),(0,c.Z)((0,o.Z)(i),"defaultConfig",(function(){return(0,l.ZQJ)(d)})),(0,c.Z)((0,o.Z)(i),"translations",(0,l.ZQJ)({en:{legend:"Legend",details:"Details",dataTable:"DataTable"},fr:{legend:"Légende",details:"Détails",dataTable:"Données"}})),(0,c.Z)((0,o.Z)(i),"added",(function(){var e=(0,o.Z)(i),t=e.configObj,n=e.pluginProps.mapId,a=I.cgpv;if(a){var r=a.api,s=r.maps[n],u=s.displayLanguage,c=s.footerTabs,f=null==t?void 0:t.tabs.defaultTabs,d=0;if(f.includes("legend")&&(c.createFooterTab({value:d,label:i.translations[u].legend,content:function(){return(0,p.jsx)(b,{mapId:n})}}),d++),f.includes("details")){var v=d;c.createFooterTab({value:v,label:i.translations[u].details,content:function(){return(0,p.jsx)(m,{mapId:n})}}),d++,r.event.on(r.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,l.gNW)(e)){var t=e.resultSets,n=[];Object.keys(t).forEach((function(e){n=n.concat(t[e])})),n.length>0&&c.selectFooterTab(v)}}),"".concat(n,"/FeatureInfoLayerSet"))}f.includes("data-table")&&(c.createFooterTab({value:d,label:i.translations[u].dataTable,content:function(){return(0,p.jsx)(L,{mapId:n})}}),d++);for(var E=null==t?void 0:t.tabs.customTabs,g=0;g<E.length;g++){var y=E[g];c.createFooterTab({value:d,label:y.title,content:y.contentHTML}),d++}}})),i.buttonPanel=null,i}return(0,r.Z)(n,[{key:"removed",value:function(){I.cgpv}}]),n}(l.Vw$);I.plugins=I.plugins||{},I.plugins["footer-panel"]=(0,l.RFZ)(D)}},e=>{var t;t=65986,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map