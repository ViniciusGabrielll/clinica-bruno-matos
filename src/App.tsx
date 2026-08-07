import { data } from "./data/data";

import styles from "./App.module.css";

import { FaHeart } from "react-icons/fa";

import whatsappWhite from "./assets/icons/whatsappWhite.svg";
import whatsappBlack from "./assets/icons/whatsappBlack.svg";
import instagramBlack from "./assets/icons/instagramBlack.svg";
import modelo1 from "./assets/images/modelo1.png";
import modelo2 from "./assets/images/modelo2.png";

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
          <button className={styles.lightBtn}>Ver Tratamentos</button>
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
            <h2>Titulo Sobre nós</h2>
          </div>
          <p>{data.textAboutUs}</p>
          <div>
            <button className={styles.lightBtn}>Ver Tratamentos</button>
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
        {data.services.map((service) => (
          <div key={service.title}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
        <button>Ver Todos</button>
      </article>

      <article id="contato">
        <section>
          <form>
            <h3>ENVIE UMA MENSAGEM</h3>
            <input type="text" placeholder="Nome Completo" />
            <select name="servico" id="servico">
              {data.services.map((service) => (
                <option key={service.title} value={service.title}>{service.title}</option>
              ))}
              <option key="outro" value="outro">Outro</option>
            </select>
            <textarea placeholder="Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
          <img src={modelo2} alt="Modelo" />
        </section>

        <section>
          <iframe src={data.mapsLink} title="Localização da clínica no mapa" loading="lazy"></iframe>
          <div>
            <h3>FALE CONOSCO</h3>
            <h2>Saiba mais sobre nós</h2>
            <p>Agende sua avaliação ou tire suas dúvidas. Nossa equipe está pronta para te atender com atenção e exclusividade.</p>
            <div>
              <a href={data.whatsAppLink} target="_blank" rel="noopener noreferrer">
                <img src={whatsappPrimaryColor} alt="Ícone do WhatsApp" />
                <div>
                  <h5>Telefone / WhatsApp</h5>
                  <h4>{data.number}</h4>
                </div>
              </a>
              <a href={data.instagramLink} target="_blank" rel="noopener noreferrer">
                <img src={instagramPrimaryColor} alt="Ícone do Instagram" />
                <div>
                  <h5>Instagram</h5>
                  <h4>@{data.instagram}</h4>
                </div>
              </a>
              <div>
                <img src={businessHoursPrimaryColor} alt="Ícone de Horário" />
                <div>
                  <h5>Horário de Funcionamento</h5>
                  <h4>{data.businessHours}</h4>
                </div>
              </div>
              <div>
                <img src={mapsPrimaryColor} alt="Ícone de Localização" />
                <div>
                  <h5>Endereço</h5>
                  <h4>{data.location}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <footer>
        <div>
          <div>
            <p>{data.textAboutUs}</p>
          </div>
          <div>
            <h3>Links <br /> Rápidos —</h3>
            <a>Início</a>
            <a>Sobre</a>
            <a>Tratamentos</a>
            <a>Contato</a>
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
        <div>
          <img src={data.markWhite} alt="Logo" />
          <span>© 2026 {data.name}.<br /> Feito com <FaHeart /></span>
        </div>

      </footer >
    </>
  )
}

export default App
