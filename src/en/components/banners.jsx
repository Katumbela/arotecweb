import Carousel from 'react-bootstrap/Carousel';
import '../css/banners.css'
import { NavLink } from 'react-router-dom';
import banner_empresa from '../imgs/img1.png'

function Banners() {
  return (
    <Carousel className='car mt-5'>
      <Carousel.Item className="carousel b_code py-auto bg-c">

        <div className="row ">
          <div className="col-12 position-relative  text-start px-lg-5 px-md-4 px-sm-5 px-4 col-lg-6">
            <div className='my-5 cont text-white' >
              <h3 className='h3'>UNITEL CODE ROBOTIC</h3>
              <p className='w-lg-75 pe-sm-2'>The third edition of Unitel Code Robotica is back, for Luanda, Cabinda, Benguela, Uíge, Bengo Kwanza Sul, Kwanza Norte.</p>
              <br />
              <NavLink to="/en/unitel_code_robotica_inscricao" className="btn bb btn-outline-white">Sign up</NavLink>
            </div>
          </div>
          <div className="col-12 col-lg-6">
          </div>
        </div>

      </Carousel.Item>

      <Carousel.Item className="carousel bg-primary ban">
        <div className="row my-auto">
          <div className="col-12 items-star im-t text-white my-auto col-sm-6">
            <div>
              <h3 className='h3'>AROTEC ACADEMY</h3>
              <p>Robotics Academy, varied courses focused on new technologies, bringing new technologies closer to students.</p>
              <NavLink to="/en/academy"> <button className="btn bb mt-2 btn-outline-white">Go to the Academy</button></NavLink>

            </div>
          </div>
          <div className="col-12 my-auto acad col-sm-6">
            <div className='im'>
              {/* <img src={banner_academia} alt="" className='img_banner' /> */}
            </div>
          </div>
        </div>


      </Carousel.Item>

      <Carousel.Item className="carousel bg-primary ban">
        <div className="row my-auto">
          <div className="col-12 items-star im-t text-white my-auto  col-sm-6">
            <div >
              <h3 className='h3'>Companies</h3>
              <p>
                Consulting and design of smart devices and software. Social solutions and programs for companies.
              </p>
              <NavLink to="/en/companies"><button className="btn bb mt-0 btn-outline-white">Know more</button></NavLink>

            </div>
          </div>

          <div className="col-12 text-center my-auto emp mx-auto col-sm-6">
            <div className='im mx-auto'>
              {/* <img src={banner_empresa} alt="" className='img_banner' /> */}
            </div>
          </div>
        </div>



      </Carousel.Item>


      <Carousel.Item className="carousel bg-primary ban">


        <div className="row my-auto">
          <div className="col-12 items-star im-t text-white my-auto col-sm-6">
            <div >
              <h3 className='h3'> Arotec store</h3>
              <p>
                Devices and electronics available for project development and support. From electronic components to assembled devices.
              </p>
              <NavLink to="/en/store"><button className="btn bb mt-0 btn-outline-white">GO TO STORE</button></NavLink>
            </div>
          </div>
          <div className="col-12 loja text-center my-auto col-sm-6">
            <div className='im'>
              {/* <img src={banner_loja} alt="" className='img_banner' /> */}
            </div>
          </div>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default Banners;
