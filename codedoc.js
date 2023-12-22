function createCodeSnippet(){const e=Array.prototype.filter.call(document.getElementsByTagName("script"),(e=>null===e.getAttribute("id"))),t=e[e.length-1];for(let e=0,n=!0;n;e++){const o=document.getElementById(`codeSnippet${e||""}`);null!==o?o.innerHTML=`<pre>${t.textContent.replace("//create snippets\n","").replace("createConfigSnippet();\n","").replace("createCodeSnippet();\n","")}</pre>`:n=!1}}function createCodeSnippetUsingIDs(){const e=Array.prototype.filter.call(document.getElementsByTagName("script"),(e=>null!==e.getAttribute("id")));for(let t=0;t<e.length;t++){const n=e[t];document.querySelectorAll(`[id-script="${n.id}"]`).forEach((e=>{e.innerHTML=`<pre>${n.textContent}</pre>`}))}}function createConfigSnippet(){let e=0;for(e=0;e<document.getElementsByClassName("geoview-map").length;e++){let t="";const n=document.getElementsByClassName("geoview-map")[e].id;t=document.getElementById(n).attributes["data-config"];const o=document.getElementById(`${n}CS`);try{if(void 0!==t&&null!==o){const e=t.value.split(/(?<!\\)'/gm).map(((e,t)=>t%2?e.replaceAll(/\/\*/gm,String.fromCharCode(1)).replaceAll(/\*\//gm,String.fromCharCode(2)):e)).join("'").replaceAll(/\/\*(?<=\/\*)((?:.|\n|\r)*?)(?=\*\/)\*\//gm,"").replaceAll(String.fromCharCode(1),"/*").replaceAll(String.fromCharCode(2),"*/");o.textContent=JSON.stringify(JSON.parse(e.replace(/(\r\n|\n|\r)/gm,"").replace(/(?<!\\)'/gm,'"').replace(/\\'/gm,"'")),void 0,2)}}catch(e){console.log("Error trapped in createConfigSnippet")}}createCollapsible()}function createCollapsible(){const e=document.getElementsByClassName("collapsible");let t;for(t=0;t<e.length;t++){const n=e[t].nextElementSibling;e[t].classList.contains("active")?n.style.display="block":n.style.display="none",e[t].addEventListener("click",(function(){this.classList.toggle("active"),this.classList.contains("active")?n.style.display="block":n.style.display="none"}))}}function getAllInteractionEvents(e){return[e.eventNames.INTERACTION.EVENT_SELECTED,e.eventNames.INTERACTION.EVENT_EXTENT,e.eventNames.INTERACTION.EVENT_DRAW_STARTED,e.eventNames.INTERACTION.EVENT_DRAW_ENDED,e.eventNames.INTERACTION.EVENT_MODIFY_STARTED,e.eventNames.INTERACTION.EVENT_MODIFY_ENDED,e.eventNames.INTERACTION.EVENT_TRANSLATE_STARTED,e.eventNames.INTERACTION.EVENT_TRANSLATE_ENDED]}function addLog(e,t){const n=document.getElementById(e);n.innerText+=`${t}\n`,n.scrollTop=n.scrollHeight}function wireLogs(e,t,n){getAllInteractionEvents(e).forEach((o=>{e.event.on(o,(e=>{addLog(n,e.event),console.log(e)}),t)}))}function addDefaultShapes(e,t){e.layer.geometry.setActiveGeometryGroup(t),e.layer.geometry.addCircle([-98.94,57.94],{style:{strokeColor:"purple",strokeWidth:2}}),e.layer.geometry.addMarkerIcon([-105.78,57.52]),e.layer.geometry.addPolyline([[-106.17,63.99],[-104.46,62.55],[-102.26,56.44]],{style:{strokeColor:"blue",strokeWidth:2}}),e.layer.geometry.addPolygon([[[-96.71,64.41],[-93.1,62.86],[-94.36,56.67],[-96.71,64.41]]],{style:{strokeColor:"green",strokeWidth:2}})}function addSpecialShapes(e,t){e.layer.geometry.setActiveGeometryGroup(t),e.layer.geometry.addPolygon([[[-86.06,62.59],[-78.29,62.59],[-80.43,55.73],[-86.06,62.59]]],{style:{strokeColor:"red",strokeWidth:2}})}