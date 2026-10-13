
import { useState, type FormEvent, type ReactNode } from "react";
import "./App.css";

const WHATSAPP = "50660667312";
const EMAIL = "specialthing.cr@gmail.com";

const SOCIALS = {
  facebook:
    "https://www.facebook.com/share/1PAnqLHTvh/?mibextid=wwXIfr",
  instagram:
    "https://instagram.com/specialthingscr?psln=ZjQyN2o2aXRjY2Zn",
  tiktok:
    "https://www.tiktok.com/@yosoyraque?_r=1&_t=ZS-9AWuWyrj8AK",
};

const services = [
  {
    number: "01",
    title: "Bodas",
    description:
      "Celebraciones únicas, diseñadas alrededor de su historia.",
    image: "/images/bodas.jpg",
  },
  {
    number: "02",
    title: "Quinceaños",
    description:
      "Un día inolvidable, cuidado hasta el último detalle.",
    image: "/images/quinceanos.jpg",
  },
  {
    number: "03",
    title: "Eventos sociales",
    description:
      "Cumpleaños y ocasiones especiales para recordar.",
    image: "/images/sociales.jpg",
  },
  {
    number: "04",
    title: "Eventos corporativos",
    description:
      "Experiencias profesionales que reúnen e inspiran.",
    image: "/images/corporativos.jpg",
  },
];

const gallery = [
  {
    title: "Celebraciones con intención",
    image: "/images/galeria-01.jpg",
    category: "Eventos sociales",
  },
  {
    title: "Detalles que enamoran",
    image: "/images/galeria-02.jpg",
    category: "Bodas",
  },
  {
    title: "Momentos para recordar",
    image: "/images/galeria-03.jpg",
    category: "Celebraciones",
  },
  {
    title: "Experiencias extraordinarias",
    image: "/images/galeria-04.jpg",
    category: "Corporativos",
  },
];

const steps = [
  {
    number: "01",
    title: "Te escuchamos",
    description:
      "Conocemos tu idea, tus necesidades y lo que quieres transmitir.",
  },
  {
    number: "02",
    title: "Diseñamos contigo",
    description:
      "Proponemos una experiencia adaptada a tu ocasión.",
  },
  {
    number: "03",
    title: "Cuidamos los detalles",
    description:
      "Coordinamos cada elemento para que todo fluya.",
  },
  {
    number: "04",
    title: "Disfrutas el momento",
    description:
      "Tú celebras. Nosotros nos ocupamos del resto.",
  },
];

function WhatsAppLink({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const message = encodeURIComponent(
    "Hola, Special Things. Me gustaría recibir información sobre sus servicios y cotizar un evento."
  );

  return (
    <a
      className={className}
      href={`https://wa.me/${WHATSAPP}?text=${message}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const fields = [
      ["Nombre", form.get("name")],
      ["Tipo de evento", form.get("eventType")],
      ["Fecha aproximada", form.get("date") || "Por definir"],
      ["Cantidad de invitados", form.get("guests") || "Por definir"],
      ["Lugar", form.get("location") || "Por definir"],
      ["Detalles", form.get("details") || "Sin detalles adicionales"],
    ];

    const message =
      "Hola, Special Things. Quisiera solicitar una cotización:\n\n" +
      fields
        .map(([label, value]) => `${label}: ${value}`)
        .join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
  }

  return (
    <main>
      <div className="announcement">
        Creamos momentos que merecen ser recordados
      </div>

      {/* ENCABEZADO */}
      <header className="site-header">
        <a
          href="#inicio"
          className="brand"
          aria-label="Special Things, inicio"
        >
          <img
            src="/images/logo.jpg"
            alt="Special Things"
            className="brand-logo"
          />
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Cerrar" : "Menú"}
          <span>{menuOpen ? "×" : "☰"}</span>
        </button>

        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Navegación principal"
        >
          {[
            ["Inicio", "#inicio"],
            ["Servicios", "#servicios"],
            ["Galería", "#galeria"],
            ["Nosotros", "#nosotros"],
            ["Contacto", "#cotizar"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <WhatsAppLink className="nav-cta">
            Cotizar evento <span>↗</span>
          </WhatsAppLink>
        </nav>
      </header>

      {/* PORTADA */}
      <section className="hero" id="inicio">
        <div
          className="hero-image"
          role="img"
          aria-label="Decoración elegante para un evento especial"
        />

        <div className="hero-shade" />

        <div className="hero-content">
          <p className="eyebrow eyebrow-light">
            <span />
            DISEÑO · PLANIFICACIÓN · EXPERIENCIAS
          </p>

          <h1>
            Momentos únicos.
            <br />
            <em>Detalles eternos.</em>
          </h1>

          <p className="hero-copy">
            Transformamos tus ideas en celebraciones extraordinarias,
            cuidando cada detalle para que solo tengas que disfrutar.
          </p>

          <div className="hero-actions">
            <a className="button button-gold" href="#cotizar">
              Diseñemos tu evento <span>↗</span>
            </a>

            <a className="text-link light-link" href="#galeria">
              Descubrir nuestro trabajo <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>COSTA RICA</span>
          <span>CELEBRACIONES CON PROPÓSITO</span>
          <span>01 — 04</span>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="intro section-pad" id="nosotros">
        <p className="eyebrow">BIENVENIDOS A SPECIAL THINGS</p>

        <div className="intro-grid">
          <h2>
            La diferencia está
            <br />
            en <em>cada detalle.</em>
          </h2>

          <div className="intro-copy">
            <p>
              Creemos que los mejores eventos no solo se ven bonitos:
              se sienten, conectan personas y crean recuerdos que permanecen.
            </p>

            <p>
              Nos encargamos de convertir tu visión en una experiencia
              coherente, especial y cuidadosamente organizada.
            </p>

            <a className="text-link" href="#cotizar">
              Conversemos sobre tu idea <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="services section-pad" id="servicios">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LO QUE HACEMOS</p>
            <h2>
              Celebraciones a tu <em>manera.</em>
            </h2>
          </div>

          <p>
            Soluciones pensadas para cada ocasión, con una atención
            cercana y un acabado impecable.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div
                className="service-image"
                style={{
                  backgroundImage:
                    `linear-gradient(180deg, transparent 45%, rgba(35,32,27,.22)), url("${service.image}")`,
                }}
              >
                <span>{service.number}</span>
              </div>

              <div className="service-info">
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <a
                  href="#cotizar"
                  aria-label={`Cotizar ${service.title}`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MENSAJE DESTACADO */}
      <section className="statement">
        <div className="statement-inner">
          <p className="eyebrow eyebrow-light">
            DE LA IDEA A LA EXPERIENCIA
          </p>

          <h2>
            Tu visión, nuestra pasión.
            <br />
            <em>Un evento inolvidable.</em>
          </h2>

          <WhatsAppLink className="button button-outline">
            Hablemos de tu evento <span>↗</span>
          </WhatsAppLink>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="gallery section-pad" id="galeria">
        <div className="section-heading">
          <div>
            <p className="eyebrow">UNA MIRADA A NUESTRO TRABAJO</p>
            <h2>
              Momentos que <em>inspiran.</em>
            </h2>
          </div>

          <p>
            Cada celebración tiene su propia historia. Estos son
            algunos de los detalles que hacen especial cada experiencia.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <a
              className={`gallery-item gallery-item-${index + 1}`}
              href="#cotizar"
              key={item.image}
            >
              <div
                className="gallery-image"
                style={{
                  backgroundImage:
                    `linear-gradient(180deg, transparent 40%, rgba(35,32,27,.48)), url("${item.image}")`,
                }}
              />

              <div className="gallery-caption">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>

              <span className="gallery-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="process section-pad">
        <p className="eyebrow">ASÍ LO HACEMOS</p>

        <h2>
          Un proceso sencillo.
          <br />
          <em>Un resultado extraordinario.</em>
        </h2>

        <div className="process-grid">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FORMULARIO DE COTIZACIÓN */}
      <section className="quote-section section-pad" id="cotizar">
        <div className="quote-intro">
          <p className="eyebrow">EMPECEMOS A PLANEAR</p>

          <h2>
            Tu próximo gran momento <em>comienza aquí.</em>
          </h2>

          <p>
            Cuéntanos un poco sobre tu evento. Prepararemos tu solicitud
            para que puedas enviárnosla directamente por WhatsApp.
          </p>

          <div className="contact-detail">
            <span>ESCRÍBENOS</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>

          <div className="contact-detail">
            <span>WHATSAPP</span>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              +506 6066-7312
            </a>
          </div>
        </div>

        <form className="quote-form" onSubmit={handleQuoteSubmit}>
          <div className="form-title">
            <span>FORMULARIO DE COTIZACIÓN</span>
            <span>01 / 02</span>
          </div>

          <div className="form-row">
            <label>
              Tu nombre *
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Nombre y apellido"
              />
            </label>

            <label>
              Tipo de evento *
              <select name="eventType" required defaultValue="">
                <option value="" disabled>
                  Seleccionar
                </option>
                <option>Boda</option>
                <option>Quinceaños</option>
                <option>Celebración social</option>
                <option>Evento corporativo</option>
                <option>Otro</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              Fecha aproximada
              <input name="date" type="date" />
            </label>

            <label>
              Número de invitados
              <input
                name="guests"
                type="number"
                min="1"
                placeholder="Ej. 80"
              />
            </label>
          </div>

          <label>
            Lugar del evento
            <input
              name="location"
              placeholder="Ciudad o lugar, si ya lo sabes"
            />
          </label>

          <label>
            Cuéntanos tu idea
            <textarea
              name="details"
              rows={4}
              placeholder="¿Qué tienes en mente? ¿Qué servicios necesitas?"
            />
          </label>

          <button className="button button-dark" type="submit">
            Preparar solicitud en WhatsApp <span>↗</span>
          </button>

          {submitted && (
            <p className="form-note" role="status">
              Si WhatsApp no se abrió, revisa si tu navegador bloqueó
              la ventana emergente e inténtalo de nuevo.
            </p>
          )}

          <p className="form-privacy">
            Podrás revisar y enviar el mensaje desde WhatsApp.
          </p>
        </form>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="faq section-pad">
        <div>
          <p className="eyebrow">PREGUNTAS FRECUENTES</p>

          <h2>
            ¿Tienes dudas?
            <br />
            <em>Hablemos.</em>
          </h2>
        </div>

        <div className="faq-list">
          <details>
            <summary>
              ¿Con cuánto tiempo debo reservar? <span>+</span>
            </summary>
            <p>
              Depende del tipo y tamaño del evento. Escríbenos con tu
              fecha tentativa para revisar las posibilidades.
            </p>
          </details>

          <details>
            <summary>
              ¿Trabajan con eventos corporativos? <span>+</span>
            </summary>
            <p>
              Sí. Podemos conversar sobre actividades empresariales,
              celebraciones de fin de año y otros eventos corporativos.
            </p>
          </details>

          <details>
            <summary>
              ¿Los paquetes tienen precios publicados? <span>+</span>
            </summary>
            <p>
              Trabajamos con cotizaciones personalizadas según el tipo
              de evento, los servicios y las necesidades de cada cliente.
            </p>
          </details>

          <details>
            <summary>
              ¿Puedo solicitar una cotización sin tener todo definido?
              <span>+</span>
            </summary>
            <p>
              Claro. Cuéntanos lo que tienes en mente y te ayudaremos
              a definir los próximos pasos.
            </p>
          </details>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="footer">
        <a href="#inicio" className="brand footer-brand">
          <img
            src="/images/logo.jpg"
            alt="Special Things"
            className="brand-logo"
          />
        </a>

        <p>Creamos momentos que merecen ser recordados.</p>

        <div className="footer-links">
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
          <a href="#cotizar">Cotizaciones</a>

          <a href={SOCIALS.facebook} target="_blank" rel="noreferrer">
            Facebook ↗
          </a>

          <a href={SOCIALS.instagram} target="_blank" rel="noreferrer">
            Instagram ↗
          </a>

          <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer">
            TikTok ↗
          </a>

          <a href={`mailto:${EMAIL}`}>Correo ↗</a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Special Things</span>
          <span>COSTA RICA</span>
          <a href="#inicio">VOLVER ARRIBA ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
