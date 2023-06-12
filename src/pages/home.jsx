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
import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from './userContext';
import firebase from 'firebase/compat/app';
import { db } from './firebase';
import okupa from '../imgs/arobot.png'
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
import video from '../video/av1.mp4'


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
    filter: 'brightness(35%)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '70vh',
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
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

        {/* <div className='destaque container text-center'>
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

        </div> */}
        <br />

        <br />
        {/* <BannerLoja /> */}
        <br />
        <div className="video-container">
          <video ref={videoRef} autoPlay loop muted className="video-background">
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


        {/* <div className="bg-primary py-5">
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
        </div> */}
        {/* <div className='container'>
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
            <div className="col-12 col-sm-5 text-center col-lg-4">
              <div className="my-auto">
                <img className='w-100 okupa my-auto' src={okupa} alt="" />
              </div>
            </div>
          </div>
        </div> */}
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
