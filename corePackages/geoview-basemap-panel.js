/*! Package:geoview-basemap-panel: 0.1.0 - "2d2af6bcadcd739f11ba51f42739c01600744acc" - 2023-10-06T19:10:54.333Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[286],{60103:(e,a,t)=>{var r=t(98124),s=t(46623),n=t(78630),o=t(34313),i=t(61987),p=t(18879),l=t(84421),d=t(60558),m=t(53358),c=t(11468),u=t(38736),b=t(69291),f=t.n(b),h=t(29541),g=window;function y(e){var a,t=e.mapId,r=e.config,s=g.cgpv,n=s.api.maps[t],o=s.api,i=s.ui,p=s.react,l=i.elements,b=l.Select,y=l.Card,v=p.useState,C=p.useEffect,P=v([]),j=(0,u.Z)(P,2),I=j[0],w=j[1],x=v(""),B=(0,u.Z)(x,2),Z=B[0],k=B[1],N=v(r.canSwichProjection),S=(0,u.Z)(N,1)[0],A=i.makeStyles((function(e){return{basemapCard:{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"1px solid ".concat(e.basemapPanel.borderDefault),borderRadius:6,boxShadow:"none",marginBottom:16,transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:0},"& .MuiCardHeader-root":{backgroundColor:e.palette.grey.A700,color:e.basemapPanel.header,fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .basemapCardThumbnail":{position:"absolute",height:"100%",width:"100%",objectFit:"cover",top:0,left:0},"& .basemapCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.basemapPanel.overlayDefault,transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.basemapPanel.borderHover,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayHover}}},"&.active":{borderColor:e.basemapPanel.borderActive,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayActive}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}))(),T=r.supportedProjections.map((function(e){return null==e?void 0:e.projectionCode}))||[],O=v(n.mapFeaturesConfig.map.viewSettings.projection),L=(0,u.Z)(O,2),M=L[0],$=L[1],q=function(e){n.basemap.setBasemap(e),k(e)},U=function(e){return(a=a||(0,c.Z)(f().mark((function e(a){var s,i,p,l,c,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=(0,d.ZQJ)(r.supportedProjections.find((function(e){return e.projectionCode===a}))),i=!1,o.maps[t].basemap.basemaps=[],w([]),p=f().mark((function e(){var a,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=s.customBasemaps[l],(r=o.maps[t].basemap.createCustomBasemap(a))&&w((function(e){return[].concat((0,m.Z)(e),[r])})),r&&0===l&&""===Z&&(q(r.basemapId),i=!0);case 4:case"end":return e.stop()}}),e)})),l=0;case 6:if(!(l<s.customBasemaps.length)){e.next=11;break}return e.delegateYield(p(),"t0",8);case 8:l++,e.next=6;break;case 11:c=f().mark((function e(){var r,n,p;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.coreBasemaps[u],e.next=3,o.maps[t].basemap.createCoreBasemap(r,a);case 3:(n=e.sent)&&w((function(e){return[].concat((0,m.Z)(e),[n])})),p="".concat(r.shaded?"shaded":"").concat(r.id).concat(r.labeled?"label":""),n&&p===Z&&!i&&(q(Z),i=!0);case 7:case"end":return e.stop()}}),e)})),u=0;case 13:if(!(u<s.coreBasemaps.length)){e.next=18;break}return e.delegateYield(c(),"t1",15);case 15:u++,e.next=13;break;case 18:i||q(n.basemap.basemaps[0].basemapId);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)};return C((function(){U(M)}),[]),(0,h.jsxs)("div",{children:[S&&(0,h.jsx)(b,{fullWidth:!0,labelId:"projection-label",value:M,onChange:function(e){var a=e.target.value;q("nogeom"),$(a);var r=n.getView(),s=r.getCenter(),i=r.getProjection().getCode(),p=o.projection.transformPoints(s,i,"EPSG:4326")[0],l=e.target.value,m={zoom:r.getZoom(),minZoom:r.getMinZoom(),maxZoom:r.getMaxZoom(),center:p,projection:l};n.setView(m),U(a),o.event.emit((0,d.ltv)(o.eventNames.MAP.EVENT_MAP_VIEW_PROJECTION_CHANGE,t,a))},label:"Projection",style:{display:r.canSwichProjection?"flex":"none"},inputLabel:{id:"projection-label"},menuItems:T.map((function(e){return{key:e,item:{value:e,children:"EPSG:".concat(e)}}}))}),I.map((function(e){return(0,h.jsx)(y,{tabIndex:0,classes:{root:A.basemapCard},className:e.basemapId===Z?"active":"",onClick:function(){return q(e.basemapId)},onKeyPress:function(){return q(e.basemapId)},title:e.name,contentCard:(0,h.jsxs)(h.Fragment,{children:["string"==typeof e.thumbnailUrl&&(0,h.jsx)("img",{src:e.thumbnailUrl,alt:e.altText,className:"basemapCardThumbnail"}),Array.isArray(e.thumbnailUrl)&&e.thumbnailUrl.map((function(a,t){return(0,h.jsx)("img",{src:a,alt:e.altText,className:"basemapCardThumbnail"},t)})),(0,h.jsx)("div",{className:"basemapCardThumbnailOverlay"})]})},e.basemapId)}))]})}const v=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Basemap Panel Schema","type":"object","version":1,"comments":"Configuration for GeoView basemap panel package.","additionalProperties":false,"definitions":{"basemapNameNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The display name of the layer."},"basemapDescriptionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap description."},"thumbnailUrlNode":{"type":"object","properties":{"en":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"fr":{"type":"array","uniqueItems":true,"items":{"type":"string"}}},"description":"Basemap thumbnail urls."},"basemapLayerUrlNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The service endpoint of the basemap layer."},"basemapAttributionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap attribution text."},"basemapLayersNode":{"type":"object","properties":{"basemapId":{"type":"string","description":"the id of the basmap layer."},"url":{"$ref":"#/definitions/basemapLayerUrlNode"},"opacity":{"type":"number","description":"the opacity of this layer.","default":0}},"additionalItems":false,"required":["basemapId","url"]},"basemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id","enum":["transport","simple","shaded","osm","nogeom"]},"shaded":{"type":"boolean","description":"if a shaded layer should be included with this basemap.","default":false},"labeled":{"type":"boolean","description":"if labels should be enabled in this basemap.","default":false}},"additionalProperties":false,"required":["basemapId","shaded","labeled"]},"customBasemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id."},"name":{"$ref":"#/definitions/basemapNameNode"},"description":{"$ref":"#/definitions/basemapDescriptionNode"},"thumbnailUrl":{"$ref":"#/definitions/thumbnailUrlNode"},"layers":{"type":"array","description":"a list of basemap layers","items":{"$ref":"#/definitions/basemapLayersNode"},"minItems":1},"attribution":{"$ref":"#/definitions/basemapAttributionNode"},"zoomLevels":{"type":"object","description":"Zoom levels for the basemap","properties":{"min":{"type":"integer","minimum":0,"maximum":24,"default":0},"max":{"type":"integer","minimum":0,"maximum":24,"default":24}},"additionalProperties":false,"required":["min","max"]}},"additionalProperties":false,"required":["basemapId","name","description","layers"]}},"properties":{"isOpen":{"type":"boolean","description":"Specifies whether the basemap panel is initially open or closed","default":false},"canSwichProjection":{"type":"boolean","description":"Allow the user to switch projection from the basemap panel.","default":true},"supportedProjections":{"type":"array","items":{"type":"object","properties":{"projectionCode":{"type":"integer","enum":[3978,3857],"description":"Default projection to load on start."},"customBasemaps":{"type":"array","description":"A list of custom basemaps.","items":{"$ref":"#/definitions/customBasemap"},"minItems":0},"coreBasemaps":{"type":"array","description":"A list of basemaps available in the core to show in the panel.","items":{"$ref":"#/definitions/basemap"},"minItems":1}}},"minItems":1,"required":["coreBasemaps","customBasemaps"]},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["canSwichProjection","supportedProjections","suportedLanguages"]}'),C=JSON.parse('{"isOpen":false,"canSwichProjection":false,"supportedProjections":[{"projectionCode":3978,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]},{"projectionCode":3857,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]}],"suportedLanguages":["en","fr"]}');function P(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,p.Z)(e);if(a){var s=(0,p.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,i.Z)(this,t)}}var j=window,I=function(e){(0,o.Z)(t,e);var a=P(t);function t(e,s){var o;return(0,r.Z)(this,t),o=a.call(this,e,s),(0,l.Z)((0,n.Z)(o),"schema",(function(){return v})),(0,l.Z)((0,n.Z)(o),"defaultConfig",(function(){return(0,d.ZQJ)(C)})),(0,l.Z)((0,n.Z)(o),"translations",(0,d.ZQJ)({en:{basemapPanel:"Basemaps"},fr:{basemapPanel:"Fond de carte"}})),(0,l.Z)((0,n.Z)(o),"added",(function(){var e=(0,n.Z)(o),a=e.configObj,t=e.pluginProps.mapId,r=j.cgpv;if(r){var s,i=r.api,p=r.ui.elements.MapIcon,l=i.maps[t].displayLanguage,d={id:"basemapPanelButton",tooltip:o.translations[l].basemapPanel,tooltipPlacement:"right",children:(0,h.jsx)(p,{}),visible:!0},m={title:o.translations[l].basemapPanel,icon:'<i class="material-icons">map</i>',width:350,status:null==a?void 0:a.isOpen};o.buttonPanel=i.maps[t].appBarButtons.createAppbarPanel(d,m,null),null===(s=o.buttonPanel)||void 0===s||null===(s=s.panel)||void 0===s||s.changeContent((0,h.jsx)(y,{mapId:t,config:a||{}}))}})),o.buttonPanel=null,o}return(0,s.Z)(t,[{key:"removed",value:function(){var e=this.pluginProps.mapId,a=j.cgpv;if(a){var t=a.api;this.buttonPanel&&(t.maps[e].appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId),t.maps[e].basemap.basemaps=[],t.maps[e].basemap.loadDefaultBasemaps())}}}]),t}(d.Vw$);j.plugins=j.plugins||{},j.plugins["basemap-panel"]=(0,d.RFZ)(I)}},e=>{var a;a=60103,e(e.s=a)}]);
//# sourceMappingURL=geoview-basemap-panel.js.map