import '../App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';

const RoboticSchool = ({cart}) => {
    document.title='Arotec Robotic School | AROTEC';
  return (
    <div className="w-100">
      
      < Header cart={cart} />

      < Footer />
      
    </div>
  );
}

export default RoboticSchool;
