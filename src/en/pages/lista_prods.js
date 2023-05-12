import ard_nano from '../imgs/ard_nano.webp'
import sensor_r from '../imgs/sensor.webp'
import aro from '../imgs/arobot.png'
import roda from '../imgs/roda.png'
import su from '../imgs/su.jpg'
import uno from '../imgs/uno.png'
import servo from '../imgs/Servo.png'
import jump from '../imgs/jump.jpg'

const produtos = [
    {
        id: 1,
        tit: "Arduino Nano",
        preco: 8000,
        img: ard_nano,
        desc: "The Arduino Nano is a single-board, open-source electronics prototyping platform designed with an Atmel AVR microcontroller with built-in input/output circuitry that can be easily connected to a computer and programmed via the Integrated Development Environment (IDE). Development"
    },
    {
        id: 2,
        tit: "Sensor Ultrasonico",
        preco: 4000,
        img: su,
        desc: "Ultrasonic sensors are ideal for detecting liquids whether they are clear or cloudy. Yellow, purple or red? Ultrasonic sensors detect any color at the same distance. More advantageous compared to diffusion photoelectric sensors that are not immune to the colors of detected objects."
    },
    {
        id: 3,
        tit: "KIT AROBOT",
        preco: 29000,
        img: aro,
        desc: "The AROBOT kit is an educational robot kit designed for kids to learn about robotics and programming. The kit includes a variety of components, including motors, sensors, controllers, and other electronic parts that allow children to build and program their own robot. With the help of a step-by-step guide and an intuitive graphical programming interface, kids can create different robot models and customize their functionality. The AROBOT kit is ideal for children aged 8-14 who want to develop their STEM skills and explore the exciting world of robotics. By assembling and programming their own robot, children can learn about mechanics, electronics, and computer programming while having fun and engaging in creative problem-solving activities. The AROBOT kit is a perfect tool for inspiring the next generation of young innovators and makers.",
    },
    {
        id: 4,
        tit: "Jumpers (M/F)",
        preco: 400,
        img: jump,
        desc: "Jumpers are electrical switches used on boards and some devices, such as hard drives, to enable, regulate, or disable specific system functions that are not accessible via software."
    },
    {
        id: 5,
        tit: "Servo Motor 9g",
        preco: 8000,
        img: servo,
        desc: "O Micro Servo 9g Sg90 é um micro servo motor que possui engrenagens de nylon, muito utilizado em projetos de aeromodelismo e robótica, ele possui ângulos de rotação de 180º e por ter um ótimo custo x benefício, ele é o modelo preferido dos desenvolvedores e hobbystas."
    },
    {
        id: 6,
        tit: "Rodas",
        preco: 800,
        img: roda,
        desc: "We know that tires and wheels are essential for moving almost every type of transport from a simple supermarket trolley to an airplane."

    },
    {
        id: 7,
        tit: "Sensor IR",
        preco: 8.000,
        img: sensor_r,
        desc: "The IR Infrared Obstacle Sensor is a sensor capable of detecting the presence of objects through an IR receiver and an IR emitter, sending and receiving infrared lights and working together with the LM393 comparator C.I."
    },
    {
        id: 8,
        tit: "Arduino UNO",
        preco: 12000,
        img: uno,
        desc: "The Arduino Uno R3 is a board based on the Tmega328 microcontroller (datasheet). It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16MHz crystal oscillator, a USB connection, a power input, an ICSP connection and a reset button."
    },
];

export default produtos