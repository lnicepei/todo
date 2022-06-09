(()=>{"use strict";class e{constructor(e){this.name=e,this.arrayOfTodos=[]}}let t=[];function n(){document.querySelector(".projects").innerHTML="";for(let e=1;e<t.length;e++){let n=document.createElement("div");n.className="project",document.querySelector(".projects").appendChild(n),n.textContent=t[e].name;let o=document.createElement("button");o.textContent="x",o.addEventListener("click",(()=>{d(t[e])})),n.addEventListener("click",(()=>{c(t[e])})),n.appendChild(o)}}function o(){document.querySelector(".content").innerHTML="",document.querySelector(".create-button").innerHTML="";let e=document.createElement("div");e.className="today";let n=function(){let e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return e=o+"-"+n+"-"+t,e}();a("Today");for(let e in t)for(let o=1;o<t[e].arrayOfTodos.length;o++)t[e].arrayOfTodos[o].date==n&&c(t[e],o);document.querySelector(".today").appendChild(e)}function r(){document.querySelector(".content").innerHTML="",document.querySelector(".create-button").innerHTML="";let e=document.createElement("div");e.className="upcoming";let n=new Date,o=String(n.getDate()).padStart(2,"0"),r=String(n.getMonth()+1).padStart(2,"0"),d=n.getFullYear();n=d+"/"+r+"/"+o,a("Upcoming");for(let e in t)for(let n=1;n<t[e].arrayOfTodos.length;n++)t[e].arrayOfTodos[n].date.substr(0,4)>d&&c(t[e],n,"upcoming"),t[e].arrayOfTodos[n].date.substr(0,4)==d&&t[e].arrayOfTodos[n].date.substr(5,2)>r&&c(t[e],n,"upcoming"),t[e].arrayOfTodos[n].date.substr(0,4)==d&&t[e].arrayOfTodos[n].date.substr(5,2)==r&&t[e].arrayOfTodos[n].date.substr(8,2)>o&&c(t[e],n,"upcoming");document.querySelector(".upcoming").appendChild(e)}function c(e,t,n){t||(document.querySelector(".content").innerHTML="",document.querySelector(".create-button").innerHTML="",a(e));for(let a=1;a<=e.arrayOfTodos.length-1;a++){let d=document.createElement("div");d.className="task";let l=document.createElement("div");l.textContent="",l.className="checkbox",d.appendChild(l);let u=document.createElement("div");u.textContent=e.arrayOfTodos[a].name,u.className="taskname",d.appendChild(u);let i=document.createElement("div");i.textContent="Project: "+e.name,i.className="father-project",d.appendChild(i);let s=document.createElement("div");s.textContent=e.arrayOfTodos[a].description,s.className="description",d.appendChild(s),1==e.arrayOfTodos[a].priority&&(l.style.background="red"),2==e.arrayOfTodos[a].priority&&(l.style.background="orange"),3==e.arrayOfTodos[a].priority&&(l.style.background="yellow"),0==e.arrayOfTodos[a].priority&&(l.style.background="white"),l.addEventListener("click",(()=>{var d;d=a,e.arrayOfTodos.splice(d,1),t?t&&"upcoming"==n?r():o():c(e)}));let m=document.createElement("div");d.appendChild(m),m.className="date",m.textContent=e.arrayOfTodos[a].date,t?t==a&&document.querySelector(".content").appendChild(d):document.querySelector(".content").appendChild(d)}t||l(e)}function a(e){e.name?document.querySelector(".project-name").textContent=e.name:document.querySelector(".project-name").textContent=e}function d(e){for(let n=0;n<t.length;n++)t[n]==e&&t.splice(n,1);document.querySelector(".content").innerHTML="",document.querySelector(".create-button").innerHTML="",document.querySelector(".project-name").textContent="",n()}function l(e){let t=document.createElement("button");document.querySelector(".create-button").appendChild(t),t.textContent="Create todo",t.className="create-button__btn",t.addEventListener("click",(()=>{!function(e){let t=document.querySelector(".popup-container");t.style.transform="scale(1)",document.body.addEventListener("click",(function(e){e.target==t&&(t.style.transform="scale(0)")})),document.querySelector(".submit-button").addEventListener("click",u,!1),document.querySelector(".submit-button").parameter=e}(e)}))}function u(e){let t={name:document.getElementById("taskname").value,description:document.getElementById("description").value,date:document.getElementById("date").value,priority:document.getElementById("priority").value},n=document.querySelector(".popup-container");e.currentTarget.parameter.arrayOfTodos.push(t),n.style.transform="scale(0)",c(e.currentTarget.parameter)}!function(){let n=new e("Inbox"),d=document.createElement("div");d.className="inbox";let u=l(n);n.arrayOfTodos.push(u),t.push(n),a("Inbox"),document.querySelector(".inbox").addEventListener("click",(()=>{c(n)})),document.querySelector(".today").addEventListener("click",o),document.querySelector(".upcoming").addEventListener("click",r),document.querySelector(".inbox").appendChild(d)}(),document.querySelector(".sidebar__btn").addEventListener("click",(function o(){this.removeEventListener("click",o);var r=document.querySelector(".projects");let c=document.createElement("button");c.textContent="x",c.addEventListener("click",(()=>{r.removeChild(a),r.removeChild(d),r.removeChild(c),this.addEventListener("click",o)}));var a=document.createElement("input");a.setAttribute("type","text"),r.appendChild(a);var d=document.createElement("button");r.appendChild(c),r.appendChild(d),d.textContent="Ok",d.addEventListener("click",(()=>{let c=a.value;console.log(t),c&&c.length<16&&!t.includes(c)?(r.removeChild(a),r.removeChild(d),document.querySelector(".create-button").innerHTML="",document.querySelector(".project-name").textContent=c,function(o){let r=new e(o);t.push(r),document.querySelector(".content").textContent="";let c=l(r);r.arrayOfTodos.push(c),n()}(c)):t.includes(c)?console.log("Such project already exists"):c.length>=16&&alert("Project name should be less than 16 characters"),this.addEventListener("click",o)}))}))})();