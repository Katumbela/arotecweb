import '../App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from '../components/header';
import Footer from '../components/footer';
import DivLoja from '../components/loja/div_prods';
import BannerPreto from '../components/banner_preto';

const Loja = ({handleClick, cart}) => {

    document.title='Loja Arotec | AROTEC';
  
    return (
    <div className="w-100 bg-light">
      
      < Header cart={cart} />
      <BannerPreto>
        LOJA AROTEC
      </BannerPreto>
      <br />
      <br />
      <DivLoja cart={cart} handleClick={handleClick}/>
      <br />
      <br />
      < Footer />
      
    </div>
  );
}

export default Loja;
