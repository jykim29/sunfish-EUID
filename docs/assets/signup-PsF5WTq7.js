import"./tailwind-hLRvZ190.js";import{a as k}from"./Modal-LwrVZ11o.js";import{c as L,t as c}from"./main_button-o2ruxehI.js";import{g as s}from"./getNode-pa7syr6m.js";import{p as S}from"./delay-L14dHocY.js";const C=s("form"),r=s("#email"),m=s("#pw"),f=s("#pw-confirm"),p=s("#email-box"),g=s("#pw-box"),n=s("#pw-confirm-box"),B=document.querySelector("#back"),a=L({id:"formbutton",type:"submit",value:"가입하기"}),[w,y,A]=k({title:"정말 취소하시겠어요?",desc:"시작하기 페이지로 이동하면 작성하신 데이터가 소멸됩니다."}),d=window.localStorage,o={email:!1,pw:!1,pwConfirm:!1};C.insertAdjacentElement("beforeend",a);const i="invalid",v="hasemail",x=/^[\w-]+@([a-z]+\.)+[\w]{2,4}/g,E=/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;let b,$;const I=async e=>{e.preventDefault(),$.includes(r.value)?(c(a,!1),o.email=!1,p.classList.add(v)):(d.setItem("users-oauth",JSON.stringify({email:r.value,password:m.value,passwordConfirm:f.value,emailVisibility:!0})),window.location.href="/src/pages/login/oauth/")},u=()=>{o.email&&o.pw&&o.pwConfirm?c(a,!0):c(a,!1)},h=(e,l,t)=>{if(e.value===""){t.classList.remove(i);return}e.value.match(l)?(t.classList.remove(i),o[e.id]=!0):(t.classList.add(i),o[e.id]=!1),u()},P=(e,l,t)=>{t.classList.remove(v),h(e,l,t),u()},M=({target:e})=>{if(e.value===""){n.classList.remove(i);return}e.value!==m.value?(n.classList.add(i),o.pwConfirm=!1):(n.classList.remove(i),o.pwConfirm=!0),u()};r.oninput=({target:e})=>P(e,x,p);m.oninput=({target:e})=>h(e,E,g);a.onclick=I;f.oninput=M;B.onclick=()=>w.showing();y.onclick=()=>w.closing();A.onclick=()=>{d.clear(),window.history.replaceState(null,null,"/"),window.location.href="/"};b=await S.collection("users").getFullList();$=b.map(e=>e.email);
