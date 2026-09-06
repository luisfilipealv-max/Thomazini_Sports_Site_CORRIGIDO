const header=document.getElementById("header");
const menuButton=document.getElementById("menuButton");
const nav=document.getElementById("nav");

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>35);
});

menuButton.addEventListener("click",()=>{
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(a=>{
  a.addEventListener("click",()=>nav.classList.remove("open"));
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const banner=document.getElementById("cookieBanner");
const choice=localStorage.getItem("thomazini_cookie_choice");
if(choice) banner.classList.add("hide");

document.getElementById("cookieAccept").addEventListener("click",()=>{
  localStorage.setItem("thomazini_cookie_choice","accepted");
  banner.classList.add("hide");
});
document.getElementById("cookieReject").addEventListener("click",()=>{
  localStorage.setItem("thomazini_cookie_choice","rejected");
  banner.classList.add("hide");
});
document.getElementById("cookieConfig").addEventListener("click",()=>{
  alert("Este site utiliza somente recursos essenciais neste momento. Cookies não essenciais devem ser ativados somente com consentimento.");
});

const modal=document.getElementById("privacyModal");
document.getElementById("privacyOpen").addEventListener("click",()=>modal.classList.add("show"));
document.getElementById("privacyClose").addEventListener("click",()=>modal.classList.remove("show"));
modal.addEventListener("click",e=>{
  if(e.target===modal) modal.classList.remove("show");
});
