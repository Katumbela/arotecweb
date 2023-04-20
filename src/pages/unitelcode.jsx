import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer'; 
import'../css/unitecode.css'
import BannerPreto from '../components/banner_preto';

const UnitelCode = ({cart}) => {
    document.title='Unitel Code Robotica Inscricao | AROTEC';
  return (
    <div className="w-100">
      
      < Header cart={cart} />
      <BannerPreto>
        Unitel Code Robotica III edição
      </BannerPreto>
        <br />
        <br />
           <div className='container '>
                <div class="row form-unitel justify-content-center align-items-center g-2">
                    <div class="col-12 b-form my-1 col-md-6 col-lg-7">
                        <h3 className=' f-20 text-primary'>
                            Preencha o formulário de inscrição
                        </h3>
                       
                        <div className="row ">
                            <div className="col-12 my-1 col-sm-6">
                              <label htmlFor="" className="text-secondary f-12">Nome Completo</label>
                              <input type="text" className="form-control" placeholder='Nome do formando' />
                            </div>
                            <div className="col-12 my-1 col-sm-6">
                              <label htmlFor="" className="text-secondary f-12">Encarregado</label>
                              <input type="text" className="form-control" placeholder='Nome do encarregado' />
                            </div>
                            <div className="col-12 my-1 col-sm-6">
                              <label htmlFor="" className="text-secondary f-12">Telefone</label>
                              <input type="text" className="form-control" placeholder='999 000 000' />
                            </div>
                            <div className="col-12 my-1 col-sm-6">
                              <label htmlFor="" className="text-secondary f-12">E-mail</label>
                              <input type="text" className="form-control" placeholder='exemplo@email.com' />
                            </div>
                            <div className="col-12 my-1 col-sm-6">
                              <label htmlFor="" className="text-secondary f-12">Endereço actual</label>
                              <input type="text" className="form-control" placeholder='Sua residencia actual' />
                            </div>
                            <div className="col-12 my-1 col-sm-6">
                              <label htmlFor="" className="text-secondary f-12">Idade</label>
                              <select name="" id="" className="form-control">
                                <option value="">7 anos</option>
                                <option value="">8 anos</option>
                                <option value="">9 anos</option>
                                <option value="">10 anos</option>
                                <option value="">11 anos</option>
                                <option value="">12 anos</option>
                                <option value="">13 anos</option>
                                <option value="">14 anos</option>
                                <option value="">15 anos</option>
                                <option value="">16 anos</option>
                              </select>
                            </div>
                            <div className="col-12 my-1 col-sm-6">
                              <label htmlFor="" className="text-secondary f-12">Local para Formação</label>
                              <select name="" id="" className="form-control">
                                <option value="">Selecione</option>
                                <option value="">Luanda - Viana</option>
                                <option value="">Luanda - Belas</option>
                                <option value="">Luanda - Cazenga</option>
                                <option value="">Luanda - Nova Vida</option>
                              </select>
                            </div>
                            <div className="col-12 my-1 col-sm-6">
                              <label htmlFor="" className="text-secondary f-12">Hora da Formação</label>
                              <select name="" id="" className="form-control">
                                <option value="">Selecione</option>
                                <option value="">10h - 12h</option>
                                <option value="">14 - 16h</option>
                              </select>
                            </div>

                            <div className="col-12 mt-5 mt-md-5 ">
                              <div className="btn w-100 btn btn-outline-primary">
                                Enviar
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 my-1 unitelBanner col-md-6 col-lg-5">

                    </div>
                </div>
           </div>
        <br />
        <br />
      < Footer />
      
    </div>
  );
}

export default UnitelCode;
