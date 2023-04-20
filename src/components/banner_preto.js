import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS

function BannerPreto({children}) {
  return (
    <div className="bg-dark text-center w-100 py-4">
      <h1 className='text-white'>{children}</h1>
    </div>
  );
}

export default BannerPreto;
