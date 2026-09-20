const menu=document.querySelector(".menu"),nav=document.querySelector("nav"),fill=document.querySelector(".progress-fill");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
function progress(){const h=document.documentElement.scrollHeight-innerHeight;fill.style.height=(h?Math.min(100,scrollY/h*100):0)+"%"}addEventListener("scroll",progress,{passive:true});progress();