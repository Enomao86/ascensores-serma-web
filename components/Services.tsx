import {
  Building2,
  Cog,
  Droplets,
  DoorOpen,
  Gauge,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Mantenimiento de ascensores",
    text: "Planes de mantenimiento preventivo y correctivo para ascensores de edificios, consorcios, comercios y empresas.",
    icon: Building2,
    img: "/mant.png",
  },
  {
    title: "Reparación de ascensores",
    text: "Diagnóstico y reparación de fallas mecánicas, eléctricas y electrónicas para recuperar el funcionamiento con seguridad.",
    icon: Wrench,
    img: "/reparaciones.png",
  },
  {
    title: "Modernización de ascensores",
    text: "Actualización de maniobras, tableros y componentes para mejorar la seguridad, confiabilidad y eficiencia de la instalación.",
    icon: Cog,
    img: "/modern.png",
  },
  {
    title: "Bombas de agua",
    text: "Instalación, mantenimiento y reparación de bombas elevadoras, presurizadoras y sistemas de abastecimiento de agua.",
    icon: Droplets,
    img: "/bombas.png",
  },
  {
    title: "Portones automáticos",
    text: "Servicio técnico, automatización y reparación de portones corredizos, levadizos y batientes.",
    icon: DoorOpen,
    img: "/porton.png",
  },
  {
    title: "Inspecciones técnicas",
    text: "Relevamientos e informes técnicos claros para administradores, consorcios, edificios, comercios e industrias.",
    icon: Gauge,
    img: "/inspecciones.png",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="section services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-title">
          <span>NUESTROS SERVICIOS</span>

          <h2 id="services-title">
            Servicios de ascensores, bombas de agua
            <br />
            y portones automáticos
          </h2>

          <p>
            Brindamos mantenimiento, reparaciones, modernizaciones e
            inspecciones técnicas en CABA y Gran Buenos Aires.
          </p>
        </div>

        <div className="service-grid">
          {services.map(({ title, text, icon: Icon, img }) => (
            <article className="service-card" key={title}>
              <div
                className="service-photo"
                style={{ backgroundImage: `url(${img})` }}
                aria-hidden="true"
              />

              <div className="service-body">
                <Icon aria-hidden="true" />

                <h3>{title}</h3>

                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}