import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

const WHATSAPP = "50660667312";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="service-page">
        <p className="eyebrow">SPECIAL THINGS</p>
        <h1>Servicio no encontrado</h1>
        <Link className="button button-gold" to="/">
          Volver al inicio
        </Link>
      </main>
    );
  }

  const message = encodeURIComponent(
    `Hola, Special Things. Me gustaría solicitar información y una cotización para: ${service.title}.`,
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${message}`;

  return (
    <main className="service-page">
      <header className="service-page-header">
        <Link to="/" className="service-brand">
          <img src="/images/logo.jpg" alt="Special Things" />
        </Link>

        <Link className="text-link" to="/#servicios">
          Ver todos los servicios ↗
        </Link>
      </header>

      <section className="service-page-hero">
        <img src={service.image} alt={service.title} />
        <div className="service-page-overlay" />

        <div className="service-page-content">
          <p className="eyebrow eyebrow-light">
            SPECIAL THINGS · COSTA RICA
          </p>

          <h1>{service.title}</h1>
          <p>{service.shortDescription}</p>

          <a
            className="button button-gold"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar cotización ↗
          </a>
        </div>
      </section>

      <section className="service-page-intro section-pad">
        <p className="eyebrow">UN SERVICIO A TU MEDIDA</p>
        <h2>
          Cada detalle cuenta<span>.</span>
        </h2>
        <p>{service.description}</p>
      </section>

      <section className="service-page-examples section-pad">
        <p className="eyebrow">POSIBILIDADES</p>
        <h2>Exploremos tu idea.</h2>

        <div className="service-example-grid">
          {service.examples.map((example, index) => (
            <article className="service-example" key={example}>
              <span>0{index + 1}</span>
              <h3>{example}</h3>
            </article>
          ))}
        </div>

        <p className="service-disclaimer">
          Los servicios se definen según las necesidades de cada evento.
          Consulta la disponibilidad y las opciones al solicitar tu cotización.
        </p>

        <a
          className="button button-gold"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Hablemos de tu evento ↗
        </a>
      </section>

      <footer className="service-page-footer">
        <Link to="/">Special Things</Link>
        <span>Celebraciones con propósito.</span>
      </footer>
    </main>
  );
}