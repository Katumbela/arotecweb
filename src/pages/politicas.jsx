import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';

const Politicas = ({cart}) => {
    document.title='Políticas de Privacidade & Termos de uso | AROTEC';
  return (
    <div className="w-100">
      
      < Header cart={cart} />

      < Footer />
      
    </div>
  );
}

export default Politicas;
