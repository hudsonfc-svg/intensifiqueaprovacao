// Interações leves, sem dependências externas.
const revealObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -45px'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}}));

const progress=document.querySelector('.progress span');
const parallax=document.querySelector('.hero-visual');
let ticking=false;
function onScroll(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?(window.scrollY/max)*100:0)+'%';if(parallax&&window.innerWidth>900){const y=Math.min(window.scrollY*.035,28);parallax.style.transform=`translateY(${y}px)`}ticking=false}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(onScroll);ticking=true}},{passive:true});onScroll();

document.querySelectorAll('details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open){document.querySelectorAll('details').forEach(other=>{if(other!==detail)other.removeAttribute('open')})}}));
