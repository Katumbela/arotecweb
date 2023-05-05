import React, { useEffect, useState } from 'react';
import './cursos.css'
import cursos from '../../pages/lista_cursos';
import CardCurso from './card_curso';

const Cursos = () => {

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
  <div className='cursos container text-center'>
    <div className="">

    <h1 className='text-primary'>Nossos Cursos </h1>
 <p className='text-secondary f-12'>{use.name != '' ? use.name +' veja os' : ""} Cursos disponíveis presencialmente nas academias AROTEC e on-line em nossa plataforma</p>
 
    </div>
<center>

<div className=' row me-1 me-md-0'>
               
               {
               cursos.map((course) => (
                   <CardCurso key={course.id} c={course}/>
                   )
               )
             }
                  
              
           </div>
</center>

  </div>
)
    }

export default Cursos;