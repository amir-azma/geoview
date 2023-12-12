/*! Package:geoview-footer-panel: 0.1.0 - "5df7a31212a5c24707e8baeb0fed089412453015" - 2023-12-12T21:37:02.142Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{84144:(e,t,n)=>{var a=n(25912),r=n(74146),o=n(1358),i=n(30830),s=n(86022),c=n(82217),u=n(81028),l=n(87663),f=n(60319);const d=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":true,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","layers","details","data-table","time-slider","geoChart"]},"minItems":0,"default":["legend","layers","details","data-table"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."},"collapsed":{"type":"boolean","default":true,"description":"State of footer panel when map is loaded"}},"required":["suportedLanguages","tabs"]}'),v=JSON.parse('{"tabs":{"defaultTabs":["legend","layers","details","data-table"],"customTabs":[]},"suportedLanguages":["en","fr"]}');var p=n(59618),E=n(12919),m=n(29541),g=window;function y(e){var t=e.mapId,n=g.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(),c=(0,E.Z)(s,2),u=c[0],f=c[1],d=o([]),v=(0,E.Z)(d,2),y=v[0],A=v[1],L=function(){var e;void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&A((0,p.Z)(a.maps[t].layer.layerOrder).reverse())},b=function(){return L()},T=function(e){(0,l.UKz)(e)&&A((function(t){return t.filter((function(t){return t!==e.geoviewLayer.geoviewLayerId}))}))},h=function(e){(0,l.riW)(e)&&a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){L(),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,b,t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,T,t),a.event.on(a.eventNames.LAYER.EVENT_ADD_LAYER,h,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,b),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t,T),a.event.off(a.eventNames.LAYER.EVENT_ADD_LAYER,t,h)}}),[]),i((function(){f(a.maps[t].legend.createLegend({layerIds:y,isRemoveable:!1,canSetOpacity:!0,canZoomTo:!0}))}),[y]),(0,m.jsx)("div",{children:u})}var A=n(64238),L=n(14843),b=n.n(L),T=window;function h(e){var t=e.mapId,n=T.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(null),c=(0,E.Z)(s,2),u=c[0],l=c[1],f=function(){var e=(0,A.Z)(b().mark((function e(){var a;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.api.maps[t].dataTable.createDataPanel();case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){setTimeout((function(){f()}),1e3)};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,d,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,d)}}),[]),(0,m.jsx)("div",{children:u})}var N=window;function _(e){var t=e.mapId,n=N.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(),c=(0,E.Z)(s,2),u=c[0],f=c[1],d=o([]),v=(0,E.Z)(d,2),g=v[0],y=v[1],A=function(){var e;void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&y((0,p.Z)(a.maps[t].layer.layerOrder).reverse())},L=function(){return A()},b=function(e){(0,l.UKz)(e)&&y((function(t){return t.filter((function(t){return t!==e.geoviewLayer.geoviewLayerId}))}))},T=function(e){(0,l.riW)(e)&&a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){A(),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,L,t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,b,t),a.event.on(a.eventNames.LAYER.EVENT_ADD_LAYER,T,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,L),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t,b),a.event.off(a.eventNames.LAYER.EVENT_ADD_LAYER,t,T)}}),[]),i((function(){f(a.maps[t].layers.createLayers({layerIds:g,isRemoveable:!1,canSetOpacity:!0,canZoomTo:!0}))}),[g]),(0,m.jsx)("div",{children:u})}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var R=window,I=function(e){(0,i.Z)(n,e);var t=D(n);function n(e,r){var i;return(0,a.Z)(this,n),i=t.call(this,e,r),(0,u.Z)((0,o.Z)(i),"schema",(function(){return d})),(0,u.Z)((0,o.Z)(i),"defaultConfig",(function(){return(0,l.ZQJ)(v)})),(0,u.Z)((0,o.Z)(i),"translations",(0,l.ZQJ)({en:{legend:"Legend",layers:"Layers",details:"Details",dataTable:"DataTable",timeSlider:"Time Slider",geochart:"Chart"},fr:{legend:"Légende",layers:"Couches",details:"Détails",dataTable:"Données",timeSlider:"Curseur Temporel",geochart:"Graphique"}})),(0,u.Z)((0,o.Z)(i),"added",(function(){var e=(0,o.Z)(i),t=e.configObj,n=e.pluginProps.mapId,a=R.cgpv;if(a){var r=a.api,s=r.maps[n].footerTabs,c=r.maps[n].getDisplayLanguage(),u=null==t?void 0:t.tabs.defaultTabs,d=0;if(u.includes("legend")&&(s.createFooterTab({value:d,label:i.translations[c].legend,content:function(){return(0,m.jsx)(y,{mapId:n})},icon:(0,m.jsx)(f.HubOutlinedIcon,{})}),d++),u.includes("layers")&&(s.createFooterTab({value:d,label:i.translations[c].layers,content:function(){return(0,m.jsx)(_,{mapId:n})},icon:(0,m.jsx)(f.LayersOutlinedIcon,{})}),d++),u.includes("details")){var v=d;s.createFooterTab({value:v,label:i.translations[c].details,content:function(){return r.maps[n].details.createDetails(n)},icon:(0,m.jsx)(f.InfoOutlinedIcon,{})}),d++,r.event.on(r.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,l.gNW)(e)){var t=e.eventType,n=e.resultSets;if("click"===t){var a=[];Object.keys(n).forEach((function(e){a=a.concat(n[e])})),a.length>0&&s.selectFooterTab(v)}}}),"".concat(n,"/FeatureInfoLayerSet"))}u.includes("data-table")&&(s.createFooterTab({value:d,label:i.translations[c].dataTable,content:function(){return(0,m.jsx)(h,{mapId:n})},icon:(0,m.jsx)(f.StorageIcon,{})}),d++),u.includes("time-slider")&&r.plugin.loadScript("time-slider").then((function(e){r.plugin.addPlugin("time-slider",n,e,(0,l.ZQJ)({mapId:n}))})),u.includes("geoChart")&&r.plugin.loadScript("geochart").then((function(e){r.plugin.addPlugin("geochart",n,e,(0,l.ZQJ)({mapId:n}))}));for(var p=null==t?void 0:t.tabs.customTabs,E=0;E<p.length;E++){var g=p[E];s.createFooterTab({value:d,label:g.title,content:g.contentHTML}),d++}}})),i.buttonPanel=null,i}return(0,r.Z)(n,[{key:"removed",value:function(){R.cgpv}}]),n}(l.Vw$);R.plugins=R.plugins||{},R.plugins["footer-panel"]=(0,l.RFZ)(I)}},e=>{var t;t=84144,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map