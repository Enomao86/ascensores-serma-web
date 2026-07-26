import { Building2, Cog, Droplets, DoorOpen, Gauge, Wrench } from "lucide-react";
const data=[
  {title:"Mantenimiento",text:"Planes preventivos y correctivos para ascensores residenciales y comerciales.",icon:Building2,img:"/mant.png"},
  {title:"Reparaciones",text:"Diagnóstico y resolución de fallas mecánicas, eléctricas y electrónicas.",icon:Wrench,img:"/reparaciones.png"},
  {title:"Modernizaciones",text:"Actualización de maniobras y componentes para mejorar seguridad y confiabilidad.",icon:Cog,img:"/modern.png"},
  {title:"Bombas de agua",text:"Mantenimiento e instalación de equipos elevadores y presurizadores.",icon:Droplets,img:"/bombas.png"},
  {title:"Portones automáticos",text:"Servicio técnico para portones corredizos, levadizos y batientes.",icon:DoorOpen,img:"/porton.png"},
  {title:"Inspecciones",text:"Relevamientos técnicos e informes claros para administradores y consorcios.",icon:Gauge,img:"/inspecciones.png"}
];
export function Services(){return <section id="servicios" className="section services"><div className="container"><div className="section-title"><span>NUESTROS SERVICIOS</span><h2>Soluciones integrales<br/>para su tranquilidad</h2></div><div className="service-grid">{data.map(({title,text,icon:Icon,img})=><article className="service-card" key={title}><div className="service-photo" style={{backgroundImage:`url(${img})`}}/><div className="service-body"><Icon/><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>}
