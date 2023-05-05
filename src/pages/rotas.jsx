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
import Aplicar from "./aplicar_curso";
import { UserProvider } from "./userContext";


const Rotas = (props) => {

    const {emaill, setEmaill, nomee, setNomee, cart, adicionar, remover, handleClick } = props;

    return (
        <BrowserRouter>
            <UserProvider>
                <Routes >
                    <Route element={<Home nomee={nomee} emaill={emaill} cart={cart} />} path="/" />
                    <Route element={<Academia  nomee={nomee} emaill={emaill} cart={cart} />} path="/academia" exact />
                    <Route element={<Projectos  nomee={nomee} emaill={emaill} cart={cart} />} path="/projectos" exact />
                    <Route element={<Empresas  nomee={nomee} emaill={emaill} cart={cart} />} path="/empresas" exact />
                    <Route element={<Loja  nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/loja" exact />
                    <Route element={<Arobot nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/produtos/store/:id" exact />
                    <Route element={<Cart  nomee={nomee} emaill={emaill} adicionar={adicionar} remover={remover} handleClick={handleClick} cart={cart} />} path="/cart" exact />
                    <Route element={<RoboticSchool  nomee={nomee} emaill={emaill} cart={cart} />} path="/arotec_robotic_school" exact />
                    <Route element={<Contactar  nomee={nomee} emaill={emaill} cart={cart} />} path="/contactar" exact />
                    <Route element={<Sobre  nomee={nomee} emaill={emaill} cart={cart} />} path="/sobre" exact />
                    <Route element={<Carreiras emaill={emaill} nomee={nomee} cart={cart} />} path="/carreiras" exact />
                    <Route element={<UnitelCode  nomee={nomee} emaill={emaill} cart={cart} />} path="/unitel_code_robotica_inscricao" exact />
                    <Route element={<Login emaill={emaill} setEmaill = {setEmaill} nomee={nomee} setNomee={setNomee}  />} path="/login" exact />
                    <Route element={<LoginPage />} path="/loginn" exact />
                    <Route element={<BuyNow  nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/comprar_agora/:id" exact />
                    <Route element={<Aplicar  nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/aplicar/:id" exact />
                    <Route element={<CriarConta />} path="/criar_conta" exact />
                    <Route element={<Search  nomee={nomee} emaill={emaill} adicionar={adicionar} remover={remover} handleClick={handleClick} cart={cart} />} path="/s/" exact />
                    <Route element={<Politicas  nomee={nomee} emaill={emaill}cart={cart} />} path="/politicas_de_privacidade" exact />
                    <Route element={<Formulario  nomee={nomee} emaill={emaill} cart={cart} />} path="/formulario/curso/:id" exact />
                    <Route element={<DetalheCurso  nomee={nomee} emaill={emaill} cart={cart} />} path="/academia/curso/arotec/:id" exact />

                </Routes>
            </UserProvider>
        </BrowserRouter>
    )
}

export default Rotas;