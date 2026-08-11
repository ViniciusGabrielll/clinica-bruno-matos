import markBlack from "../../public/markBlack.svg";
import markWhite from "../../public/markWhite.svg";
import aboutUsImg from "../assets/images/aboutUs.webp";

import botox from "../assets/images/services/botox.webp";
import headSpa from "../assets/images/services/headSpa.webp";
import limpezaDePele from "../assets/images/services/limpezadepele.webp";
import massagemRelaxante from "../assets/images/services/massagemrelaxante.webp";

export const data = {
    name: "Bruno Matos",
    city: "Itabaiana",
    location: "Rua Cândido Barbosa de Jesus, 116, Itabaiana, Sergipe, Brazil 49500019",
    mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15096.955185821591!2d-37.440485103117794!3d-10.691195721232313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6cd0e551ecaa1bb3%3A0xa5b4270402d7859c!2sCL%C3%8DNICA%20DR.%20BRUNO%20MATOS%20%7C%20EST%C3%89TICA%20FACIAL%20E%20CORPORAL%20%7C%20BOTOX%20%7C%20PREENCHIMENTO!5e0!3m2!1spt-BR!2sbr!4v1786452166975!5m2!1spt-BR!2sbr",
    number: "+55 (79) 9 9982-7857",
    whatsAppLink: "https://api.whatsapp.com/send?phone=5579999827857",
    instagram: "clinicabrunomatos",
    instagramLink: "https://www.instagram.com/clinicabrunomatos/",
    businessHours: "Segunda a Sexta: 08:00 às 19:00; Sábado: 08:00 ás 12:00; Domingos: Fechado",

    aboutUsImg: aboutUsImg,
    textAboutUs: "Na Clínica de Estética Bruno Matos, cada atendimento é pensado para proporcionar cuidado, confiança e uma experiência única. Com mais de 8 anos de experiência e 500 + procedimentos realizados, nossa trajetória é marcada pela dedicação aos detalhes e pela satisfação de nossos clientes. Em Moreno, oferecemos um atendimento próximo e personalizado, buscando valorizar a beleza de cada pessoa de forma natural e cuidadosa.",

    differential1Title: "+500",
    differential1Description: "Histórias transformadas",
    differential2Title: "+8",
    differential2Description: "Anos de experiência",
    differential3Title: "5,0 / 5,0",
    differential3Description: "Avaliação no google",
    differential4Title: "100%",
    differential4Description: "Satisfação dos clientes",

    markBlack: markBlack,
    markWhite: markWhite,

    services: [
        {
            image: limpezaDePele,
            title: "Limpeza de Pele",
            description: "Higienização profunda da pele para remover impurezas e promover uma aparência mais saudável."
        },
        {
            image: botox,
            title: "Botox",
            description: "Tratamento capilar para reduzir o volume e proporcionar fios mais alinhados e disciplinados."
        },
        {
            image: massagemRelaxante,
            title: "Massagem Relaxante",
            description: "Aplicação de toxina botulínica para suavizar linhas de expressão e proporcionar uma aparência mais harmoniosa."
        },
        {
            image: headSpa,
            title: "Headspa Intense",
            description: "Esfoliação superficial que remove células mortas e proporciona uma pele mais lisa e uniforme."
        },

    ],

    feedbacks: [
        {
            name: "Jaqueline Santos",
            stars: "5",
            comment: "Minha experiência na clínica foi excelente do início ao fim. Ambiente sofisticado, organizado e acolhedor.",
            link: "https://maps.app.goo.gl/7Gk7Fv12opuvgiK47"
        },
        {
            name: "Renata Freitas",
            stars: "5",
            comment: "Experiência incrível no Head Spa! Desde o atendimento das meninas, que são super atenciosas e simpáticas, até o procedimento em si: ",
            link: "https://maps.app.goo.gl/wjj58irPiaLGoJ2Y7"
        },
        {
            name: "Laura Carvalho",
            stars: "5",
            comment: "Foi uma experiência ótima, profissionais de excelência e super atenciosos.",
            link: "https://maps.app.goo.gl/SynYAG6wvkWqkyiW8"
        }
    ]
}