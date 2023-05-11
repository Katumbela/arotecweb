import peq_eng from '../imgs/peq_eng.jpeg'
import arduino from '../imgs/arduino.jpeg'
import eletronica from '../imgs/ele.jpeg'
import jogo from '../imgs/jogo.jpg'
import python from '../imgs/python.jpeg'
import robm1 from '../imgs/robb1.jpeg'
import print from '../imgs/3d.png'
import app from '../imgs/a_p.jpg'
import mecanica from '../imgs/meca.jpeg'
import sec from '../imgs/sec.webp'
import robm2 from '../imgs/rob1.jpeg'
import web from '../imgs/web.jpg'
import ia from '../imgs/ia2.webp'

const cursos = [
    {
        id: 2021,
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
        id: 2034,
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

