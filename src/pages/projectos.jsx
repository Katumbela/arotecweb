import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/projectos.css';
import printt from '../imgs/print.gif';
import { NavLink } from 'react-router-dom';
import BannerPreto from '../components/banner_preto';
import ProjectosDiy from '../components/projetos_diy';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function Projectos({ nomee, emaill, cart }) {
  document.title = 'Projectos DIY | AROTEC';

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


  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const getProjetos = async () => {
      const projetosCollection = collection(db, 'projetos');
      const projetosSnapshot = await getDocs(projetosCollection);
      const projetosData = projetosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjetos(projetosData);
    };

    getProjetos();
  }, []);


  return (
    <div className="w-100">

      < Header nomee={nomee} emaill={emaill} cart={cart} />
      <BannerPreto>
        PROJECTOS DIY | AROTEC
      </BannerPreto>

      <div className="container">
        <br />
        <br />
        <div className="bg-light row ">

          <div className="col-3 text-start bg-white col-sm-3">
            <img src={printt} alt="printing pub" className="w-100" />
          </div>
          <div className="col-9 col-sm-9 py-1">
            <b className="proj-tit">Serviço de impressão 3D</b><br />
            <p className="text-secondary proj-f">Crie os seus projectos com AROTEC, consulte o orçamento para o seu projeto clicando no botão abaixo.</p>
            <NavLink to={'/contactar'} className="btn  btn-outline-primary proj-f">Solicitar orçamento</NavLink>
          </div>

        </div>
      </div>
      <br />
      <br /><br />
      <div className="d-flex justify-content-between container" >
        <p className="text-secondary f-14"> Você tambem pode adicionar seu projecto aqui</p>

        {
          use.name == '' ?
            <NavLink className="f-14" to="/login">Faça login para adicionar</NavLink>
            :
            <NavLink className="f-14 btn btn-outline-dark" to="/adicionar_projecto">Adicione seu projecto <i className="bi bi-arrow-right-short"></i></NavLink>
        }

      </div>

      <br />
      <div className="container">
        <h2>Projectos disponíveis, faça você mesmo</h2>
       


        <br />
        <br />
        <br />
        <div className="container">
          
          {/* <center>
            <i className="bi bi-exclamation-triangle text-warning " style={{ fontSize: '70px' }}></i>
            <br />
            <p className="text-warning">Em construção!</p>
          </center> */}
          {projetos.map((projeto) => (
            <div key={projeto.id} className="row my-4">
              <div className="col-12 col-md-4">
                <img src={`gs://arotec-374911.appspot.com/arquivos/projectos/` + projeto.fotoUrlDownload} className="img-fluid" alt={projeto.fotoUrl} />
                <img src={`https://firebasestorage.googleapis.com/v0/b/my-firebase-app.appspot.com/o/images%2Fexample.jpg?alt=media`}/>
              </div>
              <div className="col-12 col-md-8">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <p>
                  <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                    {projeto.link}
                  </a>
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      < Footer />

    </div>
  );
}

export default Projectos;
