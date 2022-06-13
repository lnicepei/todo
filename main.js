(()=>{"use strict";class e{constructor(e){this.name=e,this.arrayOfTodos=[]}}let t=[];function n(){document.querySelector(".projects").textContent="",t.forEach((e=>{let o=0,r=document.createElement("div");r.className="project",r.textContent=e.name;let c=document.createElement("button");c.classList.add("project__btn"),c.textContent="x",c.addEventListener("click",(()=>{var r;document.querySelector(".create-button").textContent="",r=e,t=t.filter((e=>e!==r)),localStorage.setItem("projects",JSON.stringify(t)),n(),document.querySelector(".content").textContent="",o=1})),r.addEventListener("click",(()=>{0==o&&a(e)})),r.appendChild(c),"Inbox"!==e.name&&document.querySelector(".projects").appendChild(r)}))}function o(){document.querySelector(".content").textContent="",document.querySelector(".create-button").textContent="";let e=document.createElement("div");e.className="today";let n=function(){let e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return e=o+"-"+n+"-"+t,e}();c("Today"),t.forEach((e=>{for(let t in e.arrayOfTodos)e.arrayOfTodos[t]&&e.arrayOfTodos[t].date==n&&a(e,t)})),document.querySelector(".today").appendChild(e)}function r(){document.querySelector(".content").textContent="",document.querySelector(".create-button").textContent="";let e=document.createElement("div");e.className="upcoming";let n=new Date,o=String(n.getDate()).padStart(2,"0"),r=String(n.getMonth()+1).padStart(2,"0"),d=n.getFullYear();n=d+"/"+r+"/"+o,c("Upcoming");for(let e in t)for(let n=1;n<t[e].arrayOfTodos.length;n++)t[e].arrayOfTodos[n].date.substr(0,4)>d&&a(t[e],n,"upcoming"),t[e].arrayOfTodos[n].date.substr(0,4)==d&&t[e].arrayOfTodos[n].date.substr(5,2)>r&&a(t[e],n,"upcoming"),t[e].arrayOfTodos[n].date.substr(0,4)==d&&t[e].arrayOfTodos[n].date.substr(5,2)==r&&t[e].arrayOfTodos[n].date.substr(8,2)>o&&a(t[e],n,"upcoming");document.querySelector(".upcoming").appendChild(e)}function a(e,n,d){n||(document.querySelector(".content").textContent="",document.querySelector(".create-button").textContent="",c(e));for(let c=1;c<e.arrayOfTodos.length;c++){let l=document.createElement("div");l.className="task";let s=document.createElement("div");s.textContent="",s.className="task__checkbox",l.appendChild(s);let i=document.createElement("div");i.textContent=e.arrayOfTodos[c].name,i.className="task__name",l.appendChild(i);let u=document.createElement("div");u.textContent="Project: "+e.name,u.className="task__origin",l.appendChild(u);let m=document.createElement("div");m.textContent=e.arrayOfTodos[c].description,m.className="task__description",l.appendChild(m),1==e.arrayOfTodos[c].priority&&(s.style.background="red"),2==e.arrayOfTodos[c].priority&&(s.style.background="orange"),3==e.arrayOfTodos[c].priority&&(s.style.background="yellow"),0==e.arrayOfTodos[c].priority&&(s.style.background="white"),s.addEventListener("click",(()=>{var l;l=c,e.arrayOfTodos.splice(l,1),localStorage.setItem("projects",JSON.stringify(t)),n?n&&"upcoming"==d?r():o():a(e)}));let p=document.createElement("div");l.appendChild(p),p.className="task__date",p.textContent=e.arrayOfTodos[c].date,n?n==c&&document.querySelector(".content").appendChild(l):document.querySelector(".content").appendChild(l)}n||l(e),localStorage.setItem("projects",JSON.stringify(t))}function c(e){e.name?document.querySelector(".project-name").textContent=e.name:document.querySelector(".project-name").textContent=e}function d(e){return t.filter((t=>t.name==e)).length>0}function l(e){let t=document.createElement("button");document.querySelector(".create-button").appendChild(t),t.textContent="Create todo",t.className="create-button__btn",t.addEventListener("click",(()=>{!function(e){let t=document.querySelector(".popup-container");t.style.transform="scale(1)",document.body.addEventListener("click",(function(e){e.target==t&&(t.style.transform="scale(0)")})),document.querySelector(".form__submit-button").addEventListener("click",s,!1),document.querySelector(".form__submit-button").parameter=e}(e)}))}function s(e){let n=document.getElementById("taskname").value,o=document.getElementById("description").value,r=document.getElementById("date").value,c=document.getElementById("priority").value;if(n){let d=function(e,t,n,o){return{name:e,description:t,date:n,priority:o}}(n,o,r,c);e.currentTarget.parameter.arrayOfTodos.push(d),localStorage.setItem("projects",JSON.stringify(t)),document.querySelector(".popup-container").style.transform="scale(0)",a(e.currentTarget.parameter)}else alert("Enter task name")}"projects"in localStorage&&(t=JSON.parse(localStorage.getItem("projects")||[])),function(){c("Inbox");let n=new e("Inbox");0==t.filter((e=>"Inbox"==e.name)).length&&t.push(n),l(n),localStorage.setItem("projects",JSON.stringify(t)),t.filter((e=>"Inbox"==e.name)).length>0?a(t[0]):a(n),document.querySelector(".inbox").addEventListener("click",(()=>{console.log(t),t.filter((e=>"Inbox"==e.name)).length>0?a(t[0]):a(n)}))}(),n(),document.querySelector(".today").addEventListener("click",o),document.querySelector(".upcoming").addEventListener("click",r),document.querySelector(".projects__btn").addEventListener("click",(function o(){this.removeEventListener("click",o);const r=document.querySelector(".projects"),a=document.createElement("button");a.classList.add("projects__btn","projects__btn--close"),a.textContent="x",a.addEventListener("click",(()=>{r.removeChild(c),r.removeChild(s),r.removeChild(a),this.addEventListener("click",o)}));const c=document.createElement("input");c.setAttribute("type","text"),c.classList.add("projects__name-input"),r.appendChild(c);const s=document.createElement("button");a.classList.add("projects__btn","projects__btn--submit"),r.appendChild(a),s.textContent="Ok",r.appendChild(s),s.addEventListener("click",(()=>{let a=c.value;a&&a.length<16&&!d(a)?(r.removeChild(c),r.removeChild(s),document.querySelector(".create-button").textContent="",document.querySelector(".project-name").textContent=a,function(o){let r=new e(o);t.push(r),document.querySelector(".content").textContent="";let a=l(r);if(r.arrayOfTodos.push(a),localStorage.setItem("projects",JSON.stringify(t)),"Inbox"==o)return r;n()}(a),this.addEventListener("click",o)):1==d(a)?(alert("Project names should be different"),c.value=""):a.length>=16?alert("Project name should be less than 16 characters"):a||alert("Enter project name")}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxVQUFVQyxJQUFJLGdCQUFpQix5QkFDM0NzRSxFQUFZN0QsWUFBWThELEdBQ3hCRyxFQUEyQm5GLFlBQWMsS0FFekMrRSxFQUFZN0QsWUFBWWlFLEdBR3hCQSxFQUEyQnpFLGlCQUFpQixTQUFTLEtBQ2pELElBQUlqQixFQUFPeUYsRUFBb0JqQixNQUU1QnhFLEdBQVFBLEVBQUs0QyxPQUFTLEtBQU9nQixFQUFzQjVELElBQ2xEc0YsRUFBWUUsWUFBWUMsR0FDeEJILEVBQVlFLFlBQVlFLEdBRXhCckYsU0FBU0MsY0FBYyxrQkFBa0JDLFlBQWMsR0FDdkRGLFNBQVNDLGNBQWMsaUJBQWlCQyxZQUFjUCxFQXRObEUsU0FBdUJBLEdBQ25CLElBQUlrQixFQUFhLElBQUlwQixFQUFRRSxHQUM3QkcsRUFBZ0J5RSxLQUFLMUQsR0FFckJiLFNBQVNDLGNBQWMsWUFBWUMsWUFBYyxHQUVqRCxJQUFJcUYsRUFBb0JqQyxFQUFXekMsR0FLbkMsR0FKQUEsRUFBV2hCLGFBQWEwRSxLQUFLZ0IsR0FFN0J4RSxhQUFhQyxRQUFRLFdBQVlDLEtBQUtDLFVBQVVwQixJQUVyQyxTQUFSSCxFQUFpQixPQUFPa0IsRUFFM0JkLElBMk1ReUYsQ0FBYzdGLEdBRWRDLEtBQUtnQixpQkFBaUIsUUFBU21FLElBQ0ssR0FBL0J4QixFQUFzQjVELElBQzNCNkUsTUFBTSxxQ0FDTlksRUFBb0JqQixNQUFRLElBQ3ZCeEUsRUFBSzRDLFFBQVUsR0FDcEJpQyxNQUFNLGtEQUNBN0UsR0FDTjZFLE1BQU0sNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNrYWdlLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3BhY2thZ2UvLi9zcmMvdXBkYXRlUHJvamVjdHNET00uanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS8uL3NyYy91cGRhdGVUb2Rvc0RPTS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLy4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3BhY2thZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hcnJheU9mVG9kb3MgPSBbXTtcbiAgICB9XG4gICAgXG4gICAgLy9mdW5jdGlvbnMgdG8gYWx0ZXIgdGFza3MgaW5zaWRlIGEgcHJvamVjdFxufVxuXG5leHBvcnQge1Byb2plY3R9OyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgVG9kb0J1dHRvbiB9IGZyb20gXCIuL3VwZGF0ZVRvZG9zRE9NXCI7XG5pbXBvcnQgeyBmb3JtYXREdXJhdGlvbiwgaW50ZXJ2YWxUb0R1cmF0aW9uIH0gZnJvbSAnZGF0ZS1mbnMnO1xubGV0IGFycmF5T2ZQcm9qZWN0cyA9IFtdO1xuKGZ1bmN0aW9uIGNoZWNrUHJvamVjdHNPblJlbG9hZCgpIHtcbiAgICBpZigncHJvamVjdHMnIGluIGxvY2FsU3RvcmFnZSl7XG4gICAgICAgIGFycmF5T2ZQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgfHwgW10pO1xuICAgIH1cblxuICAgIGNyZWF0ZUluYm94KCk7XG4gICAgXG4gICAgdXBkYXRlUHJvamVjdHMoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvZGF5c1Rhc2tzKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBjb21pbmcnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVVwY29taW5nVGFza3MpO1xufSkoKTtcbmZ1bmN0aW9uIGNyZWF0ZUluYm94KCkge1xuICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KCdJbmJveCcpOyAvLyBVcGRhdGVzIGN1cnJlbnQgd29ya2luZyBwcm9qZWN0IFxuICAgIFxuICAgIGxldCBpbmJveCA9IG5ldyBQcm9qZWN0KCdJbmJveCcpO1xuICAgIGlmKGFycmF5T2ZQcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT0gJ0luYm94JykubGVuZ3RoID09IDApIGFycmF5T2ZQcm9qZWN0cy5wdXNoKGluYm94KTtcbiAgICBcbiAgICBUb2RvQnV0dG9uKGluYm94KTtcbiAgICAvLyBpbmJveC5hcnJheU9mVG9kb3MucHVzaCh0YXNrSW5zaWRlSW5ib3gpO1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZQcm9qZWN0cykpO1xuICAgIChhcnJheU9mUHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09ICdJbmJveCcpLmxlbmd0aCA+IDApID8gY3JlYXRlQWxsVGFza3NJblByb2plY3QoYXJyYXlPZlByb2plY3RzWzBdKSA6IGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGluYm94KTtcbiAgICBcbiAgICAvLyBoZXJlIGlzIHRoZSB0cmljay4gdGhlIGluYm94IGNyZWF0ZWQgZm9yIHRoZSBzZWNvbmQgdGltZSBkb2VzIG5vdCBoYXZlIGFueSB0YXNrc1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9mUHJvamVjdHMpO1xuICAgICAgICAoYXJyYXlPZlByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSAnSW5ib3gnKS5sZW5ndGggPiAwKSA/IGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGFycmF5T2ZQcm9qZWN0c1swXSkgOiBjcmVhdGVBbGxUYXNrc0luUHJvamVjdChpbmJveCk7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBhcnJheU9mUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCB0YXNrSW5zaWRlUHJvamVjdCA9IFRvZG9CdXR0b24obmV3UHJvamVjdCk7XG4gICAgbmV3UHJvamVjdC5hcnJheU9mVG9kb3MucHVzaCh0YXNrSW5zaWRlUHJvamVjdCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhcnJheU9mUHJvamVjdHMpKTtcblxuICAgIGlmKG5hbWUgPT0gJ0luYm94JykgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgICAgIFxuICAgIHVwZGF0ZVByb2plY3RzKCk7XG59XG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0cygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgIFxuICAgIGFycmF5T2ZQcm9qZWN0cy5mb3JFYWNoKHByb2plY3RJbkFycmF5ID0+IHtcbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbkluZGV4ID0gMDtcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc05hbWUgPSAncHJvamVjdCc7XG4gICAgICAgICAgICBcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RJbkFycmF5Lm5hbWU7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfX2J0bicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ3gnO1xuICAgICAgICBcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJykudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdEluQXJyYXkpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uSW5kZXggPSAxO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihkZWxldGVCdXR0b25JbmRleCA9PSAwKSBjcmVhdGVBbGxUYXNrc0luUHJvamVjdChwcm9qZWN0SW5BcnJheSk7XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIGlmKHByb2plY3RJbkFycmF5Lm5hbWUgIT09ICdJbmJveCcpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgdG9kYXkgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcblxuICAgIHJldHVybiB0b2RheTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRvZGF5c1Rhc2tzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykudGV4dENvbnRlbnQgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbicpLnRleHRDb250ZW50ID0gJyc7XG4gICAgXG4gICAgbGV0IHRvZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlDb250YWluZXIuY2xhc3NOYW1lID0gJ3RvZGF5JztcblxuICAgIGxldCB0b2RheSA9IGdldERhdGUoKTtcbiAgICB1cGRhdGVDdXJyZW50UHJvamVjdCgnVG9kYXknKTtcblxuICAgIGFycmF5T2ZQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBmb3IgKGxldCBmIGluIHByb2plY3QuYXJyYXlPZlRvZG9zKSB7XG4gICAgICAgICAgICBpZihwcm9qZWN0LmFycmF5T2ZUb2Rvc1tmXSl7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdC5hcnJheU9mVG9kb3NbZl0uZGF0ZSA9PSB0b2RheSkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBbGxUYXNrc0luUHJvamVjdChwcm9qZWN0LCBmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpLmFwcGVuZENoaWxkKHRvZGF5Q29udGFpbmVyKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVVwY29taW5nVGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJykudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCB1cGNvbWluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVwY29taW5nQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd1cGNvbWluZyc7XG5cbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICB0b2RheSA9IHl5eXkgKyAnLycgKyBtbSArICcvJyArIGRkOyAgIFxuXG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QoJ1VwY29taW5nJyk7XG5cbiAgICBmb3IobGV0IGkgaW4gYXJyYXlPZlByb2plY3RzKSB7XG4gICAgICAgIGZvcihsZXQgZiA9IDE7IGYgPCBhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zLmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgICBpZihhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zW2ZdLmRhdGUuc3Vic3RyKDAsIDQpID4geXl5eSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGFycmF5T2ZQcm9qZWN0c1tpXSwgZiwgJ3VwY29taW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zW2ZdLmRhdGUuc3Vic3RyKDAsIDQpID09IHl5eXkgJiZcbiAgICAgICAgICAgICAgIGFycmF5T2ZQcm9qZWN0c1tpXS5hcnJheU9mVG9kb3NbZl0uZGF0ZS5zdWJzdHIoNSwgMikgPiBtbSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGFycmF5T2ZQcm9qZWN0c1tpXSwgZiwgJ3VwY29taW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zW2ZdLmRhdGUuc3Vic3RyKDAsIDQpID09IHl5eXkgJiZcbiAgICAgICAgICAgICAgIGFycmF5T2ZQcm9qZWN0c1tpXS5hcnJheU9mVG9kb3NbZl0uZGF0ZS5zdWJzdHIoNSwgMikgPT0gbW0gJiZcbiAgICAgICAgICAgICAgIGFycmF5T2ZQcm9qZWN0c1tpXS5hcnJheU9mVG9kb3NbZl0uZGF0ZS5zdWJzdHIoOCwgMikgPiBkZCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGFycmF5T2ZQcm9qZWN0c1tpXSwgZiwgJ3VwY29taW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwY29taW5nJykuYXBwZW5kQ2hpbGQodXBjb21pbmdDb250YWluZXIpO1xufVxuZnVuY3Rpb24gY3JlYXRlQWxsVGFza3NJblByb2plY3QocHJvamVjdCwgaW5kZXhPZlRvZGF5VGFzaywgb3JpZ2luKSB7XG4gICAgaWYgKCFpbmRleE9mVG9kYXlUYXNrKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbicpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgIH1cblxuICAgIGZvcihsZXQgZiA9IDE7IGYgPCBwcm9qZWN0LmFycmF5T2ZUb2Rvcy5sZW5ndGg7IGYrKykge1xuICAgICAgICBsZXQgdGFza09uVGhlU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tPblRoZVNjcmVlbi5jbGFzc05hbWUgPSAndGFzayc7XG5cbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrQm94LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9ICd0YXNrX19jaGVja2JveCc7XG4gICAgICAgIHRhc2tPblRoZVNjcmVlbi5hcHBlbmRDaGlsZChjaGVja0JveCk7XG5cbiAgICAgICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5hcnJheU9mVG9kb3NbZl0ubmFtZTtcbiAgICAgICAgdGFza05hbWUuY2xhc3NOYW1lID0gJ3Rhc2tfX25hbWUnO1xuICAgICAgICB0YXNrT25UaGVTY3JlZW4uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gICAgICAgIGxldCB0YXNrT3JpZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tPcmlnaW4udGV4dENvbnRlbnQgPSAnUHJvamVjdDogJyArIHByb2plY3QubmFtZTtcbiAgICAgICAgdGFza09yaWdpbi5jbGFzc05hbWUgPSAndGFza19fb3JpZ2luJztcbiAgICAgICAgdGFza09uVGhlU2NyZWVuLmFwcGVuZENoaWxkKHRhc2tPcmlnaW4pO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuYXJyYXlPZlRvZG9zW2ZdLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAndGFza19fZGVzY3JpcHRpb24nO1xuICAgICAgICB0YXNrT25UaGVTY3JlZW4uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGlmKHByb2plY3QuYXJyYXlPZlRvZG9zW2ZdLnByaW9yaXR5ID09IDEpIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmQgPSAncmVkJztcbiAgICAgICAgaWYocHJvamVjdC5hcnJheU9mVG9kb3NbZl0ucHJpb3JpdHkgPT0gMikgY2hlY2tCb3guc3R5bGUuYmFja2dyb3VuZCA9ICdvcmFuZ2UnO1xuICAgICAgICBpZihwcm9qZWN0LmFycmF5T2ZUb2Rvc1tmXS5wcmlvcml0eSA9PSAzKSBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3llbGxvdyc7XG4gICAgICAgIGlmKHByb2plY3QuYXJyYXlPZlRvZG9zW2ZdLnByaW9yaXR5ID09IDApIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVGFzayhwcm9qZWN0LCBmKTtcbiAgICAgICAgICAgIGlmKCFpbmRleE9mVG9kYXlUYXNrKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQWxsVGFza3NJblByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihpbmRleE9mVG9kYXlUYXNrICYmIG9yaWdpbiA9PSAndXBjb21pbmcnKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVXBjb21pbmdUYXNrcygpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZGF5c1Rhc2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tPblRoZVNjcmVlbi5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcbiAgICAgICAgZGF0ZVBpY2tlci5jbGFzc05hbWUgPSAndGFza19fZGF0ZSc7XG4gICAgICAgIGRhdGVQaWNrZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0LmFycmF5T2ZUb2Rvc1tmXS5kYXRlO1xuXG4gICAgICAgIGlmKGluZGV4T2ZUb2RheVRhc2spIHtcbiAgICAgICAgICAgIGlmKGluZGV4T2ZUb2RheVRhc2sgPT0gZikgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmRDaGlsZCh0YXNrT25UaGVTY3JlZW4pO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFwcGVuZENoaWxkKHRhc2tPblRoZVNjcmVlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZighaW5kZXhPZlRvZGF5VGFzaykgVG9kb0J1dHRvbihwcm9qZWN0KTtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhcnJheU9mUHJvamVjdHMpKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAocHJvamVjdC5uYW1lKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG59XG5mdW5jdGlvbiBpbnB1dFByb2plY3ROYW1lKCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbnB1dFByb2plY3ROYW1lKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c19fYnRuJywgJ3Byb2plY3RzX19idG4tLWNsb3NlJyk7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG5cbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoaW5wdXRGb3JQcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHN1Ym1pdEJ1dHRvbkZvclByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5wdXRQcm9qZWN0TmFtZSk7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgaW5wdXRGb3JQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRGb3JQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGlucHV0Rm9yUHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfX25hbWUtaW5wdXQnKTtcbiAgICBcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChpbnB1dEZvclByb2plY3ROYW1lKTtcbiAgICBcbiAgICBjb25zdCBzdWJtaXRCdXR0b25Gb3JQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19idG4nLCAncHJvamVjdHNfX2J0bi0tc3VibWl0Jyk7XG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIHN1Ym1pdEJ1dHRvbkZvclByb2plY3ROYW1lLnRleHRDb250ZW50ID0gJ09rJztcblxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbkZvclByb2plY3ROYW1lKTtcbiAgICBcbiAgICBcbiAgICBzdWJtaXRCdXR0b25Gb3JQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBpbnB1dEZvclByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgaWYobmFtZSAmJiBuYW1lLmxlbmd0aCA8IDE2ICYmICFjaGVja0lkZW50aWNhbFByb2plY3QobmFtZSkpIHtcbiAgICAgICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKGlucHV0Rm9yUHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoc3VibWl0QnV0dG9uRm9yUHJvamVjdE5hbWUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbicpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5wdXRQcm9qZWN0TmFtZSk7XG4gICAgICAgIH1lbHNlIGlmKGNoZWNrSWRlbnRpY2FsUHJvamVjdChuYW1lKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCBuYW1lcyBzaG91bGQgYmUgZGlmZmVyZW50Jyk7XG4gICAgICAgICAgICBpbnB1dEZvclByb2plY3ROYW1lLnZhbHVlID0gJyc7XG4gICAgICAgIH1lbHNlIGlmKG5hbWUubGVuZ3RoID49IDE2KXtcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgc2hvdWxkIGJlIGxlc3MgdGhhbiAxNiBjaGFyYWN0ZXJzJyk7XG4gICAgICAgIH1lbHNlIGlmKCFuYW1lKXtcbiAgICAgICAgICAgIGFsZXJ0KCdFbnRlciBwcm9qZWN0IG5hbWUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY2hlY2tJZGVudGljYWxQcm9qZWN0KG5hbWUpIHtcbiAgICBpZihhcnJheU9mUHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09IG5hbWUpLmxlbmd0aCA+IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sobmV3UHJvamVjdCwgbnVtYmVyT2ZUYXNrKSB7XG4gICAgbmV3UHJvamVjdC5hcnJheU9mVG9kb3Muc3BsaWNlKG51bWJlck9mVGFzaywgMSk7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZQcm9qZWN0cykpO1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgYXJyYXlPZlByb2plY3RzID0gYXJyYXlPZlByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QgIT09IG5ld1Byb2plY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZQcm9qZWN0cykpO1xuICAgIFxuICAgIHVwZGF0ZVByb2plY3RzKCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLnRleHRDb250ZW50ID0gJyc7XG59XG5leHBvcnQge2lucHV0UHJvamVjdE5hbWUsIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0LCBhcnJheU9mUHJvamVjdHN9IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9zXCI7XG5pbXBvcnQgeyBjcmVhdGVBbGxUYXNrc0luUHJvamVjdCwgYXJyYXlPZlByb2plY3RzIH0gZnJvbSBcIi4vdXBkYXRlUHJvamVjdHNET01cIjtcblxuZnVuY3Rpb24gVG9kb0J1dHRvbihuZXdQcm9qZWN0KSB7XG4gICAgbGV0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJykuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG4gICAgdG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgdG9kbyc7XG4gICAgdG9kb0J1dHRvbi5jbGFzc05hbWUgPSAnY3JlYXRlLWJ1dHRvbl9fYnRuJztcblxuICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVBvcHVwKG5ld1Byb2plY3QpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3B1cChuZXdQcm9qZWN0KSB7XG4gICAgLy8gcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICAgIHBvcHVwLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gcG9wdXApIHtcbiAgICAgICAgICAgIHBvcHVwLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwKSc7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3N1Ym1pdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldERhdGFGcm9tRm9ybSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fc3VibWl0LWJ1dHRvblwiKS5wYXJhbWV0ZXIgPSBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbUZvcm0oZSkge1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tuYW1lJykudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBUb2RvKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSlcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmFtZXRlci5hcnJheU9mVG9kb3MucHVzaCh0YXNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlPZlByb2plY3RzKSk7XG5cbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICAgICAgICBwb3B1cC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuXG4gICAgICAgIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGUuY3VycmVudFRhcmdldC5wYXJhbWV0ZXIpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgYWxlcnQoJ0VudGVyIHRhc2sgbmFtZScpO1xuICAgIH1cblxufVxuXG5leHBvcnQgeyBUb2RvQnV0dG9uIH0iLCJmdW5jdGlvbiBUb2RvKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSl7XG4gICAgcmV0dXJue1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICB9XG59XG5cbmV4cG9ydCB7VG9kb307IiwiaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3VwZGF0ZVRvZG9zRE9NXCI7XG5pbXBvcnQgeyBpbnB1dFByb2plY3ROYW1lIH0gZnJvbSBcIi4vdXBkYXRlUHJvamVjdHNET01cIjtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGlucHV0UHJvamVjdE5hbWUpOyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGhpcyIsImFycmF5T2ZUb2RvcyIsImFycmF5T2ZQcm9qZWN0cyIsInVwZGF0ZVByb2plY3RzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJmb3JFYWNoIiwicHJvamVjdEluQXJyYXkiLCJkZWxldGVCdXR0b25JbmRleCIsInByb2plY3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGVsZXRlUHJvamVjdEJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdQcm9qZWN0IiwiZmlsdGVyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVBbGxUYXNrc0luUHJvamVjdCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVG9kYXlzVGFza3MiLCJ0b2RheUNvbnRhaW5lciIsInRvZGF5IiwiRGF0ZSIsImRkIiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInVwZGF0ZUN1cnJlbnRQcm9qZWN0IiwiZiIsImRhdGUiLCJjcmVhdGVVcGNvbWluZ1Rhc2tzIiwidXBjb21pbmdDb250YWluZXIiLCJpIiwibGVuZ3RoIiwic3Vic3RyIiwiaW5kZXhPZlRvZGF5VGFzayIsIm9yaWdpbiIsInRhc2tPblRoZVNjcmVlbiIsImNoZWNrQm94IiwidGFza05hbWUiLCJ0YXNrT3JpZ2luIiwiZGVzY3JpcHRpb24iLCJwcmlvcml0eSIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm51bWJlck9mVGFzayIsInNwbGljZSIsImRhdGVQaWNrZXIiLCJUb2RvQnV0dG9uIiwiY2hlY2tJZGVudGljYWxQcm9qZWN0IiwidG9kb0J1dHRvbiIsInBvcHVwIiwidHJhbnNmb3JtIiwiYm9keSIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0RGF0YUZyb21Gb3JtIiwicGFyYW1ldGVyIiwiY3JlYXRlUG9wdXAiLCJlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInRhc2siLCJUb2RvIiwiY3VycmVudFRhcmdldCIsInB1c2giLCJhbGVydCIsInBhcnNlIiwiZ2V0SXRlbSIsImluYm94IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUluYm94IiwiaW5wdXRQcm9qZWN0TmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcm9qZWN0c0RpdiIsImNsb3NlQnV0dG9uIiwicmVtb3ZlQ2hpbGQiLCJpbnB1dEZvclByb2plY3ROYW1lIiwic3VibWl0QnV0dG9uRm9yUHJvamVjdE5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJ0YXNrSW5zaWRlUHJvamVjdCIsImNyZWF0ZVByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9