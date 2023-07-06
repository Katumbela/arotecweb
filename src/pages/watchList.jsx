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

           
      < Header style={{marginBottom:'5rem'}} nomee={nomee} emaill={emaill} cart={cart} />
      <br />
      <br />
            
            <main className="container">
            <br />
            <div className="row">
                <div className="col-12 col-md-6 col-lg-8 container-md col-xxl-7">
                     {/* <div style={{padding:'56.25% 0 0 0',position:'relative'}}><iframe src="https://player.vimeo.com/video/842220614?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} ></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}
                     <iframe className='w-100 ' height="415" src="https://www.youtube.com/embed/HldS5r_v52U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xxl-5">
                    <h2>Titulo do video </h2>
                </div>
            </div>
            <br />
            </main>
            
            <br />
            <br />

            < Footer />

        </div>
    );
}

export default Watch;
