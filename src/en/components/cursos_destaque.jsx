import React, { useEffect, useState } from 'react';
import '../css/destaque.css'
import { NavLink } from 'react-router-dom';
import peq_eng from '../imgs/banner-p.png';
import arduino from '../imgs/arduino.jpeg';
import eletronica from '../imgs/eletronica.jpeg';
import OwlCarousel from 'react-owl-carousel';

const Destaque = () => {

    const [use, setUser] = useState([]);

    useEffect(() => {
        // Obtém o valor de 'user' do local storage quando o componente for montado
        const userString = localStorage.getItem('user');
        if(userString) {
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
      <></>
    )
}

export default Destaque;
