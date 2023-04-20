import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';
import BannerPreto from '../components/banner_preto';
import { NavLink } from 'react-router-dom';

const Carreiras = ({cart}) => {
    document.title='Carreiras & Estagios | AROTEC';
  return (
    <div className="w-100">
      
      < Header cart={cart} />
      <BannerPreto >
        CARREIRAS & ESTÁGIOS
      </BannerPreto>
      <br />
      <div className="container">

        <h3 className="text-primary">Vagas de estágio (Não Remunerado) </h3>
        <hr />
        <span className="text-secondary f-12">Abertas em 31 Jan. 2023</span>
        <br />
<br />
<div className="row">
  <div className="col-12 my-2 col-sm-6 col-md-4 col-lg-3">
   <div className="shadow rounded-3 bg-light px-3 pt-2">
    <NavLink className={'navlink p-1 '} >
        <b className="text-primary" style={{textDecoration:'underline'}}>Criador de Cursos Online (EN)</b>
        <span className="text-secondary d-flex flex-column">
            <span className='f-10'><i className="bi bi-geo"></i>Estagiário , Luanda - Angola</span>
            <span className='f-10'><i className="bi bi-watch"></i>4 semanas</span>
        </span>
      </NavLink>
   </div>
  </div>
  <div className="col-12 my-2 col-sm-6 col-md-4 col-lg-3">
   <div className="shadow rounded-3 bg-light px-3 pt-2">
    <NavLink className={'navlink p-1 '} >
        <b className="text-primary" style={{textDecoration:'underline'}}>Criador de Cursos Online (PT)</b>
        <span className="text-secondary d-flex flex-column">
            <span className='f-10'><i className="bi bi-geo"></i>Estagiário , Luanda - Angola</span>
            <span className='f-10'><i className="bi bi-watch"></i>4 semanas</span>
        </span>
      </NavLink>
   </div>
  </div>
  <div className="col-12 my-2 col-sm-6 col-md-4 col-lg-3">
   <div className="shadow rounded-3 bg-light px-3 pt-2">
    <NavLink className={'navlink p-1 '} >
        <b className="text-primary" style={{textDecoration:'underline'}}>Criador para videos de projectos AROTEC</b>
        <span className="text-secondary d-flex flex-column">
            <span className='f-10'><i className="bi bi-geo"></i>Estagiário , Luanda - Angola</span>
            <span className='f-10'><i className="bi bi-watch"></i>4 semanas</span>
        </span>
      </NavLink>
   </div>
  </div>
  <div className="col-12 my-2 col-sm-6 col-md-4 col-lg-3">
   <div className="shadow rounded-3 bg-light px-3 pt-2">
    <NavLink className={'navlink p-1 '} >
        <b className="text-primary" style={{textDecoration:'underline'}}>Criador de PODCAST AROTEC </b>
        <span className="text-secondary d-flex flex-column">
            <span className='f-10'><i className="bi bi-geo"></i>Estagiário , Luanda - Angola</span>
            <span className='f-10'><i className="bi bi-watch"></i>4 semanas</span>
        </span>
      </NavLink>
   </div>
  </div>
  <div className="col-12 my-2 col-sm-6 col-md-4 col-lg-3">
   <div className="shadow rounded-3 bg-light px-3 pt-2">
    <NavLink className={'navlink p-1 '} >
        <b className="text-primary" style={{textDecoration:'underline'}}>Área de Marketing </b>
        <span className="text-secondary d-flex flex-column">
            <span className='f-10'><i className="bi bi-geo"></i> Luanda - Angola</span>
            <span className='f-10'><i className="bi bi-watch me-1"></i>Efectivo </span>
        </span>
      </NavLink>
   </div>
  </div>
</div>
      </div>
      <br />
      <br /><br /><br />
      <br />
      < Footer />
      
    </div>
  );
}

export default Carreiras;
