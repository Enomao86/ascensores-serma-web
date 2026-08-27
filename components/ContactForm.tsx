"use client";

import { FormEvent, useState } from "react";
import {
  Building2,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  Wrench,
} from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "No se pudo enviar el formulario."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("error");
    }
  }

  return (
    <form className="serma-form" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="subject"
        value="Nueva consulta desde la web de Ascensores SERMA"
      />

      <input
        type="hidden"
        name="from_name"
        value="Sitio web Ascensores SERMA"
      />

      {/* Campo antispam */}
      <input
        type="checkbox"
        name="botcheck"
        className="form-botcheck"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="form-heading">
        <span className="eyebrow">SOLICITAR PRESUPUESTO</span>
        <h3>Contanos qué servicio necesitás.</h3>
        <p>Completá los datos y nuestro equipo se comunicará con vos.</p>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>
            <User size={16} />
            Nombre y apellido
          </span>

          <input
            type="text"
            name="nombre"
            placeholder="Ej.: Juan Pérez"
            required
          />
        </label>

        <label className="form-field">
          <span>
            <Building2 size={16} />
            Empresa o consorcio
          </span>

          <input
            type="text"
            name="empresa_consorcio"
            placeholder="Nombre del edificio o empresa"
          />
        </label>

        <label className="form-field">
          <span>
            <Mail size={16} />
            Correo electrónico
          </span>

          <input
            type="email"
            name="email"
            placeholder="nombre@correo.com"
            required
          />
        </label>

        <label className="form-field">
          <span>
            <Phone size={16} />
            Teléfono
          </span>

          <input
            type="tel"
            name="telefono"
            placeholder="11 0000-0000"
            required
          />
        </label>

        <label className="form-field form-field-full">
          <span>
            <MapPin size={16} />
            Dirección del servicio
          </span>

          <input
            type="text"
            name="direccion"
            placeholder="Calle, número y localidad"
          />
        </label>

        <label className="form-field form-field-full">
          <span>
            <Wrench size={16} />
            Servicio solicitado
          </span>

          <select name="servicio" defaultValue="" required>
            <option value="" disabled>
              Seleccioná una opción
            </option>
            <option value="Mantenimiento de ascensores">
              Mantenimiento de ascensores
            </option>
            <option value="Reparación de ascensores">
              Reparación de ascensores
            </option>
            <option value="Modernización de ascensores">
              Modernización de ascensores
            </option>
            <option value="Bombas de agua">Bombas de agua</option>
            <option value="Portones automáticos">
              Portones automáticos
            </option>
            <option value="Inspección técnica">
              Inspección técnica
            </option>
            <option value="Otro">Otro servicio</option>
          </select>
        </label>

        <label className="form-field form-field-full">
          <span>Detalle de la consulta</span>

          <textarea
            name="mensaje"
            rows={6}
            placeholder="Describí brevemente el equipo, la falla o el trabajo que necesitás realizar."
            required
          />
        </label>
      </div>

      <button
        type="submit"
        className="form-submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <LoaderCircle className="form-spinner" />
            Enviando consulta
          </>
        ) : (
          <>
            <Send />
            Enviar solicitud
          </>
        )}
      </button>

      {status === "success" && (
        <div className="form-message form-message-success" role="status">
          <CheckCircle2 />
          Tu consulta fue enviada correctamente. Nos comunicaremos a la brevedad.
        </div>
      )}

      {status === "error" && (
        <div className="form-message form-message-error" role="alert">
          No pudimos enviar la consulta. Probá nuevamente o comunicate con la
          Guardia SERMA.
        </div>
      )}
    </form>
  );
}