import React from 'react';
import '../css/destaque.css'
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPreto from '../components/banner_preto';
import '../css/detalhe.css';
import cursos from './lista_cursos';
import logo from '../imgs/icone.png';
import Accordion from '../components/accordion';

function DetalheCurso ({cart}) {
    const {id} = useParams();
    const cc = cursos.filter(p => p.id == id);
    console.log(cc);
    return (
        <>
  <div className='destaque '>
    
  < Header cart={cart} />
        <BannerPreto >
            {cc[0].curso}
        </BannerPreto>
        <br />
        <br />
        <div className="container text-start">
 </div>
        <br />
        
<div className="container">

     
        <div className="row prods-set">
            <div className="col-12 text-start py-3 col-sm-8 col-md-9">
               
               <div className="row">
                    <div className="col-6 col-sm-4 col-md-3">
                        <div  style={{height: '4em', border: '2px solid #0066be' ,width: '4em'}} alt="Banner curso" className='banner-l-curso rounded-circle' ></div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                       <b>Instrutor</b>
                       <p className="text-secondary f-12">{cc[0].teacher}</p>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                       <b>Categoria</b>
                       <p className="text-secondary f-12">{cc[0].categoria}</p>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <b>Avaliações</b>
                        <p>
                            <div className='d-flex'> <i className='bi text-warning bi-star-fill'></i> <i className='bi text-warning bi-star-fill'></i> <i className='bi text-warning bi-star-fill'></i> <i className='bi text-warning bi-star-half'></i> <i className='bi text-warning bi-star'></i> </div>


                            </p>
                    </div>
               </div>
               
                <br />
              <div className="detalhes">
                  <div className="banner">
                    <img src={cc[0].img} alt="Banner curso" className='w-100' />
                  </div>
                  <br />
                  <b>Descrição</b>
                  <p className='text-secondary'>
                    {cc[0].desc}
                  </p>
                  <br />
                  <NavLink to={'/aplicar/'+id} className="btn btn-primary w-100">APLICAR NESTE CURSO</NavLink>
                  <br />
                  <br />
                  <b>Materiais do Curso</b>
                  <p>
                    <ol className='text-secondary'>
                        <li>  {cc[0].tools1}</li>
                        <li>  {cc[0].tools2}</li>
                        <li>  {cc[0].tools3}</li>
                        <li>  {cc[0].tools4}</li>
                    </ol>
                  
                  </p>
<br />
                <b className='mb-2'>FAQ's</b>
                <br />
                <fieldset >
                <div>
                  <Accordion title=" Há descontos em algum curso ?">
                    <p>Infelizmente não há descontos nos cursos, a</p>
                  </Accordion>
                  <Accordion title="É necessario fazer um teste de admissão ? ">
                    <p>Conteúdo do segundo accordion</p>
                  </Accordion>
                  <Accordion title="Posso me matricular como estudante de outra provincia ? ">
                    <p>Conteúdo do segundo accordion</p>
                  </Accordion>
                  <Accordion title="Onde estão localizados ? ">
                    <p>Conteúdo do segundo accordion</p>
                  </Accordion>
                </div>
                </fieldset>
              
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3">
              <NavLink to={'/aplicar/'+id} className="btn btn-primary w-100">APLICAR</NavLink>
              <br />
              <br />
              <b style={{borderLeft: '3px solid #0066be', paddingLeft: '.5rem'}}>Detalhes do curso</b>
              <br />
              <br />
              <div className="ms-2">

              <p className='f-12 text-secondary'>Duração {cc[0].duracao}</p>
              <hr />
              <p className='f-12 text-secondary'>Preço {cc[0].preco}</p>
              <hr />

              <p className='f-12 text-secondary'>Curso Presencial</p>
              </div>
              <br />
              <br />
              <b style={{borderLeft: '3px solid #0066be', paddingLeft: '.5rem'}}>Certificação</b>
              <p className="f-12 ps-2 text-secondary">
                Certificado de aproveitamento de fim de curso. Projecto final ao terminar o curso
              </p>
              <br />
              <p className="text-secondary f-14">Compartilhe este curso</p>
              <div className="d-flex gap-2">
                <a className='rounded-circle' href={'https://www.facebook.com/sharer/sharer.php?u=https://arotec.ao/academia/curso/arotec/'+id} style={{background: '#0066be', height: '2em', width: '2em', color: 'white', display: 'grid', placeItems: 'center'}}>
                    <i className="bi bi-facebook"></i>
                </a>
                <a className='rounded-circle' href="#" style={{background: '#0066be', height: '2em', width: '2em', color: 'white', display: 'grid', placeItems: 'center'}}>
                    <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
        </div>

</div>

<br />
<br />
<br />
<br />


<Footer />
  </div>
        </>
)
    }

export default DetalheCurso;
