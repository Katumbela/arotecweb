import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import unitel from '../imgs/unitel.png'
import ggpn from '../imgs/ggpn.png'
import hub from '../imgs/hub.jpeg'
import rema from '../imgs/rema.jpeg'
import cris from '../imgs/cristovao.jpeg'
import defaul from '../imgs/defaul.png'
import katumbela from '../imgs/katumbela.JPG'
import kali from '../imgs/kali.png'
import marcos from '../imgs/marcos.jpeg'
import qleusio from '../imgs/qleusio.png'
import siao from '../imgs/siao2.jpeg'
import goreth from '../imgs/goret.jpeg'
import BannerPreto from '../components/banner_preto';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';

const Sobre = ({cart}) => {
    document.title='Sobre a AROTEC & Equipa | AROTEC';
  return (
    <div className="w-100">
      
      < Header cart={cart} />
      <BannerPreto>
        Sobre a AROTEC
      </BannerPreto>
      <br />
      <br />
     
     <div className="container">
     <h2>AROTEC (SU) Serviços de Tecnologia</h2>
      <p className='text-secondary'>Arotec é uma empresa voltadas as novas tecnologias, robotica e Inteligencia artificial. Oferecemos aos nossos clientes 1. Design e fabricação de harware e sistemas inteligentes. 2. Kits de aprendizado ao CTEM 3. Formação nas areas de tecnologias.</p>
      <NavLink to={'/contactar'}><button className="btn btn-outline-primary">Contactar <i className="bi ms-2 bi-arrow-right"></i></button></NavLink>
      <br />
      <hr />
      <br />
      <div className="">
        <h3>MERCADO</h3>
        <div className="row ">
          <div className="col-12 col-sm-6 my-2 text-start">
            <div className="bg-primary rounded-circle " style={{height: '3em', width: '3em', border: '1px solid black'}}>        </div>
            <b className='text-secondary'>DESIGN DE HARDWARE</b>
            <p className="text-secondary f-12">
              Serviços relacionados com hardware, design e imporessão 3D
            </p>
          </div>
          <div className="col-12 col-sm-6 my-2 text-start">
            <div className="bg-primary rounded-circle " style={{height: '3em', width: '3em', border: '1px solid black'}}>        </div>
            <b className='text-secondary'>EDUCACÃO</b>
            <p className="text-secondary f-12">
              Cursos diversos relacionados a area de TI e robotica e formação nas escolas
            </p>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="equipa">
        <h3>Team AROTEC</h3>
        <p className="text-secondary text-start f-12">
          A equipa arotec é composta pelos seguintes membros.
        </p>
        <OwlCarousel className='owl-theme' items={4} navClass={['owl-prev','owl-next']} margin={5} responsiveClass={true} controlsClass='owl-controls' dots={true} autoWidth={true} nav={true}>
            
        <div className="text-center" style={{width: '11rem'}}>
              <img src={cris} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Cristovão M. Cacombe</b>
              <p className="text-secondary f-12">
                CEO
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Irene Carinde</b>
              <p className="text-secondary f-12">
                COO
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={kali} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Jonilson Correia</b>
              <p className="text-secondary f-12">
                CTO
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Elvira Fernando</b>
              <p className="text-secondary f-12">
                Admin. & CFO
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Wilson Pembele</b>
              <p className="text-secondary f-12">
                Dir. Não Exec. & Advisor
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Abigail Cacombe</b>
              <p className="text-secondary f-12">
                Auxiliar Financeiro
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={katumbela} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>João A. Katombela</b>
              <p className="text-secondary f-12">
                Programador Full-Stack
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={goreth} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Goreth Manuel</b>
              <p className="text-secondary f-12">
                Professora Adjunta
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Cristiano Hossongo</b>
              <p className="text-secondary f-12">
                Designer & Marketing
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={siao} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Sião Cabeia</b>
              <p className="text-secondary f-12">
                Professor Adjunto
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Joaquim Junior</b>
              <p className="text-secondary f-12">
                Técnico
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={marcos} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Marco Zeca</b>
              <p className="text-secondary f-12">
                Coord. CANAR
              </p>
            </div>
            <div className="text-center" style={{width: '11rem'}}>
              <img src={qleusio} className="bg-primary rounded-circle mx-auto " style={{height: '4em', width: '4em', border: '1px solid black'}}/>
              <b className='text-secondary'>Qléusio Nenganga</b>
              <p className="text-secondary f-12">
                Professor Adjunto
              </p>
            </div>
        </OwlCarousel>
      </div>
      <br />
      <div className="parceiros">
       <h3> Parceiros </h3>
       <div className="row mt-4">
        <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
          <img src={unitel} alt="Parceiria" style={{height: '2.5em'}}/>
        </div>
        <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
          <img src={rema} alt="Parceiria" style={{height: '2.5em'}}/>
        </div>
        <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
          <img src={ggpn} alt="Parceiria" style={{height: '2.5em'}}/>
        </div>
        <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
          <img src={hub} alt="Parceiria" style={{height: '2.5em'}}/>
        </div>
       </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="news">
       <h3> Nas Noticias</h3>
       <hr />
       <div className="row mt-3">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <a className='bg-light' style={{textDecoration: 'none'}} href="#">
            <b>TITULO DA NOTICIA</b>
            <p className="text-secondary f-12">
              breve descricao da noticia e talvez alguma coisa... 
            </p>
          </a>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <a className='bg-light' style={{textDecoration: 'none'}} href="#">
            <b>TITULO DA NOTICIA</b>
            <p className="text-secondary f-12">
              breve descricao da noticia e talvez alguma coisa... 
            </p>
          </a>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <a className='bg-light' style={{textDecoration: 'none'}} href="#">
            <b>TITULO DA NOTICIA</b>
            <p className="text-secondary f-12">
              breve descricao da noticia e talvez alguma coisa... 
            </p>
          </a>
        </div>
       </div>
      </div>
     </div>
     <br />
     <br /><br />
      < Footer />
      
    </div>
  );
}

export default Sobre;
