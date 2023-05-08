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
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Little Engineer Course",
        duracao: "3 weeks",
        preco: "15.000 Kz / Módulo",
        img: peq_eng,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2022,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Little Engineer Course",
        duracao: "4 weeks",
        preco: "30.000 Kz ",
        img: arduino,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review:5
    },
    {
        id: 2023,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Electronics Course",
        duracao: "4 weeks",
        preco: "30.000 Kz",
        img: eletronica,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review:5,
    },
    {
        id: 2024,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Robotics Course Mod. 1",
        duracao: "4 weeks",
        preco: "30.000 Kz ",
        img: robm1,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review: 5,

    },
    {
        id: 2025,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Robotics Course Mod. 2",
        duracao: "4 weeks",
        preco: "35.000 Kz ",
        img: robm2,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review:5
    },
    {
        id: 2026,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Industrial Mechanics Course",
        duracao: "4 weeks",
        preco: "30.000 Kz ",
        img: mecanica,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2027,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Introduction to Cyber ​​Security",
        duracao: "1 week",
        preco: "15.000 Kz ",
        img: sec,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2028,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Creating My First Website",
        duracao: "1 week",
        preco: "15.000 Kz",
        img: web,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review:5
    },
    {
        id: 2029,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Game Creation Course in Scracth",
        duracao: "1 week",
        preco: "15.000 Kz ",
        img: jogo,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2030,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Application Creation Course",
        duracao: "4 weeks",
        preco: "30.000 Kz ",
        img: app,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2031,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "3D Printing Course",
        duracao: "1 week",
        preco: "15.000 Kz ",
        img: print,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2032,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Python Programming Course",
        duracao: "4 weeks",
        preco: "30.000 Kz ",
        img: python,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review:5
    },
   
    {
        id: 2034,
        lastUpdate: "Last Update: 23 Jan. 2023",
        curso: "Artificial Intelligence Course with Python",
        duracao: "4 weeks",
        preco: "50.000 Kz ",
        img: ia,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima numquam corporis totam velit dolores, facere ab nisi natus quisquam. Voluptate ipsam eos dolores vero distinctio itaque quod similique inventore nihil",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projectora",
        tools4: "Outrem",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review: 5
    },
];

export default cursos;

