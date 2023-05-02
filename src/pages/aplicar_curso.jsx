import React from 'react';
import '../css/destaque.css'
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import BannerPreto from '../components/banner_preto';
import '../css/detalhe.css';
import cursos from './lista_cursos';
import logo from '../imgs/icone.png';
import Accordion from '../components/accordion';

function Aplicar({ cart }) {
    const { id } = useParams();
    const cc = cursos.filter(p => p.id == id);
    console.log(cc);

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

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


                <div className="container">


                    <h3 className='text-primary'>Aplicar para este curso</h3>

                    <hr />
                    <div className="">

                        <b className="text-dark">Preencha o formulário abaixo</b>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="my-2">
                                    <label htmlFor="" className="text-secondary  f-12">Nome <span className="text-danger">*</span></label>
                                    <input type="text" placeholder='Nome completo' className="form-control" />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-secondary f-12">Telefone  <span className="text-danger">*</span></label>
                                    <input type="text" placeholder='900 000 000' className="form-control" />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-secondary f-12">Email <span className="text-danger">*</span></label>
                                    <input type="text" placeholder='Seu email' className="form-control" />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-secondary f-12">Endereço </label>
                                    <input type="text" placeholder='Residência' className="form-control" />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-secondary f-12">Crie uma senha <span className="text-danger">*</span></label>
                                    <div className="d-flex">
                                        <input onChange={handlePasswordChange} value={password} type={showPassword ? "text" : "password"} placeholder='*******' className="form-control" />
                                        <button style={{ background: 'none', border: 'none' }} onClick={toggleShowPassword}>
                                            {showPassword ? <i className='bi bi-eye-slash f-26 text-danger'></i> : <i className='bi text-primary bi-eye f-26'></i>}
                                        </button>
                                    </div>
                                </div>
                                <div className="my-4">
                                    
                                    <button className="btn w-100 btn-outline-primary">
                                        Enviar
                                    </button>
                                    
                                </div>
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

export default Aplicar;
