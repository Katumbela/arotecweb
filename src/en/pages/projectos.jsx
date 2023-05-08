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

function Projectos({nomee, emaill, cart}) {
    document.title=' DIY Projects | AROTEC';
  return (
    <div className="w-100">
      
      < Header  nomee={nomee} emaill={emaill} cart={cart} />
      <BannerPreto>
      DIY PROJECTS | AROTEC
      </BannerPreto>

      <div className="container">
      <br />
      <br />
          <div className="bg-light row ">

            <div className="col-3 text-start bg-white col-sm-3">
              <img src={printt} alt="printing pub" className="w-100"  />
            </div>
            <div className="col-9 col-sm-9 py-1">
              <b className="proj-tit">3D printing service</b><br />
              <p className="text-secondary proj-f">Create your projects with AROTEC, consult the budget for your project by clicking on the button below.</p> 
              <NavLink to={'/en/contact'} className="btn  btn-outline-primary proj-f">Request Quote</NavLink>
            </div>
            
          </div>
      </div>
      <br />
      <br /><br />
      <div className="d-flex justify-content-between container" >
        <p className="text-secondary f-14"> You can also add your project here</p>
        <NavLink className="f-14" to="/login">Login to add</NavLink>
      </div>
      
      <ProjectosDiy />
      <br />
      <br />
      < Footer />
      
    </div>
  );
}

export default Projectos;
