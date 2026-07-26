"use client";
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
  },{
    name: "Plasticos Sarratea",
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
        <div className="client-logo" key={`${client.name}-${hidden}`}>
          <Image
            src={client.img}
            alt={hidden ? "" : `Logo de ${client.name}`}
            width={190}
            height={75}
            className="client-logo-image"
          />
        </div>
      ))}
    </div>
  );
}

export function Clients() {
  return (
    <section id="clientes" className="clients">
      <div className="container">
        <span className="clients-label">
          EMPRESAS Y CONSORCIOS QUE CONFÍAN EN SERMA
        </span>

        <div className="client-window">
          <div className="client-track">
            <ClientGroup />
            <ClientGroup hidden />
          </div>
        </div>
      </div>
    </section>
  );
}