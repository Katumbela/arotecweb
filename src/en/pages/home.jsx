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
import '../css/destaque.css'
import peq_eng from '../imgs/banner-p.png';
import arduino from '../imgs/arduino.jpeg';
import eletronica from '../imgs/eletronica.jpeg';
import OwlCarousel from 'react-owl-carousel';
import okupa from '../../imgs/okupalenda.png'
import Bandeira from '../../components/bandeira';
import { db } from './firebase';
import { NavLink } from 'react-router-dom';


const Home = ({ cart, nomee, emaill }) => {

  const { user, handleLogout } = useContext(UserContext);
  document.title = 'INITIAL | AROTEC';

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




  const [players, setPlayers] = useState([]);


  // Função para buscar os jogadores ordenados por pontuação
  const fetchPlayers = async () => {
    try {
      const snapshot = await db.collection('players').where('pontos', '>', 15).orderBy('pontos', 'desc').limit(3).get();
      const playerData = snapshot.docs.map((doc) => doc.data());
      setPlayers(playerData);
    } catch (error) {
      console.error('Erro ao buscar os jogadores:', error);
    }
  };


  fetchPlayers();


  const [playersL, setPlayersL] = useState([]);


  // Função para buscar os jogadores ordenados por pontuação
  const fetchPlayersL = async () => {
    try {
      const snapshot = await db.collection('players').where('pontos', '<', 15).orderBy('pontos', 'desc').limit(3).get();
      const playerData = snapshot.docs.map((doc) => doc.data());
      setPlayersL(playerData);
    } catch (error) {
      console.error('Erro ao buscar os jogadores:', error);
    }
  };



  fetchPlayersL();


  const [use, setUser] = useState([]);

  useEffect(() => {
    // Obtém o valor de 'user' do local storage quando o componente for montado
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
    }
    else {
      const userData = {
        name: '',
        email: '',
        pictureUrl: '',
        tel: '',
      }
      setUser(userData);
    }
  }, []);

  return (
    <div className="w-100">

      < Header style={{ marginBottom: '5rem' }} nomee={nomee} emaill={emaill} cart={cart} />
      <br />
      <br />
      <div className="s">
        < Banners />
        <br />
        <br />
        <Destaque />
       
        <br />
        <br />
        <br />

        <br />
        <BannerLoja />

        <br />
        <br /><br />

        <br />
        <br />
        < Footer />
      </div>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieConsent"
        style={{ background: "#1C4587" }}
        buttonStyle={{ color: "#003885", background: 'white', marginTop: 'auto', fontSize: "13px" }}
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

              <NavLink to={'/en/'}><img src={logo} style={{ height: '2.5em' }} alt="" /> </NavLink>

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
