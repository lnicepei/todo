(()=>{"use strict";class e{constructor(e){this.name=e,this.arrayOfTodos=[]}}let t=[];function n(){document.querySelector(".projects").innerHTML="";for(let e=1;e<t.length;e++){let n=document.createElement("div");n.className="project",document.querySelector(".projects").appendChild(n),n.textContent=t[e].name;let r=document.createElement("button");r.textContent="x",r.addEventListener("click",(()=>{c(t[e])})),n.addEventListener("click",(()=>{a(t[e])})),n.appendChild(r)}}function r(){document.querySelector("#content").innerHTML="";let e=document.createElement("div");e.className="today";let n=function(){let e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return e=r+"-"+n+"-"+t,e}();for(let e in t)for(let r=1;r<t[e].arrayOfTodos.length;r++)t[e].arrayOfTodos[r].date==n&&a(t[e],r);document.querySelector(".today").appendChild(e)}function o(){document.querySelector("#content").innerHTML="";let e=document.createElement("div");e.className="upcoming";let n=new Date,r=String(n.getDate()).padStart(2,"0"),o=String(n.getMonth()+1).padStart(2,"0"),c=n.getFullYear();n=c+"/"+o+"/"+r;for(let e in t)for(let n=1;n<t[e].arrayOfTodos.length;n++)t[e].arrayOfTodos[n].date.substr(0,4)>c&&a(t[e],n,"upcoming"),t[e].arrayOfTodos[n].date.substr(0,4)==c&&t[e].arrayOfTodos[n].date.substr(5,2)>o&&a(t[e],n,"upcoming"),t[e].arrayOfTodos[n].date.substr(0,4)==c&&t[e].arrayOfTodos[n].date.substr(5,2)==o&&t[e].arrayOfTodos[n].date.substr(8,2)>r&&a(t[e],n,"upcoming");document.querySelector(".upcoming").appendChild(e)}function a(e,t,n){t||(document.getElementById("content").innerHTML="");for(let c=1;c<=e.arrayOfTodos.length-1;c++){let d=document.createElement("div");d.className="task";let l=document.createElement("button");l.textContent="",l.className="checkbox",d.appendChild(l);let i=document.createElement("div");i.textContent=e.arrayOfTodos[c].name,i.className="taskname",d.appendChild(i);let u=document.createElement("div");u.textContent=e.arrayOfTodos[c].description,u.className="description",d.appendChild(u);let s=document.createElement("div");d.priority=e.arrayOfTodos[c].priority,1==e.arrayOfTodos[c].priority&&(i.style.background="red"),2==e.arrayOfTodos[c].priority&&(i.style.background="orange"),3==e.arrayOfTodos[c].priority&&(i.style.background="yellow"),s.className="priority",d.appendChild(s),l.addEventListener("click",(()=>{var d;d=c,e.arrayOfTodos.splice(d,1),t?t&&"upcoming"==n?o():r():a(e)}));let m=document.createElement("div");d.appendChild(m),m.className="date",m.textContent=e.arrayOfTodos[c].date,t?t==c&&document.querySelector("#content").appendChild(d):document.querySelector("#content").appendChild(d)}t||d(e)}function c(e){for(let n=0;n<t.length;n++)t[n]==e&&t.splice(n,1);document.querySelector("#content").innerHTML="",n()}function d(e){let t=document.createElement("button");document.querySelector("#content").appendChild(t),t.textContent="Create todo",t.addEventListener("click",(()=>{!function(e){let t=document.querySelector(".popup");t.style.transform="scale(1)",document.body.addEventListener("click",(function(e){e.target==t&&(t.style.transform="scale(0)")})),document.querySelector(".submit-button").addEventListener("click",l,!1),document.querySelector(".submit-button").parameter=e}(e)}))}function l(e){let t={name:document.getElementById("taskname").value,description:document.getElementById("description").value,date:document.getElementById("date").value,priority:document.getElementById("priority").value},n=document.querySelector(".popup");e.currentTarget.parameter.arrayOfTodos.push(t),n.style.transform="scale(0)",a(e.currentTarget.parameter)}!function(){let n=new e("Inbox"),c=document.createElement("div");c.className="inbox";let l=d(n);n.arrayOfTodos.push(l),t.push(n),document.querySelector(".inbox").addEventListener("click",(()=>{a(n)})),document.querySelector(".today").addEventListener("click",r),document.querySelector(".upcoming").addEventListener("click",o),document.querySelector(".inbox").appendChild(c)}(),document.querySelector("#project").addEventListener("click",(function r(){this.removeEventListener("click",r);var o=document.querySelector(".projects");let a=document.createElement("button");a.textContent="x",a.addEventListener("click",(()=>{o.removeChild(c),o.removeChild(l),o.removeChild(a),this.addEventListener("click",r)}));var c=document.createElement("input");c.setAttribute("type","text"),o.appendChild(c);var l=document.createElement("button");o.appendChild(a),o.appendChild(l),l.textContent="Ok",l.addEventListener("click",(()=>{let a=c.value;a?(o.removeChild(c),o.removeChild(l),function(r){let o=new e(r);t.push(o),document.querySelector("#content").textContent="";let a=d(o);o.arrayOfTodos.push(a),n()}(a)):alert("Enter project name"),this.addEventListener("click",r)}))}))})();