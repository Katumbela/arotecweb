import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import '../css/projectos.css';
import gif3d from '../imgs/aro1.jpg'

const ProjectosDiy = () => {
  return (
    <div className="w-100 container py-3 px-3 px-lg-4" style={{background: 'white'}}>
     <h3 className='text-primary'>Projects Available, do it yourself</h3>
     <br />

     <div className="row">
        <div className="col-6 my-3 col-sm-6 col-md-4 col-lg-3">
            <img src={gif3d} alt="" className='w-100' />
            <b className='text-dark'>Project Number 1</b><br />
            <span className='text-secondary f-12'>By: Joao Afonso Katombela</span>
        </div>
        <div className="col-6 my-3 col-sm-6 col-md-4 col-lg-3">
            <img src={gif3d} alt="" className='w-100' />
            <b className='text-dark'>Project Number 2</b><br />
            <span className='text-secondary f-12'>By: Joao Afonso Katombela</span>
        </div>
        <div className="col-6 my-3 col-sm-6 col-md-4 col-lg-3">
            <img src={gif3d} alt="" className='w-100' />
            <b className='text-dark'>Project Number 3</b><br />
            <span className='text-secondary f-12'>By: Joao Afonso Katombela</span>
        </div>
        <div className="col-6 my-3 col-sm-6 col-md-4 col-lg-3">
            <img src={gif3d} alt="" className='w-100' />
            <b className='text-dark'>Project Number 4</b><br />
            <span className='text-secondary f-12'>By: Joao Afonso Katombela</span>
        </div>
        <div className="col-6 my-3 col-sm-6 col-md-4 col-lg-3">
            <img src={gif3d} alt="" className='w-100' />
            <b className='text-dark'>Project Number 5</b><br />
            <span className='text-secondary f-12'>By: Joao Afonso Katombela</span>
        </div>
        <div className="col-6 my-3 col-sm-6 col-md-4 col-lg-3">
            <img src={gif3d} alt="" className='w-100' />
            <b className='text-dark'>Project Number 6 </b><br />
            <span className='text-secondary f-12'>By: Joao Afonso Katombela</span>
        </div>
     </div>
     
    </div>
  );
}

export default ProjectosDiy;
