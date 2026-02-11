(function(){
  const btn=document.querySelector('.nav-toggle');
  const list=document.querySelector('.nav-list');
  if(btn && list){
    btn.addEventListener('click',()=>{
      const open=list.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    list.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      list.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }));
  }
  const y=document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();

  // Smooth scroll for in-page anchors (e.g., Back to top)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    // Back to top: scroll the page, not the sticky header element
    if (href === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Safer lookup than querySelector(href)
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
