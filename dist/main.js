(()=>{"use strict";class e{constructor(e){this.name=e,this.arrayOfTodos=[]}}let t=[];function n(){document.querySelector(".projects").innerHTML="";for(let e=0;e<t.length;e++){let n=document.createElement("div");n.className="project",document.querySelector(".projects").appendChild(n),n.textContent=t[e].name;let c=document.createElement("button");c.textContent="x",c.addEventListener("click",(()=>{r(t[e])})),n.addEventListener("click",(()=>{o(t[e])})),n.appendChild(c)}}function o(e){document.getElementById("content").innerHTML="";for(let t=1;t<=e.arrayOfTodos.length-1;t++){let n=document.createElement("div");n.className="task";let r=document.createElement("button");r.textContent="",r.className="checkbox",n.appendChild(r);let c=document.createElement("div");c.textContent=e.arrayOfTodos[t].name,c.className="taskname",n.appendChild(c);let a=document.createElement("div");a.textContent=e.arrayOfTodos[t].description,a.className="description",n.appendChild(a);let d=document.createElement("div");n.priority=e.arrayOfTodos[t].priority,1==e.arrayOfTodos[t].priority&&(c.style.background="red"),2==e.arrayOfTodos[t].priority&&(c.style.background="orange"),3==e.arrayOfTodos[t].priority&&(c.style.background="yellow"),d.className="priority",n.appendChild(d),r.addEventListener("click",(()=>{var n;n=t,e.arrayOfTodos.splice(n,1),o(e)}));let l=document.createElement("div");n.appendChild(l),l.className="date",l.textContent=e.arrayOfTodos[t].date,document.querySelector("#content").appendChild(n)}c(e)}function r(e){for(let n=0;n<t.length;n++)t[n]==e&&t.splice(n,1);document.querySelector("#content").innerHTML="",n()}function c(e){let t=document.createElement("button");document.querySelector("#content").appendChild(t),t.textContent="Create todo",t.addEventListener("click",(()=>{!function(e){let t=document.querySelector(".popup");t.style.transform="scale(1)",document.body.addEventListener("click",(function(e){e.target==t&&(t.style.transform="scale(0)")})),document.querySelector(".submit-button").addEventListener("click",a,!1),document.querySelector(".submit-button").parameter=e}(e)}))}function a(e){let t={name:document.getElementById("taskname").value,description:document.getElementById("description").value,date:document.getElementById("date").value,priority:document.getElementById("priority").value},n=document.querySelector(".popup");e.currentTarget.parameter.arrayOfTodos.push(t),n.style.transform="scale(0)",o(e.currentTarget.parameter)}!function(){let t=new e("Inbox"),n=document.createElement("div");n.className="inbox";let r=c(t);t.arrayOfTodos.push(r),document.querySelector(".inbox").addEventListener("click",(()=>{o(t)})),document.querySelector(".inbox").appendChild(n)}(),document.querySelector("#project").addEventListener("click",(function(){let o=document.createElement("input");o.setAttribute("type","text");let r=document.querySelector(".projects");console.log(r.firstChild),r.lastChild!==o&&r.appendChild(o);let a=document.createElement("button");r.appendChild(a),a.textContent="Ok",a.addEventListener("click",(()=>{let d=o.value;d?(r.removeChild(o),r.removeChild(a),function(o){let r=new e(o);t.push(r),document.querySelector("#content").textContent="";let a=c(r);r.arrayOfTodos.push(a),console.log(t),n()}(d)):alert("Enter project name")}))}))})();