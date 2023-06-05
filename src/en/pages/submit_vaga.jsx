
import React, { useState } from 'react';
import '../css/header.css';
import '../css/destaque.css';
import b from '../imgs/icone.png';
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPreto from '../components/banner_preto';
import '../css/detalhe.css';
import vagas from './vagas_list';

function AppVaga(props) {
    const { id } = useParams();
    const { cart, nomee, emaill, handleClick, adicionar, remover } = props;

    const vaga = vagas.filter((p) => p.id == id);
    const [hoveredImage, setHoveredImage] = useState(null);

    document.title = 'Careers and Internships | AROTEC';

    function handleMouseEnter(e) {
        setHoveredImage(e.target.src);
    }

    function handleMouseLeave(e) {
        setHoveredImage(null);
    }


    return (
        <>
            <div className='destaque '>

               
      < Header style={{marginBottom:'5rem'}} nomee={nomee} emaill={emaill} cart={cart} />
     <BannerPreto >
                    {vaga[0].vaga}
                </BannerPreto>
                <br />
                <br />
                <div className="container text-start">

                    <NavLink to={'/pten/carreiras'}><i className="bi bi-arrow-left"></i> Back</NavLink>
                </div>
                <br />
                <br />

                <div className="container">

                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h5 className="text-primary">
                            Apply for vacancy {vaga[0].vaga}

                            </h5>
                            <hr />
                            <span>Form unavailable</span>
                            <center className='my-auto'>
                                <i className="bi bi-exclamation-triangle text-warning f-50"></i>
                                <br />
                                <p className="text-warning">Service currently unavailable, we are updating, come back later!</p>
                            </center>
                        </div>

                        <div className="col-12 col-sm-6">
                            <center className="my-auto">
                            <img src={b} className='w-75 mx-auto ' alt="" />
                            </center>
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

export default AppVaga;
