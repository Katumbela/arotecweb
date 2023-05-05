import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPreto from '../components/banner_preto';
import { db } from './firebase';

const Contactar = ({ cart }) => {
  document.title = 'Formulario de Contacto | AROTEC';
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const nomeCompleto = event.target.nomeCompleto.value;
    const telefone = event.target.telefone.value;
    const email = event.target.email.value;
    const mensagem = event.target.mensagem.value;
  
    db.collection('mensagens').add({
      nomeCompleto: nomeCompleto,
      telefone: telefone,
      email: email,
      mensagem: mensagem,
      dataEnvio: new Date(),
    })
    .then(() => {
      console.log('Mensagem enviada com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao enviar mensagem:', error);
    });
  }
  
  return (
    <div className="w-100">

      < Header cart={cart} />
      <BannerPreto>
        CONTACTAR AROTEC
      </BannerPreto>
      <br />
      <br /><br />
      <div className="container">
        <div className="row">
          <div style={{display: 'grid', }} className="col-12 col-sm-6 text-center">
            <span className="text-secondary py-3 my-auto">
              Industry.Robotics.Tecnology
            </span>
          </div>
          <div className="col-12 col-sm-6">
            <div className="">
              <b>Preencha o Formulário</b>
              <div className="row">
                <div className="col-12 col-lg-6 my-2">
                  <label className='text-secodary f-12' htmlFor="">Nome completo</label>
                  <input type="text" name="" placeholder="Nome completo" id="" className="form-control" />
                </div>
                <div className="col-12 col-lg-6 my-2">
                  <label className='text-secodary f-12' htmlFor="">Telefone</label>
                  <input type="text" name="" placeholder="909 433 978" id="" className="form-control" />
                </div>
                <div className="col-12 col-lg-6 my-2">
                  <label className='text-secodary f-12' htmlFor="">Email</label>
                  <input type="text" name="" placeholder="Seu email" id="" className="form-control" />
                </div>
                <div className="col-12 col-lg-6 my-2">
                  <label className='text-secodary f-12' htmlFor="">Ficheiro ( Opcional )</label>
                  <input type="file" name="" id="" className="form-control" />
                </div>
                <div className="col-12 col-lg-6 my-2">
                  <label className='text-secodary f-12' htmlFor="">Sua Mensagem</label>
                  <textarea type="text" name="" placeholder="Seu email" id="" className="form-control" ></textarea>
                </div>
                  <div className="col-12 my-3">
                     <button className="btn btn-primary w-100">Envar <i className="bi bi-send ms-2"></i></button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      < Footer />

    </div>
  );
}

export default Contactar;
