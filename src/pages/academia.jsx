import '../App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from '../components/header';
import Footer from '../components/footer';
import Cursos from '../components/academia/cursos_disponiveis';

function Academia({cart}) {
    document.title='Academia | AROTEC';
  return (
    <div className="bg-light w-100">
      
      < Header cart={cart} />
      <br />
      <br />
      <Cursos />
      <br />
      <br />
      < Footer />
      
    </div>
  );
}

export default Academia;
