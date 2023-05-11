import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import bb from '../imgs/logo.png';
import Footer from '../components/footer';
import Cursos from '../components/academia/cursos_disponiveis';

function Watch({ nomee, emaill, cart }) {
    document.title = 'Meu Dashboard | AROTEC';
    return (
        <div className="bg-light w-100">

            < Header nomee={nomee} emaill={emaill} cart={cart} />
            <br />
            <br />


            <div className="custom-video-area" itemID="custom-popout-video">

                <div className="video-controls control">
                    <div className="top-wrapper">
                        <div className="progress-bar">
                            <span className="buffer-bar"></span>
                            <span className="time-bar"></span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column">
                            <div className="bottom-wrapper">
                                <div className="play-button mini" title="Reproduzir/Parar Video"><i
                                    className="bi text-xl text-white bi-play-circle"></i></div>
                                <div className="time">
                                    <span className="current">00:00</span> / <span className="duration">00:00</span>
                                </div>
                                <div className="sound-button sound-med" title="Silenciar">
                                    <i className="bi text-xl text-white bi-volume-up"></i>
                                </div>
                                <div className="volume" title="Configurar volume">
                                    <span className="span volume-bar"></span>
                                </div>
                                <div style={{right: '1rem', top: '.8rem'}} className="logo position-absolute right-14 top-4">
                                    <img src={bb} className="h-6" alt="" /></div>
                                <div className="btnFS btn" title="Mudar para tela cheia"><i
                                    className="bi text-xl text-white bi-fullscreen"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <video className="video-element" id itemID="video-element" preload={bb}>
                    {/* <source src="./img/v1.mp4"> */}
                </video>

            </div>
            <br />
            <br />

            < Footer />

        </div>
    );
}

export default Watch;
