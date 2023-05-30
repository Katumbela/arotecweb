import { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Header from '../components/header';
import BannerPreto from '../en/components/banner_preto';
import Footer from '../components/footer';
import { toast } from 'react-toastify';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { v4 as uuidv4 } from 'uuid';


function SubmitP({ nomee, emaill, cart }) {
    const [fotoUrl, setFotoUrl] = useState('');
    
    
  const [use, setUser] = useState([]);



  useEffect(() => {
    // Adicione um listener para o estado da autenticação
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        // Se não houver usuário autenticado, redirecione para a página de login

        const userData = {
          name: '',
          email: '',
          tel: '',
          uid: '',
        }

        localStorage.setItem('user', JSON.stringify(userData));

      }
    });


    // Retorne uma função de limpeza para remover o listener quando o componente for desmontado
    return unsubscribe;
  }, []);

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

  const uiid = uuidv4();


    const [projeto, setProjeto] = useState({
      titulo: '',
      descricao: '',
      link: '',
      id: uiid,
      visualizacoes: 0,
    });
  
    const handleSubmit = (event) => {
        event.preventDefault(); 
        const user = firebase.auth().currentUser;
        const { email, displayName } = user;
      
        addDoc(collection(db, 'projetos'), {
          ...projeto,
          email: email,
          nome: displayName,
          fotoUrl: fotoUrl,
          fotoUrlDownload: `${fotoUrl}?alt=media`,
        })
          .then(() => {
            toast.info('Projeto adicionado com sucesso!');
          })
          .catch((erro) => {
            toast.info('Erro ao adicionar o projeto:', erro);
          });
      };
      
  
    const handleChange = (event) => {

      setProjeto({
        ...projeto,
        [event.target.name]: event.target.value,
      });
    };
    
    const handleFileInputChange = (event) => {
        const arquivo = event.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, `projectos/${arquivo.name}`);
    
        setFotoUrl(arquivo.name);
        uploadBytes(storageRef, arquivo)
            .then((snapshot) => {
                console.log('Arquivo enviado com sucesso!');
                snapshot.ref.getDownloadURL().then((url) => {
                    setFotoUrl(url);
                    setProjeto({
                        ...projeto,
                        fotoUrl: url,
                    });
                });
            })
            .catch((erro) => {
                // toast.info('Erro ao enviar o arquivo:', erro);
            });
    };

    

    return (
        <div className="">
            <Header cart={cart} nomee={nomee} emaill={emaill} />
            <BannerPreto>Adicionar Projeto</BannerPreto>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <b>Adicione seu Projeto {use.name}!</b>
                    <br />
                    <hr />
                    <div className="row">
                        <div className="col-12 col-sm-6 my-2">
                            <label htmlFor="titulo" className="f-12 text-secondary">
                                Titulo do Projeto
                            </label>
                            <input
                                type="text"
                                placeholder="Adicione um titulo"
                                className="form-control"
                                name="titulo"
                                value={projeto.titulo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6 my-2">
                            <label htmlFor="descricao" className="f-12 text-secondary">
                                Descricão do Projeto
                            </label>
                            <textarea
                                maxLength={600}
                                type="text"
                                placeholder="Adicione uma descricao ( 500 caracteres)"
                                className="form-control"
                                name="descricao"
                                value={projeto.descricao}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="col-12 col-sm-6 my-2">
                            <label htmlFor="thumbnail" className="f-12 text-secondary">
                                Capa / Thumbnail
                            </label>
                            <input
                                type="file"
                                id="thumbnail"
                                name="thumbnail"
                                className="form-control"
                                onChange={handleFileInputChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6 my-2">
                            <label htmlFor="link" className="f-12 text-secondary">
                                Link do projeto
                            </label>
                            <input
                                type="text"
                                placeholder="Adicione o link do youtube"
                                className="form-control"
                                name="link"
                                value={projeto.link}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="d-grid mt-4">
                        <button type="submit" className="btn btn-primary btn-block">
                            Enviar projeto
                        </button>
                    </div>
                </form>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    );
}

export default SubmitP;




