import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const CardCurso = ({ c }) => {


    const { id, curso, preco, duracao, lastUpdate, img } = c;

    return (
                <NavLink title='Clique para ver o curso' className=" navlink col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2" to={"/academia/curso/arotec/" + id}>
                        <div className="card_cursos w-100 card-hover">
                            <div style={{background:'url('+ img+') center center', backgroundSize:'cover', backgroundRepeat:'no-repeat', height: '9em'}} className="card-headerr">
                                {/* <img src={img} alt="pequeno engenheiro" /> */}
                            </div>
                            <div className="corpo-curso w-100 text-start">
                                <br />
                                <b className='b' style={{fontSize:'16px'}}>{curso}</b><br />
                                <span className="spa"><i className="bi bi-watch"></i> {duracao}</span>
                                <p className='preco'>
                                    <b> {preco}</b>
                                </p>
                            </div>
                        </div>
                </NavLink>
           

    );
}

export default CardCurso;


