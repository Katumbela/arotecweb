import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const CardCurso = ({ c }) => {


const {id, curso, preco, duracao, lastUpdate, img} = c;

    return (
        <div className="col-12  col-sm-6 col-md-4 col-lg-3">
          <center>
           
            <NavLink  className="item mx-auto navlink col-12 col-sm-6 col-md-4 col-lg-3"  to={"/academia/curso/arotec/"+ id }>
            <div className="">
                <div className="card_cursos card-hover">
                    <div className="card-headerr">
                        <img src={img} alt="pequeno engenheiro" />
                    </div>
                    <div className="corpo-curso text-start">
                        <span className="spa1">{lastUpdate}</span> <br />
                        <b className='b'>{curso}</b><br />
                        <span className="spa"><i className="bi bi-watch"></i> {duracao}</span>
                        <p className='preco'>
                            <b><i className="bi bi-cash"></i> {preco}</b>
                        </p>
                    </div>
                </div>
            </div>
            </NavLink>
        </center>
           

    </div>

        
    );
}

export default CardCurso;


