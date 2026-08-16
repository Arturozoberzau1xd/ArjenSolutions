import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'

const PHONE = '527711790029' // Cambia este número por el tuyo: 52 + 10 dígitos
const WHATSAPP_MESSAGE = 'Hola ARJEN, me interesa cotizar un sitio web.'

const services = [
  {
    icon: '🌐',
    title: 'Sitios web profesionales',
    text: 'Una presencia moderna y clara para mostrar tu negocio, servicios y formas de contacto.',
  },
  {
    icon: '🎯',
    title: 'Landing pages',
    text: 'Páginas enfocadas en promocionar un servicio, campaña, producto o conseguir clientes.',
  },
  {
    icon: '🛍️',
    title: 'Catálogos y negocios',
    text: 'Muestra productos, precios, fotografías, ubicación y contacto en un solo lugar.',
  },
  {
    icon: '⚙️',
    title: 'Soluciones a medida',
    text: 'Diseñamos cada proyecto de acuerdo con la identidad y necesidades reales de tu negocio.',
  },
]

const benefits = [
  'Diseño adaptable a celular, tablet y computadora',
  'Botones directos a WhatsApp y llamadas',
  'Secciones personalizadas para tu negocio',
  'Diseño moderno, rápido y fácil de navegar',
]

function App() {
  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  const phoneUrl = `tel:+${PHONE}`

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="ARJEN inicio">
          <img src="/arjen-logo.png" alt="ARJEN" />
          <span>ARJEN</span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Cotizar
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-copy">
            <span className="eyebrow">DISEÑO Y DESARROLLO WEB</span>
            <h1>
              Tu negocio merece una presencia <span>profesional en internet.</span>
            </h1>
            <p>
              En ARJEN creamos sitios web modernos, funcionales y adaptados a tu negocio para que
              tus clientes puedan encontrarte, conocer tus servicios y contactarte fácilmente.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
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
                <div>arjen.mx</div>
              </div>
              <div className="visual-content">
                <div className="visual-chip">Tu negocio online</div>
                <div className="visual-title">Diseño que conecta</div>
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

        <section className="section" id="servicios">
          <div className="section-heading">
            <span className="eyebrow">LO QUE HACEMOS</span>
            <h2>Soluciones web para impulsar tu idea</h2>
            <p>Empezamos simple y construimos únicamente lo que realmente necesita tu proyecto.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="nosotros">
          <div className="about-panel">
            <div className="about-copy">
              <span className="eyebrow">¿POR QUÉ ARJEN?</span>
              <h2>Un sitio pensado para tu negocio, no una plantilla genérica.</h2>
              <p>
                Queremos que tener una página web sea sencillo. Tú nos cuentas tu idea y nosotros la
                convertimos en una experiencia clara, atractiva y lista para recibir clientes.
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

        <section className="contact section" id="contacto">
          <div className="contact-card">
            <span className="eyebrow">HABLEMOS DE TU PROYECTO</span>
            <h2>¿Tienes una idea para tu sitio web?</h2>
            <p>
              Cuéntanos qué necesitas y te ayudamos a elegir una opción adecuada para tu negocio y presupuesto.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Enviar WhatsApp
              </a>
              <a className="button button-secondary" href={phoneUrl}>
                Llamar ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <strong>ARJEN</strong>
          <span>Diseño y desarrollo web</span>
        </div>
        <p>© {new Date().getFullYear()} ARJEN. Todos los derechos reservados.</p>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        WA
      </a>
    </div>
  )
}

export default App
