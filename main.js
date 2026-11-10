/* ===== EDIT YOUR TEXTS AND PROJECTS HERE =====
   Every text has an English (en) and a Spanish (es) version.
   Photos: put files in /media named  <slug>-1, <slug>-2, <slug>-3 ... <slug>-N
   with any extension: .jpg  .jpeg  .png  .webp  (lowercase).
   Photo 1 is the big one, photos 2 and 3 the small ones; the rest open in the viewer.
   Set  n:N  in the project when it has more than 3 photos (default 3).
   About photo (circular): media/ian.jpg (or .jpeg / .png / .webp)
   Missing photos show a placeholder.
   Texts of the rest of the site: see the UI object below. */
const projects3d = [
 {slug:"unreal-journey",n:5,title:"Unreal Journey", yt:"https://youtu.be/9wh7et9AHBc",
  meta:{en:"Sci-fi short film · Environments & final video · Unreal Engine",
        es:"Cortometraje de ciencia ficción · Entornos y vídeo final · Unreal Engine"},
  d:{en:"A sci-fi short film about a space traveler who surveys three locations on Earth, a forest, an island and a desert, before choosing where to land. I built the environments and produced the final video in Unreal Engine.",
     es:"Cortometraje de ciencia ficción sobre un viajero espacial que explora tres lugares de la Tierra, un bosque, una isla y un desierto, antes de elegir dónde aterrizar. Construí los entornos y produje el vídeo final en Unreal Engine."}},
 {slug:"gaming-dog",n:7,title:"Gaming Dog",
  meta:{en:"Low-poly cartoon scene · Modeling & texturing · Blender",
        es:"Escena cartoon low-poly · Modelado y texturizado · Blender"},
  d:{en:"A low-poly cartoon scene showing a dog playing video games in his bedroom. The project covers the full asset workflow, from modeling to texturing, developed entirely in Blender.",
     es:"Escena cartoon low-poly de un perro jugando a videojuegos en su habitación. El proyecto abarca todo el flujo de trabajo de los assets, del modelado al texturizado, desarrollado íntegramente en Blender."}},
 {slug:"moles-defense",title:"Moles Defense",
  meta:{en:"Tower defense game · 3D models, environment & animation · Blender",
        es:"Videojuego tower defense · Modelos 3D, entorno y animación · Blender"},
  d:{en:"A tower defense game set on a circular map, where waves of moles emerge from the center and advance toward the outer barrier. Players must position their defenses strategically to stop them. I created the 3D models, built the environment and animated the characters in Blender.",
     es:"Videojuego tower defense ambientado en un mapa circular, donde oleadas de topos emergen del centro y avanzan hacia la barrera exterior. El jugador debe colocar sus defensas de forma estratégica para detenerlos. Creé los modelos 3D, construí el entorno y animé los personajes en Blender."}},
 {slug:"murder-by-death",n:5,title:"Murder By Death",
  meta:{en:"Mystery game, released on Steam · 3D models · Blender",
        es:"Juego de misterio, publicado en Steam · Modelos 3D · Blender"},
  d:{en:"A murder mystery set in 1930s England and released on Steam. Players investigate a crime in a mansion, question suspects and make key decisions to uncover the truth before Scotland Yard arrives. I created the 3D models using Blender.",
     es:"Misterio de asesinato ambientado en la Inglaterra de los años 30 y publicado en Steam. Los jugadores investigan un crimen en una mansión, interrogan a los sospechosos y toman decisiones clave para descubrir la verdad antes de que llegue Scotland Yard. Creé los modelos 3D con Blender."}},
 {slug:"carl",n:2,title:"Carl",
  video:{2:"media/carl-turnaround.mp4"},
  pos:{1:"50% 34%"},
  alt:{1:"Carl: photo of the original artwork by Haitz de Diego, an elderly man leaning over a window sill",2:"Carl: turnaround of the 3D model of the elderly man"},
  meta:{en:"3D character modeling · Based on the artwork Carl",
        es:"Modelado 3D de personaje · Basado en la obra Carl"},
  d:{en:"3D model of the elderly man from the artwork Carl by Haitz de Diego.",
     es:"Modelo 3D del señor mayor que aparece en la obra Carl, de Haitz de Diego."}}
];
const projectsGames = [
 {slug:"borealis",title:"Borealis",
  meta:{en:"First-person PC game · Programming · Unreal Engine",
        es:"Videojuego en primera persona para PC · Programación · Unreal Engine"},
  d:{en:"A first-person PC experience in which the player travels through different worlds collecting colored prisms to restore the aurora borealis to the sky. I was responsible for the gameplay programming, developed in Unreal Engine.",
     es:"Experiencia en primera persona para PC en la que el jugador viaja por distintos mundos recogiendo prismas de colores para devolver la aurora boreal al cielo. Me encargué de la programación de la jugabilidad, desarrollada en Unreal Engine."}},
 {slug:"ghosts-whispers",title:"Ghosts' Whispers", yt:"https://youtu.be/ysrodL3rvYE",
  meta:{en:"Pixel art mystery & puzzle game · Programming · GDevelop",
        es:"Juego de misterio y puzles en pixel art · Programación · GDevelop"},
  d:{en:"A pixel art mystery game built around puzzle solving, developed in GDevelop. I programmed all the mechanics and integrated the narrative and art assets provided by the team.",
     es:"Juego de misterio en pixel art centrado en la resolución de puzles, desarrollado en GDevelop. Programé todas las mecánicas e integré los recursos narrativos y artísticos aportados por el equipo."}},
 {slug:"land-between-rivers",title:"Land Between Rivers", yt:"https://youtu.be/6xman6HmrGE",
  meta:{en:"Third-person exploration & puzzle demo · Modeling & development · Unity",
        es:"Demo de exploración y puzles en tercera persona · Modelado y desarrollo · Unity"},
  d:{en:"A third-person exploration and puzzle demo set in an archaeological museum dedicated to Mesopotamia, where the player examines the exhibits and solves puzzles. I modeled every object and developed the full demo in Unity.",
     es:"Demo de exploración y puzles en tercera persona ambientada en un museo arqueológico dedicado a Mesopotamia, donde el jugador examina las piezas expuestas y resuelve puzles. Modelé todos los objetos y desarrollé la demo completa en Unity."}}
];

const UI = {
 en:{
  lb_close:"Close", lb_prev:"Previous image", lb_next:"Next image", lb_open:"Enlarge image", lb_more:"more photos", lb_video:"Play video",
  copied:"Email copied!",
  e_title:"GAME OVER", e_msg:"This page doesn't exist or has moved.", e_cont:"CONTINUE?", e_back:"Returning to the start automatically", e_btn:"Continue",
  title_404:"Game Over | Ian Aviñó", desc_404:"Page not found.",
  title_home:"Ian Aviñó | 3D Artist & Game Developer", title_portfolio:"Portfolio: 3D Art & Game Projects | Ian Aviñó", title_about:"About Ian Aviñó | 3D Artist & Game Developer", title_contact:"Contact Ian Aviñó | 3D Artist & Game Developer",
  desc_home:"Ian Aviñó is a 3D artist and game developer from Catalonia. Explore his 3D art, environments and games built in Blender, Unity and Unreal Engine.", desc_portfolio:"Portfolio of Ian Aviñó: 3D art and environments made in Blender and Unreal Engine, and games developed in Unity, Unreal Engine 5 and GDevelop, including Murder by Death on Steam.", desc_about:"About Ian Aviñó, a digital artist with a degree in Digital Arts from La Salle in Barcelona. 3D modeling in Blender, game development in Unity and Unreal Engine 5.", desc_contact:"Get in touch with Ian Aviñó, 3D artist and game developer, for collaborations or job opportunities.",
  brand:"Ian Aviñó | 3D Artist & Game Developer",
  nav_home:"Home", nav_portfolio:"Portfolio", nav_about:"About", nav_contact:"Contact",
  h1:"Building worlds. Bringing them to life.",
  hero1:"I'm Ian Aviñó, a digital artist focused on 3D modeling and game development. I build my own models and turn them into playable demos and small games.",
  hero2:"I love inventing fictional worlds and bringing them to life, from the first sketch to something you can explore.",
  h2_portfolio:"Portfolio", tools_title:"Tools I work with",
  g3d:"3D Art & Environments", ggames:"Game Development",
  h2_about:"About",
  about1:"I'm Ian Aviñó, a digital artist focused on 3D modeling and game development.",
  about2:"I build my own models and turn them into playable demos and small games. I love inventing fictional worlds and bringing them to life, from the first sketch to something you can explore.",
  h2_tools:"Tools", h2_contact:"Contact",
  contact_p:"Want to work together or just say hi? Write to me.",
  c_email:"Email", yt_label:"Watch on YouTube",
  f_name:"Name", f_email:"Email", f_msg:"Message", f_send:"Send message", f_sending:"Sending…",
  f_ok:"Thanks! Your message has been sent. I'll get back to you soon.",
  f_err:"The message couldn't be sent. Please try again or write to me at ianavinosoler@gmail.com."
 },
 es:{
  lb_close:"Cerrar", lb_prev:"Imagen anterior", lb_next:"Imagen siguiente", lb_open:"Ampliar imagen", lb_more:"fotos más", lb_video:"Reproducir vídeo",
  copied:"¡Correo copiado!",
  e_title:"GAME OVER", e_msg:"Esta página no existe o se ha movido.", e_cont:"¿CONTINUAR?", e_back:"Volviendo al inicio automáticamente", e_btn:"Continuar",
  title_404:"Game Over | Ian Aviñó", desc_404:"Página no encontrada.",
  title_home:"Ian Aviñó | Artista 3D y Game Developer", title_portfolio:"Portfolio: arte 3D y proyectos de videojuegos | Ian Aviñó", title_about:"Sobre Ian Aviñó | Artista 3D y Game Developer", title_contact:"Contacto con Ian Aviñó | Artista 3D y Game Developer",
  desc_home:"Ian Aviñó es artista 3D y game developer de Cataluña. Descubre su arte 3D, entornos y juegos creados con Blender, Unity y Unreal Engine.", desc_portfolio:"Portfolio de Ian Aviñó: arte 3D y entornos hechos en Blender y Unreal Engine, y videojuegos desarrollados en Unity, Unreal Engine 5 y GDevelop, entre ellos Murder by Death en Steam.", desc_about:"Sobre Ian Aviñó, artista digital graduado en Artes Digitales por La Salle, Barcelona. Modelado 3D en Blender y desarrollo de videojuegos en Unity y Unreal Engine 5.", desc_contact:"Contacta con Ian Aviñó, artista 3D y game developer, para colaboraciones u ofertas de trabajo.",
  brand:"Ian Aviñó | Artista 3D y Game Developer",
  nav_home:"Inicio", nav_portfolio:"Portfolio", nav_about:"Sobre mí", nav_contact:"Contacto",
  h1:"Construyendo mundos. Dándoles vida.",
  hero1:"Soy Ian Aviñó, artista digital especializado en modelado 3D y desarrollo de videojuegos. Creo mis propios modelos y los convierto en demos jugables y pequeños juegos.",
  hero2:"Me encanta inventar mundos ficticios y darles vida, desde el primer boceto hasta algo que se puede explorar.",
  h2_portfolio:"Portfolio", tools_title:"Herramientas con las que trabajo",
  g3d:"Arte 3D y entornos", ggames:"Desarrollo de videojuegos",
  h2_about:"Sobre mí",
  about1:"Soy Ian Aviñó, artista digital especializado en modelado 3D y desarrollo de videojuegos.",
  about2:"Creo mis propios modelos y los convierto en demos jugables y pequeños juegos. Me encanta inventar mundos ficticios y darles vida, desde el primer boceto hasta algo que se puede explorar.",
  h2_tools:"Herramientas", h2_contact:"Contacto",
  contact_p:"¿Quieres trabajar conmigo o simplemente saludar? Escríbeme.",
  c_email:"Correo", yt_label:"Ver en YouTube",
  f_name:"Nombre", f_email:"Correo electrónico", f_msg:"Mensaje", f_send:"Enviar mensaje", f_sending:"Enviando…",
  f_ok:"¡Gracias! Tu mensaje se ha enviado. Te responderé lo antes posible.",
  f_err:"No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme a ianavinosoler@gmail.com."
 }
};

const EXTS=['jpg','jpeg','png','webp'];
function loadImg(base,ph,host,alt){
  const im=new Image(); let i=0;
  im.alt=alt||''; im.loading='lazy';
  im.onload=()=>ph.remove();
  im.onerror=()=>{ i++; if(i<EXTS.length) im.src=base+'.'+EXTS[i]; else { im.remove(); ph.classList.add('missing'); } };
  im.src=base+'.'+EXTS[0];
  host.appendChild(im);
}
function slot(cls,base,label,alt){
  const s=document.createElement('div'); s.className='slot '+cls;
  const ph=document.createElement('div'); ph.className='ph'; ph.textContent=label; s.appendChild(ph);
  loadImg(base,ph,s,alt); return s;
}

/* Language: functions that refresh each translated text */
const CONTACT_EMAIL='ianavinosoler@gmail.com';
let curLang='en';
const binds=[];

/* Image viewer: click a photo to enlarge it; arrows, keyboard and swipe move between the project's items (photos and videos) */
const Lightbox=(function(){
  const cache={};
  let root,img,vid,cap,btnClose,btnPrev,btnNext;
  let list=[],title='',idx=0,opener=null,sx=null;
  function resolve(base){
    if(!cache[base]) cache[base]=new Promise(res=>{
      let i=0; const t=new Image();
      t.onload=()=>res(t.src);
      t.onerror=()=>{ i++; if(i<EXTS.length) t.src=base+'.'+EXTS[i]; else res(null); };
      t.src=base+'.'+EXTS[0];
    });
    return cache[base];
  }
  async function show(i){
    const n=list.length; idx=((i%n)+n)%n;
    const it=list[idx];
    root.classList.add('loading');
    const src=await resolve(it.base);
    if(root.hidden||it!==list[idx]) return;
    vid.pause(); vid.hidden=true;
    if(src){ img.src=src; img.alt=it.alt; }
    img.hidden=false;
    if(it.video){
      vid.onloadeddata=()=>{ if(root.hidden||it!==list[idx]) return; img.hidden=true; vid.hidden=false; vid.play().catch(()=>{}); };
      vid.onerror=()=>{ vid.hidden=true; img.hidden=false; };
      vid.poster=src||''; vid.setAttribute('aria-label',it.alt);
      if(vid.getAttribute('src')!==it.video) vid.src=it.video;
      else if(vid.readyState>=2) vid.onloadeddata();
    }
    cap.textContent=title+'  ·  '+(idx+1)+' / '+n;
    root.classList.remove('loading');
    btnPrev.hidden=btnNext.hidden=n<2;
    if(n>1){ resolve(list[(idx+1)%n].base); resolve(list[(idx-1+n)%n].base); }
  }
  function open(items,t,i,from){
    list=items; title=t; opener=from;
    root.hidden=false; document.documentElement.style.overflow='hidden';
    show(i); btnClose.focus();
  }
  function close(){
    if(root.hidden) return;
    root.hidden=true; img.removeAttribute('src');
    vid.pause(); vid.removeAttribute('src'); vid.load();
    document.documentElement.style.overflow='';
    if(opener&&opener.focus) opener.focus();
  }
  function build(){
    root=document.createElement('div'); root.className='lb'; root.hidden=true;
    root.setAttribute('role','dialog'); root.setAttribute('aria-modal','true');
    btnClose=document.createElement('button'); btnClose.type='button'; btnClose.className='lb-close';
    btnPrev=document.createElement('button'); btnPrev.type='button'; btnPrev.className='lb-nav lb-prev';
    btnNext=document.createElement('button'); btnNext.type='button'; btnNext.className='lb-nav lb-next';
    const fig=document.createElement('figure'); fig.className='lb-fig';
    img=document.createElement('img'); img.className='lb-img'; img.alt='';
    vid=document.createElement('video'); vid.className='lb-vid'; vid.hidden=true;
    vid.controls=true; vid.loop=true; vid.muted=true; vid.playsInline=true; vid.preload='auto';
    cap=document.createElement('figcaption'); cap.className='lb-cap';
    fig.append(img,vid,cap); root.append(btnClose,btnPrev,btnNext,fig); document.body.appendChild(root);
    btnClose.addEventListener('click',close);
    btnPrev.addEventListener('click',()=>show(idx-1));
    btnNext.addEventListener('click',()=>show(idx+1));
    root.addEventListener('click',e=>{ if(e.target===root||e.target===fig) close(); });
    root.addEventListener('touchstart',e=>{ sx=e.touches[0].clientX; },{passive:true});
    root.addEventListener('touchend',e=>{
      if(sx===null||list.length<2) return;
      const dx=e.changedTouches[0].clientX-sx; sx=null;
      if(Math.abs(dx)>50) show(idx+(dx<0?1:-1));
    });
    document.addEventListener('keydown',e=>{
      if(root.hidden) return;
      if(e.key==='Escape') close();
      else if(e.key==='ArrowLeft'&&list.length>1) show(idx-1);
      else if(e.key==='ArrowRight'&&list.length>1) show(idx+1);
      else if(e.key==='Tab'){
        const f=[btnClose,btnPrev,btnNext].filter(b=>!b.hidden);
        const k=f.indexOf(document.activeElement);
        e.preventDefault();
        f[(k+(e.shiftKey?-1:1)+f.length)%f.length].focus();
      }
    });
    binds.push(l=>{
      const u=UI[l];
      btnClose.setAttribute('aria-label',u.lb_close);
      btnPrev.setAttribute('aria-label',u.lb_prev);
      btnNext.setAttribute('aria-label',u.lb_next);
    });
  }
  return {build,open};
})();

function buildProject(p){
  const N=p.n||3;
  const items=Array.from({length:N},(_,k)=>({
    base:`media/${p.slug}-${k+1}`,
    alt:(p.alt&&p.alt[k+1])||`${p.title}: ${p.meta.en.split(' · ')[0]} (image ${k+1} of ${N})`,
    video:(p.video&&p.video[k+1])||null
  }));
  const art=document.createElement('article'); art.className='project';
  const g=document.createElement('div'); g.className='gal'+(N===2?' two':'');
  const slots=[];
  for(let k=0;k<Math.min(N,3);k++){
    const it=items[k];
    const s=slot(k===0?'big':'',it.base,`Add ${it.base}`,it.alt);
    s.classList.add('zoom');
    if(p.pos&&p.pos[k+1]) s.style.setProperty('--pos',p.pos[k+1]);
    if(it.video){
      s.classList.add('has-video');
      const v=document.createElement('video'); v.className='thumb-vid';
      v.muted=true; v.loop=true; v.playsInline=true; v.preload='metadata'; v.tabIndex=-1; v.setAttribute('aria-hidden','true');
      v.addEventListener('playing',()=>v.classList.add('on'));
      v.addEventListener('error',()=>v.remove());
      v.addEventListener('loadedmetadata',()=>{ s.classList.add('vid-ok'); setLabel(curLang); });
      v.src=it.video;
      s.appendChild(v);
      if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
        new IntersectionObserver(es=>es.forEach(en=>{
          if(en.isIntersecting){ v.play().catch(()=>{}); } else v.pause();
        }),{threshold:.35}).observe(s);
      }
      const pl=document.createElement('span'); pl.className='play'; pl.setAttribute('aria-hidden','true'); s.appendChild(pl);
    }
    if(k===2&&N>3){
      const more=document.createElement('div'); more.className='more'; more.setAttribute('aria-hidden','true');
      more.textContent='+'+(N-3); s.appendChild(more);
    }
    const zb=document.createElement('button'); zb.type='button'; zb.className='zoom-btn';
    zb.addEventListener('click',()=>Lightbox.open(items,p.title,k,zb));
    s.appendChild(zb);
    const setLabel=l=>{
      const extra=(k===2&&N>3)?', +'+(N-3)+' '+UI[l].lb_more:'';
      zb.setAttribute('aria-label',(s.classList.contains('vid-ok')?UI[l].lb_video:UI[l].lb_open)+': '+p.title+' ('+(k+1)+'/'+N+')'+extra);
    };
    binds.push(setLabel);
    g.appendChild(s); slots.push(s);
  }
  const big=slots[0];
  if(p.yt){
    const box=document.createElement('div'); box.className='ytbox';
    const a=document.createElement('a'); a.href=p.yt; a.target='_blank'; a.rel='noopener';
    const im=document.createElement('img'); im.src='media/youtube.png'; im.alt=''; im.width=43; im.height=30;
    a.appendChild(im); box.appendChild(a); big.appendChild(box);
    binds.push(l=>{ const s=UI[l].yt_label+': '+p.title; a.setAttribute('aria-label',s); a.title=s; });
  }
  const t=document.createElement('h4'); t.textContent=p.title;
  const mt=document.createElement('p'); mt.className='meta';
  const d=document.createElement('p'); d.className='d';
  binds.push(l=>{ mt.textContent=p.meta[l]; d.textContent=p.d[l]; });
  art.append(g,t,mt,d);
  return art;
}

/* Dropdowns by project type: opening one closes the other */
const GROUPS=[{key:'g3d',list:projects3d},{key:'ggames',list:projectsGames}];
function buildAccordion(host){
  const items=[];
  GROUPS.forEach((gr,i)=>{
    const item=document.createElement('div'); item.className='acc';
    const h=document.createElement('h3'); h.className='group';
    const btn=document.createElement('button'); btn.type='button'; btn.className='acc-btn';
    btn.id='acc-btn-'+i; btn.setAttribute('aria-controls','acc-panel-'+i);
    const label=document.createElement('span');
    const chev=document.createElement('span'); chev.className='chev'; chev.setAttribute('aria-hidden','true');
    btn.append(label,chev); h.appendChild(btn);
    const panel=document.createElement('div'); panel.className='acc-panel';
    panel.id='acc-panel-'+i; panel.setAttribute('role','region'); panel.setAttribute('aria-labelledby',btn.id);
    const inner=document.createElement('div'); inner.className='acc-inner';
    const body=document.createElement('div'); body.className='acc-body';
    gr.list.forEach(p=>body.appendChild(buildProject(p)));
    inner.appendChild(body); panel.appendChild(inner);
    item.append(h,panel); host.appendChild(item);
    binds.push(l=>{ label.textContent=UI[l][gr.key]; });
    items.push({item,btn,panel});
  });
  function setOpen(idx){
    items.forEach((o,j)=>{
      const open=j===idx;
      o.item.classList.toggle('open',open);
      o.btn.setAttribute('aria-expanded',String(open));
      o.panel.inert=!open;
    });
  }
  items.forEach((o,j)=>o.btn.addEventListener('click',()=>setOpen(o.item.classList.contains('open')?-1:j)));
  setOpen(0);
}

function applyLang(l,save){
  curLang=l;
  if(save){ try{localStorage.setItem('lang',l);}catch(e){} }
  const u=UI[l];
  document.documentElement.lang=l;
  document.title=u['title_'+(document.body.dataset.page||'home')];
  const md=document.querySelector('meta[name="description"]');
  if(md) md.setAttribute('content',u['desc_'+(document.body.dataset.page||'home')]);
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=u[el.dataset.i18n]; });
  binds.forEach(f=>f(l));
  document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===l)));
}
function initialLang(){
  try{ const s=localStorage.getItem('lang'); if(s==='es'||s==='en') return s; }catch(e){}
  return (navigator.language||'en').toLowerCase().startsWith('es') ? 'es' : 'en';
}

/* Contact form (sent through FormSubmit to CONTACT_EMAIL) */
function setupForm(){
  const form=document.getElementById('cform');
  if(!form) return;
  const st=document.getElementById('cstatus');
  const btn=form.querySelector('.send');
  function say(key){
    st.dataset.k=key||'';
    st.className='status'+(key?(key==='f_ok'?' ok':' err'):'');
    st.textContent=key?UI[curLang][key]:'';
  }
  binds.push(l=>{ if(st.dataset.k) st.textContent=UI[l][st.dataset.k]; });
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    if(form.elements['_honey'].value){ say('f_ok'); form.reset(); return; }   /* spam trap */
    btn.disabled=true; btn.textContent=UI[curLang].f_sending; say('');
    try{
      const r=await fetch('https://formsubmit.co/ajax/'+CONTACT_EMAIL,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({
          name:form.elements['name'].value,
          email:form.elements['email'].value,
          message:form.elements['message'].value,
          _subject:'New message from your portfolio',
          _template:'table',
          _captcha:'false'
        })
      });
      const data=await r.json().catch(()=>({}));
      if(!r.ok||data.success===false||data.success==='false') throw new Error('send failed');
      say('f_ok'); form.reset();
    }catch(err){ say('f_err'); }
    btn.disabled=false; btn.textContent=UI[curLang].f_send;
  });
}

/* Build only what the current page has */
const av=document.getElementById('avatar');
if(av){
  const ph=document.createElement('div'); ph.className='ph'; ph.textContent='Add media/ian';
  av.appendChild(ph); loadImg('media/ian',ph,av,'Ian Aviñó, 3D artist and game developer');
}
const proj=document.getElementById('projects');
Lightbox.build();

/* ===== Game-style extras =====
   loading screen (first visit of a session), scroll bar, hero parallax,
   custom cursor, copy-email toast, 404 countdown */
(function(){
  const d=document.documentElement;
  const REDUCED=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE=matchMedia('(hover: hover) and (pointer: fine)').matches;
  const ss=(k,v)=>{ try{ if(v===null) sessionStorage.removeItem(k); else if(v===undefined) return sessionStorage.getItem(k); else sessionStorage.setItem(k,v); }catch(e){} return null; };

  /* Loading screen: only the first page opened in a visit */
  if(d.classList.contains('ls')){
    ss('seen','1');
    const t0=performance.now(); let finished=false;
    const finish=()=>{
      if(finished) return; finished=true;
      d.classList.add('ls-out');
      setTimeout(()=>d.classList.remove('ls','ls-out'),500);
    };
    const go=()=>setTimeout(finish,Math.max(0,1400-(performance.now()-t0)));
    if(document.readyState==='complete') go(); else addEventListener('load',go,{once:true});
    setTimeout(finish,3200);
  }

  /* Scroll progress bar */
  const sp=document.createElement('div'); sp.className='sp'; sp.setAttribute('aria-hidden','true');
  const spi=document.createElement('i'); sp.appendChild(spi); document.body.appendChild(sp);
  let spq=false;
  const spUpdate=()=>{ spq=false; const h=d.scrollHeight-innerHeight; spi.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')'; };
  const spReq=()=>{ if(!spq){ spq=true; requestAnimationFrame(spUpdate); } };
  addEventListener('scroll',spReq,{passive:true}); addEventListener('resize',spReq); addEventListener('load',spReq);
  if(window.ResizeObserver) new ResizeObserver(spReq).observe(document.body);
  spReq();

  /* Hero parallax (mouse + scroll) */
  const heroBg=document.querySelector('.hero-bg');
  if(heroBg&&!REDUCED){
    let mx=0,my=0,sy=0,pq=false;
    const apply=()=>{ pq=false; heroBg.style.transform='translate3d('+(mx*-16)+'px,'+(my*-12+sy*0.12)+'px,0)'; };
    const req=()=>{ if(!pq){ pq=true; requestAnimationFrame(apply); } };
    if(FINE) addEventListener('mousemove',e=>{ mx=e.clientX/innerWidth-.5; my=e.clientY/innerHeight-.5; req(); },{passive:true});
    addEventListener('scroll',()=>{ sy=scrollY; req(); },{passive:true});
  }

  /* Custom cursor: orange dot + halo that grows over clickable things */
  if(FINE){
    const dot=document.createElement('div'); dot.className='cur-dot';
    const ring=document.createElement('div'); ring.className='cur-ring';
    dot.setAttribute('aria-hidden','true'); ring.setAttribute('aria-hidden','true');
    document.body.append(ring,dot); d.classList.add('has-cursor');
    const SEL='a,button,[role="button"],.zoom-btn,label,select,summary';
    let x=-100,y=-100,rx=-100,ry=-100,seen=false,run=false;
    const draw=()=>{
      const k=REDUCED?1:.2; rx+=(x-rx)*k; ry+=(y-ry)*k;
      dot.style.transform='translate3d('+x+'px,'+y+'px,0) translate(-50%,-50%)';
      ring.style.transform='translate3d('+rx+'px,'+ry+'px,0) translate(-50%,-50%)';
      if(Math.abs(x-rx)>.1||Math.abs(y-ry)>.1) requestAnimationFrame(draw); else run=false;
    };
    addEventListener('mousemove',e=>{
      x=e.clientX; y=e.clientY;
      if(!seen){ seen=true; rx=x; ry=y; d.classList.add('cur-on'); }
      ring.classList.toggle('hot',!!(e.target.closest&&e.target.closest(SEL)));
      if(!run){ run=true; requestAnimationFrame(draw); }
    },{passive:true});
    d.addEventListener('mouseleave',()=>d.classList.remove('cur-on'));
    d.addEventListener('mouseenter',()=>{ if(seen) d.classList.add('cur-on'); });
    addEventListener('mousedown',()=>ring.classList.add('down'));
    addEventListener('mouseup',()=>ring.classList.remove('down'));
  }

  /* Toast + copy email */
  const toastEl=document.createElement('div'); toastEl.className='toast'; toastEl.setAttribute('role','status'); toastEl.setAttribute('aria-live','polite');
  document.body.appendChild(toastEl);
  let toastT;
  function toast(msg){
    toastEl.textContent=msg; toastEl.classList.add('show');
    clearTimeout(toastT); toastT=setTimeout(()=>toastEl.classList.remove('show'),2200);
  }
  function legacyCopy(t){
    try{
      const ta=document.createElement('textarea'); ta.value=t; ta.setAttribute('readonly','');
      ta.style.cssText='position:fixed;top:0;opacity:0'; document.body.appendChild(ta); ta.select();
      const ok=document.execCommand('copy'); ta.remove(); return ok;
    }catch(err){ return false; }
  }
  function copyText(t){
    if(navigator.clipboard&&window.isSecureContext) return navigator.clipboard.writeText(t).then(()=>true,()=>legacyCopy(t));
    return Promise.resolve(legacyCopy(t));
  }
  document.addEventListener('click',e=>{
    const a=e.target.closest&&e.target.closest('a[href^="mailto:"]');
    if(!a) return;
    e.preventDefault();
    const addr=a.getAttribute('href').replace(/^mailto:/i,'').split('?')[0];
    copyText(addr).then(ok=>{ if(ok) toast(UI[curLang].copied); else location.href=a.href; });
  });

  /* 404: GAME OVER countdown back to the start page */
  const cnt=document.getElementById('go-count');
  if(cnt){
    let n=10;
    const iv=setInterval(()=>{
      n--; cnt.textContent=n;
      if(n<=0){ clearInterval(iv); location.href=new URL('index.html',document.baseURI).href; }
    },1000);
  }
})();

if(proj){ proj.textContent=''; buildAccordion(proj); }
setupForm();
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang,true)));
applyLang(initialLang(),false);
