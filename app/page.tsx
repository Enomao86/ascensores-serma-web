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

const email =
  "mailto:ascensoresserma@gmail.com?subject=Solicitud%20de%20presupuesto%20-%20Ascensores%20SERMA&body=Nombre%3A%0AEmpresa%20o%20consorcio%3A%0ADirecci%C3%B3n%3A%0ATel%C3%A9fono%3A%0AServicio%20solicitado%3A%0ADetalle%3A";

const wsp =
  "https://api.whatsapp.com/send?phone=5491132878426&text=Hola%2C%20me%20comunico%20con%20la%20Guardia%2024%20hs%20de%20Ascensores%20SERMA.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ascensoresserma.com.ar/#business",
      name: "Ascensores SERMA",
      url: "https://ascensoresserma.com.ar",
      logo: "https://ascensoresserma.com.ar/logo-serma-oficial.png",
      image: "https://ascensoresserma.com.ar/opengraph-image.png",
      description:
        "Empresa argentina con más de 30 años de experiencia en mantenimiento, reparación y modernización de ascensores, bombas de agua y portones automáticos.",
      telephone: "+54 11 3287-8426",
      email: "ascensoresserma@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tte. Gral. Eustaquio Frías 334",
        addressLocality: "Ciudad Autónoma de Buenos Aires",
        addressRegion: "CABA",
        postalCode: "1414",
        addressCountry: "AR",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Ciudad Autónoma de Buenos Aires",
        },
        {
          "@type": "AdministrativeArea",
          name: "Gran Buenos Aires",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "17:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+54 11 3287-8426",
          contactType: "emergency service",
          availableLanguage: "Spanish",
          areaServed: "AR",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Ascensores SERMA",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mantenimiento de ascensores",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Reparación de ascensores",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Modernización de ascensores",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mantenimiento de bombas de agua",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automatización de portones",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Guardia técnica 24 horas",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ascensoresserma.com.ar/#website",
      url: "https://ascensoresserma.com.ar",
      name: "Ascensores SERMA",
      inLanguage: "es-AR",
      publisher: {
        "@id": "https://ascensoresserma.com.ar/#business",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main>
        <Header />
        <Hero />
        <Services />

        <section id="nosotros" className="section about">
          <div className="container about-grid">
            <div className="about-copy">
              <span className="eyebrow">QUIÉNES SOMOS</span>

              <h2>Más de 30 años elevando confianza.</h2>

              <p>
                Ascensores SERMA es una empresa argentina dedicada al
                mantenimiento, reparación y modernización de ascensores y
                sistemas electromecánicos. Trabajamos con edificios
                residenciales, consorcios y empresas, con una atención técnica
                cercana y responsable.
              </p>

              <ul>
                <li>
                  <CheckCircle2 />
                  Comunicación clara con administradores.
                </li>

                <li>
                  <CheckCircle2 />
                  Mantenimiento orientado a prevenir fallas.
                </li>

                <li>
                  <CheckCircle2 />
                  Guardia técnica todos los días del año.
                </li>
              </ul>
            </div>

            <div className="about-media">
              <div className="about-main" />
              <div className="about-small one" />
              <div className="about-small two" />
            </div>
          </div>
        </section>

        <Clients />

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
                    Estos canales son exclusivamente para emergencias
                    relacionadas con ascensores, bombas de agua y portones
                    automáticos.
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

        <footer>
          <div className="container footer-grid">
            <Image
              src="/logo-serma-oficial.png"
              alt="Ascensores SERMA"
              width={1330}
              height={267}
            />

            <p>Tte. Gral. Eustaquio Frías 334, CABA</p>
            <p>© 2026 Ascensores SERMA</p>
          </div>
        </footer>

        <a
          className="floating-wsp"
          href={wsp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Guardia 24 horas"
        >
          <MessageCircle />
        </a>
      </main>
    </>
  );
}