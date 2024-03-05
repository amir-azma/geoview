/*! Package:geoview-time-slider: 0.1.0 - "181cbcaa112d6610704f5cec112e22482c7fa6d1" - 2024-03-05T00:06:27.504Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{31713:(e,t,n)=>{n.d(t,{b:()=>m});var r=n(61567),i=n(64507),o=n(25676),l=n(6280),a=n(75395),s=n(40943),c=n(693),u=n(23050),d=n(81442);function p(e,t,n){return t=(0,l.A)(t),(0,o.A)(e,f()?Reflect.construct(t,n||[],(0,l.A)(e).constructor):t.apply(e,n))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var m=function(e){function t(){var e;(0,r.A)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=p(this,t,[].concat(i)),(0,c.A)((0,a.A)(e),"value",void 0),(0,c.A)((0,a.A)(e),"footerProps",void 0),e}return(0,s.A)(t,e),(0,i.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBar.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBar.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBar.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){d.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}]),t}(u.G)},91929:(e,t,n)=>{var r=n(64507),i=n(61567),o=n(25676),l=n(6280),a=n(75395),s=n(40943),c=n(693),u=n(63806),d=n(71854),p=n(31713),f=n(89246),m=n(9935),g=n(36284),h=n(29496),v=n(81442),y=n(28575),x=n(59077),A=n(45090),j=n(33333),b=n(26166),w=n(20027),S=n(35914),P=n(74443),D=n(37866),L=n(25600),k=n(19358),O=n(97851),T=n(29457),I=n(43099),C=n(80678);const F=["className","children","classes","IconComponent","input","inputProps","variant"],E=["root"],R=(0,C.jsx)(O.A,{}),V=b.forwardRef((function(e,t){const n=(0,T.A)({name:"MuiNativeSelect",props:e}),{className:r,children:i,classes:o={},IconComponent:l=k.A,input:a=R,inputProps:s}=n,c=(0,j.A)(n,F),u=(0,L.A)(),d=(0,D.A)({props:n,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,S.A)({root:["root"]},I.w,t)})((0,A.A)({},n,{classes:o})),f=(0,j.A)(o,E);return(0,C.jsx)(b.Fragment,{children:b.cloneElement(a,(0,A.A)({inputComponent:P.Ay,inputProps:(0,A.A)({children:i,classes:f,IconComponent:l,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,w.A)(p.root,a.props.className,r)}))})}));V.muiName="Select";const M=V;var N=n(15787),z=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,c.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e){var t=window.cgpv,n=e.config,r=e.layerPath,i=e.mapId,o=t.react,l=t.ui,a=o.useState,s=o.useRef,c=o.useEffect,u=l.elements,d=u.Grid,p=u.Slider,g=u.Typography,v=u.Checkbox,A=u.Tooltip,j=u.IconButton,b=u.LockIcon,w=u.LockOpenIcon,S=u.ArrowLeftIcon,P=u.PlayArrowIcon,D=u.PauseIcon,L=u.ArrowRightIcon,k=u.SwitchRightIcon,O=u.SwitchLeftIcon,T=(0,m.A)(),I=z(T),F=a(!1),E=(0,f.A)(F,2),R=E[0],V=E[1],B=s(),G=s(),U=s(),J=(0,h.Gg)(),Q=J.setTitle,q=J.setDefaultValue,K=J.setDescription,Y=J.setValues,W=J.setLocked,_=J.setReversed,X=J.setDelay,$=J.setFiltering,Z=(0,h.ky)()[r],ee=Z.title,te=Z.description,ne=Z.name,re=Z.defaultValue,ie=Z.range,oe=Z.minAndMax,le=Z.field,ae=Z.fieldAlias,se=Z.filtering,ce=Z.singleHandle,ue=Z.values,de=Z.delay,pe=Z.locked,fe=Z.reversed;c((function(){var e,t=null==n||null===(e=n.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===ee&&Q(r,(0,N.getLocalizedValue)(null==t?void 0:t.title,i)||""),void 0===te&&K(r,(0,N.getLocalizedValue)(null==t?void 0:t.description,i)||""),void 0===pe&&W(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===fe&&_(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===re&&q(r,(null==t?void 0:t.defaultValue)||"")}),[]),c((function(){var e,t=null==n||null===(e=n.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?Y(r,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):ie.includes(null==t?void 0:t.defaultValue)?Y(r,[new Date(null==t?void 0:t.defaultValue).getTime()]):Y(r,[new Date(ie[0]).getTime()]))}),[n,r,ie,$,Y]);var me,ge=ie.map((function(e){return new Date(e).getTime()})),he=oe[1]-oe[0],ve=new Date(oe[1]).getDate()-new Date(oe[0]).getDate(),ye=new Date(oe[1]).getFullYear()-new Date(oe[0]).getFullYear();0===ve&&he<864e5?me="day":0===ye&&(me="year");var xe=[];xe=ie.length<6||ce?ge:[oe[0],new Date(ie[Math.round(ie.length/4)]).getTime(),new Date(ie[Math.round(ie.length/2)]).getTime(),new Date(ie[Math.round(3*ie.length/4)]).getTime(),oe[1]];for(var Ae=[],je=0;je<xe.length;je++)Ae.push({value:xe[je],label:me?"".concat("day"===me?new Date(xe[je]).toTimeString().split(" ")[0]:new Date(xe[je]).toISOString().slice(5,10)):new Date(xe[je]).toISOString().slice(0,10)});function be(){if(ce){var e,t=ge.indexOf(ue[0]);e=ge[t]===oe[0]?ge.length-1:t-1,Y(r,[ge[e]])}else{var n=(0,f.A)(ue,2),i=n[0],o=n[1];if(!U.current){if(o-i>(oe[1]-oe[0])/5)return U.current=(oe[1]-oe[0])/5,void Y(r,[o-U.current,o]);U.current=o-i}if(pe&&fe){if(i===oe[0]&&(i=o),(i-=U.current)<oe[0])i=(0,f.A)(oe,1)[0]}else if(pe){if((o-=U.current)<i&&(o=i),o===i)o=(0,f.A)(oe,2)[1]}else{if(o>G.current&&i===G.current?o=G.current:o-=U.current,o<=oe[0])o=(0,f.A)(oe,2)[1];if((i=o-U.current)<oe[0])i=(0,f.A)(oe,1)[0];i<G.current&&o>G.current&&(i=G.current)}Y(r,[i,o])}}function we(){if(ce){var e,t=ge.indexOf(ue[0]);e=ge[t]===oe[1]?0:t+1,Y(r,[ge[e]])}else{var n=(0,f.A)(ue,2),i=n[0],o=n[1];if(!U.current){if(o-i>(oe[1]-oe[0])/5)return U.current=(oe[1]-oe[0])/5,void Y(r,[i,i+U.current]);U.current=o-i}if(pe&&fe){if((i+=U.current)>=o)i=(0,f.A)(oe,1)[0]}else if(pe){if(o===oe[1]&&(o=i),(o+=U.current)>oe[1])o=(0,f.A)(oe,2)[1]}else{if(i<G.current&&o===G.current?i=G.current:i+=U.current,i>=oe[1])i=(0,f.A)(oe,1)[0];if((o=i+U.current)>oe[1])o=(0,f.A)(oe,2)[1];o>G.current&&i<G.current&&(o=G.current)}Y(r,[i,o])}}function Se(){return fe?pe?(0,N.getLocalizedMessage)(i,"timeSlider.slider.unlockRight"):(0,N.getLocalizedMessage)(i,"timeSlider.slider.lockRight"):pe?(0,N.getLocalizedMessage)(i,"timeSlider.slider.unlockLeft"):(0,N.getLocalizedMessage)(i,"timeSlider.slider.lockLeft")}return c((function(){R&&(B.current=fe?window.setTimeout((function(){return be()}),de):window.setTimeout((function(){return we()}),de))}),[ue,se,fe,pe]),c((function(){R&&(fe?be():we())}),[R]),(0,C.jsx)(d,{children:(0,C.jsxs)("div",{style:I.rightPanelContainer,children:[(0,C.jsxs)(d,{container:!0,sx:I.rightPanelBtnHolder,children:[(0,C.jsx)(d,{item:!0,xs:9,children:(0,C.jsxs)(g,{component:"div",sx:H(H({},I.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(ee||ne),void 0!==me&&" (".concat("day"===me?new Date(re).toLocaleDateString():new Date(re).getFullYear(),")")]})}),(0,C.jsx)(d,{item:!0,xs:3,children:(0,C.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,C.jsx)(A,{title:se?(0,N.getLocalizedMessage)(i,"timeSlider.slider.disableFilter"):(0,N.getLocalizedMessage)(i,"timeSlider.slider.enableFilter"),placement:"top",enterDelay:1e3,children:(0,C.jsx)(v,{checked:se,onChange:function(e,t){return $(r,n=t),void(n||(clearInterval(B.current),V(!1)));var n}})})})})]}),(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,C.jsx)(p,{sliderId:r,mapId:i,style:{width:"80%",color:"primary"},min:oe[0],max:oe[1],value:ue,valueLabelFormat:function(e){return function(e){return"day"===me?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===me?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}(e)},marks:Ae,step:ce?null:.1,customOnChange:function(e){return function(e){clearTimeout(B.current),V(!1),U.current=void 0,Y(r,e)}(e)}},ue[1]?ue[1]+ue[0]:ue[0])})}),(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!ce&&(0,C.jsx)(j,{className:"style1","aria-label":Se(),tooltip:Se(),tooltipPlacement:"top",onClick:function(){return clearTimeout(B.current),void W(r,!pe)},children:pe?(0,C.jsx)(b,{}):(0,C.jsx)(w,{})}),(0,C.jsx)(j,{className:"style1","aria-label":(0,N.getLocalizedMessage)(i,"timeSlider.slider.back"),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:R||!se,onClick:function(){return G.current=fe?ue[1]:ue[0],void be()},children:(0,C.jsx)(S,{})}),(0,C.jsx)(j,{className:"style1","aria-label":R?(0,N.getLocalizedMessage)(i,"timeSlider.slider.pauseAnimation"):(0,N.getLocalizedMessage)(i,"timeSlider.slider.playAnimation"),tooltip:R?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!se,onClick:function(){return clearTimeout(B.current),G.current=fe?ue[1]:ue[0],void V(!R)},children:R?(0,C.jsx)(D,{}):(0,C.jsx)(P,{})}),(0,C.jsx)(j,{className:"style1","aria-label":(0,N.getLocalizedMessage)(i,"timeSlider.slider.forward"),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:R||!se,onClick:function(){return e=(0,f.A)(ue,1),G.current=e[0],void we();var e},children:(0,C.jsx)(L,{})}),(0,C.jsx)(j,{className:"style1","aria-label":(0,N.getLocalizedMessage)(i,"timeSlider.slider.changeDirection"),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(B.current),_(r,!fe),void(R&&(fe?be():we()))},children:fe?(0,C.jsx)(k,{}):(0,C.jsx)(O,{})}),(0,C.jsxs)(y.A,{sx:{width:"150px"},children:[(0,C.jsx)(x.A,{variant:"standard",children:(0,N.getLocalizedMessage)(i,"timeSlider.slider.timeDelay")}),(0,C.jsxs)(M,{defaultValue:de,inputProps:{name:"timeDelay",onChange:function(e){return function(e){X(r,e.target.value)}(e)}},children:[(0,C.jsx)("option",{value:500,children:"0.5s"}),(0,C.jsx)("option",{value:750,children:"0.75s"}),(0,C.jsx)("option",{value:1e3,children:"1.0s"}),(0,C.jsx)("option",{value:1500,children:"1.5s"}),(0,C.jsx)("option",{value:2e3,children:"2.0s"}),(0,C.jsx)("option",{value:3e3,children:"3.0s"}),(0,C.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),te&&(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:te})}),ae&&(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(ae," (").concat(le,")")})})]})})}function U(e){var t=e.mapId,n=e.configObj,r=window.cgpv.react,i=r.useState,o=r.useCallback,l=r.useMemo,a=r.useEffect,s=(0,m.A)(),c=z(s),p=i(),y=(0,f.A)(p,2),x=y[0],A=y[1],j=(0,h.wE)(),b=(0,h.ky)(),w=o((function(e){v.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),A(e.layerPath)}),[]),S=l((function(){return v.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",b),j.map((function(e){return{layerPath:e,timeSliderLayerInfo:b[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,tooltip:e.timeSliderLayerInfo.name,layerStatus:"loaded",queryStatus:"processed"}}))}),[j,b]);return a((function(){v.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",S,x),x&&!S.map((function(e){return e.layerPath})).includes(x)&&A("")}),[S,x]),(0,C.jsxs)(g.PE,{selectedLayerPath:x,onLayerListClicked:w,layerList:S,children:[x&&(0,C.jsx)(G,{mapId:t,config:n,layerPath:x},x),!x&&(0,C.jsxs)(d.Paper,{sx:{padding:"2rem"},children:[(0,C.jsx)(d.Typography,{variant:"h3",gutterBottom:!0,sx:c.timeSliderInstructionsTitle,children:(0,u.Jv8)(t,"timeSlider.instructions")}),(0,C.jsx)(d.Typography,{component:"p",sx:c.timeSliderInstructionsBody,children:(0,u.Jv8)(t,"timeSlider.instructions")})]})]})}const J=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),Q=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,c.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e,t,n){return t=(0,l.A)(t),(0,o.A)(e,W()?Reflect.construct(t,n||[],(0,l.A)(e).constructor):t.apply(e,n))}function W(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(W=function(){return!!e})()}var _=function(e){function t(){var e;(0,i.A)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=Y(this,t,[].concat(r)),(0,c.A)((0,a.A)(e),"schema",(function(){return J})),(0,c.A)((0,a.A)(e),"defaultConfig",(function(){return(0,u.NKs)(Q)})),(0,c.A)((0,a.A)(e),"translations",(0,u.NKs)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"},instructions:"Time Slider Instructions"}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"},instructions:"Instructions Curseur Temporel"}}})),(0,c.A)((0,a.A)(e),"onCreateContentProps",(function(){return e.configObj.sliders.forEach((function(t){if(t.temporalDimension){var n={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:u.FHQ.dateUtilities.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],n)}if(t.defaultValue){var r=t.layerPaths[0],i=u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(r).layerTemporalDimension[r];u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(r).setTemporalDimension(r,K(K({},i),{},{default:t.defaultValue}))}})),{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,C.jsx)(d.TimeSliderIcon,{}),content:(0,C.jsx)(U,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,s.A)(t,e),(0,r.A)(t)}(p.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KXH)(_)}},e=>{var t;t=91929,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map