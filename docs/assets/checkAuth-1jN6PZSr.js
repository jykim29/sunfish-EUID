import{c}from"./delay-YOOEtQ5Y.js";function a(){const[e,o]=c({title:"🚫 로그인이 필요한 페이지입니다.",desc:"로그인 페이지로 이동합니다."});o.addEventListener("click",()=>{window.location.href="/"});const t=localStorage.getItem("pocketbase_auth");return t||e.showing(),t}export{a as c};
