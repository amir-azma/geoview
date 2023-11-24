/*! Package:geoview-basemap-panel: 0.1.0 - "d08499c40312c62efb0589821d1f7d1db81b6afb" - 2023-11-24T21:37:39.478Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[286],{82880:(e,a,t)=>{var r=t(33422),s=t(51423),n=t(94981),o=t(77185),i=t(78807),p=t(51937),l=t(93699),d=t(44760),m=t(68482),c=t(21828),u=t(60075),b=t(44321),f=t.n(b),h=t(29541),g=window;function y(e){var a=e.mapId,t=e.config,r=g.cgpv,s=r.api.maps[a],n=r.api,o=r.ui,i=r.react,p=o.elements,l=p.Select,b=p.Card,y=p.Box,v=i.useState,C=i.useEffect,j=v([]),P=(0,u.Z)(j,2),I=P[0],x=P[1],w=v(""),B=(0,u.Z)(w,2),Z=B[0],N=B[1],k=v(t.canSwichProjection),S=(0,u.Z)(k,1)[0],T=function(e){return{basemapCard:{"& .MuiCard-root":{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"1px solid rgba(255,255,255,0.25)",borderRadius:"6px",boxShadow:"none",marginBottom:"16px",transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:"0px"}},"& .MuiCardHeader-root":{backgroundColor:"".concat(e.palette.grey.A700," !important"),color:e.basemapPanel.header,fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .basemapCardThumbnail":{position:"absolute",height:"100%",width:"100%",objectFit:"cover",top:0,left:0},"& .basemapCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.basemapPanel.overlayDefault,transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.basemapPanel.borderHover,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayHover}}},"&.active":{borderColor:e.basemapPanel.borderActive,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayActive}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}(o.useTheme()),A=t.supportedProjections.map((function(e){return null==e?void 0:e.projectionCode}))||[],O=v(s.mapFeaturesConfig.map.viewSettings.projection),M=(0,u.Z)(O,2),L=M[0],$=M[1],q=function(e){s.basemap.setBasemap(e),N(e)},U=function(){var e=(0,c.Z)(f().mark((function e(r){var o,i,p,l,c,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=(0,d.ZQJ)(t.supportedProjections.find((function(e){return e.projectionCode===r}))),i=!1,n.maps[a].basemap.basemaps=[],x([]),p=f().mark((function e(){var t,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.customBasemaps[l],(r=n.maps[a].basemap.createCustomBasemap(t))&&x((function(e){return[].concat((0,m.Z)(e),[r])})),r&&0===l&&""===Z&&(q(r.basemapId),i=!0);case 4:case"end":return e.stop()}}),e)})),l=0;case 6:if(!(l<o.customBasemaps.length)){e.next=11;break}return e.delegateYield(p(),"t0",8);case 8:l++,e.next=6;break;case 11:c=f().mark((function e(){var t,s,p;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.coreBasemaps[u],e.next=3,n.maps[a].basemap.createCoreBasemap(t,r);case 3:(s=e.sent)&&x((function(e){return[].concat((0,m.Z)(e),[s])})),p="".concat(t.shaded?"shaded":"").concat(t.id).concat(t.labeled?"label":""),s&&p===Z&&!i&&(q(Z),i=!0);case 7:case"end":return e.stop()}}),e)})),u=0;case 13:if(!(u<o.coreBasemaps.length)){e.next=18;break}return e.delegateYield(c(),"t1",15);case 15:u++,e.next=13;break;case 18:i||q(s.basemap.basemaps[0].basemapId);case 19:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return C((function(){U(L)}),[]),(0,h.jsxs)(y,{sx:T.basemapCard,children:[S&&(0,h.jsx)(l,{fullWidth:!0,labelId:"projection-label",value:L,onChange:function(e){var t=e.target.value;q("nogeom"),$(t);var r=s.getView(),o=r.getCenter(),i=r.getProjection().getCode(),p=n.projection.transformPoints(o,i,"EPSG:4326")[0],l=e.target.value,m={zoom:r.getZoom(),minZoom:r.getMinZoom(),maxZoom:r.getMaxZoom(),center:p,projection:l};s.setView(m),U(t),n.event.emit((0,d.ltv)(n.eventNames.MAP.EVENT_MAP_VIEW_PROJECTION_CHANGE,a,t))},label:"Projection",style:{display:t.canSwichProjection?"flex":"none"},inputLabel:{id:"projection-label"},menuItems:A.map((function(e){return{key:e,item:{value:e,children:"EPSG:".concat(e)}}}))}),I.map((function(e){return(0,h.jsx)(b,{tabIndex:0,className:e.basemapId===Z?"active":"",onClick:function(){return q(e.basemapId)},onKeyPress:function(){return q(e.basemapId)},title:e.name,contentCard:(0,h.jsxs)(h.Fragment,{children:["string"==typeof e.thumbnailUrl&&(0,h.jsx)("img",{src:e.thumbnailUrl,alt:e.altText,className:"basemapCardThumbnail"}),Array.isArray(e.thumbnailUrl)&&e.thumbnailUrl.map((function(a,t){return(0,h.jsx)("img",{src:a,alt:e.altText,className:"basemapCardThumbnail"},t)})),(0,h.jsx)("div",{className:"basemapCardThumbnailOverlay"})]})},e.basemapId)}))]})}const v=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Basemap Panel Schema","type":"object","version":1,"comments":"Configuration for GeoView basemap panel package.","additionalProperties":false,"definitions":{"basemapNameNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The display name of the layer."},"basemapDescriptionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap description."},"thumbnailUrlNode":{"type":"object","properties":{"en":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"fr":{"type":"array","uniqueItems":true,"items":{"type":"string"}}},"description":"Basemap thumbnail urls."},"basemapLayerUrlNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The service endpoint of the basemap layer."},"basemapAttributionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap attribution text."},"basemapLayersNode":{"type":"object","properties":{"basemapId":{"type":"string","description":"the id of the basmap layer."},"url":{"$ref":"#/definitions/basemapLayerUrlNode"},"opacity":{"type":"number","description":"the opacity of this layer.","default":0}},"additionalItems":false,"required":["basemapId","url"]},"basemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id","enum":["transport","simple","shaded","osm","nogeom"]},"shaded":{"type":"boolean","description":"if a shaded layer should be included with this basemap.","default":false},"labeled":{"type":"boolean","description":"if labels should be enabled in this basemap.","default":false}},"additionalProperties":false,"required":["basemapId","shaded","labeled"]},"customBasemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id."},"name":{"$ref":"#/definitions/basemapNameNode"},"description":{"$ref":"#/definitions/basemapDescriptionNode"},"thumbnailUrl":{"$ref":"#/definitions/thumbnailUrlNode"},"layers":{"type":"array","description":"a list of basemap layers","items":{"$ref":"#/definitions/basemapLayersNode"},"minItems":1},"attribution":{"$ref":"#/definitions/basemapAttributionNode"},"zoomLevels":{"type":"object","description":"Zoom levels for the basemap","properties":{"min":{"type":"integer","minimum":0,"maximum":24,"default":0},"max":{"type":"integer","minimum":0,"maximum":24,"default":24}},"additionalProperties":false,"required":["min","max"]}},"additionalProperties":false,"required":["basemapId","name","description","layers"]}},"properties":{"isOpen":{"type":"boolean","description":"Specifies whether the basemap panel is initially open or closed","default":false},"canSwichProjection":{"type":"boolean","description":"Allow the user to switch projection from the basemap panel.","default":true},"supportedProjections":{"type":"array","items":{"type":"object","properties":{"projectionCode":{"type":"integer","enum":[3978,3857],"description":"Default projection to load on start."},"customBasemaps":{"type":"array","description":"A list of custom basemaps.","items":{"$ref":"#/definitions/customBasemap"},"minItems":0},"coreBasemaps":{"type":"array","description":"A list of basemaps available in the core to show in the panel.","items":{"$ref":"#/definitions/basemap"},"minItems":1}}},"minItems":1,"required":["coreBasemaps","customBasemaps"]},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["canSwichProjection","supportedProjections","suportedLanguages"]}'),C=JSON.parse('{"isOpen":false,"canSwichProjection":false,"supportedProjections":[{"projectionCode":3978,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]},{"projectionCode":3857,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]}],"suportedLanguages":["en","fr"]}');function j(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,p.Z)(e);if(a){var s=(0,p.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,i.Z)(this,t)}}var P=window,I=function(e){(0,o.Z)(t,e);var a=j(t);function t(e,s){var o;return(0,r.Z)(this,t),o=a.call(this,e,s),(0,l.Z)((0,n.Z)(o),"schema",(function(){return v})),(0,l.Z)((0,n.Z)(o),"defaultConfig",(function(){return(0,d.ZQJ)(C)})),(0,l.Z)((0,n.Z)(o),"translations",(0,d.ZQJ)({en:{basemapPanel:"Basemaps"},fr:{basemapPanel:"Fond de carte"}})),(0,l.Z)((0,n.Z)(o),"added",(function(){var e=(0,n.Z)(o),a=e.configObj,t=e.pluginProps.mapId,r=P.cgpv;if(r){var s,i=r.api,p=r.ui.elements.MapIcon,l=i.maps[t].displayLanguage,d={id:"basemapPanelButton",tooltip:o.translations[l].basemapPanel,tooltipPlacement:"right",children:(0,h.jsx)(p,{}),visible:!0},m={title:o.translations[l].basemapPanel,icon:'<i class="material-icons">map</i>',width:350,status:null==a?void 0:a.isOpen};o.buttonPanel=i.maps[t].appBarButtons.createAppbarPanel(d,m,null),null===(s=o.buttonPanel)||void 0===s||null===(s=s.panel)||void 0===s||s.changeContent((0,h.jsx)(y,{mapId:t,config:a||{}}))}})),o.buttonPanel=null,o}return(0,s.Z)(t,[{key:"removed",value:function(){var e=this.pluginProps.mapId,a=P.cgpv;if(a){var t=a.api;this.buttonPanel&&(t.maps[e].appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId),t.maps[e].basemap.basemaps=[],t.maps[e].basemap.loadDefaultBasemaps())}}}]),t}(d.Vw$);P.plugins=P.plugins||{},P.plugins["basemap-panel"]=(0,d.RFZ)(I)}},e=>{var a;a=82880,e(e.s=a)}]);
//# sourceMappingURL=geoview-basemap-panel.js.map