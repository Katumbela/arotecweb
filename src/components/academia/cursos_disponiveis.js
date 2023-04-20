import React from 'react';
import './cursos.css'
import cursos from '../../pages/lista_cursos';
import CardCurso from './card_curso';

const Cursos = () => {
    return (
  <div className='cursos container text-center'>
    <div className="">

    <h1 className='text-primary'>Nossos Cursos </h1>
 <p className='text-secondary f-12'>Cursos disponíveis presencialmente nas academias AROTEC e on-line em nossa plataforma</p>
 
    </div>


        <div className="mt-4">
            <div className='row'>
               
            {
            cursos.map((course) => (
                <CardCurso key={course.id} c={course}/>
                )
            )
          }
               
            </div>
        </div>

  </div>
)
    }

export default Cursos;