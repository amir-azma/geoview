/*! Package:geoview-time-slider: 0.1.0 - "e409dce5673095c4f9e118e5006b3141ca154a1a" - 2024-02-23T19:46:01.930Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{31713:(e,t,i)=>{i.d(t,{b:()=>m});var r=i(61567),n=i(64507),o=i(25676),l=i(6280),a=i(75395),s=i(40943),c=i(693),u=i(23050),d=i(81442);function p(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,f()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var m=function(e){function t(){var e;(0,r.A)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=p(this,t,[].concat(n)),(0,c.A)((0,a.A)(e),"value",void 0),(0,c.A)((0,a.A)(e),"footerProps",void 0),e}return(0,s.A)(t,e),(0,n.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBar.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBar.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBar.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){d.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}]),t}(u.G)},91929:(e,t,i)=>{var r=i(64507),n=i(61567),o=i(25676),l=i(6280),a=i(75395),s=i(40943),c=i(693),u=i(63806),d=i(17248),p=i(31713),f=i(89246),m=i(9935),g=i(31711),h=i(29496),v=i(81442),y=i(28575),x=i(59077),A=i(45090),S=i(33333),j=i(26166),w=i(20027),b=i(35914),L=i(74443),P=i(37866),k=i(25600),I=i(19358),T=i(97851),D=i(29457),C=i(43099),O=i(80678);const F=["className","children","classes","IconComponent","input","inputProps","variant"],E=["root"],R=(0,O.jsx)(T.A,{}),M=j.forwardRef((function(e,t){const i=(0,D.A)({name:"MuiNativeSelect",props:e}),{className:r,children:n,classes:o={},IconComponent:l=I.A,input:a=R,inputProps:s}=i,c=(0,S.A)(i,F),u=(0,k.A)(),d=(0,P.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,b.A)({root:["root"]},C.w,t)})((0,A.A)({},i,{classes:o})),f=(0,S.A)(o,E);return(0,O.jsx)(j.Fragment,{children:j.cloneElement(a,(0,A.A)({inputComponent:L.Ay,inputProps:(0,A.A)({children:n,classes:f,IconComponent:l,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,w.A)(p.root,a.props.className,r)}))})}));M.muiName="Select";const z=M;var N=i(15787),B=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function V(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function H(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?V(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):V(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function G(e){var t=window.cgpv,i=e.config,r=e.layerPath,n=e.mapId,o=t.react,l=t.ui,a=o.useState,s=o.useRef,c=o.useEffect,u=l.elements,d=u.Grid,p=u.Slider,g=u.Typography,v=u.Checkbox,A=u.Tooltip,S=u.IconButton,j=u.LockIcon,w=u.LockOpenIcon,b=u.ArrowLeftIcon,L=u.PlayArrowIcon,P=u.PauseIcon,k=u.ArrowRightIcon,I=u.SwitchRightIcon,T=u.SwitchLeftIcon,D=(0,m.A)(),C=B(D),F=a(!1),E=(0,f.A)(F,2),R=E[0],M=E[1],V=s(),G=s(),U=s(),J=(0,h.Gg)(),q=J.setTitle,K=J.setDescription,Y=J.setDefaultValue,W=J.setValues,_=J.setLocked,X=J.setReversed,$=J.setDelay,Q=J.setFiltering,Z=(0,h.ky)()[r],ee=Z.title,te=Z.description,ie=Z.name,re=Z.defaultValue,ne=Z.range,oe=Z.minAndMax,le=Z.field,ae=Z.fieldAlias,se=Z.filtering,ce=Z.singleHandle,ue=Z.values,de=Z.delay,pe=Z.locked,fe=Z.reversed;c((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===ee&&q(r,(0,N.getLocalizedValue)(null==t?void 0:t.title,n)||""),void 0===te&&K(r,(0,N.getLocalizedValue)(null==t?void 0:t.description,n)||""),void 0===re&&Y(r,(null==t?void 0:t.defaultValue)||""),void 0===pe&&_(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===fe&&X(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed))}),[]);var me,ge=ne.map((function(e){return new Date(e).getTime()})),he=oe[1]-oe[0],ve=new Date(oe[1]).getDate()-new Date(oe[0]).getDate(),ye=new Date(oe[1]).getFullYear()-new Date(oe[0]).getFullYear();0===ve&&he<864e5?me="day":0===ye&&(me="year");var xe=[];xe=ne.length<6||ce?ge:[oe[0],new Date(ne[Math.round(ne.length/4)]).getTime(),new Date(ne[Math.round(ne.length/2)]).getTime(),new Date(ne[Math.round(3*ne.length/4)]).getTime(),oe[1]];for(var Ae=[],Se=0;Se<xe.length;Se++)Ae.push({value:xe[Se],label:me?"".concat("day"===me?new Date(xe[Se]).toTimeString().split(" ")[0]:new Date(xe[Se]).toISOString().slice(5,10)):new Date(xe[Se]).toISOString().slice(0,10)});function je(){if(ce){var e,t=ge.indexOf(ue[0]);e=ge[t]===oe[0]?ge.length-1:t-1,W(r,[ge[e]])}else{var i=(0,f.A)(ue,2),n=i[0],o=i[1];if(!U.current){if(o-n>(oe[1]-oe[0])/5)return U.current=(oe[1]-oe[0])/5,void W(r,[o-U.current,o]);U.current=o-n}if(pe&&fe){if(n===oe[0]&&(n=o),(n-=U.current)<oe[0])n=(0,f.A)(oe,1)[0]}else if(pe){if((o-=U.current)<n&&(o=n),o===n)o=(0,f.A)(oe,2)[1]}else{if(o>G.current&&n===G.current?o=G.current:o-=U.current,o<=oe[0])o=(0,f.A)(oe,2)[1];if((n=o-U.current)<oe[0])n=(0,f.A)(oe,1)[0];n<G.current&&o>G.current&&(n=G.current)}W(r,[n,o])}}function we(){if(ce){var e,t=ge.indexOf(ue[0]);e=ge[t]===oe[1]?0:t+1,W(r,[ge[e]])}else{var i=(0,f.A)(ue,2),n=i[0],o=i[1];if(!U.current){if(o-n>(oe[1]-oe[0])/5)return U.current=(oe[1]-oe[0])/5,void W(r,[n,n+U.current]);U.current=o-n}if(pe&&fe){if((n+=U.current)>=o)n=(0,f.A)(oe,1)[0]}else if(pe){if(o===oe[1]&&(o=n),(o+=U.current)>oe[1])o=(0,f.A)(oe,2)[1]}else{if(n<G.current&&o===G.current?n=G.current:n+=U.current,n>=oe[1])n=(0,f.A)(oe,1)[0];if((o=n+U.current)>oe[1])o=(0,f.A)(oe,2)[1];o>G.current&&n<G.current&&(o=G.current)}W(r,[n,o])}}function be(){return fe?pe?(0,N.getLocalizedMessage)(n,"timeSlider.slider.unlockRight"):(0,N.getLocalizedMessage)(n,"timeSlider.slider.lockRight"):pe?(0,N.getLocalizedMessage)(n,"timeSlider.slider.unlockLeft"):(0,N.getLocalizedMessage)(n,"timeSlider.slider.lockLeft")}return c((function(){R&&(V.current=fe?window.setTimeout((function(){return je()}),de):window.setTimeout((function(){return we()}),de))}),[ue,se,fe,pe]),c((function(){R&&(fe?je():we())}),[R]),(0,O.jsx)(d,{children:(0,O.jsxs)("div",{style:C.rightPanelContainer,children:[(0,O.jsxs)(d,{container:!0,sx:C.rightPanelBtnHolder,children:[(0,O.jsx)(d,{item:!0,xs:9,children:(0,O.jsxs)(g,{component:"div",sx:H(H({},C.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(ee||ie),void 0!==me&&" (".concat("day"===me?new Date(re).toLocaleDateString():new Date(re).getFullYear(),")")]})}),(0,O.jsx)(d,{item:!0,xs:3,children:(0,O.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,O.jsx)(A,{title:se?(0,N.getLocalizedMessage)(n,"timeSlider.slider.disableFilter"):(0,N.getLocalizedMessage)(n,"timeSlider.slider.enableFilter"),placement:"top",enterDelay:1e3,children:(0,O.jsx)(v,{checked:se,onChange:function(e,t){return Q(r,i=t),void(i||(clearInterval(V.current),M(!1)));var i}})})})})]}),(0,O.jsx)(d,{item:!0,xs:12,children:(0,O.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,O.jsx)(p,{sliderId:r,mapId:n,style:{width:"80%",color:"primary"},min:oe[0],max:oe[1],defaultValue:Number(re),value:ue,valueLabelFormat:function(e){return function(e){return"day"===me?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===me?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}(e)},marks:Ae,step:ce?null:.1,customOnChange:function(e){return function(e){clearTimeout(V.current),M(!1),U.current=void 0,W(r,e)}(e)}},ue[1]?ue[1]+ue[0]:ue[0])})}),(0,O.jsx)(d,{item:!0,xs:12,children:(0,O.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!ce&&(0,O.jsx)(S,{"aria-label":be(),tooltip:be(),tooltipPlacement:"top",onClick:function(){return clearTimeout(V.current),void _(r,!pe)},children:pe?(0,O.jsx)(j,{}):(0,O.jsx)(w,{})}),(0,O.jsx)(S,{"aria-label":(0,N.getLocalizedMessage)(n,"timeSlider.slider.back"),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:R||!se,onClick:function(){return G.current=fe?ue[1]:ue[0],void je()},children:(0,O.jsx)(b,{})}),(0,O.jsx)(S,{"aria-label":R?(0,N.getLocalizedMessage)(n,"timeSlider.slider.pauseAnimation"):(0,N.getLocalizedMessage)(n,"timeSlider.slider.playAnimation"),tooltip:R?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!se,onClick:function(){return clearTimeout(V.current),G.current=fe?ue[1]:ue[0],void M(!R)},children:R?(0,O.jsx)(P,{}):(0,O.jsx)(L,{})}),(0,O.jsx)(S,{"aria-label":(0,N.getLocalizedMessage)(n,"timeSlider.slider.forward"),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:R||!se,onClick:function(){return e=(0,f.A)(ue,1),G.current=e[0],void we();var e},children:(0,O.jsx)(k,{})}),(0,O.jsx)(S,{"aria-label":(0,N.getLocalizedMessage)(n,"timeSlider.slider.changeDirection"),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(V.current),X(r,!fe),void(R&&(fe?je():we()))},children:fe?(0,O.jsx)(I,{}):(0,O.jsx)(T,{})}),(0,O.jsxs)(y.A,{sx:{width:"150px"},children:[(0,O.jsx)(x.A,{variant:"standard",children:(0,N.getLocalizedMessage)(n,"timeSlider.slider.timeDelay")}),(0,O.jsxs)(z,{defaultValue:de,inputProps:{name:"timeDelay",onChange:function(e){return function(e){$(r,e.target.value)}(e)}},children:[(0,O.jsx)("option",{value:500,children:"0.5s"}),(0,O.jsx)("option",{value:750,children:"0.75s"}),(0,O.jsx)("option",{value:1e3,children:"1.0s"}),(0,O.jsx)("option",{value:1500,children:"1.5s"}),(0,O.jsx)("option",{value:2e3,children:"2.0s"}),(0,O.jsx)("option",{value:3e3,children:"3.0s"}),(0,O.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),te&&(0,O.jsx)(d,{item:!0,xs:12,children:(0,O.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:te})}),ae&&(0,O.jsx)(d,{item:!0,xs:12,children:(0,O.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(ae," (").concat(le,")")})})]})})}function U(e){var t=e.mapId,i=e.configObj,r=window.cgpv.react,n=r.useState,o=r.useCallback,l=r.useMemo,a=r.useEffect,s=(0,m.A)(),c=B(s),p=n(),y=(0,f.A)(p,2),x=y[0],A=y[1],S=(0,h.wE)(),j=(0,h.ky)(),w=o((function(e){v.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),A(e.layerPath)}),[]),b=l((function(){return v.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",j),S.map((function(e){return{layerPath:e,timeSliderLayerInfo:j[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,tooltip:e.timeSliderLayerInfo.name,layerStatus:"loaded",queryStatus:"processed"}}))}),[S,j]);return a((function(){v.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",b,x),x&&!b.map((function(e){return e.layerPath})).includes(x)&&A("")}),[b,x]),(0,O.jsxs)(g.PE,{selectedLayerPath:x,onLayerListClicked:w,layerList:b,children:[x&&(0,O.jsx)(G,{mapId:t,config:i,layerPath:x},x),!x&&(0,O.jsxs)(d.Paper,{sx:{padding:"2rem"},children:[(0,O.jsx)(d.Typography,{variant:"h3",gutterBottom:!0,sx:c.timeSliderInstructionsTitle,children:(0,u.Jv8)(t,"timeSlider.instructions")}),(0,O.jsx)(d.Typography,{component:"p",sx:c.timeSliderInstructionsBody,children:(0,u.Jv8)(t,"timeSlider.instructions")})]})]})}const J=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),q=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function K(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,Y()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function Y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Y=function(){return!!e})()}var W=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=K(this,t,[].concat(r)),(0,c.A)((0,a.A)(e),"schema",(function(){return J})),(0,c.A)((0,a.A)(e),"defaultConfig",(function(){return(0,u.NKs)(q)})),(0,c.A)((0,a.A)(e),"translations",(0,u.NKs)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"},instructions:"Time Slider Instructions"}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"},instructions:"Instructions Curseur Temporel"}}})),(0,c.A)((0,a.A)(e),"onCreateContentProps",(function(){return{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,O.jsx)(d.TimeSliderIcon,{}),content:(0,O.jsx)(U,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,s.A)(t,e),(0,r.A)(t)}(p.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KXH)(W)}},e=>{var t;t=91929,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map