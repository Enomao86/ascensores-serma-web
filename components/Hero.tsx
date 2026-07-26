"use client";
import { ChevronDown, Mail, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const scenes=[
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=86",
  "https://images.unsplash.com/photo-1757086041879-e8c2aed9cb19?auto=format&fit=crop&w=2000&q=86",
  "https://images.unsplash.com/photo-1771189255360-8785935db0ce?auto=format&fit=crop&w=2000&q=86",
];
const email="mailto:ascensoresserma@gmail.com?subject=Solicitud%20de%20presupuesto%20-%20Ascensores%20SERMA&body=Nombre%3A%0AEmpresa%20o%20consorcio%3A%0ADirecci%C3%B3n%3A%0ATel%C3%A9fono%3A%0AServicio%20solicitado%3A%0ADetalle%3A";
export function Hero(){const [active,setActive]=useState(0);useEffect(()=>{const t=setInterval(()=>setActive(v=>(v+1)%scenes.length),7000);return()=>clearInterval(t)},[]);
return <section id="inicio" className="hero">
  <div className="hero-scenes">{scenes.map((src,i)=><div key={src} className={`hero-scene ${i===active?"active":""}`} style={{backgroundImage:`url(${src})`}}/>)}</div>
  <div className="hero-vignette"/><div className="hero-lines"/>
  <div className="container hero-content">
    <span className="kicker">TECNOLOGÍA · EXPERIENCIA · COMPROMISO</span>
    <h1>Mantenemos<br/><strong>todo en movimiento.</strong></h1>
    <p>Mantenimiento, reparación y modernización de ascensores, bombas de agua y portones automáticos para edificios reales de CABA y GBA.</p>
    <div className="hero-actions"><a className="btn btn-gold" href={email}><Mail/>Solicitar presupuesto</a><a className="btn btn-violet" href="#servicios">Conocer servicios</a></div>
    <div className="hero-proof"><div><ShieldCheck/><span><b>Guardia 24 hs</b>Los 365 días</span></div><div><span className="proof-dot"/><span><b>Cobertura</b>CABA y GBA</span></div><div><span className="proof-dot"/><span><b>Atención directa</b>No dude en llamar</span></div></div>
  </div>
  <a className="scroll-cue" href="#servicios"><ChevronDown/></a>
</section>}
