import { Route, BrowserRouter, Routes } from "react-router-dom";
import Arobot from "../produtos/detalhe_prod";
import Academia from "./academia";
import RoboticSchool from "./arotec_robotic_school";
import Carreiras from "./carreiras";
import Cart from "./carrinho";
import Contactar from "./contactar";
import CriarConta from "./criar_conta";
import DetalheCurso from "./detalhe_curso";
import Empresas from "./empresas";
import Formulario from "./formulario_curso";
import Home from "./home";
import Login from "./login";
import Loja from "./loja";
import Politicas from "./politicas";
import Projectos from "./projectos";
import Sobre from "./sobre";
import UnitelCode from "./unitelcode";
import { useEffect, useState } from "react";
import Search from "./search";
import LoginPage from "./eg_login";
import BuyNow from "./comprar_agora";


const Rotas = (props) => {

  const {cart, adicionar, remover, handleClick} = props;
  
   return(
       <BrowserRouter>
            <Routes >
                <Route element = { <Home cart={cart} /> }  path="/"  />
                <Route element = { <Academia cart={cart}  /> }  path="/academia" exact/>
                <Route element = { <Projectos cart={cart}  /> }  path="/projectos" exact/>
                <Route element = { <Empresas cart={cart} /> }  path="/empresas" exact/>
                <Route element = { <Loja cart={cart} handleClick={handleClick}/> }  path="/loja" exact/>
                <Route element = { <Arobot cart={cart} handleClick={handleClick} /> }  path="/produtos/store/:id" exact/>
                <Route element = { <Cart  adicionar={adicionar} remover = {remover}  handleClick={handleClick} cart={cart}/> }  path="/cart" exact/>
                <Route element = { <RoboticSchool cart={cart} /> }  path="/arotec_robotic_school" exact/>
                <Route element = { <Contactar cart={cart} /> }  path="/contactar" exact/>
                <Route element = { <Sobre cart={cart} /> }  path="/sobre" exact/>
                <Route element = { <Carreiras cart={cart} /> }  path="/carreiras" exact/>
                <Route element = { <UnitelCode cart={cart} /> }  path="/unitel_code_robotica_inscricao" exact/>
                <Route element = { <Login /> }  path="/login" exact/>
                <Route element = { <LoginPage /> }  path="/loginn" exact/>
                <Route element = { <BuyNow cart={cart} handleClick={handleClick} /> }  path="/comprar_agora/:id" exact/>
                <Route element = { <CriarConta /> }  path="/criar_conta" exact/>
                <Route element = { <Search adicionar={adicionar} remover = {remover}  handleClick={handleClick} cart={cart} /> }  path="/s/" exact/>
                <Route element = { <Politicas cart={cart} /> }  path="/politicas_de_privacidade" exact/>
                <Route element = { <Formulario cart={cart} /> }  path="/formulario/curso/:id" exact/>
                <Route element = { <DetalheCurso cart={cart} /> }  path="/academia/curso/arotec/:id" exact/>
            </Routes>
       </BrowserRouter>
   )
}

export default Rotas;