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
import okupa from '../../imgs/arobot.png'
import Bandeira from '../../components/bandeira';
import { db } from './firebase';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import video from '../../video/av1.mp4'


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



  const [backgroundImage, setBackgroundImage] = useState(0);
  const images = ['a1.jpg', 'a7.jpg', 'a3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${images[backgroundImage]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(35%)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '70vh',
  };



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
        {/* <BannerLoja /> */}

        <br />
        <div className="video-container">
          <video autoPlay loop muted className="video-background">
            <source src={video} type="video/mp4" />
          </video>
          <div className="background-overlay" style={{ display: 'grid', placeContent: 'center' }}>

            <div className="row w-100 my-auto flex-row-reverse">
              <div className="col-12 py-4 px-2 col-sm-6">
                <Fade direction='right' delay={2000}>

                  <div className="b-loja py-5 container shadow-lg border-white">
                    <h1 className='text-white'>Loja Arotec</h1>
                    <p className='text-white fs-5'>Dispositivos e eletrônicos disponíveis para desenvolvimento e suporte de projetos. De componentes eletrônicos a dispositivos montados.</p>
                    <br />
                    <NavLink style={{ zIndex: '9999999999' }} className="btn border-white text-white bb btn-outline-white"> <i className="bi bi-shop"></i> Ver Todos Produtos</NavLink>

                  </div>
                </Fade>
              </div>
              <div className="col-12 col-sm-6">

              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary py-3">
          <div className="row container position-relative">
            <div className="col-12 text-center col-md-12 position-relative col-lg-3 col-xl-2 col-xxl-2">

              <img src={okupa} className='mx-auto' style={{ height: '10em', position: 'relative', zIndex: '9999' }} alt="Banner arobot" />

            </div>
            <div className="col-12 container ps-2  col-md-12 col-lg-9 col-xl-10 col-xxl-10">
              <div className="d-flex justify-content-between">
                <div>
                  <h2 className='text-white'>Kit de Robotica Arobot</h2>
                  <p className='text-white fs-5'>
                    O arobot é um kit de robotica educacional direcionado ou projetado para menores e usado para a formação de pequenos engenheiros.
                  </p>
                </div>
                <div className='my-auto'>
                  <NavLink to={'/pt/produtos/store/3'} style={{ zIndex: '9999999999' }} className="btn d-flex my-auto gap-3 border-white text-white bb btn-outline-white"> Encomendar <i className="bi bi-arrow-right"></i> </NavLink>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-container" style={{ display: 'grid', placeContent: 'center' }}>
          <div className="background-image" style={backgroundStyle}></div>
          <div className="content " >
            <div className='my-auto'>
              <Fade direction='up'>
                <h1>ACADEMIA DE ROBOTICA</h1>
              </Fade>

              <Fade direction='up'>
                <p className='w-md-75 mx-auto'>Explore a fascinante área da robótica através de nossos cursos online e presenciais.
                  <br />
                  Prepare-se para uma carreira emocionante e inovadora, dominando os conceitos e as técnicas mais recentes da indústria robótica.</p>
                <button className='btn btn-outline-white'>ir para academia <i className="bi bi-arrow-right-short"></i></button>
              </Fade>
            </div>
          </div>
        </div>
        <div className=" b-cc row">
          <div className="col-12 col-md-6 col-lg-5 col-xl-4 b-c">

          </div>
          <div style={{ display: 'grid', placeContent: 'center' }} className="col-12 container ddd px-4 position-relative py-4 col-md-6 col-lg-7 col-xl-8">
            <div className='b-c2'></div>
            <div className=" text-center">
              <Fade direction='right'>
                <h1 className='text-white w-75 mx-auto'>Aprenda a projetar, montar e programar robôs com foco em eletrônica avançada.</h1>

              </Fade>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', placeContent: 'center' }} className="col-12  ddd px-4 position-relative py-4">
          <div className='b-c3'></div>
          <div className=" text-center">
            <Fade direction='up' >
              <h1 className='text-primary  fs-1 '>Projectos DIY</h1>
            </Fade>
            <Fade direction='up'>
              <div className="line"></div>
            </Fade>
            <Fade direction='up'>
              <p className='w-75 fs-3 mx-auto'>Encontre projectos relacionados à robótica e tecnologia em projectos diy da arotec, você tambem pode adicionar seu projecto.</p>
              <NavLink to={'/pt/projectos'} className="btn btn-outline-primary">Ver projectos <i className="bi bi-arrow-right-short"></i></NavLink>
            </Fade>
          </div>
        </div>

        
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

              <NavLink to={'/pten/'}><img src={logo} style={{ height: '2.5em' }} alt="" /> </NavLink>

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
