import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/criar_conta.css';
import logo from '../imgs/logo.png'

const CriarConta = () => {

   return(
    <div className="c body">
        <div className="row w-100">
            <div className="col-12 autoo col-md-6 col-xl-6 col-xxl-6 luanda">
                    <div className="">
                    <img src={logo} style={{height: '3em'}} alt="Logo Arotec" /> <br />
                    <span className="text-white">Angola Robotica e Tecnologia</span>
                    </div>
            </div>
            <div className="col-12 col-md-6 autoo col-xl-6 col-xxl-6 ">
                <div className=" my-auto pb-4 form">
                    <div className="bg-primary  py-2 w-100">
                    <center><img src={logo} style={{height: '1.8em'}} alt="Logo Arotec" /> <br /></center>
                    </div>
                   <div className="container pe-3 pt-2 ps-3">
                   <center><h3 className="text-primary mx-auto">Crie uma conta</h3></center>
                    <div >
                        <label htmlFor="" className='text-secondary f-12'>Nome Completo</label>
                        <input type="email" placeholder='Seu nome' name="" id="" className="form-control" />
                        
                    </div>
                    <div  className='mt-3'>
                        <label htmlFor="" className='text-secondary f-12'>Telefone</label>
                        <input type="email" placeholder='900 000 000' name="" id="" className="form-control" />
                        
                    </div >
                    <div  className='mt-3'>
                        <label htmlFor="" className='text-secondary f-12'>E-mail</label>
                        <input type="email" placeholder='Seu email' name="" id="" className="form-control" />
                        
                    </div >
                    <div className='mt-3'>

                    <label htmlFor="" className='text-secondary f-12'>Palavra passe</label>
                        <input type="email" placeholder='Palavra passe' name="" id="" className="form-control" />
                    </div>
                    <div className="mt-4">
                        <button className="btn w-100 btn-outline-primary">
                            Entrar
                        </button>
                        <br />
                        <center className='mt-2'><span className='f-12'>Já possui uma conta ?</span><NavLink className="mt-2 f-12" to="/login"> faça login</NavLink></center>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
   )
}

export default CriarConta;