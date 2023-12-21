/*! Package:geoview-basemap-panel: 0.1.0 - "3d6963ad3441e182068c395f09717de56f69851e" - 2023-12-21T01:23:30.601Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[286],{17328:(e,a,t)=>{var s=t(25912),r=t(74146),n=t(1358),i=t(30830),o=t(86022),p=t(82217),l=t(81028),d=t(87663),m=t(59618),c=t(64238),u=t(12919),b=t(14843),f=t.n(b),h=t(90154),g=t(29541),y=window;function v(e){var a=e.mapId,t=e.config,s=y.cgpv,r=s.api.maps[a],n=s.api,i=s.ui,o=s.react,p=i.elements,l=p.Select,b=p.Card,v=p.Box,C=o.useState,x=o.useEffect,P=function(e){return{basemapCard:{"& .MuiCard-root":{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"1px solid rgba(255,255,255,0.25)",borderRadius:"6px",boxShadow:"none",marginBottom:"16px",width:"300px",transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:"0px"}},"& .MuiCardHeader-root":{backgroundColor:"".concat(e.palette.grey.A700," !important"),color:e.basemapPanel.header,fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .basemapCardThumbnail":{position:"absolute",height:"100%",width:"100%",objectFit:"cover",top:0,left:0},"& .basemapCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.basemapPanel.overlayDefault,transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.basemapPanel.borderHover,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayHover}}},"&.active":{borderColor:e.basemapPanel.borderActive,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayActive}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}(i.useTheme()),I=C([]),j=(0,u.Z)(I,2),B=j[0],w=j[1],T=C(""),Z=(0,u.Z)(T,2),k=Z[0],S=Z[1],N=C(t.canSwichProjection),L=(0,u.Z)(N,1)[0],O=t.supportedProjections.map((function(e){return null==e?void 0:e.projectionCode}))||[],A=(0,h.oW)(),M=C(A),W=(0,u.Z)(M,2),q=W[0],R=W[1],U=(0,d.nst)();function $(e,a,t){for(var s=[],n=0;n<e.length;n++){var i,o,p,l,d,m=e[n];if("transport"===m)if(null!==(i=r.basemap.basemapsList[a].transport)&&void 0!==i&&i.url)s.push((null===(o=r.basemap.basemapsList[a].transport)||void 0===o?void 0:o.url).replace("{z}","8").replace("{y}",3978===a?"285":"91").replace("{x}",3978===a?"268":"74"));if("simple"===m)null!==(p=r.basemap.basemapsList[a].simple)&&void 0!==p&&p.url&&s.push(r.basemap.basemapsList[a].simple.url.replace("{z}","8").replace("{y}","285").replace("{x}","268"));if("shaded"===m)null!==(l=r.basemap.basemapsList[a].shaded)&&void 0!==l&&l.url&&s.push(r.basemap.basemapsList[a].shaded.url.replace("{z}","8").replace("{y}","285").replace("{x}","268"));if("label"===m)null!==(d=r.basemap.basemapsList[a].label)&&void 0!==d&&d.url&&s.push(r.basemap.basemapsList[a].label.url.replaceAll("xxxx","en"===t?"CBMT":"CBCT").replace("{z}","8").replace("{y}",3978===a?"285":"91").replace("{x}",3978===a?"268":"74"));"osm"===m&&s.push("https://tile.openstreetmap.org/0/0/0.png")}return s}function z(e){var t="",s="";return e.includes("transport")?(t=(0,d.itW)(a,"basemapPanel.info.transport.name"),s=(0,d.itW)(a,"basemapPanel.info.transport.description")):e.includes("simple")?t=(0,d.itW)(a,"basemapPanel.info.simple.name"):e.includes("shaded")?(t=(0,d.itW)(a,"basemapPanel.info.shaded.name"),s=(0,d.itW)(a,"basemapPanel.info.shaded.description")):e.includes("osm")?t=(0,d.itW)(a,"basemapPanel.info.osm.name"):e.includes("nogeom")&&(t=(0,d.itW)(a,"basemapPanel.info.nogeom.name")),e.includes("label")&&(t="".concat(t," ").concat((0,d.itW)(a,"basemapPanel.info.label.name"))),{name:t,description:s}}var D=function(e){var a=B.find((function(a){return a.basemapId===e}));void 0!==a&&(r.basemap.setBasemap(a),S(e))},E=function(){var e=(0,c.Z)(f().mark((function e(s){var r,i,o,p,l,c;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(0,d.ZQJ)(t.supportedProjections.find((function(e){return e.projectionCode===s}))),i=!1,w([]),o=f().mark((function e(){var t,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.customBasemaps[p],(o=n.maps[a].basemap.createCustomBasemap(t,s))&&w((function(e){return[].concat((0,m.Z)(e),[o])})),o&&0===p&&""===k&&(D(o.basemapId),i=!0);case 4:case"end":return e.stop()}}),e)})),p=0;case 5:if(!(p<r.customBasemaps.length)){e.next=10;break}return e.delegateYield(o(),"t0",7);case 7:p++,e.next=5;break;case 10:l=f().mark((function e(){var t,o,p,l,d,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.coreBasemaps[c],e.next=3,n.maps[a].basemap.createCoreBasemap(t,s);case 3:o=e.sent,p=z(o.type.split("-")),l=p.name,d=p.description,o.thumbnailUrl=$(o.type.split("-"),A,U),o.name=l,o.description=d,o&&w((function(e){return[].concat((0,m.Z)(e),[o])})),u="".concat(t.shaded?"shaded":"").concat(t.id).concat(t.labeled?"label":""),o&&u===k&&!i&&(D(k),i=!0);case 11:case"end":return e.stop()}}),e)})),c=0;case 12:if(!(c<r.coreBasemaps.length)){e.next=17;break}return e.delegateYield(l(),"t1",14);case 14:c++,e.next=12;break;case 17:i||D(B[0]);case 18:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return x((function(){E(q)}),[U]),(0,g.jsxs)(v,{sx:P.basemapCard,children:[L&&(0,g.jsx)(l,{fullWidth:!0,labelId:"projection-label",value:q,onChange:function(e){var a=e.target.value;D("nogeom"),R(a),E(a),r.setProjection(a)},label:"Projection",style:{display:t.canSwichProjection?"flex":"none"},inputLabel:{id:"projection-label"},menuItems:O.map((function(e){return{key:e,item:{value:e,children:"EPSG:".concat(e)}}}))}),B.map((function(e){return(0,g.jsx)(b,{tabIndex:0,className:e.basemapId===k?"active":"",onClick:function(){return D(e.basemapId)},onKeyPress:function(){return D(e.basemapId)},title:e.name,contentCard:(0,g.jsxs)(g.Fragment,{children:["string"==typeof e.thumbnailUrl&&(0,g.jsx)("img",{src:e.thumbnailUrl,alt:e.altText,className:"basemapCardThumbnail"}),Array.isArray(e.thumbnailUrl)&&e.thumbnailUrl.map((function(a,t){return(0,g.jsx)("img",{src:a,alt:e.altText,className:"basemapCardThumbnail"},t)})),(0,g.jsx)("div",{className:"basemapCardThumbnailOverlay"})]})},e.basemapId)}))]})}const C=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Basemap Panel Schema","type":"object","version":1,"comments":"Configuration for GeoView basemap panel package.","additionalProperties":false,"definitions":{"basemapNameNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The display name of the layer."},"basemapDescriptionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap description."},"thumbnailUrlNode":{"type":"object","properties":{"en":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"fr":{"type":"array","uniqueItems":true,"items":{"type":"string"}}},"description":"Basemap thumbnail urls."},"basemapLayerUrlNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The service endpoint of the basemap layer."},"basemapAttributionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap attribution text."},"basemapLayersNode":{"type":"object","properties":{"basemapId":{"type":"string","description":"the id of the basmap layer."},"url":{"$ref":"#/definitions/basemapLayerUrlNode"},"opacity":{"type":"number","description":"the opacity of this layer.","default":0}},"additionalItems":false,"required":["basemapId","url"]},"basemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id","enum":["transport","simple","shaded","osm","nogeom"]},"shaded":{"type":"boolean","description":"if a shaded layer should be included with this basemap.","default":false},"labeled":{"type":"boolean","description":"if labels should be enabled in this basemap.","default":false}},"additionalProperties":false,"required":["basemapId","shaded","labeled"]},"customBasemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id."},"name":{"$ref":"#/definitions/basemapNameNode"},"description":{"$ref":"#/definitions/basemapDescriptionNode"},"thumbnailUrl":{"$ref":"#/definitions/thumbnailUrlNode"},"layers":{"type":"array","description":"a list of basemap layers","items":{"$ref":"#/definitions/basemapLayersNode"},"minItems":1},"attribution":{"$ref":"#/definitions/basemapAttributionNode"},"zoomLevels":{"type":"object","description":"Zoom levels for the basemap","properties":{"min":{"type":"integer","minimum":0,"maximum":24,"default":0},"max":{"type":"integer","minimum":0,"maximum":24,"default":24}},"additionalProperties":false,"required":["min","max"]}},"additionalProperties":false,"required":["basemapId","name","description","layers"]}},"properties":{"isOpen":{"type":"boolean","description":"Specifies whether the basemap panel is initially open or closed","default":false},"canSwichProjection":{"type":"boolean","description":"Allow the user to switch projection from the basemap panel.","default":true},"supportedProjections":{"type":"array","items":{"type":"object","properties":{"projectionCode":{"type":"integer","enum":[3978,3857],"description":"Default projection to load on start."},"customBasemaps":{"type":"array","description":"A list of custom basemaps.","items":{"$ref":"#/definitions/customBasemap"},"minItems":0},"coreBasemaps":{"type":"array","description":"A list of basemaps available in the core to show in the panel.","items":{"$ref":"#/definitions/basemap"},"minItems":1}}},"minItems":1,"required":["coreBasemaps","customBasemaps"]},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["canSwichProjection","supportedProjections","suportedLanguages"]}'),x=JSON.parse('{"isOpen":false,"canSwichProjection":false,"supportedProjections":[{"projectionCode":3978,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]},{"projectionCode":3857,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]}],"suportedLanguages":["en","fr"]}');function P(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,p.Z)(e);if(a){var r=(0,p.Z)(this).constructor;t=Reflect.construct(s,arguments,r)}else t=s.apply(this,arguments);return(0,o.Z)(this,t)}}var I=window,j=function(e){(0,i.Z)(t,e);var a=P(t);function t(e,r){var i;return(0,s.Z)(this,t),i=a.call(this,e,r),(0,l.Z)((0,n.Z)(i),"schema",(function(){return C})),(0,l.Z)((0,n.Z)(i),"defaultConfig",(function(){return(0,d.ZQJ)(x)})),(0,l.Z)((0,n.Z)(i),"translations",(0,d.ZQJ)({en:{basemapPanel:{title:"Basemaps",info:{transport:{name:"Transport",description:"The Canada Base Map - Transportation (CBMT). This web mapping service provides spatial reference context with an emphasis on transportation networks. \n                          It is designed especially for use as a background map in a web mapping application or geographic information system (GIS)."},simple:{name:"Simple"},shaded:{name:"Shaded relief",description:"The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, \n                          is intended primarily for online mapping application users and developers"},osm:{name:"Open Street Maps"},nogeom:{name:"No geometry"},label:{name:"with labels"}}}},fr:{basemapPanel:{title:"Fond de carte",info:{transport:{name:"Transport",description:"Carte de base du Canada - Transport (CBCT). Ce service de cartographie Web offre un contexte de référence spatiale axé sur les réseaux de transport. \n                          Il est particulièrement conçu pour être utilisé comme fond de carte dans une application cartographique Web ou un système d'information géographique (SIG)."},simple:{name:"Simple"},shaded:{name:"Relief ombré",description:"Les services de cartographie Web de la carte de base du Canada - élévation (CBCE) du Secteur des sciences de la \n                          Terre de Ressources naturelles Canada sont destinés principalement aux utilisateurs et aux développeurs d'applications de cartographie en ligne."},osm:{name:"Carte - Open Street Maps"},nogeom:{name:"Pas de géométrie"},label:{name:"avec étiquettes"}}}}})),(0,l.Z)((0,n.Z)(i),"added",(function(){var e=(0,n.Z)(i),a=e.configObj,t=e.pluginProps.mapId,s=I.cgpv;if(s){var r,o=s.api,p=s.ui.elements.MapIcon,l={id:"basemapPanelButton",tooltip:"basemapPanel.title",tooltipPlacement:"right",children:(0,g.jsx)(p,{}),visible:!0},d={title:"basemapPanel.title",icon:(0,g.jsx)(p,{}),width:350,status:null==a?void 0:a.isOpen};i.buttonPanel=o.maps[t].appBarButtons.createAppbarPanel(l,d,null),null===(r=i.buttonPanel)||void 0===r||null===(r=r.panel)||void 0===r||r.changeContent((0,g.jsx)(v,{mapId:t,config:a||{}}))}})),i.buttonPanel=null,i}return(0,r.Z)(t,[{key:"removed",value:function(){var e=this.pluginProps.mapId,a=I.cgpv;if(a){var t=a.api;this.buttonPanel&&(t.maps[e].appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId),t.maps[e].basemap.basemaps=[],t.maps[e].basemap.loadDefaultBasemaps())}}}]),t}(d.Vw$);I.plugins=I.plugins||{},I.plugins["basemap-panel"]=(0,d.RFZ)(j)}},e=>{var a;a=17328,e(e.s=a)}]);
//# sourceMappingURL=geoview-basemap-panel.js.map