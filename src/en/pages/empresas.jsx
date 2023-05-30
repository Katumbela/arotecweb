import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';
import BannerPreto from '../components/banner_preto';
import aro from '../imgs/aro.jpg';
import un1 from '../imgs/unitel10.jpg';
import un from '../imgs/unitel.png';
import cat from '../imgs/cat.jpg';
import cat1 from '../imgs/cat-logo.jpeg';
import r from '../imgs/robm2.png';
import unitel from '../imgs/unitel.png'
import ggpn from '../imgs/ggpn.png'
import sfa from '../imgs/sfa.png'
import hub from '../imgs/hub.jpeg'
import rema from '../imgs/rema.jpeg'

const Empresas = ({nomee, emaill, cart}) => {
    document.title='Companies | AROTEC';
  return (
    <div className="w-100">
      
      < Header  nomee={nomee} emaill={emaill} cart={cart} />
      <BannerPreto>
      FOR BUSINESSES
      </BannerPreto>
<br /><br />

<div className="container">

<div className="row border bg-light">
        <div  style={{display: 'grid', placeContent: 'center'}} className="col-12 col-xl-6 py-4 col-lg-7 col-sm-7">
          <div className='my-auto px-2'>
            <h1>From smart devices, software and AI</h1>
            <p className='f-14'>
            Arotec is made up of engineers who are experts in intelligent hardware and software. We offer solutions for design, manufacture and development of hardware and software.  </p>
          </div>
        </div>
        <div className="col-12 col-sm-5 col-xl-6 col-lg-5 p-2">
          <img src={aro} className='' style={{height:'20em'}} alt="" />
          </div>
      </div>
      <br />
<br /><br />
      <div className="">
        <div className="row">
          <div className="col-12 col-sm-6">
            <h5>AROTEC offers customized educational solutions</h5>

            <p className='text-secondary f-14'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus dolores rem tenetur numquam exercitationem laborum consectetur.
            </p>
          </div>
          <div className="col-12 col-sm-6">
            <p className="d-flex gap-2">
              <div className="bg-light rounded-circle " style={{display: 'grid', height:'2em', width:'2em', placeContent: 'center'}}>
                 <i className="bi my-auto bi-check f-26 mx-1 text-primary"></i>
              </div>
              <b className="f-16 my-auto">Corporate social responsibility</b>
            </p>
            <p className="d-flex gap-2">
              <div className="bg-light rounded-circle " style={{display: 'grid', height:'2em', width:'2em', placeContent: 'center'}}>
                 <i className="bi my-auto bi-check f-26 mx-1 text-primary"></i>
              </div>
              <b className="f-16 my-auto">Robotics classes for schools</b>
            </p>
            <p className="d-flex gap-2">
              <div className="bg-light rounded-circle " style={{display: 'grid', height:'2em', width:'2em', placeContent: 'center'}}>
                 <i className="bi my-auto bi-check f-26 mx-1 text-primary"></i>
              </div>
              <b className="f-16 my-auto">Consultancy and creation of laboratories</b>
            </p>
          </div>
        </div>
      </div>
      <br /><br />

      <div className="deved">
        <h3 className='text-primary'>Developed Solutions</h3>
      
        <div className="row">
          <div className="col-12 my-4 col-sm-4">
            <div className="mx-"   >
            <img src={un1}  className='w-100' alt="" />
            <h4 className="mt-2 text-primary">
            Corporate social responsibility </h4>
            <p className="text-secondary f-14">
            arotec offers specialized training for the areas of responsibility of companies. Training in the areas of ctem (science, technology, engineering and mathematics).  </p>
            <br />
            <img src={un} className='' style={{width: '6rem', height:''}} alt="unitel" />
            </div>
          </div>

          <div className="col-12 my-4 col-sm-4">
            <div className="mx-"   >
            <img src={cat}  className='w-100' alt="" />
            <h4 className="mt-2 text-primary">
            Robotics classes for schools
            </h4>
            <p className="text-secondary f-14">
            We offer tutors and programs for teaching robotics in schools, extra curricular programs and insertion of robotics in the school curriculum.
            </p>
            <br />
            <div className="d-flex gap-3">
            <img src={cat1} className='rounded-pill' style={{width: '5rem', height:'4em'}} alt="unitel" />
            <img src={sfa} className='rounded' style={{width: '5rem', height:'4em'}} alt="unitel" />
            </div>
            </div>
          </div>

          <div className="col-12 my-4 col-sm-4">
            <div className="mx-"   >
            <img src={r} className='w-100' alt="" />
            <h4 className="mt-2 text-primary">
            Consultancy and creation of laboratories
            </h4>
            <p className="text-secondary f-14">
            Consultancy and creation of laboratories in the areas of ctem (science, technology, engineering and mathematics). We offer everything from design, supply of equipment, installation and training of the appropriate technicians.
            </p>
            </div>
          </div>
        </div>
      </div>

<br /><br />
<hr />
<br /><br />
<div className="">
  <h3 className="text-primary">Partners</h3>
  <br />
       <div className="row mt-4">
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
      <br />
</div>

</div>


<br /><br /><br />

      < Footer />
      
    </div>
  );
}

export default Empresas;
