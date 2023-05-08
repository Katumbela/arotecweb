import React, { useContext, useEffect, useState } from 'react';
import logo from '../imgs/icone.png';
import cart from '../imgs/carrinho.png';
import '../css/header.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../pages/userContext';


const Header = (props) => {
    const [use, setUser] = useState([]);

    useEffect(() => {
        // Obtém o valor de 'user' do local storage quando o componente for montado
        const userString = localStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString);
            setUser(user);
        }
        else {
            const userData = {
                name: '',
                email: '',
                pictureUrl: '',
                tel: '',
            }
            setUser(userData);
        }
    }, []);

    const { user, handleLogout, push } = useContext(UserContext);
    const { nomee, emaill, cart } = props;
    let preco = 0;
    let qnt = 0;
    cart.map((item) => (preco += item.preco * item.qty));
    cart.map((item) => (qnt += item.qty));
    const [nav, setNav] = useState(0);

    const abrirMenu = () => {
        setNav(1);
        console.log('Menu Aberto!');
    }

    const fecharMenu = () => {
        setNav(!nav);
    }



    return (
        <>
            <header className='bg-white w-100 position-relative'>
                <div className=" bg-primary ">
                    <div className="d-flex dados py-2 container justify-content-between f-12 text-white">



                        {

                            use.name != '' ? <div><i className="bi bi-person text-white"></i></div>
                                :
                                <div className="">
                                    <span>(+244) 938 811 659</span>
                                    <span>  | info@arotec.ao</span>
                                </div>}
                        {

                            use.name != '' ?
                                <span> {use.name} &middot; <NavLink to={'/login'} className={'text-white'}> <i className="bi bi-box-arrow-right"></i> </NavLink></span>
                                :

                                <div className="text-white">
                                    <NavLink className='text-white link' to="/login">Login / </NavLink>
                                    <NavLink className='text-white link' to="/criar_conta">Criar Conta {use.emal}</NavLink>
                                </div>
                        }

                    </div>
                </div>
                <div className="nav pt-3 pb-1 container d-flex justify-content-between ">
                    <div style={{ height: '2em', width: '2em' }} onClick={() => abrirMenu()} className='d-s'> <i className="bi bi-list" onClick={() => abrirMenu()} ></i></div>
                    <div className="div-logo">
                        <NavLink className="link" to="/" ><img src={logo} alt="logo arotec" className='logo' /></NavLink>
                    </div>
                    <div className="list">
                        <ul>
                            <li><NavLink className="link" to="/academia" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}> Academia </NavLink></li>
                            <li><NavLink className="link" to="/projectos" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}> Projectos DIY</NavLink></li>
                            <li><NavLink className="link" to="/loja" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Loja</NavLink></li>
                            <li><NavLink className="link" to="/empresas" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Empresas</NavLink></li>
                        </ul>
                    </div>
                    <div className="d-flex icones gap-3">
                        <NavLink className={'cart-logo'} to="/cart">
                            <div className="c d-flex gap-1 position-relative rounded-pill" style={{ height: '2em', padding: '.3rem .5rem' }}>
                                <b style={{ fontSize: "13px", position: 'absolute', top: '0', right: '-.2rem', background: '#0066be', color: 'white', width: '1.5em', display: 'grid', placeContent: 'center', height: '1.5em', borderRadius: '90px' }} className='text-white fw-light rounded-circle'>{qnt}</b>
                                <i style={{ fontSize: "21px" }} className="bi bi-cart text-secondary"></i>
                            </div>
                        </NavLink>
                        <NavLink to={'/s/'}>
                            <i className="bi bi-search mt-2 f-1 text-secondary"></i>
                        </NavLink>
                    </div>
                </div>


            </header>
            {
                nav === 1 ? <div className="shadow list-mobile">
                    <div className="px-4 c-pointer f-26 text-primary" onClick={() => fecharMenu()}>
                        <span>&times;</span>
                    </div>
                    <ul>
                        <li><NavLink className="link d-flex justify-content-between" to="/academia" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}> Academia  <i className="bi bi-arrow-right-short"></i></NavLink></li>
                        <li><NavLink className="link d-flex justify-content-between" to="/projectos" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}> Projectos DIY <i className="bi bi-arrow-right-short"></i></NavLink></li>
                        <li><NavLink className="link d-flex justify-content-between" to="/loja" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Loja <i className="bi bi-arrow-right-short"></i></NavLink></li>
                        <li><NavLink className="link d-flex justify-content-between" to="/empresas" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Empresas <i className="bi bi-arrow-right-short"></i></NavLink></li>
                    </ul>
                    <div className="btns gap-3 ms-4 justify-content-between d-flex">
                        <NavLink to={'/login'} className={'w-100'}>
                            <button className="btn w-100 btn-outline-primary">
                                Entrar
                            </button>
                        </NavLink>
                        <NavLink to={'/criar_conta'} className=" w-100 ">
                            <button className="btn w-100 btn-primary">
                                Cadastro
                            </button>
                        </NavLink>
                    </div>
                </div> : ""
            }

        </>
    );
};

export default Header;
