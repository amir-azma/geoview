/*! Package:geoview-basemap-panel: 0.1.0 - "711c547c72bf598aff7e0206b5bac0bdfa4aa323" - 2023-07-27T15:55:27.296Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[286],{47341:(e,a,t)=>{var r=t(18211),s=t(65151),n=t(35533),o=t(51487),i=t(7393),p=t(19316),l=t(41124),d=t(79712),m=t(26200),c=t(29039),u=t(20703),b=t(76696),f=t.n(b),h=t(29541),g=window;function y(e){var a=e.mapId,t=e.config,r=g.cgpv,s=r.api.map(a),n=r.api,o=r.ui,i=r.react,p=o.elements,l=p.Select,b=p.Card,y=i.useState,v=i.useEffect,C=y([]),P=(0,u.Z)(C,2),j=P[0],I=P[1],w=y(""),x=(0,u.Z)(w,2),B=x[0],Z=x[1],k=y(t.canSwichProjection),N=(0,u.Z)(k,1)[0],S=o.makeStyles((function(e){return{basemapCard:{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"1px solid ".concat(e.basemapPanel.borderDefault),borderRadius:6,boxShadow:"none",marginBottom:16,transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:0},"& .MuiCardHeader-root":{backgroundColor:e.palette.grey.A700,color:e.basemapPanel.header,fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .basemapCardThumbnail":{position:"absolute",height:"100%",width:"100%",objectFit:"cover",top:0,left:0},"& .basemapCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.basemapPanel.overlayDefault,transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.basemapPanel.borderHover,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayHover}}},"&.active":{borderColor:e.basemapPanel.borderActive,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayActive}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}))(),A=t.supportedProjections.map((function(e){return null==e?void 0:e.projectionCode}))||[],T=y(s.mapFeaturesConfig.map.viewSettings.projection),O=(0,u.Z)(T,2),L=O[0],M=O[1],$=function(e){s.basemap.setBasemap(e),Z(e)},q=function(){var e=(0,c.Z)(f().mark((function e(r){var o,i,p,l,c,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=(0,d.ZQJ)(t.supportedProjections.find((function(e){return e.projectionCode===r}))),i=!1,n.map(a).basemap.basemaps=[],I([]),p=f().mark((function e(){var t,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.customBasemaps[l],(r=n.map(a).basemap.createCustomBasemap(t))&&I((function(e){return[].concat((0,m.Z)(e),[r])})),r&&0===l&&""===B&&($(r.basemapId),i=!0);case 4:case"end":return e.stop()}}),e)})),l=0;case 6:if(!(l<o.customBasemaps.length)){e.next=11;break}return e.delegateYield(p(),"t0",8);case 8:l++,e.next=6;break;case 11:c=f().mark((function e(){var t,s,p;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.coreBasemaps[u],e.next=3,n.map(a).basemap.createCoreBasemap(t,r);case 3:(s=e.sent)&&I((function(e){return[].concat((0,m.Z)(e),[s])})),p="".concat(t.shaded?"shaded":"").concat(t.id).concat(t.labeled?"label":""),s&&p===B&&!i&&($(B),i=!0);case 7:case"end":return e.stop()}}),e)})),u=0;case 13:if(!(u<o.coreBasemaps.length)){e.next=18;break}return e.delegateYield(c(),"t1",15);case 15:u++,e.next=13;break;case 18:i||$(s.basemap.basemaps[0].basemapId);case 19:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return v((function(){q(L)}),[]),(0,h.jsxs)("div",{children:[N&&(0,h.jsx)(l,{fullWidth:!0,labelId:"projection-label",value:L,onChange:function(e){var t=e.target.value;$("nogeom"),M(t);var r=s.getView(),o=r.getCenter(),i=r.getProjection().getCode(),p=n.projection.transformPoints(o,i,"EPSG:4326")[0],l=e.target.value,m={zoom:r.getZoom(),minZoom:r.getMinZoom(),maxZoom:r.getMaxZoom(),center:p,projection:l};s.setView(m),q(t),n.event.emit((0,d.ltv)(n.eventNames.MAP.EVENT_MAP_VIEW_PROJECTION_CHANGE,a,t))},label:"Projection",style:{display:t.canSwichProjection?"flex":"none"},inputLabel:{id:"projection-label"},menuItems:A.map((function(e){return{key:e,item:{value:e,children:"EPSG:".concat(e)}}}))}),j.map((function(e){return(0,h.jsx)(b,{tabIndex:0,classes:{root:S.basemapCard},className:e.basemapId===B?"active":"",onClick:function(){return $(e.basemapId)},onKeyPress:function(){return $(e.basemapId)},title:e.name,contentCard:(0,h.jsxs)(h.Fragment,{children:["string"==typeof e.thumbnailUrl&&(0,h.jsx)("img",{src:e.thumbnailUrl,alt:e.altText,className:"basemapCardThumbnail"}),Array.isArray(e.thumbnailUrl)&&e.thumbnailUrl.map((function(a,t){return(0,h.jsx)("img",{src:a,alt:e.altText,className:"basemapCardThumbnail"},t)})),(0,h.jsx)("div",{className:"basemapCardThumbnailOverlay"})]})},e.basemapId)}))]})}const v=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Basemap Panel Schema","type":"object","version":1,"comments":"Configuration for GeoView basemap panel package.","additionalProperties":false,"definitions":{"basemapNameNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The display name of the layer."},"basemapDescriptionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap description."},"thumbnailUrlNode":{"type":"object","properties":{"en":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"fr":{"type":"array","uniqueItems":true,"items":{"type":"string"}}},"description":"Basemap thumbnail urls."},"basemapLayerUrlNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The service endpoint of the basemap layer."},"basemapAttributionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap attribution text."},"basemapLayersNode":{"type":"object","properties":{"basemapId":{"type":"string","description":"the id of the basmap layer."},"url":{"$ref":"#/definitions/basemapLayerUrlNode"},"opacity":{"type":"number","description":"the opacity of this layer.","default":0}},"additionalItems":false,"required":["basemapId","url"]},"basemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id","enum":["transport","simple","shaded","osm","nogeom"]},"shaded":{"type":"boolean","description":"if a shaded layer should be included with this basemap.","default":false},"labeled":{"type":"boolean","description":"if labels should be enabled in this basemap.","default":false}},"additionalProperties":false,"required":["basemapId","shaded","labeled"]},"customBasemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id."},"name":{"$ref":"#/definitions/basemapNameNode"},"description":{"$ref":"#/definitions/basemapDescriptionNode"},"thumbnailUrl":{"$ref":"#/definitions/thumbnailUrlNode"},"layers":{"type":"array","description":"a list of basemap layers","items":{"$ref":"#/definitions/basemapLayersNode"},"minItems":1},"attribution":{"$ref":"#/definitions/basemapAttributionNode"},"zoomLevels":{"type":"object","description":"Zoom levels for the basemap","properties":{"min":{"type":"integer","minimum":0,"maximum":24,"default":0},"max":{"type":"integer","minimum":0,"maximum":24,"default":24}},"additionalProperties":false,"required":["min","max"]}},"additionalProperties":false,"required":["basemapId","name","description","layers"]}},"properties":{"isOpen":{"type":"boolean","description":"Specifies whether the basemap panel is initially open or closed","default":false},"canSwichProjection":{"type":"boolean","description":"Allow the user to switch projection from the basemap panel.","default":true},"supportedProjections":{"type":"array","items":{"type":"object","properties":{"projectionCode":{"type":"integer","enum":[3978,3857],"description":"Default projection to load on start."},"customBasemaps":{"type":"array","description":"A list of custom basemaps.","items":{"$ref":"#/definitions/customBasemap"},"minItems":0},"coreBasemaps":{"type":"array","description":"A list of basemaps available in the core to show in the panel.","items":{"$ref":"#/definitions/basemap"},"minItems":1}}},"minItems":1,"required":["coreBasemaps","customBasemaps"]},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["canSwichProjection","supportedProjections","suportedLanguages"]}'),C=JSON.parse('{"isOpen":false,"canSwichProjection":false,"supportedProjections":[{"projectionCode":3978,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]},{"projectionCode":3857,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]}],"suportedLanguages":["en","fr"]}');function P(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,p.Z)(e);if(a){var s=(0,p.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,i.Z)(this,t)}}var j=window,I=function(e){(0,o.Z)(t,e);var a=P(t);function t(e,s){var o;return(0,r.Z)(this,t),o=a.call(this,e,s),(0,l.Z)((0,n.Z)(o),"schema",(function(){return v})),(0,l.Z)((0,n.Z)(o),"defaultConfig",(function(){return(0,d.ZQJ)(C)})),(0,l.Z)((0,n.Z)(o),"translations",(0,d.ZQJ)({en:{basemapPanel:"Basemaps"},fr:{basemapPanel:"Fond de carte"}})),(0,l.Z)((0,n.Z)(o),"added",(function(){var e=(0,n.Z)(o),a=e.configObj,t=e.pluginProps.mapId,r=j.cgpv;if(r){var s,i=r.api,p=r.ui.elements.MapIcon,l=i.map(t).displayLanguage,d={id:"basemapPanelButton",tooltip:o.translations[l].basemapPanel,tooltipPlacement:"right",children:(0,h.jsx)(p,{}),visible:!0},m={title:o.translations[l].basemapPanel,icon:'<i class="material-icons">map</i>',width:350,status:null==a?void 0:a.isOpen};o.buttonPanel=i.map(t).appBarButtons.createAppbarPanel(d,m,null),null===(s=o.buttonPanel)||void 0===s||null===(s=s.panel)||void 0===s||s.changeContent((0,h.jsx)(y,{mapId:t,config:a||{}}))}})),o.buttonPanel=null,o}return(0,s.Z)(t,[{key:"removed",value:function(){var e=this.pluginProps.mapId,a=j.cgpv;if(a){var t=a.api;this.buttonPanel&&(t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId),t.map(e).basemap.basemaps=[],t.map(e).basemap.loadDefaultBasemaps())}}}]),t}(d.Vw$);j.plugins=j.plugins||{},j.plugins["basemap-panel"]=(0,d.RFZ)(I)}},e=>{var a;a=47341,e(e.s=a)}]);
//# sourceMappingURL=geoview-basemap-panel.js.map