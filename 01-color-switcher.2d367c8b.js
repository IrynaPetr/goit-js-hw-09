const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");let d=null;t.disabled=!1,t.addEventListener("click",(()=>{t.disabled=!0,d||(d=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;a.style.backgroundColor=t}),1500))})),e.addEventListener("click",(()=>{clearInterval(d),d=null,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.2d367c8b.js.map
