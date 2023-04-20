import '../App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import print from '../imgs/print.gif'

function BannerPreto({children}) {
  return (
    <div className="bg-dark text-center w-100 py-4">
      <h1 className='text-white'>{children}</h1>
    </div>
  );
}

export default BannerPreto;
