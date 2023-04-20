import peq_eng from '../imgs/banner-p.png'
import arduino from '../imgs/arduino.jpeg'
import eletronica from '../imgs/eletronica.jpeg'
import jogo from '../imgs/jogo.jpg'
import python from '../imgs/python.jpeg'
import robm1 from '../imgs/rbm1.jpeg'
import print from '../imgs/3d.png'
import app from '../imgs/a_p.jpg'
import mecanica from '../imgs/mecanica.jpeg'
import sec from '../imgs/sec.webp'
import robm2 from '../imgs/rbm2.jpeg'
import web from '../imgs/web.jpg'
import ia from '../imgs/ia2.webp'

const cursos = [
    {
        id: 2021,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Pequeno Engenheiro",
        duracao: "3 semanas",
        preco: "15.000 Kz / Módulo",
        img: peq_eng,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review: 5
    },
    {
        id: 2022,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Arduino",
        duracao: "4 semanas",
        preco: "30.000 Kz ",
        img: arduino,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review:5
    },
    {
        id: 2023,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Eletrônica",
        duracao: "4 semanas",
        preco: "30.000 Kz",
        img: eletronica,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review:5,
    },
    {
        id: 2024,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Robótica Mód. 1",
        duracao: "4 semanas",
        preco: "30.000 Kz ",
        img: robm1,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review: 5,

    },
    {
        id: 2025,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Robótica Mód. 2",
        duracao: "4 semanas",
        preco: "35.000 Kz ",
        img: robm2,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review:5
    },
    {
        id: 2026,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Mecânica Industrial",
        duracao: "4 semanas",
        preco: "30.000 Kz ",
        img: mecanica,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review: 5
    },
    {
        id: 2027,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Introdução a Cyber Segurança",
        duracao: "1 semana",
        preco: "15.000 Kz ",
        img: sec,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review: 5
    },
    {
        id: 2028,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Criação do Meu primeiro Site",
        duracao: "1 semana",
        preco: "15.000 Kz",
        img: web,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review:5
    },
    {
        id: 2029,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Criação de Jogos em Scracth",
        duracao: "1 semana",
        preco: "15.000 Kz ",
        img: jogo,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review: 5
    },
    {
        id: 2030,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Criação de Aplicativos",
        duracao: "4 semanas",
        preco: "30.000 Kz ",
        img: app,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review: 5
    },
    {
        id: 2031,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Impressão 3D",
        duracao: "1 semana",
        preco: "15.000 Kz ",
        img: print,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review: 5
    },
    {
        id: 2032,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Programação em Python",
        duracao: "4 semanas",
        preco: "30.000 Kz ",
        img: python,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review:5
    },
    {
        id: 2033,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Introdução ",
        duracao: "4 semanas",
        preco: "30.000 Kz ",
        img: arduino,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools: `
        <ul>
        <li>Computador</li>
        <li>Internet Conection</li>
        <li>Projector</li>
        <li>Speaker Volume ON</li>
        </ul>
        `,
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review: `
        <div class='d-flex'>
        <i class'bi bi-star-fill'></i>
        <i class'bi bi-star-fill'></i>
        <i class'bi bi-star-fill'></i>
        <i class'bi bi-star-half'></i>
        <i class'bi bi-star'></i>
        </div>
        `,
        details: `
        <p class='d-flex text-secondary justify-content-between'><span>Duração</span> <span> 1 mês </span></p>
        <hr>
        <p class='d-flex text-secondary justify-content-between'><span>Curso</span> <span> Presencial </span></p>
        `
    },
    {
        id: 2034,
        lastUpdate: "Últ. actualização: 23 jan. 2023",
        curso: "Curso de Inteligencia artificial com Python ",
        duracao: "4 semanas",
        preco: "50.000 Kz ",
        img: ia,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review: 5
    },
];

export default cursos;

