import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
import { useEffect } from 'react';


const Destaque = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Little Engineer Course',
      image: peq_eng,
      update: 'Last Update: Jan 23, 2023',
      duration: '3 weeks',
      price: '15.000 AOA',
      link: '/en/academy/course/arotec/2021'
    },
    {
      title: 'Arduino Course',
      image: arduino,
      update: 'Last Update: Jun 06, 2023',
      duration: '4 weeks',
      price: '30.000 AOA',
      link: '/en/academy/course/arotec/2023'
    },
    {
      title: 'Industrial Mechanics Course',
      image: mecanica,
      update: 'Last Update: Jun 06, 2023',
      duration: '3 weeks',
      price: '30.000 AOA',
      link: '/en/academy/course/arotec/2026'
    },
    // Adicione os outros slides aqui
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const [use, setUser] = useState([]);

  useEffect(() => {
    // Obtém o valor de 'user' do local storage quando o componente for montado
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
    }
    else {
      const userData = {
        name: '',
        email: '',
        pictureUrl: '',
        tel: '',
      }
      setUser(userData);
    }
  }, []);


  return (
    <div className="carousel container">
      <div className="text-start">

<h1 claxssName='text-primary'>Explore courses at the academy </h1>
<p className='text-secondary'>{use.name != '' ? use.name + ' veja os' : ""} Courses available in person at arotec academies and online on our platform.</p>
<NavLink to="/en/academy" className="navlink">
  <button className="btn btn-outline-primary bb"> <i className="bi bi-mortarboard"></i> GO TO ACADEMY</button>
</NavLink>
<br />
<br />
<br />
</div>
      <div className="slide-container d-flex gap-3">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <NavLink to={slide.link} className="link">
              <div className="card_curso card-hover">
                <div className="card-header">
                  <img src={slide.image} alt={slide.title} />
                </div>
                <div className="corpo-curso text-start">
                  <span className="spa1">{slide.update}</span> <br />
                  <b className='b'>{slide.title}</b><br />
                  <span className="spa"><i className="bi bi-watch"></i> {slide.duration}</span>
                  <p className='preco'>
                    <b>{slide.price}</b>
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="controls">
      
      </div>
      <br /><br />
    </div>
  );
};

export default Destaque;
