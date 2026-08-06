import { data } from "./data/data";

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

function App() {

  return (
    <>
      <div>
        <img src={data.markBlack} alt="Logo" />
        <nav>
          <a>Início</a>
          <a>Sobre</a>
          <a>Tratamentos</a>
          <a>Contato</a>
        </nav>
        <a href={data.whatsAppLink} target="_blank" rel="noopener noreferrer">
          <img src={whatsappWhite} alt="Ícone do WhatsApp" />
        </a>
      </div>
      <article>
        <h1>{data.name}</h1>
        <h2>A maior clínica de estética em {data.city}</h2>
        <div>
          <button>Ir para o WhatsApp</button>
          <button>Ver Tratamentos</button>
        </div>

        <div>
          <a>
            <img src={whatsappBlack} alt="Ícone do WhatsApp" />
          </a>
          <a>
            <img src={instagramBlack} alt="Ícone do Instagram" />
          </a>
        </div>

        <img src={modelo1} alt="Modelo" />
      </article>

      <article>
        <h3>SOBRE NÓS</h3>
        <h2>Titulo Sobre nós</h2>
        <p>{data.textAboutUs}</p>
        <button>Ver Tratamentos</button>
        <div>
          <div>
            <h4>{data.differential1Title}</h4>
            <p>{data.differential1Description}</p>
          </div>
        </div>
      </article>

      <article>
        <h2>Tratamentos</h2>
        {data.services.map((service) => (
          <div>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
        <button>Ver Todos</button>
      </article>

      <article>
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
          <iframe src={data.mapsLink}></iframe>
          <div>
            <h3>ENVIE UMA MENSAGEM</h3>
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
