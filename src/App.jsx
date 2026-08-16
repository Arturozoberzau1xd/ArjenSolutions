import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'

const PHONE = '527711790029'

const WHATSAPP_MESSAGE =
  'Hola ARJEN, me interesa cotizar una página web para mi negocio.'

const services = [
  {
    icon: '🌐',
    title: 'Sitios web profesionales',
    text: 'Creamos páginas web modernas para negocios, emprendedores y prestadores de servicios.',
  },
  {
    icon: '🎯',
    title: 'Landing pages',
    text: 'Páginas enfocadas en promocionar productos, servicios, campañas y conseguir nuevos clientes.',
  },
  {
    icon: '🛍️',
    title: 'Catálogos para negocios',
    text: 'Muestra productos, servicios, fotografías, precios, ubicación y formas de contacto en un solo lugar.',
  },
  {
    icon: '⚙️',
    title: 'Soluciones a medida',
    text: 'Desarrollamos cada proyecto de acuerdo con las necesidades reales y la identidad de tu negocio.',
  },
]

const benefits = [
  'Diseño adaptable a celular, tablet y computadora',
  'Botones directos a WhatsApp y llamadas',
  'Diseño personalizado para cada negocio',
  'Sitios modernos, rápidos y fáciles de navegar',
  'Información, ubicación y servicios de tu negocio',
  'Atención personalizada durante tu proyecto',
]

const businessTypes = [
  {
    icon: '🏡',
    title: 'Cabañas y alojamientos',
    text: 'Muestra habitaciones, servicios, fotografías, ubicación y contacto.',
  },
  {
    icon: '🏨',
    title: 'Hoteles',
    text: 'Presenta tus instalaciones y facilita que tus huéspedes te contacten.',
  },
  {
    icon: '🍽️',
    title: 'Restaurantes',
    text: 'Publica menú, horarios, ubicación, fotografías y WhatsApp.',
  },
  {
    icon: '🛍️',
    title: 'Comercios',
    text: 'Da a conocer tus productos, servicios y formas de contacto.',
  },
  {
    icon: '🚙',
    title: 'Tours y experiencias',
    text: 'Promociona actividades, recorridos, precios e información para reservar.',
  },
  {
    icon: '🚀',
    title: 'Emprendedores',
    text: 'Dale una imagen profesional a tu proyecto y comienza a tener presencia en internet.',
  },
]

function App() {
  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`

  const phoneUrl = `tel:+${PHONE}`

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="ARJEN inicio">
          <img src="/arjen-logo.png" alt="Logo de ARJEN" />
          <span>ARJEN</span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#negocios">Negocios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a
          className="nav-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Cotizar
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-copy">
            <span className="eyebrow">
              DISEÑO Y DESARROLLO WEB EN HUASCA
            </span>

            <h1>
              Diseño de páginas web en{' '}
              <span>Huasca de Ocampo, Hidalgo.</span>
            </h1>

            <p>
              En ARJEN creamos sitios web modernos, funcionales y adaptados a
              negocios, emprendedores y prestadores de servicios de Huasca y
              sus alrededores.
            </p>

            <p>
              Ayudamos a que tus clientes puedan encontrarte en internet,
              conocer tus servicios, ver tu negocio y contactarte fácilmente
              por WhatsApp o llamada.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Cotizar por WhatsApp
              </a>

              <a className="button button-secondary" href="#servicios">
                Ver servicios
              </a>
            </div>

            <div className="hero-points">
              <span>✓ Diseño responsive</span>
              <span>✓ Atención personalizada</span>
              <span>✓ Hecho a tu medida</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-card">
              <div className="browser-bar">
                <span />
                <span />
                <span />

                <div>ARJEN • Diseño Web</div>
              </div>

              <div className="visual-content">
                <div className="visual-chip">Tu negocio en internet</div>

                <div className="visual-title">
                  Diseño que conecta
                </div>

                <div className="visual-lines">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="visual-buttons">
                  <i />
                  <i />
                </div>
              </div>
            </div>

            <div className="floating-code">&lt;/&gt;</div>
            <div className="floating-link">🔗</div>
            <div className="cursor-shape">➤</div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="section" id="servicios">
          <div className="section-heading">
            <span className="eyebrow">NUESTROS SERVICIOS</span>

            <h2>
              Soluciones web para impulsar tu negocio
            </h2>

            <p>
              Creamos páginas web según lo que realmente necesita tu proyecto,
              desde sitios informativos hasta soluciones personalizadas.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* NEGOCIOS EN HUASCA */}
        <section className="section" id="negocios">
          <div className="section-heading">
            <span className="eyebrow">
              PÁGINAS WEB PARA NEGOCIOS EN HUASCA
            </span>

            <h2>
              Una página web adaptada a tu tipo de negocio
            </h2>

            <p>
              Huasca de Ocampo cuenta con hoteles, cabañas, restaurantes,
              comercios, tours y muchos emprendimientos que pueden aprovechar
              internet para llegar a más clientes.
            </p>
          </div>

          <div className="service-grid">
            {businessTypes.map((business) => (
              <article className="service-card" key={business.title}>
                <div className="service-icon">
                  {business.icon}
                </div>

                <h3>{business.title}</h3>

                <p>{business.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* NOSOTROS */}
        <section className="about section" id="nosotros">
          <div className="about-panel">
            <div className="about-copy">
              <span className="eyebrow">
                ¿POR QUÉ ARJEN?
              </span>

              <h2>
                Un sitio pensado para tu negocio, no una plantilla genérica.
              </h2>

              <p>
                Queremos hacer sencillo el proceso de tener una página web.
                Tú nos cuentas tu idea, negocio o proyecto y nosotros la
                convertimos en una experiencia clara, moderna y atractiva.
              </p>

              <p>
                Trabajamos con negocios y emprendedores de Huasca de Ocampo,
                Hidalgo y sus alrededores que quieran comenzar o mejorar su
                presencia en internet.
              </p>
            </div>

            <div className="benefit-list">
              {benefits.map((benefit) => (
                <div className="benefit" key={benefit}>
                  <span>✓</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO LOCAL / INFORMACIÓN */}
        <section className="section local-section">
          <div className="section-heading">
            <span className="eyebrow">
              DESARROLLO WEB LOCAL
            </span>

            <h2>
              Páginas web para negocios de Huasca de Ocampo
            </h2>

            <p>
              En ARJEN ayudamos a empresas, negocios y emprendedores de Huasca
              de Ocampo a crear una presencia profesional en internet.
            </p>

            <p>
              Podemos desarrollar una página donde tus clientes conozcan tus
              servicios, fotografías, precios, horarios, ubicación, redes
              sociales y puedan comunicarse directamente contigo.
            </p>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="contact section" id="contacto">
          <div className="contact-card">
            <span className="eyebrow">
              HABLEMOS DE TU PROYECTO
            </span>

            <h2>
              ¿Necesitas una página web para tu negocio?
            </h2>

            <p>
              Cuéntanos qué necesitas y te ayudamos a encontrar una opción
              adecuada para tu proyecto y presupuesto.
            </p>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Enviar WhatsApp
              </a>

              <a
                className="button button-secondary"
                href={phoneUrl}
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <strong>ARJEN</strong>

          <span>
            Diseño y desarrollo de páginas web en Huasca de Ocampo, Hidalgo
          </span>
        </div>

        <p>
          © {new Date().getFullYear()} ARJEN. Todos los derechos reservados.
        </p>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar a ARJEN por WhatsApp"
        title="Cotizar por WhatsApp"
      >
        WA
      </a>
    </div>
  )
}

export default App