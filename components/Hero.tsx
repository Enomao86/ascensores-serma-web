"use client";

import { ChevronDown, Mail, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const scenes = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=86",
  "https://images.unsplash.com/photo-1757086041879-e8c2aed9cb19?auto=format&fit=crop&w=2000&q=86",
  "https://images.unsplash.com/photo-1771189255360-8785935db0ce?auto=format&fit=crop&w=2000&q=86",
];

const email =
  "mailto:ascensoresserma@gmail.com?subject=Solicitud%20de%20presupuesto%20-%20Ascensores%20SERMA&body=Nombre%3A%0AEmpresa%20o%20consorcio%3A%0ADirecci%C3%B3n%3A%0ATel%C3%A9fono%3A%0AServicio%20solicitado%3A%0ADetalle%3A";

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % scenes.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="hero-scenes" aria-hidden="true">
        {scenes.map((src, index) => (
          <div
            key={src}
            className={`hero-scene ${index === active ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-lines" aria-hidden="true" />

      <div className="container hero-content">
        <span className="kicker">
          TECNOLOGÍA · EXPERIENCIA · COMPROMISO
        </span>

        <h1>
          Mantenimiento y reparación de ascensores
          <br />
          <strong>en CABA y GBA.</strong>
        </h1>

        <p>
          Más de 30 años brindando mantenimiento, reparación y modernización de
          ascensores, bombas de agua y portones automáticos para edificios,
          consorcios y empresas.
        </p>

        <div className="hero-actions">
          <a className="btn btn-gold" href={email}>
            <Mail />
            Solicitar presupuesto
          </a>

          <a className="btn btn-violet" href="#servicios">
            Conocer servicios
          </a>
        </div>

        <div className="hero-proof">
          <div>
            <ShieldCheck />

            <span>
              <b>Guardia técnica 24 hs</b>
              Los 365 días del año
            </span>
          </div>

          <div>
            <span className="proof-dot" />

            <span>
              <b>Cobertura</b>
              CABA y Gran Buenos Aires
            </span>
          </div>

          <div>
            <span className="proof-dot" />

            <span>
              <b>Atención directa</b>
              Asesoramiento personalizado
            </span>
          </div>
        </div>
      </div>

      <a
        className="scroll-cue"
        href="#servicios"
        aria-label="Ver servicios"
      >
        <ChevronDown />
      </a>
    </section>
  );
}