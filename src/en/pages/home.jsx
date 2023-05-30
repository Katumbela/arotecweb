import '../App.css';
// Bootstrap CSS
import { Modal, Button } from 'react-bootstrap';
// Bootstrap Bundle JS
import logo from '../imgs/icone.png';
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';
import Destaque from '../components/cursos_destaque';
import BannerLoja from '../components/banner_loja';
import CookieConsent from 'react-cookie-consent';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './userContext';

const Home = ({cart, nomee, emaill}) => {

  const { user, handleLogout } = useContext(UserContext);
  document.title='INITIAL | AROTEC';
  
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowModal(true);
      localStorage.setItem('hasVisited', true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const handleClose = () => setShowModal(false);
  
  return (
    <div className="w-100">
      
      < Header style={{marginBottom:'5rem'}} nomee={nomee} emaill={emaill} cart={cart} />
      <br />
      <br />
      <div className="s">
      < Banners />
      <br />
      <br />
      <Destaque />
      <br />
      
      <br />
      <BannerLoja />

<br />
<br />
<br />
<br />
<br />
<br />
      < Footer />
      </div>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieConsent"
        style={{ background: "#1C4587" }}
        buttonStyle={{ color: "#003885", background:'white', marginTop:'auto', fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to improve your browsing experience and interaction with our website.
      </CookieConsent>
      {/* O resto do seu componente aqui */}
     
        {/* Conteúdo do seu componente aqui */}
      {showModal && (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Uhaaa!. We have a new look</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        We are updating, we hope you have a better experience with the new look of our website,
<br />
<br />
<center>

<img src={logo} style={{height:'2.5em'}} alt="" /> 

<br />
<br />
<i className="bi bi-check2-circle text-primary f-50"></i>
</center>
<br />
<br />

        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      )}
    </div>
  );
}

export default Home;
