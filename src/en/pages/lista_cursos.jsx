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
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Little Engineer Course",
        duracao: "3 weeks",
        preco: "15.000 Kz / Module",
        img: peq_eng,
        desc: "The small engineer course allows children from 7 to 14 years old to have a good introduction to the world of ctem (science, technologies, engineering and mathematics). The child will have practical experience with various technologies such as robotics, 3d printing, drones and others.",
        tools1: "Computer",
        tools2: "Arobot",
        tools3: "Arduino",
        tools4: "Sensors",
        teacher: "Goreth da Costa Manuel",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2023,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Arduino Course",
        duracao: "4 weeks",
        preco: "30.000 Kz",
        img: arduino,
        desc: "The Robotics Module 1 course gives an introduction to what robotics itself is, focusing on its application and various techniques.",
        tools1: "Slides",
        tools2: "Control Hub",
        tools3: "Battery",
        tools4: "HUB Drive",
        teacher: "Sião Cabeia",
        categoria: "IT & Technology",
        review:5,
    },
    {
        id: 2024,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Robotics Course Mod. 1",
        duracao: "4 weeks",
        preco: "30.000 Kz ",
        img: robm1,
        desc: "The Robotics Module 1 course gives an introduction to what robotics itself is, focusing on its application and various techniques.",
        tools1: "Slides",
        tools2: "Control Hub",
        tools3: "Battery",
        tools4: "HUB Drive",
        teacher: "Sião Cabeia",
        categoria: "IT & Technology",
        review: 5,

    },
    {
        id: 2025,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Robotics Course Mod. 2",
        duracao: "4 weeks",
        preco: "35.000 Kz ",
        img: robm2,
        desc: "preceding module 1, robotics module 2 shows a broader view or success of what module 1 is all about. ",
        tools1: "Varás",
        tools2: "Nuts, Bolts, Wrenches",
        tools3: "Connectors",
        tools4: "Actuators and Sensors",
        teacher: "Sião Cabeia",
        categoria: "IT & Technology",
        review:5
    },
    {
        id: 2026,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Industrial Mechanics Course",
        duracao: "4 weeks",
        preco: "30.000 Kz ",
        img: mecanica,
        desc: "The industrial mechanics and electronics course aims to bring students the mechanical and electronic principles to work in a factory or industry.",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projector",
        tools4: "Other",
        teacher: "",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2027,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Introduction to Cyber ​​Security",
        duracao: "1 week",
        preco: "15.000 Kz ",
        img: sec,
        desc: "Introduction to Cyber Security for kids is a course designed to teach children the basics of online safety and security. It covers topics such as personal information protection, cyberbullying, malware and virus threats, phishing scams, and password management. The course is tailored for children in the age group of 8-12 years and uses interactive methods such as games, quizzes, and real-life examples to engage and educate the students. The aim of the course is to create awareness and promote responsible online behavior among kids while keeping them safe from online threats.",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projector",
        tools4: "Other",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2030,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Creating my first website",
        duracao: "4 weeks",
        preco: "30,000 Kz",
        img: app,
        desc: "A course that teaches the basis behind the creation of websites and gives the necessary knowledge so that the student, at the end of the course, is able to create his own web applications and derivatives",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projector",
        tools4: "VSCode / Android Studio",
        teacher: "João Afonso Katombela",
        category: "IT & Technology",
        review: 5
    },
    {
        id: 2029,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Game Creation Course in Scracth",
        duracao: "1 week",
        preco: "15.000 Kz ",
        img: jogo,
        desc: "A course that enables trainees to develop small games, without having any programming knowledge ",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projector",
        tools4: "Other",
        teacher: "Goreth Manuel",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2030,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Application Creation Course",
        duracao: "4 weeks",
        preco: "30.000 Kz ",
        img: app,
        desc: "A course that teaches the basis behind the creation of applications and gives the necessary knowledge so that the student at the end of the course is able to create their own applications",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projector",
        tools4: "Android Studio/ VSCode",
        teacher: "João Afonso Katombela",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2031,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "3D Printing Course",
        duracao: "1 week",
        preco: "15.000 Kz ",
        img: print,
        desc: "During the 3D printing course the trainees learn to model and print their objects in 3D, learn to use the software to do all the modeling and how to make a print on a 3D printer",
        tools1: "Computer",
        tools2: "3D Printer",
        tools3: "Filament",
        tools4: "Keys",
        teacher: "Jonilson Correia",
        categoria: "IT & Technology",
        review: 5
    },
    {
        id: 2032,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Python Programming Course",
        duracao: "4 weeks",
        preco: "30.000 Kz ",
        img: python,
        desc: "This course is aimed at those who may have some knowledge in the matter and want to deepen their knowledge further and provide support in their projects",
        tools1: "Computer",
        tools2: "slides",
        tools3: "Projector",
        tools4: "Development environment ",
        teacher: "Goreth da Costa Manuel",
        categoria: "IT & Technology",
        review:5
    },
   
    {
        id: 2034,
        lastUpdate: "Last Update: 12 May. 2023",

        curso: "Artificial Intelligence Course with Python",
        duracao: "4 weeks",
        preco: "50.000 Kz ",
        img: ia,
        desc: "The artificial intelligence course provides an introduction to the areas of artificial intelligence with a focus on its application and various techniques such as fuzzy logic, regression.",
        tools1: "Computer",
        tools2: "Internet",
        tools3: "Projector",
        tools4: "Development environment",
        teacher: "",
        categoria: "IT & Technology",
        review: 5
    },
];

export default cursos;

