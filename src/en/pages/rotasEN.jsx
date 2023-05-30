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
import AppVaga from "./submit_vaga";
import SeeP from "./see_project";


const RotasEN = (props) => {

    const {emaill, setEmaill, nomee, setNomee, cart, adicionar, remover, handleClick } = props;
    
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes >
                    <Route element={<Home nomee={nomee} emaill={emaill} cart={cart} />} path="/en/" />
                    <Route element={<Academia  nomee={nomee} emaill={emaill} cart={cart} />} path="/en/academy" exact />
                    <Route element={<Projectos  nomee={nomee} emaill={emaill} cart={cart} />} path="/en/projects" exact />
                    <Route element={<Empresas  nomee={nomee} emaill={emaill} cart={cart} />} path="/en/companies" exact />
                    <Route element={<Loja  nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/en/store" exact />
                    <Route element={<Arobot nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/en/products/store/:id" exact />
                    <Route element={<Cart  nomee={nomee} emaill={emaill} adicionar={adicionar} remover={remover} handleClick={handleClick} cart={cart} />} path="/cart" exact />
                    <Route element={<RoboticSchool  nomee={nomee} emaill={emaill} cart={cart} />} path="/en/arotec_robotic_school" exact />
                    <Route element={<Contactar  nomee={nomee} emaill={emaill} cart={cart} />} path="/en/contact" exact />
                    <Route element={<Sobre  nomee={nomee} emaill={emaill} cart={cart} />} path="/en/about" exact />
                    <Route element={<Carreiras emaill={emaill} nomee={nomee} cart={cart} />} path="/en/carreers" exact />
                    <Route element={<UnitelCode  nomee={nomee} emaill={emaill} cart={cart} />} path="/en/unitel_code_robotica_inscricao" exact />
                    <Route element={<Login emaill={emaill} setEmaill = {setEmaill} nomee={nomee} setNomee={setNomee}  />} path="/en/signin" exact />
                    <Route element={<LoginPage />} path="/loginn" exact />
                    <Route element={<SeeP nomee={nomee} emaill={emaill} cart={cart} />} path="/en/see_project/:id" exact />
                    <Route element={<BuyNow  nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/comprar_agora/:id" exact />
                    <Route element={<Aplicar  nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/en/apply/:id" exact />
                    <Route element={<CriarConta />} path="/signup" exact />
                    <Route element={<Search  nomee={nomee} emaill={emaill} adicionar={adicionar} remover={remover} handleClick={handleClick} cart={cart} />} path="/s/" exact />
                    <Route element={<Politicas  nomee={nomee} emaill={emaill}cart={cart} />} path="/politicas_de_privacidade" exact />
                    <Route element={<Formulario  nomee={nomee} emaill={emaill} cart={cart} />} path="/en/formulario/curso/:id" exact />
                    <Route element={<AppVaga  nomee={nomee} emaill={emaill} cart={cart} />} path="/en/application/submit/:id" exact />
                    <Route element={<DetalheCurso  nomee={nomee} emaill={emaill} cart={cart} />} path="/en/academy/course/arotec/:id" exact />

                </Routes>
            </UserProvider>
        </BrowserRouter>
    )
}

export default RotasEN;