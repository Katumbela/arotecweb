import './App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rotas from './pages/rotas';
import React, {  useEffect, useState } from 'react';
import RotasPT from './pages/rotas';
import RotasEN from './en/pages/rotasEN';
import {useHistory} from 'react-router-dom';


function App() {

  const [cart, setCart] = useState([]);

  const [nomee, setNomee] = useState('');

  const [emaill, setEmaill] = useState('');
  const [tell, setTell] = useState('');

  const handleClick = (item) => {
    
    const existe = cart.find((x) => x.id === item.id);

    if(existe ){
      setCart(
        cart.map((x)=> x.id === item.id ? {...existe, qty: existe.qty + 1} : x)
      )
    }
    else {

      setCart([...cart, {...item, qty: 1}]);

      toast.success('Seu produto foi adicionado com sucesso!')
      
    }
  }

  const remover = (item) => {
    const existe = cart.find((x) => x.id === item.id);

    if(existe.qty === 1){
      setCart(
        cart.filter((x)=> x.id !== item.id)
      )
      console.log(cart);
    }
    else {
      setCart(
        cart.map((x)=> x.id === item.id ? {...existe, qty: existe.qty - 1} : x)
       
       )
       toast.success('Seu produto foi removido com sucesso!')
    }
  }

  const adicionar = (item) => {
    const existe = cart.find((x) => x.id === item.id);

    if(existe ){
     setCart(
      cart.map((x)=> x.id === item.id ? {...existe, qty: existe.qty + 1} : x)
     );    
     console.log(cart);
    }
    else {

      setCart([...cart, {...item, qty: 1}]);
      console.log(cart);
    }
  }

  const [country, setCountry] = useState('');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => setCountry(data.country_name))
      .catch(error => console.error(error));
  }, []);

  // useEffect(() => {
  //   const redirectToLanguage = () => {
  //     const currentPath = window.location.pathname;
  //     const isEnglish = currentPath.startsWith('/en');
  //     const isPortuguese = currentPath.startsWith('/');

  //     if (country !== 'Angola' && !isEnglish) {
  //       window.location.href = '/en' // redireciona para a versão em inglês
  //     } 
  //   }

  //   redirectToLanguage(); // apenas na primeira renderização

  // }, [])

  const redirectToLanguage = () => {
    const currentPath = window.location.pathname;
    const isEnglish = currentPath.startsWith('/en');
    const isPortuguese = currentPath.startsWith('/pt');
  
    if (country !== 'Angola' && !isEnglish) {
      window.history.pushState(null, null, '/en');
    } else if (country === 'Angola' && !isPortuguese) {
      window.history.pushState(null, null, '/');
    }
  }
  
  redirectToLanguage(); // apenas na primeira renderização

  return (
    <React.Fragment>
      <ToastContainer />
      {country == 'Angola' ? <RotasPT emaill={emaill} setEmaill = {setEmaill} nomee={nomee} setNomee={setNomee} adicionar={adicionar} remover = {remover}  handleClick={handleClick} cart={cart}/>
      : <RotasEN emaill={emaill} setEmaill = {setEmaill} nomee={nomee} setNomee={setNomee} adicionar={adicionar} remover = {remover}  handleClick={handleClick} cart={cart}/>}

    </React.Fragment>
  
  );
}

export default App;
