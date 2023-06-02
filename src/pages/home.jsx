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

const Home = ({ cart, nomee, emaill }) => {

  const { user, handleLogout } = useContext(UserContext);
  document.title = 'Inicial | AROTEC';


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
      const snapshot = await db.collection('players').where('pontos', '<', 15).orderBy('pontos', 'asc').limit(3).get();
      const playerData = snapshot.docs.map((doc) => doc.data());
      setPlayersL(playerData);
    } catch (error) {
      console.error('Erro ao buscar os jogadores:', error);
    }
  };



  fetchPlayersL();





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
        <BannerLoja />
        <br />
        <br />
        <div className="bg-primary py-5">
          <div className="container ">
            <div className="row">
              <div className="col-12 text-start car col-sm-6 col-lg-8">


                <h3 className='jog text-white'>Agora Ja pode jogar o Okupalenda Online</h3>
                <p className='text-white j-p'>
                  Okupalenda está online, faça parte da comunidade
                </p>
                <br />
                <NavLink className="btn mt-auto border-white text-white">Começar o Jogo <i className="bi bi-arrow-right-"></i> </NavLink>
              </div>
              <div style={{display:'grid', justifyContent:'center'}} className="col-12 col-sm-6 col-lg-4">
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
