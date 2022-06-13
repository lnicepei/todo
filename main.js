(()=>{"use strict";class e{constructor(e){this.name=e,this.arrayOfTodos=[]}}let t=[];function n(){document.querySelector(".projects").textContent="",t.forEach((e=>{let o=0,r=document.createElement("div");r.className="project",r.textContent=e.name;let c=document.createElement("button");c.classList.add("project__btn"),c.textContent="x",c.addEventListener("click",(()=>{var r;document.querySelector(".create-button").textContent="",r=e,t=t.filter((e=>e!==r)),localStorage.setItem("projects",JSON.stringify(t)),n(),document.querySelector(".content").textContent="",o=1})),r.addEventListener("click",(()=>{0==o&&a(e)})),r.appendChild(c),"Inbox"!==e.name&&document.querySelector(".projects").appendChild(r)}))}function o(){document.querySelector(".content").textContent="",document.querySelector(".create-button").textContent="";let e=document.createElement("div");e.className="today";let n=function(){let e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return e=o+"-"+n+"-"+t,e}();c("Today"),t.forEach((e=>{for(let t in e.arrayOfTodos)e.arrayOfTodos[t]&&e.arrayOfTodos[t].date==n&&a(e,t)})),document.querySelector(".today").appendChild(e)}function r(){document.querySelector(".content").textContent="",document.querySelector(".create-button").textContent="";let e=document.createElement("div");e.className="upcoming";let n=new Date,o=String(n.getDate()).padStart(2,"0"),r=String(n.getMonth()+1).padStart(2,"0"),d=n.getFullYear();n=d+"/"+r+"/"+o,c("Upcoming");for(let e in t)for(let n=1;n<t[e].arrayOfTodos.length;n++)t[e].arrayOfTodos[n].date.substr(0,4)>d&&a(t[e],n,"upcoming"),t[e].arrayOfTodos[n].date.substr(0,4)==d&&t[e].arrayOfTodos[n].date.substr(5,2)>r&&a(t[e],n,"upcoming"),t[e].arrayOfTodos[n].date.substr(0,4)==d&&t[e].arrayOfTodos[n].date.substr(5,2)==r&&t[e].arrayOfTodos[n].date.substr(8,2)>o&&a(t[e],n,"upcoming");document.querySelector(".upcoming").appendChild(e)}function a(e,n,d){n||(document.querySelector(".content").textContent="",document.querySelector(".create-button").textContent="",c(e));for(let c=1;c<e.arrayOfTodos.length;c++){let l=document.createElement("div");l.className="task";let s=document.createElement("div");s.textContent="",s.className="task__checkbox",l.appendChild(s);let u=document.createElement("div");u.textContent=e.arrayOfTodos[c].name,u.className="task__name",l.appendChild(u);let i=document.createElement("div");i.textContent="Project: "+e.name,i.className="task__origin",l.appendChild(i);let m=document.createElement("div");m.textContent=e.arrayOfTodos[c].description,m.className="task__description",l.appendChild(m),1==e.arrayOfTodos[c].priority&&(s.style.background="red"),2==e.arrayOfTodos[c].priority&&(s.style.background="orange"),3==e.arrayOfTodos[c].priority&&(s.style.background="yellow"),0==e.arrayOfTodos[c].priority&&(s.style.background="white"),s.addEventListener("click",(()=>{var l;l=c,e.arrayOfTodos.splice(l,1),localStorage.setItem("projects",JSON.stringify(t)),n?n&&"upcoming"==d?r():o():a(e)}));let p=document.createElement("div");l.appendChild(p),p.className="task__date",p.textContent=e.arrayOfTodos[c].date,n?n==c&&document.querySelector(".content").appendChild(l):document.querySelector(".content").appendChild(l)}n||l(e),localStorage.setItem("projects",JSON.stringify(t))}function c(e){e.name?document.querySelector(".project-name").textContent=e.name:document.querySelector(".project-name").textContent=e}function d(e){for(let n in t)if(t[n].name==e)return!0;return!1}function l(e){let t=document.createElement("button");document.querySelector(".create-button").appendChild(t),t.textContent="Create todo",t.className="create-button__btn",t.addEventListener("click",(()=>{!function(e){let t=document.querySelector(".popup-container");t.style.transform="scale(1)",document.body.addEventListener("click",(function(e){e.target==t&&(t.style.transform="scale(0)")})),document.querySelector(".submit-button").addEventListener("click",s,!1),document.querySelector(".submit-button").parameter=e}(e)}))}function s(e){let n=document.getElementById("taskname").value,o=document.getElementById("description").value,r=document.getElementById("date").value,c=document.getElementById("priority").value;if(n){let d=function(e,t,n,o){return{name:e,description:t,date:n,priority:o}}(n,o,r,c);e.currentTarget.parameter.arrayOfTodos.push(d),localStorage.setItem("projects",JSON.stringify(t)),document.querySelector(".popup-container").style.transform="scale(0)",a(e.currentTarget.parameter)}else alert("Enter task name")}"projects"in localStorage&&(t=JSON.parse(localStorage.getItem("projects")||[])),function(){c("Inbox");let n=new e("Inbox");0==t.filter((e=>"Inbox"==e.name)).length&&t.push(n);let o=l(n);n.arrayOfTodos.push(o),localStorage.setItem("projects",JSON.stringify(t)),t.filter((e=>"Inbox"==e.name)).length>0?a(t[0]):a(n),document.querySelector(".inbox").addEventListener("click",(()=>{console.log(t),t.filter((e=>"Inbox"==e.name)).length>0?a(t[0]):a(n)}))}(),n(),document.querySelector(".today").addEventListener("click",o),document.querySelector(".upcoming").addEventListener("click",r),document.querySelector(".projects__btn").addEventListener("click",(function o(){this.removeEventListener("click",o);var r=document.querySelector(".projects");let a=document.createElement("button");a.classList.add("projects__btn","projects__btn--close"),a.textContent="x",a.addEventListener("click",(()=>{r.removeChild(c),r.removeChild(s),r.removeChild(a),this.addEventListener("click",o)}));var c=document.createElement("input");c.setAttribute("type","text"),c.classList.add("projects__name-input"),r.appendChild(c);var s=document.createElement("button");a.classList.add("projects__btn","projects__btn--submit"),r.appendChild(a),r.appendChild(s),s.textContent="Ok",s.addEventListener("click",(()=>{let a=c.value;a&&a.length<16&&!d(a)?(r.removeChild(c),r.removeChild(s),document.querySelector(".create-button").textContent="",document.querySelector(".project-name").textContent=a,function(o){let r=new e(o);t.push(r),document.querySelector(".content").textContent="";let a=l(r);if(r.arrayOfTodos.push(a),localStorage.setItem("projects",JSON.stringify(t)),"Inbox"==o)return r;n()}(a),this.addEventListener("click",o)):1==d(a)?(alert("Project names should be different"),c.value=""):a.length>=16?alert("Project name should be less than 16 characters"):a||alert("Enter project name")}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUMsSUFBSSx3QkFFbEN1RSxFQUFZOUQsWUFBWWlFLEdBRXhCLElBQUlDLEVBQTZCdEYsU0FBU08sY0FBYyxVQUN4RDRFLEVBQVl6RSxVQUFVQyxJQUFJLGdCQUFpQix5QkFFM0N1RSxFQUFZOUQsWUFBWStELEdBQ3hCRCxFQUFZOUQsWUFBWWtFLEdBQ3hCQSxFQUEyQnBGLFlBQWMsS0FHekNvRixFQUEyQjFFLGlCQUFpQixTQUFTLEtBQ2pELElBQUlqQixFQUFPMEYsRUFBb0JsQixNQUU1QnhFLEdBQVFBLEVBQUs0QyxPQUFTLEtBQU9nQixFQUFzQjVELElBQ2xEdUYsRUFBWUUsWUFBWUMsR0FDeEJILEVBQVlFLFlBQVlFLEdBQ3hCdEYsU0FBU0MsY0FBYyxrQkFBa0JDLFlBQWMsR0FDdkRGLFNBQVNDLGNBQWMsaUJBQWlCQyxZQUFjUCxFQTFObEUsU0FBdUJBLEdBQ25CLElBQUlrQixFQUFhLElBQUlwQixFQUFRRSxHQUM3QkcsRUFBZ0J5RSxLQUFLMUQsR0FFckJiLFNBQVNDLGNBQWMsWUFBWUMsWUFBYyxHQUVqRCxJQUFJc0YsRUFBb0JsQyxFQUFXekMsR0FLbkMsR0FKQUEsRUFBV2hCLGFBQWEwRSxLQUFLaUIsR0FFN0J6RSxhQUFhQyxRQUFRLFdBQVlDLEtBQUtDLFVBQVVwQixJQUVyQyxTQUFSSCxFQUFpQixPQUFPa0IsRUFFM0JkLElBOE1RMEYsQ0FBYzlGLEdBQ2RDLEtBQUtnQixpQkFBaUIsUUFBU29FLElBQ0ssR0FBL0J6QixFQUFzQjVELElBQzNCNkUsTUFBTSxxQ0FDTmEsRUFBb0JsQixNQUFRLElBQ3ZCeEUsRUFBSzRDLFFBQVUsR0FDcEJpQyxNQUFNLGtEQUNBN0UsR0FDTjZFLE1BQU0sNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNrYWdlLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3BhY2thZ2UvLi9zcmMvdXBkYXRlUHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS8uL3NyYy91cGRhdGVUb2Rvc0RPTS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLy4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3BhY2thZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hcnJheU9mVG9kb3MgPSBbXTtcbiAgICB9XG4gICAgXG4gICAgLy9mdW5jdGlvbnMgdG8gYWx0ZXIgdGFza3MgaW5zaWRlIGEgcHJvamVjdFxufVxuXG5leHBvcnQge1Byb2plY3R9OyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgVG9kb0J1dHRvbiB9IGZyb20gXCIuL3VwZGF0ZVRvZG9zRE9NXCI7XG5cbmxldCBhcnJheU9mUHJvamVjdHMgPSBbXTtcblxuKGZ1bmN0aW9uIGNoZWNrUHJvamVjdHNPblJlbG9hZCgpIHtcbiAgICBpZigncHJvamVjdHMnIGluIGxvY2FsU3RvcmFnZSl7XG4gICAgICAgIGFycmF5T2ZQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgfHwgW10pO1xuICAgIH1lbHNle1xuICAgIH1cbiAgICBjcmVhdGVJbmJveCgpO1xuICAgIFxuICAgIHVwZGF0ZVByb2plY3RzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUb2RheXNUYXNrcyk7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwY29taW5nJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVVcGNvbWluZ1Rhc2tzKTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUluYm94KCkge1xuICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KCdJbmJveCcpOyAvLyBVcGRhdGVzIGN1cnJlbnQgd29ya2luZyBwcm9qZWN0IFxuICAgIFxuICAgIGxldCBpbmJveCA9IG5ldyBQcm9qZWN0KCdJbmJveCcpO1xuICAgIGlmKGFycmF5T2ZQcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT0gJ0luYm94JykubGVuZ3RoID09IDApIGFycmF5T2ZQcm9qZWN0cy5wdXNoKGluYm94KTtcbiAgICBcbiAgICBsZXQgdGFza0luc2lkZUluYm94ID0gVG9kb0J1dHRvbihpbmJveCk7XG4gICAgaW5ib3guYXJyYXlPZlRvZG9zLnB1c2godGFza0luc2lkZUluYm94KTtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhcnJheU9mUHJvamVjdHMpKTtcblxuICAgIChhcnJheU9mUHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09ICdJbmJveCcpLmxlbmd0aCA+IDApID8gY3JlYXRlQWxsVGFza3NJblByb2plY3QoYXJyYXlPZlByb2plY3RzWzBdKSA6IGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGluYm94KTtcbiAgICBcbiAgICAvLyBoZXJlIGlzIHRoZSB0cmljay4gdGhlIGluYm94IGNyZWF0ZWQgZm9yIHRoZSBzZWNvbmQgdGltZSBkb2VzIG5vdCBoYXZlIGFueSB0YXNrc1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mUHJvamVjdHMpO1xuICAgICAgICAoYXJyYXlPZlByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSAnSW5ib3gnKS5sZW5ndGggPiAwKSA/IGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGFycmF5T2ZQcm9qZWN0c1swXSkgOiBjcmVhdGVBbGxUYXNrc0luUHJvamVjdChpbmJveCk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIGFycmF5T2ZQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykudGV4dENvbnRlbnQgPSAnJztcbiAgICBcbiAgICBsZXQgdGFza0luc2lkZVByb2plY3QgPSBUb2RvQnV0dG9uKG5ld1Byb2plY3QpO1xuICAgIG5ld1Byb2plY3QuYXJyYXlPZlRvZG9zLnB1c2godGFza0luc2lkZVByb2plY3QpO1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZQcm9qZWN0cykpO1xuXG4gICAgaWYobmFtZSA9PSAnSW5ib3gnKSByZXR1cm4gbmV3UHJvamVjdDtcbiAgICAgICAgXG4gICAgdXBkYXRlUHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykudGV4dENvbnRlbnQgPSAnJztcbiAgICBcbiAgICBhcnJheU9mUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0SW5BcnJheSA9PiB7XG4gICAgICAgIGxldCBkZWxldGVCdXR0b25JbmRleCA9IDA7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3QuY2xhc3NOYW1lID0gJ3Byb2plY3QnO1xuICAgICAgICAgICAgXG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0SW5BcnJheS5uYW1lO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0X19idG4nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbicpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJbkFycmF5KTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbkluZGV4ID0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoZGVsZXRlQnV0dG9uSW5kZXggPT0gMCkgY3JlYXRlQWxsVGFza3NJblByb2plY3QocHJvamVjdEluQXJyYXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgICAgICBpZihwcm9qZWN0SW5BcnJheS5uYW1lICE9PSAnSW5ib3gnKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgdG9kYXkgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcblxuICAgIHJldHVybiB0b2RheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kYXlzVGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJykudGV4dENvbnRlbnQgPSAnJztcbiAgICBcbiAgICBsZXQgdG9kYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheUNvbnRhaW5lci5jbGFzc05hbWUgPSAndG9kYXknO1xuXG4gICAgbGV0IHRvZGF5ID0gZ2V0RGF0ZSgpO1xuXG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QoJ1RvZGF5Jyk7XG5cbiAgICBhcnJheU9mUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgZm9yIChsZXQgZiBpbiBwcm9qZWN0LmFycmF5T2ZUb2Rvcykge1xuICAgICAgICAgICAgaWYocHJvamVjdC5hcnJheU9mVG9kb3NbZl0pe1xuICAgICAgICAgICAgICAgIGlmKHByb2plY3QuYXJyYXlPZlRvZG9zW2ZdLmRhdGUgPT0gdG9kYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWxsVGFza3NJblByb2plY3QocHJvamVjdCwgZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKS5hcHBlbmRDaGlsZCh0b2RheUNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVwY29taW5nVGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJykudGV4dENvbnRlbnQgPSAnJztcbiAgICBsZXQgdXBjb21pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1cGNvbWluZ0NvbnRhaW5lci5jbGFzc05hbWUgPSAndXBjb21pbmcnO1xuXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICB0b2RheSA9IHl5eXkgKyAnLycgKyBtbSArICcvJyArIGRkOyAgIFxuXG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QoJ1VwY29taW5nJyk7XG5cbiAgICBmb3IobGV0IGkgaW4gYXJyYXlPZlByb2plY3RzKSB7XG4gICAgICAgIGZvcihsZXQgZiA9IDE7IGYgPCBhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zLmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgICBpZihhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zW2ZdLmRhdGUuc3Vic3RyKDAsIDQpID4geXl5eSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGFycmF5T2ZQcm9qZWN0c1tpXSwgZiwgJ3VwY29taW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zW2ZdLmRhdGUuc3Vic3RyKDAsIDQpID09IHl5eXkgJiZcbiAgICAgICAgICAgICAgIGFycmF5T2ZQcm9qZWN0c1tpXS5hcnJheU9mVG9kb3NbZl0uZGF0ZS5zdWJzdHIoNSwgMikgPiBtbSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGFycmF5T2ZQcm9qZWN0c1tpXSwgZiwgJ3VwY29taW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zW2ZdLmRhdGUuc3Vic3RyKDAsIDQpID09IHl5eXkgJiZcbiAgICAgICAgICAgICAgIGFycmF5T2ZQcm9qZWN0c1tpXS5hcnJheU9mVG9kb3NbZl0uZGF0ZS5zdWJzdHIoNSwgMikgPT0gbW0gJiZcbiAgICAgICAgICAgICAgIGFycmF5T2ZQcm9qZWN0c1tpXS5hcnJheU9mVG9kb3NbZl0uZGF0ZS5zdWJzdHIoOCwgMikgPiBkZCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGFycmF5T2ZQcm9qZWN0c1tpXSwgZiwgJ3VwY29taW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBjb21pbmcnKS5hcHBlbmRDaGlsZCh1cGNvbWluZ0NvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KHByb2plY3QsIGluZGV4T2ZUb2RheVRhc2ssIG9yaWdpbikge1xuICAgIGlmICghaW5kZXhPZlRvZGF5VGFzayl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b24nKS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB1cGRhdGVDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGYgPSAxOyBmIDwgcHJvamVjdC5hcnJheU9mVG9kb3MubGVuZ3RoOyBmKyspIHtcbiAgICAgICAgbGV0IHRhc2tPblRoZVNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrT25UaGVTY3JlZW4uY2xhc3NOYW1lID0gJ3Rhc2snO1xuICAgICAgICBcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrQm94LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9ICd0YXNrX19jaGVja2JveCc7XG4gICAgICAgIHRhc2tPblRoZVNjcmVlbi5hcHBlbmRDaGlsZChjaGVja0JveCk7XG5cbiAgICAgICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5hcnJheU9mVG9kb3NbZl0ubmFtZTtcbiAgICAgICAgdGFza05hbWUuY2xhc3NOYW1lID0gJ3Rhc2tfX25hbWUnO1xuICAgICAgICB0YXNrT25UaGVTY3JlZW4uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0RmF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RGYXRoZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdDogJyArIHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdEZhdGhlci5jbGFzc05hbWUgPSAndGFza19fb3JpZ2luJztcbiAgICAgICAgdGFza09uVGhlU2NyZWVuLmFwcGVuZENoaWxkKHByb2plY3RGYXRoZXIpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuYXJyYXlPZlRvZG9zW2ZdLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAndGFza19fZGVzY3JpcHRpb24nO1xuICAgICAgICB0YXNrT25UaGVTY3JlZW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGlmKHByb2plY3QuYXJyYXlPZlRvZG9zW2ZdLnByaW9yaXR5ID09IDEpIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmQgPSAncmVkJztcbiAgICAgICAgaWYocHJvamVjdC5hcnJheU9mVG9kb3NbZl0ucHJpb3JpdHkgPT0gMikgY2hlY2tCb3guc3R5bGUuYmFja2dyb3VuZCA9ICdvcmFuZ2UnO1xuICAgICAgICBpZihwcm9qZWN0LmFycmF5T2ZUb2Rvc1tmXS5wcmlvcml0eSA9PSAzKSBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3llbGxvdyc7XG4gICAgICAgIGlmKHByb2plY3QuYXJyYXlPZlRvZG9zW2ZdLnByaW9yaXR5ID09IDApIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVGFzayhwcm9qZWN0LCBmKTtcbiAgICAgICAgICAgIGlmKCFpbmRleE9mVG9kYXlUYXNrKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQWxsVGFza3NJblByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihpbmRleE9mVG9kYXlUYXNrICYmIG9yaWdpbiA9PSAndXBjb21pbmcnKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVXBjb21pbmdUYXNrcygpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZGF5c1Rhc2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tPblRoZVNjcmVlbi5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcbiAgICAgICAgZGF0ZVBpY2tlci5jbGFzc05hbWUgPSAndGFza19fZGF0ZSc7XG4gICAgICAgIGRhdGVQaWNrZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0LmFycmF5T2ZUb2Rvc1tmXS5kYXRlO1xuXG4gICAgICAgIGlmKGluZGV4T2ZUb2RheVRhc2spIHtcbiAgICAgICAgICAgIGlmKGluZGV4T2ZUb2RheVRhc2sgPT0gZikgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmRDaGlsZCh0YXNrT25UaGVTY3JlZW4pO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFwcGVuZENoaWxkKHRhc2tPblRoZVNjcmVlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoIWluZGV4T2ZUb2RheVRhc2spIFRvZG9CdXR0b24ocHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlPZlByb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAocHJvamVjdC5uYW1lKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGlucHV0UHJvamVjdE5hbWUoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGlucHV0UHJvamVjdE5hbWUpO1xuICAgIFxuICAgIHZhciBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19idG4nLCAncHJvamVjdHNfX2J0bi0tY2xvc2UnKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoaW5wdXRGb3JQcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHN1Ym1pdEJ1dHRvbkZvclByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5wdXRQcm9qZWN0TmFtZSk7XG4gICAgfSk7XG4gICAgXG4gICAgdmFyIGlucHV0Rm9yUHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Rm9yUHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dEZvclByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19uYW1lLWlucHV0Jyk7XG4gICAgXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoaW5wdXRGb3JQcm9qZWN0TmFtZSk7XG4gICAgXG4gICAgdmFyIHN1Ym1pdEJ1dHRvbkZvclByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfX2J0bicsICdwcm9qZWN0c19fYnRuLS1zdWJtaXQnKTtcblxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b25Gb3JQcm9qZWN0TmFtZSk7XG4gICAgc3VibWl0QnV0dG9uRm9yUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSAnT2snO1xuXG4gICAgXG4gICAgc3VibWl0QnV0dG9uRm9yUHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gaW5wdXRGb3JQcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIGlmKG5hbWUgJiYgbmFtZS5sZW5ndGggPCAxNiAmJiAhY2hlY2tJZGVudGljYWxQcm9qZWN0KG5hbWUpKSB7XG4gICAgICAgICAgICBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChpbnB1dEZvclByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHN1Ym1pdEJ1dHRvbkZvclByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJykudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGlucHV0UHJvamVjdE5hbWUpO1xuICAgICAgICB9ZWxzZSBpZihjaGVja0lkZW50aWNhbFByb2plY3QobmFtZSkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZXMgc2hvdWxkIGJlIGRpZmZlcmVudCcpO1xuICAgICAgICAgICAgaW5wdXRGb3JQcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICB9ZWxzZSBpZihuYW1lLmxlbmd0aCA+PSAxNil7XG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCBuYW1lIHNob3VsZCBiZSBsZXNzIHRoYW4gMTYgY2hhcmFjdGVycycpO1xuICAgICAgICB9ZWxzZSBpZighbmFtZSl7XG4gICAgICAgICAgICBhbGVydCgnRW50ZXIgcHJvamVjdCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZGVudGljYWxQcm9qZWN0KG5hbWUpIHtcbiAgICAvLyBhcnJheU9mUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBuYW1lKTtcbiAgICBmb3IgKGxldCBpIGluIGFycmF5T2ZQcm9qZWN0cykge1xuICAgICAgICBpZihhcnJheU9mUHJvamVjdHNbaV0ubmFtZSA9PSBuYW1lKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKG5ld1Byb2plY3QsIG51bWJlck9mVGFzaykge1xuICAgIG5ld1Byb2plY3QuYXJyYXlPZlRvZG9zLnNwbGljZShudW1iZXJPZlRhc2ssIDEpOyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhcnJheU9mUHJvamVjdHMpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgYXJyYXlPZlByb2plY3RzID0gYXJyYXlPZlByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QgIT09IG5ld1Byb2plY3QpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlPZlByb2plY3RzKSk7XG5cbiAgICB1cGRhdGVQcm9qZWN0cygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZXhwb3J0IHtpbnB1dFByb2plY3ROYW1lLCBjcmVhdGVBbGxUYXNrc0luUHJvamVjdCwgYXJyYXlPZlByb2plY3RzfSIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2Rvc1wiO1xuaW1wb3J0IHsgY3JlYXRlQWxsVGFza3NJblByb2plY3QsIGFycmF5T2ZQcm9qZWN0cyB9IGZyb20gXCIuL3VwZGF0ZVByb2plY3RzRE9NXCI7XG5cbmZ1bmN0aW9uIFRvZG9CdXR0b24obmV3UHJvamVjdCkge1xuICAgIGxldCB0b2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbicpLmFwcGVuZENoaWxkKHRvZG9CdXR0b24pO1xuICAgIHRvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIHRvZG8nO1xuICAgIHRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ2NyZWF0ZS1idXR0b25fX2J0bic7XG5cbiAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVQb3B1cChuZXdQcm9qZWN0KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUG9wdXAobmV3UHJvamVjdCkge1xuICAgIC8vIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcbiAgICBwb3B1cC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICAgIFxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHBvcHVwKSB7XG4gICAgICAgICAgICBwb3B1cC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXREYXRhRnJvbUZvcm0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIikucGFyYW1ldGVyID0gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YUZyb21Gb3JtKGUpIHtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrbmFtZScpLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGxldCB0YXNrID0gVG9kbyhuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJhbWV0ZXIuYXJyYXlPZlRvZG9zLnB1c2godGFzayk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZQcm9qZWN0cykpO1xuXG4gICAgICAgIGxldCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcbiAgICAgICAgcG9wdXAuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDApJztcblxuICAgICAgICBjcmVhdGVBbGxUYXNrc0luUHJvamVjdChlLmN1cnJlbnRUYXJnZXQucGFyYW1ldGVyKTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdFbnRlciB0YXNrIG5hbWUnKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgVG9kb0J1dHRvbiB9IiwiZnVuY3Rpb24gVG9kbyhuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpe1xuICAgIHJldHVybntcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgfVxufVxuXG5leHBvcnQge1RvZG99OyIsImltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi91cGRhdGVUb2Rvc0RPTVwiO1xuaW1wb3J0IHsgaW5wdXRQcm9qZWN0TmFtZSB9IGZyb20gXCIuL3VwZGF0ZVByb2plY3RzRE9NXCI7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbnB1dFByb2plY3ROYW1lKTsiXSwibmFtZXMiOlsiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRoaXMiLCJhcnJheU9mVG9kb3MiLCJhcnJheU9mUHJvamVjdHMiLCJ1cGRhdGVQcm9qZWN0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiZm9yRWFjaCIsInByb2plY3RJbkFycmF5IiwiZGVsZXRlQnV0dG9uSW5kZXgiLCJwcm9qZWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRlbGV0ZVByb2plY3RCdXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwibmV3UHJvamVjdCIsImZpbHRlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlYXRlQWxsVGFza3NJblByb2plY3QiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRvZGF5c1Rhc2tzIiwidG9kYXlDb250YWluZXIiLCJ0b2RheSIsIkRhdGUiLCJkZCIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJ1cGRhdGVDdXJyZW50UHJvamVjdCIsImYiLCJkYXRlIiwiY3JlYXRlVXBjb21pbmdUYXNrcyIsInVwY29taW5nQ29udGFpbmVyIiwiaSIsImxlbmd0aCIsInN1YnN0ciIsImluZGV4T2ZUb2RheVRhc2siLCJvcmlnaW4iLCJ0YXNrT25UaGVTY3JlZW4iLCJjaGVja0JveCIsInRhc2tOYW1lIiwicHJvamVjdEZhdGhlciIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJzdHlsZSIsImJhY2tncm91bmQiLCJudW1iZXJPZlRhc2siLCJzcGxpY2UiLCJkYXRlUGlja2VyIiwiVG9kb0J1dHRvbiIsImNoZWNrSWRlbnRpY2FsUHJvamVjdCIsInRvZG9CdXR0b24iLCJwb3B1cCIsInRyYW5zZm9ybSIsImJvZHkiLCJldmVudCIsInRhcmdldCIsImdldERhdGFGcm9tRm9ybSIsInBhcmFtZXRlciIsImNyZWF0ZVBvcHVwIiwiZSIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJ0YXNrIiwiVG9kbyIsImN1cnJlbnRUYXJnZXQiLCJwdXNoIiwiYWxlcnQiLCJwYXJzZSIsImdldEl0ZW0iLCJpbmJveCIsInRhc2tJbnNpZGVJbmJveCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVJbmJveCIsImlucHV0UHJvamVjdE5hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvamVjdHNEaXYiLCJjbG9zZUJ1dHRvbiIsInJlbW92ZUNoaWxkIiwiaW5wdXRGb3JQcm9qZWN0TmFtZSIsInN1Ym1pdEJ1dHRvbkZvclByb2plY3ROYW1lIiwic2V0QXR0cmlidXRlIiwidGFza0luc2lkZVByb2plY3QiLCJjcmVhdGVQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==