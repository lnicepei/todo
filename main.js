(()=>{"use strict";class e{constructor(e){this.name=e,this.arrayOfTodos=[]}}let t=[];function n(n){let r=new e(n);t.push(r),document.querySelector(".content").textContent="";let c=s(r);if(r.arrayOfTodos.push(c),"Inbox"!==n&&localStorage.setItem("projects",JSON.stringify(t)),"Inbox"==n)return r;o()}function o(){document.querySelector(".projects").textContent="",t.forEach((e=>{let n=document.createElement("div");n.className="project",n.textContent=e.name;let r=document.createElement("button");r.classList.add("project__btn"),r.textContent="x",r.addEventListener("click",(()=>{!function(e){for(let n=0;n<t.length;n++)t[n]==e&&t.splice(n,1);localStorage.setItem("projects",JSON.stringify(t)),document.querySelector(".content").textContent="",document.querySelector(".create-button").textContent="",document.querySelector(".project-name").textContent="",o()}(e)})),n.addEventListener("click",(()=>{a(e)})),n.appendChild(r),"Inbox"!==e.name&&document.querySelector(".projects").appendChild(n)}))}function r(){document.querySelector(".content").textContent="",document.querySelector(".create-button").textContent="";let e=document.createElement("div");e.className="today";let n=function(){let e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return e=o+"-"+n+"-"+t,e}();d("Today");for(let e in t)for(let o=1;o<t[e].arrayOfTodos.length;o++)t[e].arrayOfTodos[o].date==n&&a(t[e],o);document.querySelector(".today").appendChild(e)}function c(){document.querySelector(".content").textContent="",document.querySelector(".create-button").textContent="";let e=document.createElement("div");e.className="upcoming";let n=new Date,o=String(n.getDate()).padStart(2,"0"),r=String(n.getMonth()+1).padStart(2,"0"),c=n.getFullYear();n=c+"/"+r+"/"+o,d("Upcoming");for(let e in t)for(let n=1;n<t[e].arrayOfTodos.length;n++)t[e].arrayOfTodos[n].date.substr(0,4)>c&&a(t[e],n,"upcoming"),t[e].arrayOfTodos[n].date.substr(0,4)==c&&t[e].arrayOfTodos[n].date.substr(5,2)>r&&a(t[e],n,"upcoming"),t[e].arrayOfTodos[n].date.substr(0,4)==c&&t[e].arrayOfTodos[n].date.substr(5,2)==r&&t[e].arrayOfTodos[n].date.substr(8,2)>o&&a(t[e],n,"upcoming");document.querySelector(".upcoming").appendChild(e)}function a(e,n,o){n||(document.querySelector(".content").textContent="",document.querySelector(".create-button").textContent="",d(e));for(let d=1;d<e.arrayOfTodos.length;d++){let l=document.createElement("div");l.className="task";let s=document.createElement("div");s.textContent="",s.className="checkbox",l.appendChild(s);let u=document.createElement("div");u.textContent=e.arrayOfTodos[d].name,u.className="taskname",l.appendChild(u);let i=document.createElement("div");i.textContent="Project: "+e.name,i.className="father-project",l.appendChild(i);let m=document.createElement("div");m.textContent=e.arrayOfTodos[d].description,m.className="description",l.appendChild(m),1==e.arrayOfTodos[d].priority&&(s.style.background="red"),2==e.arrayOfTodos[d].priority&&(s.style.background="orange"),3==e.arrayOfTodos[d].priority&&(s.style.background="yellow"),0==e.arrayOfTodos[d].priority&&(s.style.background="white"),s.addEventListener("click",(()=>{var l;l=d,e.arrayOfTodos.splice(l,1),localStorage.setItem("projects",JSON.stringify(t)),n?n&&"upcoming"==o?c():r():a(e)}));let p=document.createElement("div");l.appendChild(p),p.className="date",p.textContent=e.arrayOfTodos[d].date,n?n==d&&document.querySelector(".content").appendChild(l):document.querySelector(".content").appendChild(l)}n||s(e),localStorage.setItem("projects",JSON.stringify(t))}function d(e){e.name?document.querySelector(".project-name").textContent=e.name:document.querySelector(".project-name").textContent=e}function l(e){return t.forEach((t=>{if(t.name==e)return!0})),!1}function s(e){let t=document.createElement("button");document.querySelector(".create-button").appendChild(t),t.textContent="Create todo",t.className="create-button__btn",t.addEventListener("click",(()=>{!function(e){let t=document.querySelector(".popup-container");t.style.transform="scale(1)",document.body.addEventListener("click",(function(e){e.target==t&&(t.style.transform="scale(0)")})),document.querySelector(".submit-button").addEventListener("click",u,!1),document.querySelector(".submit-button").parameter=e}(e)}))}function u(e){let n=document.getElementById("taskname").value,o=document.getElementById("description").value,r=document.getElementById("date").value,c=document.getElementById("priority").value;if(n){let d=function(e,t,n,o){return{name:e,description:t,date:n,priority:o}}(n,o,r,c);e.currentTarget.parameter.arrayOfTodos.push(d),localStorage.setItem("projects",JSON.stringify(t)),document.querySelector(".popup-container").style.transform="scale(0)",a(e.currentTarget.parameter)}else alert("Enter task name")}console.log(t),"projects"in localStorage&&(t=JSON.parse(localStorage.getItem("projects")||[])),function(){d("Inbox"),l();let e=n("Inbox");document.querySelector(".inbox").addEventListener("click",(()=>{a(e)}))}(),o(),document.querySelector(".today").addEventListener("click",r),document.querySelector(".upcoming").addEventListener("click",c),document.querySelector(".projects__btn").addEventListener("click",(function e(){this.removeEventListener("click",e);var t=document.querySelector(".projects");let o=document.createElement("button");o.classList.add("projects__btn","projects__btn--close"),o.textContent="x",o.addEventListener("click",(()=>{t.removeChild(r),t.removeChild(c),t.removeChild(o),this.addEventListener("click",e)}));var r=document.createElement("input");r.setAttribute("type","text"),r.classList.add("projects__name-input"),t.appendChild(r);var c=document.createElement("button");o.classList.add("projects__btn","projects__btn--submit"),t.appendChild(o),t.appendChild(c),c.textContent="Ok",c.addEventListener("click",(()=>{let o=r.value;o&&o.length<16&&!l(o)?(t.removeChild(r),t.removeChild(c),document.querySelector(".create-button").textContent="",document.querySelector(".project-name").textContent=o,n(o),this.addEventListener("click",e)):1==l(o)?(alert("Project names should be different"),r.value=""):o.length>=16?alert("Project name should be less than 16 characters"):o||alert("Enter project name")}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QytELEVBQVl4RCxZQUFZMkQsR0FFeEIsSUFBSUMsRUFBNkJwRixTQUFTYSxjQUFjLFVBQ3hEb0UsRUFBWWpFLFVBQVVDLElBQUksZ0JBQWlCLHlCQUUzQytELEVBQVl4RCxZQUFZeUQsR0FDeEJELEVBQVl4RCxZQUFZNEQsR0FDeEJBLEVBQTJCbEYsWUFBYyxLQUd6Q2tGLEVBQTJCbEUsaUJBQWlCLFNBQVMsS0FDakQsSUFBSXpCLEVBQU8wRixFQUFvQmhCLE1BRTVCMUUsR0FBUUEsRUFBSzJCLE9BQVMsS0FBT21DLEVBQXNCOUQsSUFDbER1RixFQUFZRSxZQUFZQyxHQUN4QkgsRUFBWUUsWUFBWUUsR0FDeEJwRixTQUFTQyxjQUFjLGtCQUFrQkMsWUFBYyxHQUN2REYsU0FBU0MsY0FBYyxpQkFBaUJDLFlBQWNULEVBQ3RESSxFQUFjSixHQUNkQyxLQUFLd0IsaUJBQWlCLFFBQVM0RCxJQUNLLEdBQS9CdkIsRUFBc0I5RCxJQUMzQjhFLE1BQU0scUNBQ05ZLEVBQW9CaEIsTUFBUSxJQUN2QjFFLEVBQUsyQixRQUFVLEdBQ3BCbUQsTUFBTSxrREFDQTlFLEdBQ044RSxNQUFNLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFja2FnZS8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLy4vc3JjL3VwZGF0ZVByb2plY3RzRE9NLmpzIiwid2VicGFjazovL3BhY2thZ2UvLi9zcmMvdXBkYXRlVG9kb3NET00uanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXJyYXlPZlRvZG9zID0gW107XG4gICAgfVxuICAgIFxuICAgIC8vZnVuY3Rpb25zIHRvIGFsdGVyIHRhc2tzIGluc2lkZSBhIHByb2plY3Rcbn1cblxuZXhwb3J0IHtQcm9qZWN0fTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IFRvZG9CdXR0b24gfSBmcm9tIFwiLi91cGRhdGVUb2Rvc0RPTVwiO1xuXG5sZXQgYXJyYXlPZlByb2plY3RzID0gW107XG5jb25zb2xlLmxvZyhhcnJheU9mUHJvamVjdHMpO1xuXG4oZnVuY3Rpb24gY2hlY2tQcm9qZWN0c09uUmVsb2FkKCkge1xuICAgIGlmKCdwcm9qZWN0cycgaW4gbG9jYWxTdG9yYWdlKXtcbiAgICAgICAgYXJyYXlPZlByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSB8fCBbXSk7XG4gICAgfWVsc2V7XG4gICAgfVxuICAgIGNyZWF0ZUluYm94KCk7XG4gICAgdXBkYXRlUHJvamVjdHMoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvZGF5c1Rhc2tzKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBjb21pbmcnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVVwY29taW5nVGFza3MpO1xufSkoKTtcblxuZnVuY3Rpb24gY3JlYXRlSW5ib3goKSB7XG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QoJ0luYm94Jyk7IC8vIFVwZGF0ZXMgY3VycmVudCB3b3JraW5nIHByb2plY3QgXG5cbiAgICBpZiAoY2hlY2tJZGVudGljYWxQcm9qZWN0KCkpIHtcbiAgICB9XG4gICAgbGV0IGluYm94ID0gY3JlYXRlUHJvamVjdCgnSW5ib3gnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlQWxsVGFza3NJblByb2plY3QoaW5ib3gpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBhcnJheU9mUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLnRleHRDb250ZW50ID0gJyc7XG4gICAgXG4gICAgbGV0IHRhc2tJbnNpZGVQcm9qZWN0ID0gVG9kb0J1dHRvbihuZXdQcm9qZWN0KTtcbiAgICBuZXdQcm9qZWN0LmFycmF5T2ZUb2Rvcy5wdXNoKHRhc2tJbnNpZGVQcm9qZWN0KTtcbiAgICBcbiAgICBpZihuYW1lICE9PSAnSW5ib3gnKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhcnJheU9mUHJvamVjdHMpKTtcblxuICAgIGlmKG5hbWUgPT0gJ0luYm94JykgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgICAgIFxuICAgIHVwZGF0ZVByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLnRleHRDb250ZW50ID0gJyc7XG4gICAgYXJyYXlPZlByb2plY3RzLmZvckVhY2gocHJvamVjdEluQXJyYXkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcbiAgICAgICAgICAgIFxuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdEluQXJyYXkubmFtZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdF9fYnRuJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgICAgIFxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SW5BcnJheSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KHByb2plY3RJbkFycmF5KTtcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgaWYocHJvamVjdEluQXJyYXkubmFtZSAhPT0gJ0luYm94Jyl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgdG9kYXkgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcblxuICAgIHJldHVybiB0b2RheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kYXlzVGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJykudGV4dENvbnRlbnQgPSAnJztcbiAgICBsZXQgdG9kYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheUNvbnRhaW5lci5jbGFzc05hbWUgPSAndG9kYXknO1xuXG4gICAgbGV0IHRvZGF5ID0gZ2V0RGF0ZSgpO1xuXG4gICAgbGV0IGluZGV4Rm9yQWxsVGFza3MgPSAwO1xuXG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QoJ1RvZGF5Jyk7XG4gICBcbiAgICAvLyBmb3IobGV0IGkgaW4gYXJyYXlPZlByb2plY3RzKSB7XG4gICAgLy8gICAgIGFycmF5T2ZQcm9qZWN0c1tpXS5hcnJheU9mVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAvLyAgICAgICAgIGlmKHRvZG8pIHtcbiAgICAvLyAgICAgICAgICAgICBpZih0b2RvLmRhdGUgPT0gdG9kYXkpIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGFycmF5T2ZQcm9qZWN0c1tpXSwgaW5kZXhGb3JBbGxUYXNrcyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpbmRleEZvckFsbFRhc2tzKys7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgZm9yKGxldCBpIGluIGFycmF5T2ZQcm9qZWN0cykge1xuICAgICAgICBmb3IobGV0IGYgPSAxOyBmIDwgYXJyYXlPZlByb2plY3RzW2ldLmFycmF5T2ZUb2Rvcy5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgaWYoYXJyYXlPZlByb2plY3RzW2ldLmFycmF5T2ZUb2Rvc1tmXS5kYXRlID09IHRvZGF5KSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQWxsVGFza3NJblByb2plY3QoYXJyYXlPZlByb2plY3RzW2ldLCBmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKS5hcHBlbmRDaGlsZCh0b2RheUNvbnRhaW5lcik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVVcGNvbWluZ1Rhc2tzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykudGV4dENvbnRlbnQgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbicpLnRleHRDb250ZW50ID0gJyc7XG4gICAgbGV0IHVwY29taW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXBjb21pbmdDb250YWluZXIuY2xhc3NOYW1lID0gJ3VwY29taW5nJztcblxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgdG9kYXkgPSB5eXl5ICsgJy8nICsgbW0gKyAnLycgKyBkZDsgICBcblxuICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KCdVcGNvbWluZycpO1xuXG4gICAgZm9yKGxldCBpIGluIGFycmF5T2ZQcm9qZWN0cykge1xuICAgICAgICBmb3IobGV0IGYgPSAxOyBmIDwgYXJyYXlPZlByb2plY3RzW2ldLmFycmF5T2ZUb2Rvcy5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgaWYoYXJyYXlPZlByb2plY3RzW2ldLmFycmF5T2ZUb2Rvc1tmXS5kYXRlLnN1YnN0cigwLCA0KSA+IHl5eXkpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVBbGxUYXNrc0luUHJvamVjdChhcnJheU9mUHJvamVjdHNbaV0sIGYsICd1cGNvbWluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoYXJyYXlPZlByb2plY3RzW2ldLmFycmF5T2ZUb2Rvc1tmXS5kYXRlLnN1YnN0cigwLCA0KSA9PSB5eXl5ICYmXG4gICAgICAgICAgICAgICBhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zW2ZdLmRhdGUuc3Vic3RyKDUsIDIpID4gbW0pIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVBbGxUYXNrc0luUHJvamVjdChhcnJheU9mUHJvamVjdHNbaV0sIGYsICd1cGNvbWluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoYXJyYXlPZlByb2plY3RzW2ldLmFycmF5T2ZUb2Rvc1tmXS5kYXRlLnN1YnN0cigwLCA0KSA9PSB5eXl5ICYmXG4gICAgICAgICAgICAgICBhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zW2ZdLmRhdGUuc3Vic3RyKDUsIDIpID09IG1tICYmXG4gICAgICAgICAgICAgICBhcnJheU9mUHJvamVjdHNbaV0uYXJyYXlPZlRvZG9zW2ZdLmRhdGUuc3Vic3RyKDgsIDIpID4gZGQpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVBbGxUYXNrc0luUHJvamVjdChhcnJheU9mUHJvamVjdHNbaV0sIGYsICd1cGNvbWluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwY29taW5nJykuYXBwZW5kQ2hpbGQodXBjb21pbmdDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbGxUYXNrc0luUHJvamVjdChwcm9qZWN0LCBpbmRleE9mVG9kYXlUYXNrLCBvcmlnaW4pIHtcbiAgICBpZiAoIWluZGV4T2ZUb2RheVRhc2spe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJykudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdXBkYXRlQ3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG4gICAgbGV0IG51bWJlck9mVGFzayA9IDA7XG4gICAgXG4gICAgLy8gcHJvamVjdC5hcnJheU9mVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2codG9kbyk7XG4gICAgLy8gfSk7XG4gICAgZm9yKGxldCBmID0gMTsgZiA8IHByb2plY3QuYXJyYXlPZlRvZG9zLmxlbmd0aDsgZisrKSB7XG4gICAgICAgIGxldCB0YXNrT25UaGVTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza09uVGhlU2NyZWVuLmNsYXNzTmFtZSA9ICd0YXNrJztcbiAgICAgICAgXG4gICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja0JveC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjaGVja0JveC5jbGFzc05hbWUgPSAnY2hlY2tib3gnO1xuICAgICAgICB0YXNrT25UaGVTY3JlZW4uYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXG4gICAgICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuYXJyYXlPZlRvZG9zW2ZdLm5hbWU7XG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTmFtZSA9ICd0YXNrbmFtZSc7XG4gICAgICAgIHRhc2tPblRoZVNjcmVlbi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgICAgICAgbGV0IHByb2plY3RGYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEZhdGhlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiAnICsgcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0RmF0aGVyLmNsYXNzTmFtZSA9ICdmYXRoZXItcHJvamVjdCc7XG4gICAgICAgIHRhc2tPblRoZVNjcmVlbi5hcHBlbmRDaGlsZChwcm9qZWN0RmF0aGVyKTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmFycmF5T2ZUb2Rvc1tmXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJztcbiAgICAgICAgdGFza09uVGhlU2NyZWVuLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBpZihwcm9qZWN0LmFycmF5T2ZUb2Rvc1tmXS5wcmlvcml0eSA9PSAxKSBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JlZCc7XG4gICAgICAgIGlmKHByb2plY3QuYXJyYXlPZlRvZG9zW2ZdLnByaW9yaXR5ID09IDIpIGNoZWNrQm94LnN0eWxlLmJhY2tncm91bmQgPSAnb3JhbmdlJztcbiAgICAgICAgaWYocHJvamVjdC5hcnJheU9mVG9kb3NbZl0ucHJpb3JpdHkgPT0gMykgY2hlY2tCb3guc3R5bGUuYmFja2dyb3VuZCA9ICd5ZWxsb3cnO1xuICAgICAgICBpZihwcm9qZWN0LmFycmF5T2ZUb2Rvc1tmXS5wcmlvcml0eSA9PSAwKSBjaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2socHJvamVjdCwgZik7XG4gICAgICAgICAgICBpZighaW5kZXhPZlRvZGF5VGFzaykge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfWVsc2UgaWYoaW5kZXhPZlRvZGF5VGFzayAmJiBvcmlnaW4gPT0gJ3VwY29taW5nJykge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVVwY29taW5nVGFza3MoKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUb2RheXNUYXNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrT25UaGVTY3JlZW4uYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gICAgICAgIGRhdGVQaWNrZXIuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgICAgICBkYXRlUGlja2VyLnRleHRDb250ZW50ID0gcHJvamVjdC5hcnJheU9mVG9kb3NbZl0uZGF0ZTtcblxuICAgICAgICBpZihpbmRleE9mVG9kYXlUYXNrKSB7XG4gICAgICAgICAgICBpZihpbmRleE9mVG9kYXlUYXNrID09IGYpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYXBwZW5kQ2hpbGQodGFza09uVGhlU2NyZWVuKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmRDaGlsZCh0YXNrT25UaGVTY3JlZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKCFpbmRleE9mVG9kYXlUYXNrKSBUb2RvQnV0dG9uKHByb2plY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFycmF5T2ZQcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgKHByb2plY3QubmFtZSkgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWUgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBpbnB1dFByb2plY3ROYW1lKCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbnB1dFByb2plY3ROYW1lKTtcbiAgICBcbiAgICB2YXIgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBsZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c19fYnRuJywgJ3Byb2plY3RzX19idG4tLWNsb3NlJyk7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKGlucHV0Rm9yUHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChzdWJtaXRCdXR0b25Gb3JQcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGlucHV0UHJvamVjdE5hbWUpO1xuICAgIH0pO1xuICAgIFxuICAgIHZhciBpbnB1dEZvclByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dEZvclByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXRGb3JQcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c19fbmFtZS1pbnB1dCcpO1xuICAgIFxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGlucHV0Rm9yUHJvamVjdE5hbWUpO1xuICAgIFxuICAgIHZhciBzdWJtaXRCdXR0b25Gb3JQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19idG4nLCAncHJvamVjdHNfX2J0bi0tc3VibWl0Jyk7XG5cbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uRm9yUHJvamVjdE5hbWUpO1xuICAgIHN1Ym1pdEJ1dHRvbkZvclByb2plY3ROYW1lLnRleHRDb250ZW50ID0gJ09rJztcblxuICAgIFxuICAgIHN1Ym1pdEJ1dHRvbkZvclByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGlucHV0Rm9yUHJvamVjdE5hbWUudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBpZihuYW1lICYmIG5hbWUubGVuZ3RoIDwgMTYgJiYgIWNoZWNrSWRlbnRpY2FsUHJvamVjdChuYW1lKSkge1xuICAgICAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoaW5wdXRGb3JQcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChzdWJtaXRCdXR0b25Gb3JQcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbicpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbnB1dFByb2plY3ROYW1lKTtcbiAgICAgICAgfWVsc2UgaWYoY2hlY2tJZGVudGljYWxQcm9qZWN0KG5hbWUpID09IHRydWUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWVzIHNob3VsZCBiZSBkaWZmZXJlbnQnKTtcbiAgICAgICAgICAgIGlucHV0Rm9yUHJvamVjdE5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgfWVsc2UgaWYobmFtZS5sZW5ndGggPj0gMTYpe1xuICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBzaG91bGQgYmUgbGVzcyB0aGFuIDE2IGNoYXJhY3RlcnMnKTtcbiAgICAgICAgfWVsc2UgaWYoIW5hbWUpe1xuICAgICAgICAgICAgYWxlcnQoJ0VudGVyIHByb2plY3QgbmFtZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWRlbnRpY2FsUHJvamVjdChuYW1lKSB7XG4gICAgYXJyYXlPZlByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmKHByb2plY3QubmFtZSA9PSBuYW1lKSByZXR1cm4gdHJ1ZTtcbiAgICB9ICk7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKG5ld1Byb2plY3QsIG51bWJlck9mVGFzaykge1xuICAgIG5ld1Byb2plY3QuYXJyYXlPZlRvZG9zLnNwbGljZShudW1iZXJPZlRhc2ssIDEpOyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhcnJheU9mUHJvamVjdHMpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5T2ZQcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGFycmF5T2ZQcm9qZWN0c1tpXSA9PSBuZXdQcm9qZWN0KXtcbiAgICAgICAgICAgIGFycmF5T2ZQcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlPZlByb2plY3RzKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJykudGV4dENvbnRlbnQgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQgPSAnJztcbiAgICB1cGRhdGVQcm9qZWN0cygpO1xufVxuXG5leHBvcnQge2lucHV0UHJvamVjdE5hbWUsIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0LCBhcnJheU9mUHJvamVjdHN9IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9zXCI7XG5pbXBvcnQgeyBjcmVhdGVBbGxUYXNrc0luUHJvamVjdCwgYXJyYXlPZlByb2plY3RzIH0gZnJvbSBcIi4vdXBkYXRlUHJvamVjdHNET01cIjtcblxuZnVuY3Rpb24gVG9kb0J1dHRvbihuZXdQcm9qZWN0KSB7XG4gICAgbGV0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJykuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG4gICAgdG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgdG9kbyc7XG4gICAgdG9kb0J1dHRvbi5jbGFzc05hbWUgPSAnY3JlYXRlLWJ1dHRvbl9fYnRuJztcblxuICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVBvcHVwKG5ld1Byb2plY3QpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3B1cChuZXdQcm9qZWN0KSB7XG4gICAgLy8gcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICAgIHBvcHVwLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gcG9wdXApIHtcbiAgICAgICAgICAgIHBvcHVwLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwKSc7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldERhdGFGcm9tRm9ybSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKS5wYXJhbWV0ZXIgPSBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBnZXREYXRhRnJvbUZvcm0oZSkge1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tuYW1lJykudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBUb2RvKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSlcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmFtZXRlci5hcnJheU9mVG9kb3MucHVzaCh0YXNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlPZlByb2plY3RzKSk7XG5cbiAgICAgICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICAgICAgICBwb3B1cC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCknO1xuXG4gICAgICAgIGNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0KGUuY3VycmVudFRhcmdldC5wYXJhbWV0ZXIpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgYWxlcnQoJ0VudGVyIHRhc2sgbmFtZScpO1xuICAgIH1cblxufVxuXG5leHBvcnQgeyBUb2RvQnV0dG9uIH0iLCJmdW5jdGlvbiBUb2RvKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSl7XG4gICAgcmV0dXJue1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICB9XG59XG5cbmV4cG9ydCB7VG9kb307IiwiaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3VwZGF0ZVRvZG9zRE9NXCI7XG5pbXBvcnQgeyBpbnB1dFByb2plY3ROYW1lIH0gZnJvbSBcIi4vdXBkYXRlUHJvamVjdHNET01cIjtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGlucHV0UHJvamVjdE5hbWUpOyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGhpcyIsImFycmF5T2ZUb2RvcyIsImFycmF5T2ZQcm9qZWN0cyIsImNyZWF0ZVByb2plY3QiLCJuZXdQcm9qZWN0IiwicHVzaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwidGFza0luc2lkZVByb2plY3QiLCJUb2RvQnV0dG9uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVQcm9qZWN0cyIsImZvckVhY2giLCJwcm9qZWN0SW5BcnJheSIsInByb2plY3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGVsZXRlUHJvamVjdEJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiZGVsZXRlUHJvamVjdCIsImNyZWF0ZUFsbFRhc2tzSW5Qcm9qZWN0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUb2RheXNUYXNrcyIsInRvZGF5Q29udGFpbmVyIiwidG9kYXkiLCJEYXRlIiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwidXBkYXRlQ3VycmVudFByb2plY3QiLCJmIiwiZGF0ZSIsImNyZWF0ZVVwY29taW5nVGFza3MiLCJ1cGNvbWluZ0NvbnRhaW5lciIsInN1YnN0ciIsImluZGV4T2ZUb2RheVRhc2siLCJvcmlnaW4iLCJ0YXNrT25UaGVTY3JlZW4iLCJjaGVja0JveCIsInRhc2tOYW1lIiwicHJvamVjdEZhdGhlciIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJzdHlsZSIsImJhY2tncm91bmQiLCJudW1iZXJPZlRhc2siLCJkYXRlUGlja2VyIiwiY2hlY2tJZGVudGljYWxQcm9qZWN0IiwidG9kb0J1dHRvbiIsInBvcHVwIiwidHJhbnNmb3JtIiwiYm9keSIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0RGF0YUZyb21Gb3JtIiwicGFyYW1ldGVyIiwiY3JlYXRlUG9wdXAiLCJlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInRhc2siLCJUb2RvIiwiY3VycmVudFRhcmdldCIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsInBhcnNlIiwiZ2V0SXRlbSIsImluYm94IiwiY3JlYXRlSW5ib3giLCJpbnB1dFByb2plY3ROYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb2plY3RzRGl2IiwiY2xvc2VCdXR0b24iLCJyZW1vdmVDaGlsZCIsImlucHV0Rm9yUHJvamVjdE5hbWUiLCJzdWJtaXRCdXR0b25Gb3JQcm9qZWN0TmFtZSIsInNldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=