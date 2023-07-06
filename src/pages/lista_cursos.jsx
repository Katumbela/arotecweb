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
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Curso de Pequeno Engenheiro",
        duracao: "2 semanas/ Módulo",
        preco: "15.000 Kz / Módulo",
        img: peq_eng,
        desc: "O curso pequeno engenheiro permite a crianças dos 7 aos 14 anos ter uma boa introdução ao mundo de ctem (ciência, tecnologias, engenharia e matemáticas).A criança vai ter experencia pratica com várias tecnologias como robótica, impressão 3d, drones e outros.",
        tools1: "Computador",
        tools2: "Arobot",
        tools3: "Arduíno",
        tools4: "Sensores",
        teacher: "Goreth da Costa Manuel",
        categoria: "IT & Tecnologia",
        review: 5
    },
    {
        id: 2022,
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Curso de Robótica módulo 1",
        duracao: "4 semanas",
        preco: "30.000 Kz ",
        img: arduino,
        desc: "O curso de Robotica Modulo 1 dá uma introdução daquilo que é a robotica em sí, com foco em sua aplicação e diversas técnicas.",
        tools1: "Slides",
        tools2: "Control Hub",
        tools3: "Bateria",
        tools4: "HUB Drive",
        teacher: "Sião Cabeia",
        categoria: "IT & Tecnologia",
        review:5
    },
    {
        id: 2023,
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Curso de Robótica módulo 2",
        duracao: "4 semanas",
        preco: "35.000 Kz",
        img: eletronica,
        desc: "antecedido do módulo 1, robótica módulo 2 mostra uma visão mais ampla ou sucede daquilo que é o módulo 1. um curso que visa capacitar os alunos a começarem com desenvolvimento de IA´s caso ainda não tenham conhecimento algum do assunto.",
        tools1: "Varás",
        tools2: "Porcas, parafusos, Chaves",
        tools3: "Conectores",
        tools4: "Atuadores e Sensores",
        teacher: "Sião Cabeia",
        categoria: "IT & Tecnologia",
        review:5
    },
    {
        id: 2024,
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Curso de Arduíno",
        duracao: "4 semanas",
        preco: "30.000 Kz ",
        img: robm1,
        desc: "O curso de Arduino permite os estudantes desenvolverem projetos usando o microntrolador Arduino e da habilidades de uso de diversos sensores.",
        tools1: "Arduino",
        tools2: "Sensores (Hultrassónicos, DHT11, infravermelho, LDR)",
        tools3: "Atuadores (Motores, LEDS, SERVO-MOTORES, Buzzer",
        tools4: "Outrem",
        teacher: "Sião Cabeia",
        categoria: "IT & Tecnologia",
        review: 5,

    },
    {
        id: 2025,
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Curso de Electrônica",
        duracao: "4 semanas",
        preco: "30.000 Kz ",
        img: robm2,
        desc: "O curso de eletrônica e curso pratico que oferece a estudante a habilidade de construir sistemas eletrônicas, usar Bread-boards e se familiarizar com mais diversos sensores.",
        tools1: "Arduíno",
        tools2: "Relés",
        tools3: "Resistores",
        tools4: "Placa de circuito imprensa",
        teacher: "Sião Cabeia",
        categoria: "IT & Tecnologia",
        review:5
    },
    {
        id: 2026,
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Curso de Mecânica e Electrônica Industrial",
        duracao: "4 semanas",
        preco: "30.000 Kz ", 
        img: mecanica,
        desc: "O curso de mecânica e eletrônica industrial visa levar ao alunos os princípios mecânicos e eletrônicos para trabalhar em uma fábrica ou indústria.",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "",
        categoria: "IT & Tecnologia",
        review: 5
    },
    {
        id: 2028,
        lastUpdate: "Últ. actualização: 23 jun. 2023",
        curso: "Curso de Programação em Python",
        duracao: "4 semanas",
        preco: "30.000 Kz",
        img: python,
        desc: "Este curso é direcionado para aqueles que possam ter conhecimento algum na matéria e queiram aprofundar mais o seu conhecimento e dar suporte nos seus projectos",
        tools1: "Computador",
        tools2: "slides",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "Goreth da Costa Manuel",
        categoria: "IT & Tecnologia",
        review:5
    },
    {
        id: 2029,
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Curso de Criação de Jogos em Scracth",
        duracao: "4 semanas",
        preco: "15.000 Kz ",
        img: jogo,
        desc: "Um curso que os capacita os formandos a desenvolver pequenos jogos, sem terem conhecimento algum de programação ",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "Goreth Manuel",
        categoria: "IT & Tecnologia",
        review: 5
    },
    {
        id: 2030,
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Curso de Criação de Aplicativos",
        duracao: "4 semanas",
        preco: "15.000 Kz ",
        img: app,
        desc: "Um curso que enisina a base por tras da criação dos aplicativos e dá o conhecimento necessário para que o formando no fim do curso esteja capacitado de criar os seus próprios aplicativos",
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
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Criacão do meu primeiro site",
        duracao: "4 semanas",
        preco: "30.000 Kz ",
        img: web,
        desc: "Um curso que enisina a base por tras da criação de sites e dá o conhecimento necessário para que o formando no fim do curso esteja capacitado de criar os seus próprios aplicativos web e derivados",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "VSCode / Android Studio",
        teacher: "João Afonso Katombela",
        categoria: "IT & Tecnologia",
        review: 5
    },
    
    {
        id: 2032,
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Curso de Inteligencia artificial com Python ",
        duracao: "4 semanas",
        preco: "50.000 Kz ",
        img: ia,
        desc: "Lorem ipsum doptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computador",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "------",
        categoria: "IT & Tecnologia",
        review: 5
    },
    
    {
        id: 2033,
        lastUpdate: "Últ. actualização: 04 jul. 2023",
        curso: "Curso de Impressão 3D",
        duracao: "1 semana",
        preco: "15.000 Kz ",
        img: print,
        desc: "Durante o curso de impressão 3D os formandos aprendem a modelar e a imprimir os seu objectos em 3D, aprendem a usar o software para fazer toda a modelagem e como fazer uma imprimssão numa impressora 3D",
        tools1: "Computador",
        tools2: "Impressora 3D",
        tools3: "Filamento",
        tools4: "Chaves",
        teacher: "Jonilson Correia",
        categoria: "IT & Tecnologia",
        review: 5
    },
];

export default cursos;

