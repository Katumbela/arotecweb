import '../App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';
import Destaque from '../components/cursos_destaque';
import BannerLoja from '../components/banner_loja';

const Home = ({cart}) => {
  document.title='Inicial | AROTEC';
  return (
    <div className="w-100">
      
      < Header cart={cart} />
      <div className="s">
         < Banners />
      <br />
      <br />
      <Destaque />
      <br />
      <br />
      <BannerLoja />
      < Footer />
      </div>
     
        
    </div>
  );
}

export default Home;
