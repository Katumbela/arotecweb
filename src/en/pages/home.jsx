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
      if(userString) {
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
      
      < Header style={{marginBottom:'5rem'}} nomee={nomee} emaill={emaill} cart={cart} />
      <br />
      <br />
      <div className="s">
      < Banners />
      <br />
      <br />
      {/* <Destaque /> */}
      <div className='destaque container text-center'>
            <div className="text-start">

                <h1 claxssName='text-primary'>Explore courses at the academy </h1>
                <p className='text-secondary'>{use.name != '' ? use.name +' veja os' : ""} Courses available in person at arotec academies and online on our platform.</p>
                <NavLink to="/en/academy" className="navlink">
                    <button className="btn btn-outline-primary bb"> <i className="bi bi-mortarboard"></i> GO TO ACADEMY</button>
                </NavLink>
                <br />
            </div>
            <div className="mt-4">
                <OwlCarousel className='owl-theme' margin={15} autoWidth={true}>

                    <NavLink to={'/en/academy/course/arotec/2021'} className="my-2 link">
                        <div className="card_curso card-hover">
                            <div className="card-header">
                                <img src={peq_eng} alt="pequeno engenheiro" />
                            </div>
                            <div className="corpo-curso text-start">
                                <span className="spa1">Last Update: Jan 23, 2023</span> <br />
                                <b className='b'>Little Engineer Course</b><br />
                                <span className="spa"><i className="bi bi-watch"></i> 3 weeks</span>
                                <p className='preco'>
                                    <b> 15.000 AOA</b>
                                </p>
                            </div>
                        </div>
                    </NavLink>


                    <NavLink to={'/en/academy/course/arotec/2023'} className="link my-2">
                        <div className="card_curso card-hover">
                            <div className="card-header">
                                <img src={arduino} alt="pequeno engenheiro" />
                            </div>
                            <div className="corpo-curso text-start">
                                <span className="spa1">Last Update: Jan 23, 2023</span> <br />
                                <b className='b'>Arduino course</b><br />
                                <span className="spa"><i className="bi bi-watch"></i> 4 weeks</span>
                                <p className='preco'>
                                    <b> 30.000 AOA</b>
                                </p>
                            </div>
                        </div>
                    </NavLink>

                    {/* <div className="item my-2">
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
                </div> */}

                </OwlCarousel>
            </div>

        </div>
      <br />
      
      <br />
      <BannerLoja />

<br />
<br /><br />
        <div className="bg-primary py-5">
          <div className="container ">
            <div className="row">
              <div className="col-12 text-start car col-sm-6 col-lg-7">


                <h3 className='jog text-white'>Now you can play Okupalenda Online</h3>
                <p className='text-white j-p'>
                Okupalenda is available online, join the community
                </p>
                <br />
                <NavLink to={'/en/okupalenda'} className="btn mt-auto border-white text-white">Start the game <i className="bi bi-arrow-right-short"></i> </NavLink>
              </div>
              <div style={{display:'grid', justifyContent:'center'}} className="col-12 col-sm-6 col-lg-5">
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
              <h4>Ranking Top 5 winners</h4>
              <br />
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Score</th>
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
                  <h4>Ranking Top 3 loosers</h4>
                  <br />
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Score</th>
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

<NavLink to={'/en/'}><img src={logo} style={{height:'2.5em'}} alt="" /> </NavLink>

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
