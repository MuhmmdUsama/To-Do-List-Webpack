(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Ps:()=>s,TN:()=>c,cy:()=>r});const t=function(){let e="";r.forEach(((t,n)=>{t.index=n,e+=`\n        <tr class = 'table-row ${!1===r[n].completed?"":"done"}'>\n              <td id = "td-id">${n+1}</td>\n              <td><i class="bi-check2 check ${!1===r[n].completed?"":"done green"}" accessKey="${n}"></i></td>\n              <td class ='todo-title line-break'>${t.description}</td>\n              <td><button id="update" class="bi bi-pencil-square updateBtn" accessKey="${n}"></button></td>\n              <td><button id="delete" class="bi bi-trash trashBtn" accessKey="${n}"></button></td>\n        </tr>\n              `})),document.getElementById("todo-tbody").innerHTML=e,r.length>0?n("show"):(n("none"),localStorage.clear())};function n(e){document.querySelector(".delete-all").innerHTML=`\n      <button id="delete-all" class="${e}" >Reset (${r.length})</button>`,document.getElementById("delete-all").addEventListener("click",(()=>{localStorage.setItem("task",JSON.stringify([])),r.splice(0),t()}))}const c=document.getElementById("title"),s=document.getElementById("submit"),o=document.querySelector(".todo-tbody"),a=document.getElementById("clear-done");let i,l,d="creat",r=JSON.parse(localStorage.getItem("task"))||[{description:"gym",completed:!1,index:1},{description:"visite th doctor",completed:!1,index:2}];t(),s.addEventListener("click",(function(e){e.preventDefault();const n={description:c.value.toLowerCase(),completed:!1,index:r.length+1};""!==c.value&&("creat"===d?r.push(n):(r[i]=n,s.innerHTML='<i class="bi-box-arrow-down"></i>',d="creat"),c.value=""),localStorage.setItem("task",JSON.stringify(r)),t(),c.focus()})),o.addEventListener("click",(e=>{var n;e.target.classList.contains("trashBtn")?(n=e.target.accessKey,r.splice(n,1),localStorage.setItem("task",JSON.stringify(r)),t()):e.target.classList.contains("updateBtn")&&(c.focus(),d="update",function(e){c.value=r[e].description,s.innerHTML="Update"}(e.target.accessKey),i=e.target.accessKey)})),o.addEventListener("click",(e=>{!function(e){if(l=e.target,l.classList.contains("check")){const e=l.accessKey;l.classList.toggle("done"),l.classList.contains("done")?r[e].completed=!0:r[e].completed=!1,localStorage.setItem("task",JSON.stringify(r))}}(e),t()})),a.addEventListener("click",(function(){r=r.filter((e=>!0!==e.completed)),localStorage.setItem("task",JSON.stringify(r)),t()}))})();