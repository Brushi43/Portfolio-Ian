/* ===== ABOUT PAGE: EDIT TEXTS, TIMELINE AND CV HERE =====
   Loads after main.js and reuses its UI object, language binds and applyLang().
   The CV button downloads the PDF of the site's current language (files in /media). */

const CV_FILES = {
  en: 'media/CV-Ian-Avino-EN.pdf',
  es: 'media/CV-Ian-Avino-ES.pdf'
};

const timeline = [
 {date:{en:"2022 – 2026", es:"2022 – 2026"},
  title:{en:"La Salle, Barcelona", es:"La Salle, Barcelona"},
  d:{en:"Bachelor's Degree in Digital Arts.",
     es:"Grado en Artes Digitales."}},
 {date:{en:"2023 – 2024", es:"2023 – 2024"},
  title:{en:"Buba's Adventures", es:"Buba's Adventures"},
  d:{en:"Illustrated a children's story for the project Cuentos para todos, at La Salle.",
     es:"Ilustré un cuento infantil para el proyecto Cuentos para todos, en La Salle."}},
 {date:{en:"2024 – 2025", es:"2024 – 2025"},
  title:{en:"Murder by Death, Cocodrolo Games Studio", es:"Murder by Death, Cocodrolo Games Studio"},
  d:{en:"3D object modeling and environment building. I also contributed to the game's narrative.",
     es:"Modelado de objetos 3D y construcción de entornos. También contribuí a la narrativa del juego."}},
 {date:{en:"2024", es:"2024"},
  title:{en:"Ghosts' Whispers", es:"Ghosts' Whispers"},
  d:{en:"Built the full demo with GDevelop's visual scripting: all the mechanics, plus the integration of the team's narrative and art.",
     es:"Construí la demo completa con el scripting visual de GDevelop: todas las mecánicas, y la integración de la narrativa y el arte del equipo."}},
 {now:true, date:{en:"September 2025 – Present", es:"Septiembre 2025 – Actualidad"},
  title:{en:"iDesigner", es:"iDesigner"},
  d:{en:"Video game programming with Unity and Unreal Engine 5.",
     es:"Programación de videojuegos con Unity y Unreal Engine 5."}},
 {date:{en:"2026", es:"2026"},
  title:{en:"Land Between Rivers", es:"Land Between Rivers"},
  d:{en:"Exploration and puzzle demo. I developed the concept and narrative, modeled and textured the assets, and programmed all the mechanics.",
     es:"Demo de exploración y puzles. Desarrollé el concepto y la narrativa, modelé y texturicé los assets y programé todas las mecánicas."}}
];

Object.assign(UI.en,{
  about1:"I'm Ian Aviñó, a digital artist focused on 3D modeling and game development. I live in Catalonia and I graduated in Digital Arts from La Salle in Barcelona in 2026.",
  about2:"I build my own models and turn them into playable demos and small games. I model and texture in Blender, ZBrush and Photoshop, then bring everything to life in Unity, Unreal Engine 5 or GDevelop, programming the mechanics myself.",
  about3:"I love inventing fictional worlds and bringing them to life, from the first sketch to something you can explore.",
  about4:"I'm looking for a role as a 3D modeler and as a game developer, ideally somewhere I can do both.",
  h2_path:"Background", h2_tools:"Tools", h2_langs:"Languages",
  tg_model:"Modeling & texturing", tg_engines:"Game engines",
  lg_ca:"Catalan: native", lg_es:"Spanish: native", lg_en:"English: B2", lg_fr:"French: B1",
  cv_btn:"Download CV", cta_contact:"Get in touch",
  about_h1:"I invent worlds, then I make them playable."
});
Object.assign(UI.es,{
  about1:"Soy Ian Aviñó, artista digital especializado en modelado 3D y desarrollo de videojuegos. Vivo en Cataluña y me gradué en Artes Digitales en La Salle, Barcelona, en 2026.",
  about2:"Creo mis propios modelos y los convierto en demos jugables y pequeños juegos. Modelo y texturizo en Blender, ZBrush y Photoshop, y luego lo llevo todo a la vida en Unity, Unreal Engine 5 o GDevelop, programando yo mismo las mecánicas.",
  about3:"Me encanta inventar mundos ficticios y darles vida, desde el primer boceto hasta algo que se puede explorar.",
  about4:"Busco un puesto como modelador 3D y como desarrollador de videojuegos, idealmente un lugar donde pueda hacer ambas cosas.",
  h2_path:"Trayectoria", h2_tools:"Herramientas", h2_langs:"Idiomas",
  tg_model:"Modelado y texturas", tg_engines:"Motores de juego",
  lg_ca:"Catalán: nativo", lg_es:"Castellano: nativo", lg_en:"Inglés: B2", lg_fr:"Francés: B1",
  cv_btn:"Descargar CV", cta_contact:"Escríbeme",
  about_h1:"Invento mundos y los hago jugables."
});

(function(){
  const host=document.getElementById('timeline');
  if(host){
    host.textContent='';
    timeline.forEach(it=>{
      const li=document.createElement('li'); li.className='tl-item'+(it.now?' now':'');
      const dt=document.createElement('p'); dt.className='tl-date';
      const rail=document.createElement('span'); rail.className='tl-rail'; rail.setAttribute('aria-hidden','true');
      const body=document.createElement('div'); body.className='tl-body';
      const h=document.createElement('h3'); h.className='tl-title';
      const d=document.createElement('p'); d.className='tl-desc';
      body.append(h,d); li.append(dt,rail,body); host.appendChild(li);
      binds.push(l=>{ dt.textContent=it.date[l]; h.textContent=it.title[l]; d.textContent=it.d[l]; });
    });
  }
  const cv=document.getElementById('cv');
  if(cv) binds.push(l=>{ cv.href=CV_FILES[l]||CV_FILES.en; });
  applyLang(curLang,false);   /* refresh once so the new texts are filled in */
})();
