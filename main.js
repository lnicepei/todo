(()=>{"use strict";let e=[];class t{constructor(t){this.name=t,this.arrayOfTodos=[],e.push(this)}}function n(e){console.log(e),document.getElementById("content").innerHTML="";for(let t=1;t<=e.arrayOfTodos.length-1;t++){let o=document.createElement("div");o.className="task";let r=document.createElement("div");r.textContent="Complete",r.className="checkbox",o.appendChild(r);let a=document.createElement("div");a.textContent=e.arrayOfTodos[t].name,a.className="taskname",o.appendChild(a);let c=document.createElement("div");c.textContent=e.arrayOfTodos[t].description,c.className="description",o.appendChild(c);let d=document.createElement("div");o.priority=e.arrayOfTodos[t].priority,1==e.arrayOfTodos[t].priority&&(a.style.background="red"),2==e.arrayOfTodos[t].priority&&(a.style.background="orange"),3==e.arrayOfTodos[t].priority&&(a.style.background="yellow"),d.className="priority",o.appendChild(d),r.addEventListener("click",(()=>{var o,r;r=t,(o=e).arrayOfTodos.splice(r,1),console.log(o.arrayOfTodos),n(e)}));let l=document.createElement("input");l.setAttribute("type","date"),o.appendChild(l),l.className="date",l.addEventListener("change",(()=>{let e=l.value;console.log(e),l.textContent=e})),document.querySelector("#content").appendChild(o)}o(e)}function o(e){let t=document.createElement("button");document.querySelector("#content").appendChild(t),t.textContent="Create todo",t.addEventListener("click",(()=>{!function(e){let t=document.querySelector(".popup");t.style.transform="scale(1)",document.querySelector(".submit-button").addEventListener("click",(o=>{o.preventDefault();let r={name:document.getElementById("taskname").value,description:document.getElementById("description").value,date:document.getElementById("date").value,priority:document.getElementById("priority").value};e.arrayOfTodos.push(r),n(e),t.style.transform="scale(0)"})),document.body.addEventListener("click",(function(e){e.target==t&&(t.style.transform="scale(0)")}))}(e)}))}!function(){let e=new t("Inbox"),r=document.createElement("div");r.className="inbox";let a=o(e);e.arrayOfTodos.push(a),document.querySelector(".inbox").addEventListener("click",(()=>{n(e)})),document.querySelector(".inbox").appendChild(r)}(),document.querySelector("#project").addEventListener("click",(function(){let e=prompt("Name"),r=new t(e),a=document.createElement("div");a.className="project",document.querySelector("#content").textContent="";let c=o(r);r.arrayOfTodos.push(c),a.addEventListener("click",(()=>{n(r)})),document.querySelector(".projects").appendChild(a),a.textContent=e}))})();