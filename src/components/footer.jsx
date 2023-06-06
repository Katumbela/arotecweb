import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../pages/firebase';
import Swal from 'sweetalert';
import Loader from './loader';
// import sendEmail from '../pages/server';


function Footer() {
    const [email, setEmail] = useState('');
    const [load, setLoad] = useState(false);

    const alert = (t) => {
        Swal.fire({
            title: 'NewsLetter',
            text: t,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
    }

  const NewsLetter = () => {
    setLoad(true)
    db.collection('newsletter').add({
      email: email,
      dataEnvio: new Date(),
    })
    .then(() => {
      setEmail('');
      setLoad(false);
      toast.success('Seu email foi adicionado a nossa newsletter com sucesso, obrigado!');
    //   sendEmail(email, "NewsLetter Arotec", "Adicionado com sucesso!")
    })
    .catch((error) => {
      setLoad(false);
      toast.error('Erro ao enviar mensagem:' + error);
    }); 
  }
  
    return (
        <div className='bg-dark'>
        <div className='container-lg'>
        <div className=" mt-4 bg-dark footer">
            <div className=" row text-white">
                <div className="col-12 my-2 my-md-1 col-sm-4 col-md-4 text-start">
                    <h5 className="text-white">Contacte nos</h5>
                    <ul>
                        <li>Endereço: Luanda - Angola</li>
                        <li>Phone: +244 938 811 659</li>
                        <li>E-mail:  arotec.info@gmail.com</li>
                    </ul>
                    <div className="d-flex gap-3 ms-4">
                        <a href="https://www.facebook.com/Arotec1/" className="navlink">
                            <i className="bi bi-facebook text-white"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/arotecangola" className="navlink">
                            <i className="bi mx-1 bi-linkedin text-white"></i>
                        </a>
                        <a href="https://www.instagram.com/arotec_ao/" className="navlink">
                            <i className="bi bi-instagram text-white"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCL9FnK9VQGhVowB59P72CjA" className="navlink">
                            <i className="bi ms-1 bi-youtube text-white"></i>
                        </a>
                    </div>
                </div>
                <div className="col-12 my-2 my-md-1 col-sm-4 col-md-4 text-start">
                    <h5 className="text-white">Links Rápidos</h5>
                    <ul>
                        <li><NavLink className="footerlink" to="/pt/academia">Academia</NavLink></li>
                        <li><NavLink className="footerlink" to="/pt/loja">Loja</NavLink></li>
                        <li><NavLink className="footerlink" to="/pt/empresas">Empresas</NavLink></li>
                        <li><NavLink className="footerlink" to="/pt/arotec_robotic_school">Arotec Robotic School</NavLink></li>
                        <li><NavLink className="footerlink" to="/pt/unitel_code_robotica_inscricao">Unitel Code Robótica</NavLink></li>
                        <li><NavLink className="footerlink" to="/pt/carreiras">Carreiras e Estagios</NavLink></li>
                        <li><NavLink className="footerlink" to="/pt/sobre">Sobre a AROTEC</NavLink></li>
                        <li><NavLink className="footerlink" to="/pt/contactar">Contactar</NavLink></li>
                        <li><NavLink className="footerlink" to="/pt/okupalenda">Okupalenda</NavLink></li>
                    </ul> 
                </div>
                <div className="col-12 my-2 my-md-1 col-sm-4 col-md-4 text-start">
                    <h5 className="text-white">Newsletter</h5>
                    <div className="span">
                           <span> Subscreva para receber mais informações e novidades da arotec</span>
                        
                        <br />
                        <br />
                        <div className="d-flex">
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  name="" placeholder='Seu email' id="" className="form-control letter" />
                            <button disabled={!email} onClick={()=> NewsLetter()} className="btn btn-primary">
                               {load == false ?  <i className="bi bi-send"></i> : <Loader />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            <div className="copyright p-2 row bg-light">
                <div className="d1 col-6 col-md-6  text-start">
                    <span className=''>&copy; 2023 - AROTEC SU </span>
                </div>
                <div className="d1 col-6 col-md-6  text-end">
                    <span className=''> <NavLink className="link copy" to="/pt/sobre">Sobre</NavLink></span> &middot; <span className=" "><NavLink className="link copy" to="/pt/politicas_de_privacidade">Políticas de Privacidade</NavLink></span>
                </div> 
            </div>
        </div>
    )
}

export default Footer;
