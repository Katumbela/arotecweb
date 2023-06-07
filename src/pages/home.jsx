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
import { db } from './firebase';
import okupa from '../imgs/okupalenda.png'
import axios from 'axios';
import Bandeira from '../components/bandeira';
import { NavLink } from 'react-router-dom';
import v1 from '../imgs/anims/av1.mp4'
import peq_eng from '../imgs/banner-p.png';
import arduino from '../imgs/arduino.jpeg';
import eletronica from '../imgs/eletronica.jpeg';
import OwlCarousel from 'react-owl-carousel';
import Animat from '../components/animations';
import a1 from '../imgs/anims/a1.jpg'
import a2 from '../imgs/anims/a2.jpg'
import a3 from '../imgs/anims/a3.jpg'
import { Fade } from 'react-awesome-reveal';


const Home = ({ cart, nomee, emaill }) => {

  const { user, handleLogout } = useContext(UserContext);
  document.title = 'Pagina Inicial | AROTEC';


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
          uid: '',
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


    fetchPlayersL();


    fetchPlayers();

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



  const [playersL, setPlayersL] = useState([]);


  // Função para buscar os jogadores ordenados por pontuação
  const fetchPlayersL = async () => {
    try {
      const snapshot = await db.collection('players').where('pontos', '<', 15).orderBy('pontos', 'asc').limit(3).get();
      const playerData = snapshot.docs.map((doc) => doc.data());
      setPlayersL(playerData);
    } catch (error) {
      console.error('Erro ao buscar os jogadores:', error);
    }
  };




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
    filter: 'brightness(30%)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '70%',
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
        {/* <Destaque /> */}

        <div className='destaque container text-center'>
          <div className="text-start">
            <h1 claxssName='text-primary'>Explore os cursos na academia </h1>
            <p className='text-secondary'>{use.name != '' ? use.name + ' veja os' : ""} Cursos disponíveis presencialmente nas academias AROTEC e on-line em nossa plataforma</p>
            <NavLink to="/pt/academia" className="navlink">
              <button className="btn btn-outline-primary bb"> <i className="bi bi-mortarboard"></i> Ir para academia</button>
            </NavLink>
            <br />
          </div>
          <div className="mt-4">
            <OwlCarousel className='owl-theme' margin={15} autoWidth={true}>

              <NavLink to={'/pt/academia/curso/arotec/2021'} className="my-2 link">
                <div className="card_curso card-hover">
                  <div className="card-header">
                    <img src={peq_eng} alt="pequeno engenheiro" />
                  </div>
                  <div className="corpo-curso text-start">
                    <span className="spa1">Últ. actualização: 23 jan, 2023</span> <br />
                    <b className='b'>Curso de Pequeno Engenheiro</b><br />
                    <span className="spa"><i className="bi bi-watch"></i> 3 semanas</span>
                    <p className='preco'>
                      <b> 15.000 Kz/ Módulo</b>
                    </p>
                  </div>
                </div>
              </NavLink>


              <NavLink to={'/pt/academia/curso/arotec/2022'} className="link my-2">
                <div className="card_curso card-hover">
                  <div className="card-header">
                    <img src={arduino} alt="pequeno engenheiro" />
                  </div>
                  <div className="corpo-curso text-start">
                    <span className="spa1">Últ. actualização: 23 jan, 2023</span> <br />
                    <b className='b'>Curso de Arduino</b><br />
                    <span className="spa"><i className="bi bi-watch"></i> 4 semanas</span>
                    <p className='preco'>
                      <b> 30.000 Kz/ Módulo</b>
                    </p>
                  </div>
                </div>
              </NavLink>

              <NavLink to={'/pt/academia/curso/arotec/2025'} className="link my-2">
                <div className="card_curso card-hover">
                  <div className="card-header">
                    <img src={eletronica} alt="pequeno engenheiro" />
                  </div>
                  <div className="corpo-curso text-start">
                    <span className="spa1">Últ. actualização: 23 jan, 2023</span> <br />
                    <b className='b'>Curso de Eletrônica</b><br />
                    <span className="spa"><i className="bi bi-watch"></i> 4 semanas</span>
                    <p className='preco'>
                      <b> 30.000 Kz</b>
                    </p>
                  </div>
                </div>
              </NavLink>

            </OwlCarousel>
          </div>

        </div>
        <br />

        <br />
        <BannerLoja />
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
          <div className="col-12 col-md-6 col-lg-6 col-xl-4 b-c">

          </div>
          <div className="col-12 container bg-secondary px-2 py-2 col-md-6 col-lg-6 col-xl-8">
            <h1>Cursos Práticos</h1>
          </div>
        </div>
        <div className="bg-primary py-5">
          <div className="container ">
            <div className="row">
              <div className="col-12 text-start car col-sm-6 col-lg-8">


                <h3 className='jog text-white'>Agora Ja pode jogar o Okupalenda Online</h3>
                <p className='text-white j-p'>
                  Okupalenda está online, faça parte da comunidade
                </p>
                <br />
                <NavLink to={'/pt/okupalenda'} className="btn mt-auto border-white text-white">Começar o Jogo <i className="bi bi-arrow-right-"></i> </NavLink>
              </div>
              <div style={{ display: 'grid', justifyContent: 'center' }} className="col-12 col-sm-6 col-lg-4">
                <img className='w-100  my-auto' src={okupa} alt="" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='container'>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-6">
              <h4>Ranking Top 5 vencedores</h4>
              <br />
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Pontuação</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, index) => (
                    <tr key={index}>
                      <td><Bandeira altura={'23em'} countryCode={player.iso} /></td>
                      <td>  {player.nome}</td>
                      <td className='text-primary'><b>{player.pontos}</b> Pts</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>

            {
              !playersL ?

                ""

                :

                <div className="col-12 col-sm-6 col-lg-6">
                  <h4>Ranking Top 3 perdedores</h4>
                  <br />
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Pontuação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {playersL.map((player, index) => (
                        <tr key={index}>
                          <td><Bandeira altura={'23em'} countryCode={player.iso} /></td>
                          <td>  {player.nome}</td>
                          <td className='text-danger'><b >{player.pontos}</b> Pts</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>

            }
            {/* <div className="col-12 col-sm-5 text-center col-lg-4">
              <div className="my-auto">
                <img className='w-100 okupa my-auto' src={okupa} alt="" />
              </div>
            </div> */}
          </div>
        </div>
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
        buttonStyle={{ color: "#003885", background: 'white', marginTop: 'auto', fontSize: "13px" }}
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

              <img src={logo} style={{ height: '2.5em' }} alt="" />

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
