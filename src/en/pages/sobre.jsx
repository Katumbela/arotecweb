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

const Sobre = ({ cart, nomee, emaill }) => {
  document.title = 'About AROTEC & Team | AROTEC';
  return (
    <div className="w-100">

     
      < Header style={{marginBottom:'5rem'}} nomee={nomee} emaill={emaill} cart={cart} />
      <br />
      <br />
      <BannerPreto>
      About AROTEC
      </BannerPreto>
      <br />
      <br />

      <div className="container">
        <h2>AROTEC (SU) Technology Services</h2>
        <p className='text-secondary'>Arotec is a company dedicated to new technologies, robotics and artificial intelligence. We offer our customers
       <br /><br />
       <ol>
          <li> Design and manufacture of hardware and intelligent systems. </li>
          <li>STEM Learning Kits </li>
          <li>Training in the areas of technologies.</li>
        </ol>
        </p>
        <NavLink to={'/contactar'}><button className="btn btn-outline-dark">Contactar <i className="bi ms-2 bi-arrow-right"></i></button></NavLink>
        <br />
        <hr />
        <br />
        <div className="">
          <h3>MARKET</h3>
          <div className="row ">
            <div className="col-12 col-sm-6 my-2 text-start">
              <div className="bg-dark rounded-circle " style={{ height: '3em', display: 'grid', placeContent: 'center', width: '3em', border: '1px solid black' }}>
                <i className="bi bi-hdd-rack-fill f-30 text-white"></i>
              </div>
              <b className='text-dark'>DESIGN & HARDWARE</b>
              <p className="text-secondary f-12">
              Services related to hardware, design and 3D printing
              </p>
            </div>
            <div className="col-12 col-sm-6 my-2 text-start">
              <div className="bg-dark rounded-circle " style={{ height: '3em', display: 'grid', placeContent: 'center', width: '3em', border: '1px solid black' }}>
                <i className="bi bi-mortarboard-fill f-30 text-white"></i>
              </div>
              <b className='text-dark'>EDUCATION</b>
              <p className="text-secondary f-12">
              Diverse courses related to IT and robotics and training in schools
              </p>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="equipa">
          <h3> AROTEC Team</h3>
          <p className="text-secondary text-start f-12">
          The arotec team is made up of the following members.
          </p>
          <OwlCarousel className='owl-theme' items={4} navClass={['owl-prev', 'owl-next']} margin={5} responsiveClass={true} controlsClass='owl-controls' dots={true} autoWidth={true} nav={true}>

            <div className="text-center" style={{ width: '11rem' }}>
              <img src={cris} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Cristovão M. Cacombe</b>
              <p className="text-secondary f-12">
                CEO
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Irene Carinde</b>
              <p className="text-secondary f-12">
                COO
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={kali} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Jonilson Correia</b>
              <p className="text-secondary f-12">
                CTO
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Elvira Fernando</b>
              <p className="text-secondary f-12">
                Admin. & CFO
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Wilson Pembele</b>
              <p className="text-secondary f-12">
              Director No Exec. & Advisor
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Abigail Cacombe</b>
              <p className="text-secondary f-12">
              Financial aid
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={katumbela} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>João A. Katombela</b>
              <p className="text-secondary f-12">
              Full Stack Developer
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={goreth} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Goreth Manuel</b>
              <p className="text-secondary f-12">
              Adjunct Professor
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Cristiano Hossongo</b>
              <p className="text-secondary f-12">
                Designer & Marketing
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={siao} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Sião Cabeia</b>
              <p className="text-secondary f-12">
              Adjunct Professor
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={defaul} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Joaquim Junior</b>
              <p className="text-secondary f-12">
              Technician
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={marcos} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Marco Zeca</b>
              <p className="text-secondary f-12">
                Coord. CANAR
              </p>
            </div>
            <div className="text-center" style={{ width: '11rem' }}>
              <img src={qleusio} className="bg-primary rounded-circle mx-auto " style={{ height: '4em', width: '4em', border: '1px solid black' }} />
              <b className='text-secondary'>Qléusio Nenganga</b>
              <p className="text-secondary f-12">
              Assistant teacher
              </p>
            </div>
          </OwlCarousel>
        </div>
        <br />
        <div className="parceiros">
          <h3> Partners </h3>
          <div className="row mt-4">
            <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
              <img src={unitel} alt="Parceiria" style={{ height: '2.5em' }} />
            </div>
            <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
              <img src={rema} alt="Parceiria" style={{ height: '2.5em' }} />
            </div>
            <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
              <img src={ggpn} alt="Parceiria" style={{ height: '2.5em' }} />
            </div>
            <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
              <img src={hub} alt="Parceiria" style={{ height: '2.5em' }} />
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <div className="news">
          <h3> In the news</h3>
          <hr />
          <div className="row mt-3">
            <div className="col-6 col-sm-4 col-md-4 col-lg-2">
              <a className='bg-light' style={{ textDecoration: 'none' }} href="https://tecangologies.com/eventos/arotec--equipa-angola-disputa-campeonato-mundial-de-robotica-na-suica">
              <b>Arotec: Team Angola competes in the Rob World Championship...</b>
                <p className="text-secondary f-12">
                  With a team of 4 students, Arotec has been participating since last Thursday, October 13th...
                </p>
              </a>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-2">
              <a className='bg-light' style={{ textDecoration: 'none' }} href="https://tecangologies.com/eventos/campeonato-mundial-de-robotica-2022--team-angola-pretende-figurar-entre-os-primeiros-classificados">
              <b>World Robotics Championship 2022: Team Angol...</b>
                <p className="text-secondary f-12">
                  A group of four Angolan students led by Arotec (Angola Robotics and Technology) will participate in the...
                </p>
              </a>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-2">
              <a className='bg-light' style={{ textDecoration: 'none' }} href="https://ggpen.gov.ao/?tag=arotec">
              <b>World Space Week 2022 celebrated today in Cazenga</b>
                <p className="text-secondary f-12">
                  Continuing the Program of Activities for World Space Week 2022, today...
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
