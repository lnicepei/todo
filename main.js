(()=>{"use strict";let e=[];class t{constructor(t){this.name=t,this.arr=[],e.push(this)}}function n(e){let t,n=document.createElement("button");document.querySelector("#content").appendChild(n),n.textContent="Create todo",n.addEventListener("click",(()=>{let r=prompt("Name");t=function(e,t,n,r,o){return{name:e,description:"Description",date:1,priority:0,complete:1}}(r),e.arr.push(t),console.log(e),function(e){document.getElementById("content").innerHTML="";for(let t=1;t<=e.arr.length-1;t++){let n=document.createElement("div");n.className="task",n.textContent+=e.arr[t].name+e.arr[t].description+e.arr[t].date+e.arr[t].priority+e.arr[t].complete,document.querySelector("#content").appendChild(n)}}(e),document.querySelector("#content").appendChild(n)}))}let r=1;document.querySelector("#project").addEventListener("click",(function(){let e=prompt("Name"),o=new t(e),c=document.createElement("div");c.className="project"+r,r++,document.querySelector("#content").textContent="";let a=n(o);o.arr.push(a),c.addEventListener("click",(()=>{document.getElementById("content").innerHTML="";for(let e=1;e<=o.arr.length-1;e++){let t=document.createElement("div");t.className="task",t.textContent+=o.arr[e].name+o.arr[e].description+o.arr[e].date+o.arr[e].priority+o.arr[e].complete,document.querySelector("#content").appendChild(t)}n(o)})),document.querySelector(".projects").appendChild(c),c.textContent=e}))})();