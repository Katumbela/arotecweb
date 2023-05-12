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
import firebase from 'firebase/compat/app';

const Home = ({cart, nomee, emaill}) => {

  const { user, handleLogout } = useContext(UserContext);
  document.title='Inicial | AROTEC';
  

  useEffect(() => {
    // Adicione um listener para o estado da autenticação
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            // Se não houver usuário autenticado, redirecione para a página de login
          
            const userData = {
                name: '',
                email: '',
                pictureUrl: '',
                tel: '',
                uid:'',
            }

            localStorage.setItem('user', JSON.stringify(userData));

        }
    });


    // Retorne uma função de limpeza para remover o listener quando o componente for desmontado
    return unsubscribe;
}, []);

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
      
      < Header nomee={nomee} emaill={emaill} cart={cart} />
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
        buttonText="Aceitar"
        cookieName="myAwesomeCookieConsent"
        style={{ background: "#1C4587" }}
        buttonStyle={{ color: "#003885", background:'white', marginTop:'auto', fontSize: "13px" }}
        expires={150}
      >
        Este site usa cookies para melhorar sua experiência de navegação e interação com o nosso site.
      </CookieConsent>
      {/* O resto do seu componente aqui */}
     
        {/* Conteúdo do seu componente aqui */}
      {showModal && (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Uhaaa!. Temos um novo visual</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Estamos em actualização, esperamos que tenha melhor experiencia com o novo visual do nosso site,
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
