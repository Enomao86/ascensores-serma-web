import Image from "next/image";

const clients = [
  {
    name: "Dharma Panificados",
    img: "/logos/dharma_panificados.png",
  },
  {
    name: "Argenchemical",
    img: "/logos/argenchemical.png",
  },
  {
    name: "Esenworld",
    img: "/logos/esen.png",
  },
  {
    name: "Chisap",
    img: "/logos/logo.png",
  },
  {
    name: "Epsilon",
    img: "/logos/logoepsilon_1-2.png",
  },
  {
    name: "Plásticos Sarratea",
    img: "/logos/sarratea.png",
  },
  {
    name: "UnionGood",
    img: "/logos/uniongood.png",
  },
];

function ClientGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="client-group" aria-hidden={hidden}>
      {clients.map((client) => (
        <div
          className="client-logo"
          key={`${client.name}-${hidden ? "copy" : "original"}`}
        >
          <Image
            src={client.img}
            alt={hidden ? "" : `Logo de ${client.name}`}
            width={190}
            height={75}
            className="client-logo-image"
            sizes="190px"
          />
        </div>
      ))}
    </div>
  );
}

export function Clients() {
  return (
    <section
      id="clientes"
      className="clients"
      aria-labelledby="clients-title"
    >
      <div className="container">
        <h2 id="clients-title" className="clients-label">
          Empresas y organizaciones que confían en Ascensores SERMA
        </h2>

        <p className="clients-description">
          Brindamos mantenimiento y asistencia técnica a edificios, consorcios,
          comercios e industrias de CABA y Gran Buenos Aires.
        </p>

        <div
          className="client-window"
          aria-label="Algunos clientes de Ascensores SERMA"
        >
          <div className="client-track">
            <ClientGroup />
            <ClientGroup hidden />
          </div>
        </div>
      </div>
    </section>
  );
}