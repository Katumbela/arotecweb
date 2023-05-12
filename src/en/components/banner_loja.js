import React from 'react';
import '../css/banner_loja.css'
import { NavLink } from 'react-router-dom';
import arobot from '../imgs/bann_kit.gif'

const BannerLoja = () => {
    return (
  <div className='destaque_loja container text-center'>
    <div className="text-start">

    <h1 className='text-dark'> AROTEC STORE </h1>
 <p className='text-secondary'>Devices and electronics available for project development and support. From electronic components to assembled devices.</p>
 <NavLink to="/en/store" className="navlink">
 <button className="btn bb btn-outline-primary"> <i className="bi bi-shop"></i> View All Products</button>
 </NavLink>
    </div>


        <div className="">
           
           <NavLink className="navlink" to="/en/products/store/3">
                <div className="item">
                    <div className="card_prod">
                        <div className="card-header">
                            <img src={arobot} alt="pequeno engenheiro" />
                        </div>
                        <div className="corpo-loja text-start">
                            <b className='b'> AROBOT KIT</b>
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
