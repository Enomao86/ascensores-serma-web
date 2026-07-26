import Image from "next/image";
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Clients } from "../components/Clients";


const email="mailto:ascensoresserma@gmail.com?subject=Solicitud%20de%20presupuesto%20-%20Ascensores%20SERMA&body=Nombre%3A%0AEmpresa%20o%20consorcio%3A%0ADirecci%C3%B3n%3A%0ATel%C3%A9fono%3A%0AServicio%20solicitado%3A%0ADetalle%3A";
const wsp="https://api.whatsapp.com/send?phone=5491132878426&text=Hola%2C%20me%20comunico%20con%20la%20Guardia%2024%20hs%20de%20Ascensores%20SERMA.";
export default function Page(){return <main><Header/><Hero/><Services/>
<section id="nosotros" className="section about"><div className="container about-grid"><div className="about-copy"><span className="eyebrow">QUIÉNES SOMOS</span><h2>Más de 30 años elevando confianza.</h2><p>Ascensores SERMA es una empresa argentina dedicada al mantenimiento, reparación y modernización de ascensores y sistemas electromecánicos. Trabajamos con edificios residenciales, consorcios y empresas, con una atención técnica cercana y responsable.</p><ul><li><CheckCircle2/>Comunicación clara con administradores.</li><li><CheckCircle2/>Mantenimiento orientado a prevenir fallas.</li><li><CheckCircle2/>Guardia técnica todos los días del año.</li></ul></div><div className="about-media"><div className="about-main"/><div className="about-small one"/><div className="about-small two"/></div></div></section>
<Clients/>
<section id="contacto" className="contact">
  <div className="container">
    <div className="contact-intro">
      <span className="eyebrow">CONTACTO</span>

      <h2>Presupuesto, asesoramiento o emergencia.</h2>

      <p>
        Para presupuestos y consultas, completá el formulario. Para una
        emergencia técnica, comunicate con nuestra Guardia 24 horas.
      </p>
    </div>

    <div className="contact-layout">
      <ContactForm />

      <div className="contact-side">
        <div className="contact-side-heading">
          <span className="eyebrow">ATENCIÓN INMEDIATA</span>
          <h3>Guardia Técnica 24 horas</h3>
          <p>
            Estos canales son exclusivamente para emergencias relacionadas con
            ascensores, bombas de agua y portones automáticos.
          </p>
        </div>

        <div className="contact-cards">
          <a href={wsp} target="_blank" rel="noopener noreferrer">
            <MessageCircle />

            <span>
              <small>EMERGENCIAS 24 HORAS</small>
              WhatsApp Guardia
            </span>
          </a>

          <a href="tel:+541132878426">
            <Phone />

            <span>
              <small>LLAMADAS DE EMERGENCIA</small>
              11 3287-8426
            </span>
          </a>

          <div className="contact-address">
            <MapPin />

            <span>
              <small>UBICACIÓN</small>
              Tte. Gral. Eustaquio Frías 334, CABA
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer><div className="container footer-grid"><Image src="/logo-serma-oficial.png" alt="Ascensores SERMA" width={1330} height={267}/><p>Tte. Gral. Eustaquio Frías 334, CABA</p><p>© 2026 Ascensores SERMA</p></div></footer>
<a className="floating-wsp" href={wsp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Guardia 24 horas"><MessageCircle/></a>
</main>}
