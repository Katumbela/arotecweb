import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Card = ({ item, handleClick }) => {


const {id, tit, preco, img} = item;


    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <NavLink className="navlink mx-auto" to={'/en/products/store/'+ id } >
                <div className="item">
                    <div className="card_prod-loja  bg-white px-3 shadow my-3 mx-auto">
                        <div className="card-headerr">
                            <img src={img} alt={tit} />
                        </div>
                        <div className="corpo-lojas text-start">
                            <b className='b'>{tit}</b>
                            <div className="d-flex">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-half text-warning"></i>
                                <i className="bi bi-star text-warning"></i>
                            </div>
                            <p className='preco'>
                                <b><i className="bi bi-cash"></i> {preco} Kz</b>
                            </p>
                        </div>
                    </div>
                </div>
        </NavLink>
    </div>

        
    );
}

export default Card;