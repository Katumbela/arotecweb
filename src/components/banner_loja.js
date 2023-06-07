import React from 'react';
import '../css/banner_loja.css'
import { NavLink } from 'react-router-dom';
import arobot from '../imgs/bann_kit.gif'
import { Fade } from 'react-awesome-reveal';

const BannerLoja = () => {
    return (
  <div className='destaque_loja container text-center'>
    <div className="text-start">

        <Fade  direction="up">
        <h1 className='text-dark'>Loja Arotec </h1>
        </Fade>
 <p className='text-secondary'>Dispositivos e eletrônicos disponíveis para desenvolvimento e suporte de projetos. De componentes eletrônicos a dispositivos montados.</p>
 <NavLink to="/pt/loja" className="navlink">
 <button className="btn bb btn-outline-primary"> <i className="bi bi-shop"></i> Ver Todos Produtos</button>
 </NavLink>
    </div>


        <div className="">
           
           <NavLink className="navlink" to="/pt/produtos/store/3">
                <div className="item">
                    <div className="card_prod">
                        <div className="card-header">
                            <img src={arobot} alt="pequeno engenheiro" />
                        </div>
                        <div className="corpo-loja text-start">
                            <b className='b'>Kit Arobot</b>
                            <div className="d-flex">
                             
                            </div>
                            <p className='preco'>
                                <b> 29.000 Kz</b>
                            </p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>

  </div>
)
    }

export default BannerLoja;
