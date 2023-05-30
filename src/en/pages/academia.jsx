import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import Cursos from '../components/academia/cursos_disponiveis';

function Academia({nomee, emaill, cart}) {
    document.title='Academy | AROTEC';
  return (
    <div className="bg-light w-100">
      
      < Header  nomee={nomee} emaill={emaill} cart={cart} />
      <br />
      <br />
      <Cursos />
      <br />
      <br />
      <br />
      <br />
      < Footer />
      
    </div>
  );
}

export default Academia;
