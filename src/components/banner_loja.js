import React from 'react';
import '../css/banner_loja.css'
import { NavLink } from 'react-router-dom';
import arobot from '../imgs/bann_kit.gif'

const BannerLoja = () => {
    return (
  <div className='destaque_loja container text-center'>
    <div className="text-start">

    <h1 className='text-dark'>Loja Arotec </h1>
 <p className='text-secondary'>Dispositivos e eletrônicos disponíveis para desenvolvimento e suporte de projetos. De componentes eletrônicos a dispositivos montados.</p>
 <NavLink to="/loja" className="navlink">
 <button className="btn bb btn-outline-primary"> <i className="bi bi-shop"></i> Ver Todos Produtos</button>
 </NavLink>
    </div>


        <div className="">
           
           <NavLink className="navlink" to="/produtos/kit_arobot">
                <div className="item">
                    <div className="card_prod">
                        <div className="card-header">
                            <img src={arobot} alt="pequeno engenheiro" />
                        </div>
                        <div className="corpo-loja text-start">
                            <b className='b'>Kit AROBOT</b>
                            <div className="d-flex">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-half text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
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
