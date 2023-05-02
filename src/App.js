import './App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rotas from './pages/rotas';
import React, { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

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


  return (
    <React.Fragment>
      <ToastContainer />
      <Rotas adicionar={adicionar} remover = {remover}  handleClick={handleClick} cart={cart}/>

    </React.Fragment>
  
  );
}

export default App;
