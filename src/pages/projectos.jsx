import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/projectos.css';
import printt from '../imgs/print.gif';
import { NavLink } from 'react-router-dom';
import BannerPreto from '../components/banner_preto';
import ProjectosDiy from '../components/projetos_diy';

function Projectos({cart}) {
    document.title='Projectos DIY | AROTEC';
  return (
    <div className="w-100">
      
      < Header cart={cart} />
      <BannerPreto>
        PROJECTOS DIY | AROTEC
      </BannerPreto>

      <div className="container">
      <br />
      <br />
          <div className="bg-light row ">

            <div className="col-3 text-start bg-white col-sm-3">
              <img src={printt} alt="printing pub" className="w-100"  />
            </div>
            <div className="col-9 col-sm-9 py-1">
              <b className="proj-tit">Serviço de impressão 3D</b><br />
              <p className="text-secondary proj-f">Crie os seus projectos com AROTEC, consulte o orçamento para o seu projeto clicando no botão abaixo.</p> 
              <button className="btn bt-p btn-outline-primary proj-f">Solicitar orçamento</button>
            </div>
            
          </div>
      </div>
      <br />
      <br /><br />
      <div className="d-flex justify-content-between container" >
        <p className="text-secondary f-14"> Você tambem pode adicionar seu projecto aqui</p>
        <NavLink className="f-14" to="/login">Faça login para adicionar</NavLink>
      </div>
      
      <ProjectosDiy />
      <br />
      <br />
      < Footer />
      
    </div>
  );
}

export default Projectos;
