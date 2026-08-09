import { data } from "./data/data";
import { useState } from "react";

import styles from "./App.module.css";

import { FaHeart, FaChevronDown, FaStar, FaArrowRight } from "react-icons/fa";

import whatsappWhite from "./assets/icons/whatsappWhite.svg";
import whatsappBlack from "./assets/icons/whatsappBlack.svg";
import instagramBlack from "./assets/icons/instagramBlack.svg";
import modelo1 from "./assets/images/modelo1.webp";
import modelo2 from "./assets/images/modelo2.webp";

import whatsappPrimaryColor from "./assets/icons/whatsappPrimaryColor.svg";
import instagramPrimaryColor from "./assets/icons/instagramPrimaryColor.svg";
import businessHoursPrimaryColor from "./assets/icons/businessHoursPrimaryColor.svg";
import mapsPrimaryColor from "./assets/icons/mapsPrimaryColor.svg";
import { useScrollSpy } from "./hooks/useScrollSpy";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "tratamentos", label: "Tratamentos" },
  { id: "contato", label: "Contato" },
];

function App() {

  const activeId = useScrollSpy(navItems.map((item) => item.id));

  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? data.services : data.services.slice(0, 8);

  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !service) {
      alert("Por favor, preencha ao menos o nome e o serviço.");
      return;
    }

    const text = `Olá! Me chamo ${name} e gostaria de agendar o serviço: ${service}.${message ? `\n\nMensagem: ${message}` : ""
      }`;

    const url = `${data.whatsAppLink}&text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <div className={styles.header}>
        <img className={styles.markHeader} src={data.markBlack} alt="Logo" />
        <nav className={styles.nav}>
          <ul>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={activeId === item.id ? styles.active : ""}
              >
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className={styles.whatsAppHeader} href={data.whatsAppLink} target="_blank" rel="noopener noreferrer">
          <img src={whatsappWhite} alt="Ícone do WhatsApp" />
        </a>
      </div>

      <article className={styles.hero} id="inicio">
        <div>
          <h1>{data.name}</h1>
          <h2>A maior clínica de estética em {data.city}</h2>
        </div>
        <div className={styles.heroBtns}>
          <a href={data.whatsAppLink} target="_blank" rel="noopener noreferrer" className={styles.darkBtn}>
            Ir para o WhatsApp
          </a>
          <a href="#tratamentos" className={styles.lightBtn}>Ver Tratamentos</a>
        </div>

        <div className={styles.heroLinks}>
          <a href={data.whatsAppLink} target="_blank" rel="noopener noreferrer">
            <img src={whatsappBlack} alt="Ícone do WhatsApp" />
          </a>
          <a href={data.instagramLink} target="_blank" rel="noopener noreferrer">
            <img src={instagramBlack} alt="Ícone do Instagram" />
          </a>
        </div>

        <img src={modelo1} alt="Modelo" className={styles.model} />
      </article>

      <div className={styles.sectionSeparator} />

      <article className={styles.aboutUs} id="sobre">
        <img src={data.aboutUsImg} alt="Foto da clínica de estética" />
        <div className={styles.aboutUsContent}>
          <div>
            <h3 className={styles.articleLabel}>SOBRE NÓS</h3>
            <h2>Sua beleza, nosso cuidado</h2>
          </div>
          <p>{data.textAboutUs}</p>
          <div>
            <a href="#contato" className={styles.lightBtn}>Fale conosco</a>
          </div>
        </div>
        <div className={styles.differentials}>
          <div className={styles.differential}>
            <h4>{data.differential1Title}</h4>
            <p>{data.differential1Description}</p>
          </div>
          <div className={styles.differentialDivisor} />
          <div className={styles.differential}>
            <h4>{data.differential2Title}</h4>
            <p>{data.differential2Description}</p>
          </div>
          <div className={styles.differentialDivisor} />
          <div className={styles.differential}>
            <h4>{data.differential3Title}</h4>
            <p>{data.differential3Description}</p>
          </div>
          <div className={styles.differentialDivisor} />
          <div className={styles.differential}>
            <h4>{data.differential4Title}</h4>
            <p>{data.differential4Description}</p>
          </div>
        </div>
      </article>

      <article className={styles.services} id="tratamentos">
        <h2>Tratamentos</h2>
        <div className={styles.serviceList}>
          {visibleServices.map((service) => (
            <a
              href={`${data.whatsAppLink}&text=${encodeURIComponent(
                `Olá! Gostaria de agendar o tratamento: ${service.title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.serviceCard}
              key={service.title}
            >
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span>Agendar via WhatsApp</span>
            </a>
          ))}
          {data.services.length > 8 && !showAll && (
            <div className={styles.servicesGradient} />
          )}
        </div>
        {data.services.length > 8 && (
          <button
            className={styles.darkBtn}
            onClick={() => setShowAll((prev) => !prev)}
          >
            <FaChevronDown
              size={18}
              style={{
                transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
                fill: "white"
              }}
            />
            {showAll ? "Ver Menos" : "Ver Todos"}
          </button>
        )}
      </article>

      <article className={styles.feedbacks}>
        {data.feedbacks.map((feedback) => (
          <div className={styles.feedbackCard}>
            <span className={styles.quotationFeedback}>"</span>
            <h3>{feedback.name}</h3>
            <span className={styles.feedbackStars}>{feedback.stars} <FaStar /></span>
            <p>{feedback.comment}</p>
            <a className={styles.feedbackLink} href={feedback.link}>Ver Feedback <FaArrowRight /></a>
          </div>
        ))}
      </article>

      <article className={styles.contact} id="contato">
        <section className={styles.contactSection1}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3>ENVIE UMA MENSAGEM VIA WHATSAPP</h3>

            <input
              type="text"
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              name="servico"
              id="servico"
              required
            >
              <option value="" disabled>
                Escolha um serviço
              </option>
              {data.services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option key="outro" value="outro">
                Outro
              </option>
            </select>

            <textarea
              placeholder="Mensagem (opcional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
          <img className={styles.model} src={modelo2} alt="Modelo" />
        </section>

        <section className={styles.contactSection2}>
          <iframe className={styles.iframe} src={data.mapsLink} title="Localização da clínica no mapa" loading="lazy"></iframe>
          <div className={styles.contactContent}>
            <h3>FALE CONOSCO</h3>
            <h2>Saiba mais sobre nós</h2>
            <p>Agende sua avaliação ou tire suas dúvidas. Nossa equipe está pronta para te atender com atenção e exclusividade.</p>
            <div className={styles.contactCardContainer}>
              <a className={styles.contactCard} href={data.whatsAppLink} target="_blank" rel="noopener noreferrer">
                <div className={styles.contactCardImgContainer}>
                  <img src={whatsappPrimaryColor} alt="Ícone do WhatsApp" />
                </div>
                <div className={styles.contactCardContent}>
                  <h5>Telefone / WhatsApp</h5>
                  <h4>{data.number}</h4>
                </div>
              </a>
              <a className={styles.contactCard} href={data.instagramLink} target="_blank" rel="noopener noreferrer">
                <div className={styles.contactCardImgContainer}>
                  <img src={instagramPrimaryColor} alt="Ícone do Instagram" />
                </div>
                <div className={styles.contactCardContent}>
                  <h5>Instagram</h5>
                  <h4>@{data.instagram}</h4>
                </div>
              </a>
              <div className={styles.contactCard}>
                <div className={styles.contactCardImgContainer}>
                  <img src={businessHoursPrimaryColor} alt="Ícone de Horário" />
                </div>
                <div className={styles.contactCardContent}>
                  <h5>Horário de Funcionamento</h5>
                  <h4>{data.businessHours}</h4>
                </div>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactCardImgContainer}>
                  <img src={mapsPrimaryColor} alt="Ícone de Localização" />
                </div>
                <div className={styles.contactCardContent}>
                  <h5>Endereço</h5>
                  <h4>{data.location}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <p>{data.textAboutUs}</p>
          </div>
          <div>
            <h3>Links <br /> Rápidos —</h3>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#tratamentos">Tratamentos</a>
            <a href="#contato">Contato</a>
          </div>
          <div>
            <h3>Horário de<br /> Funcionamento —</h3>
            <p>{data.businessHours}</p>
          </div>
          <div>
            <h3>Fale <br />Conosco —</h3>
            <a href={data.whatsAppLink} target="_blank" rel="noopener noreferrer">{data.number}</a>
            <a href={data.instagramLink} target="_blank" rel="noopener noreferrer">@{data.instagram}</a>
          </div>
        </div>
        <div className={styles.copywriting}>
          <img src={data.markWhite} alt="Logo" />
          <span>© 2026 {data.name}.<br /> Feito com <FaHeart /></span>
        </div>

      </footer >
    </>
  )
}

export default App
