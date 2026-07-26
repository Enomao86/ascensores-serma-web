"use client";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [["Inicio","#inicio"],["Servicios","#servicios"],["Nosotros","#nosotros"],["Clientes","#clientes"],["Contacto","#contacto"]];
export function Header(){
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const on=()=>setScrolled(window.scrollY>40);on();window.addEventListener("scroll",on);return()=>window.removeEventListener("scroll",on)},[]);
  return <header className={`site-header ${scrolled?"scrolled":""}`}>
    <div className="header-glow"/><div className="container header-inner">
      <a href="#inicio" className="brand"><Image src="/logo-serma-oficial.png" alt="Ascensores SERMA" width={1330} height={267} priority /></a>
      <nav className={`main-nav ${open?"open":""}`}>{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}
        <a className="mobile-call" href="tel:+541132878426"><Phone size={18}/>11 3287-8426</a>
      </nav>
      <a className="emergency-button" href="tel:+541132878426"><Phone size={19}/><span><small>GUARDIA 24 HS</small>11 3287-8426</span></a>
      <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Abrir menú">{open?<X/>:<Menu/>}</button>
    </div>
  </header>
}
