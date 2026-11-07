/* ===== EDIT YOUR TEXTS AND PROJECTS HERE =====
   Every text has an English (en) and a Spanish (es) version.
   Photos: put files in /media named  <slug>-1, <slug>-2, <slug>-3
   with any extension: .jpg  .jpeg  .png  .webp  (lowercase).
   Photo 1 is the big one, photos 2 and 3 the small ones.
   About photo (circular): media/ian.jpg (or .jpeg / .png / .webp)
   Missing photos show a placeholder.
   Texts of the rest of the site: see the UI object below. */
const projects3d = [
 {slug:"unreal-journey",title:"Unreal Journey",
  meta:{en:"Sci-fi short film · Environments & final video · Unreal Engine",
        es:"Cortometraje de ciencia ficción · Entornos y vídeo final · Unreal Engine"},
  d:{en:"A sci-fi short film about a space traveler who surveys three locations on Earth, a forest, an island and a desert, before choosing where to land. I built the environments and produced the final video in Unreal Engine.",
     es:"Cortometraje de ciencia ficción sobre un viajero espacial que explora tres lugares de la Tierra, un bosque, una isla y un desierto, antes de elegir dónde aterrizar. Construí los entornos y produje el vídeo final en Unreal Engine."}},
 {slug:"gaming-dog",title:"Gaming Dog",
  meta:{en:"Low-poly cartoon scene · Modeling & texturing · Blender",
        es:"Escena cartoon low-poly · Modelado y texturizado · Blender"},
  d:{en:"A low-poly cartoon scene showing a dog playing video games in his bedroom. The project covers the full asset workflow, from modeling to texturing, developed entirely in Blender.",
     es:"Escena cartoon low-poly de un perro jugando a videojuegos en su habitación. El proyecto abarca todo el flujo de trabajo de los assets, del modelado al texturizado, desarrollado íntegramente en Blender."}},
 {slug:"moles-defense",title:"Moles Defense",
  meta:{en:"Tower defense game · 3D models, environment & animation · Blender",
        es:"Videojuego tower defense · Modelos 3D, entorno y animación · Blender"},
  d:{en:"A tower defense game set on a circular map, where waves of moles emerge from the center and advance toward the outer barrier. Players must position their defenses strategically to stop them. I created the 3D models, built the environment and animated the characters in Blender.",
     es:"Videojuego tower defense ambientado en un mapa circular, donde oleadas de topos emergen del centro y avanzan hacia la barrera exterior. El jugador debe colocar sus defensas de forma estratégica para detenerlos. Creé los modelos 3D, construí el entorno y animé los personajes en Blender."}},
 {slug:"murder-by-death",title:"Murder By Death",
  meta:{en:"Mystery game, released on Steam · 3D models · Blender",
        es:"Juego de misterio, publicado en Steam · Modelos 3D · Blender"},
  d:{en:"A murder mystery set in 1930s England and released on Steam. Players investigate a crime in a mansion, question suspects and make key decisions to uncover the truth before Scotland Yard arrives. I created the 3D models using Blender.",
     es:"Misterio de asesinato ambientado en la Inglaterra de los años 30 y publicado en Steam. Los jugadores investigan un crimen en una mansión, interrogan a los sospechosos y toman decisiones clave para descubrir la verdad antes de que llegue Scotland Yard. Creé los modelos 3D con Blender."}}
];
const projectsGames = [
 {slug:"borealis",title:"Borealis",
  meta:{en:"First-person PC game · Programming · Unreal Engine",
        es:"Videojuego en primera persona para PC · Programación · Unreal Engine"},
  d:{en:"A first-person PC experience in which the player travels through different worlds collecting colored prisms to restore the aurora borealis to the sky. I was responsible for the gameplay programming, developed in Unreal Engine.",
     es:"Experiencia en primera persona para PC en la que el jugador viaja por distintos mundos recogiendo prismas de colores para devolver la aurora boreal al cielo. Me encargué de la programación de la jugabilidad, desarrollada en Unreal Engine."}},
 {slug:"ghosts-whispers",title:"Ghosts' Whispers",
  meta:{en:"Pixel art mystery & puzzle game · Programming · GDevelop",
        es:"Juego de misterio y puzles en pixel art · Programación · GDevelop"},
  d:{en:"A pixel art mystery game built around puzzle solving, developed in GDevelop. I programmed all the mechanics and integrated the narrative and art assets provided by the team.",
     es:"Juego de misterio en pixel art centrado en la resolución de puzles, desarrollado en GDevelop. Programé todas las mecánicas e integré los recursos narrativos y artísticos aportados por el equipo."}},
 {slug:"land-between-rivers",title:"Land Between Rivers",
  meta:{en:"Third-person exploration & puzzle demo · Modeling & development · Unity",
        es:"Demo de exploración y puzles en tercera persona · Modelado y desarrollo · Unity"},
  d:{en:"A third-person exploration and puzzle demo set in an archaeological museum dedicated to Mesopotamia, where the player examines the exhibits and solves puzzles. I modeled every object and developed the full demo in Unity.",
     es:"Demo de exploración y puzles en tercera persona ambientada en un museo arqueológico dedicado a Mesopotamia, donde el jugador examina las piezas expuestas y resuelve puzles. Modelé todos los objetos y desarrollé la demo completa en Unity."}}
];

const UI = {
 en:{
  title_home:"Ian Aviñó | 3D Artist & Game Developer", title_portfolio:"Portfolio | Ian Aviñó", title_about:"About | Ian Aviñó", title_contact:"Contact | Ian Aviñó",
  desc:"Portfolio of Ian Aviñó, 3D artist and game developer. Building worlds, bringing them to life.",
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
  contact_p:"Want to work together or just say hi? Write to me."
 },
 es:{
  title_home:"Ian Aviñó | Artista 3D y Game Developer", title_portfolio:"Portfolio | Ian Aviñó", title_about:"Sobre mí | Ian Aviñó", title_contact:"Contacto | Ian Aviñó",
  desc:"Portfolio de Ian Aviñó, artista 3D y game developer. Construyendo mundos y dándoles vida.",
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
  contact_p:"¿Quieres trabajar conmigo o simplemente saludar? Escríbeme."
 }
};

const EXTS=['jpg','jpeg','png','webp'];
function loadImg(base,ph,host){
  const im=new Image(); let i=0;
  im.alt=''; im.loading='lazy';
  im.onload=()=>ph.remove();
  im.onerror=()=>{ i++; if(i<EXTS.length) im.src=base+'.'+EXTS[i]; else im.remove(); };
  im.src=base+'.'+EXTS[0];
  host.appendChild(im);
}
function slot(cls,base,label){
  const s=document.createElement('div'); s.className='slot '+cls;
  const ph=document.createElement('div'); ph.className='ph'; ph.textContent=label; s.appendChild(ph);
  loadImg(base,ph,s); return s;
}

/* Language: functions that refresh each translated text */
const binds=[];
function render(list,host,groupKey){
  const h=document.createElement('h3'); h.className='group'; host.appendChild(h);
  binds.push(l=>{h.textContent=UI[l][groupKey];});
  list.forEach(p=>{
    const art=document.createElement('article'); art.className='project';
    const g=document.createElement('div'); g.className='gal';
    g.appendChild(slot('big',`media/${p.slug}-1`,`Add media/${p.slug}-1`));
    for(let n=2;n<=3;n++) g.appendChild(slot('',`media/${p.slug}-${n}`,`Add media/${p.slug}-${n}`));
    const t=document.createElement('h4'); t.textContent=p.title;
    const m=document.createElement('p'); m.className='meta';
    const d=document.createElement('p'); d.className='d';
    binds.push(l=>{m.textContent=p.meta[l]; d.textContent=p.d[l];});
    art.append(g,t,m,d); host.appendChild(art);
  });
}

function applyLang(l,save){
  if(save){ try{localStorage.setItem('lang',l);}catch(e){} }
  const u=UI[l];
  document.documentElement.lang=l;
  document.title=u['title_'+(document.body.dataset.page||'home')];
  const md=document.querySelector('meta[name="description"]');
  if(md) md.setAttribute('content',u.desc);
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=u[el.dataset.i18n]; });
  binds.forEach(f=>f(l));
  document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===l)));
}
function initialLang(){
  try{ const s=localStorage.getItem('lang'); if(s==='es'||s==='en') return s; }catch(e){}
  return (navigator.language||'en').toLowerCase().startsWith('es') ? 'es' : 'en';
}

/* Build only what the current page has */
const av=document.getElementById('avatar');
if(av){
  const ph=document.createElement('div'); ph.className='ph'; ph.textContent='Add media/ian';
  av.appendChild(ph); loadImg('media/ian',ph,av);
}
const p3d=document.getElementById('p3d');
if(p3d) render(projects3d,p3d,'g3d');
const pg=document.getElementById('pgames');
if(pg) render(projectsGames,pg,'ggames');
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang,true)));
applyLang(initialLang(),false);
