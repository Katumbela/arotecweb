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
                                <span> {use.name} &middot; <NavLink to={'/signin'} className={'text-white'}> <i className="bi bi-box-arrow-right"></i> </NavLink></span>
                                :

                                <div className="text-white">
                                    <NavLink className='text-white link' to="/signin">Sign in / </NavLink>
                                    <NavLink className='text-white link' to="/signup">Sign Up {use.emal}</NavLink>
                                </div>
                        }

                    </div>
                </div>
                <div className="nav pt-3 pb-1 container d-flex justify-content-between ">
                    <div style={{ height: '2em', width: '2em' }} onClick={() => abrirMenu()} className='d-s'> <i className="bi bi-list" onClick={() => abrirMenu()} ></i></div>
                    <div className="div-logo">
                        <NavLink className="link" to="/en" ><img src={logo} alt="logo arotec" className='logo' /></NavLink>
                    </div>
                    <div className="list">
                        <ul>
                            <li><NavLink className="link" to="/en/academy" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}> Academy </NavLink></li>
                            <li><NavLink className="link" to="/en/projects" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>  DIY Projects</NavLink></li>
                            <li><NavLink className="link" to="/en/store" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Store</NavLink></li>
                            <li><NavLink className="link" to="/en/companies" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Companies</NavLink></li>
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
                        <li><NavLink className="link d-flex justify-content-between" to="/en/academy" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}> Academy  <i className="bi bi-arrow-right-short"></i></NavLink></li>
                        <li><NavLink className="link d-flex justify-content-between" to="/en/projects" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>  DIY Projects<i className="bi bi-arrow-right-short"></i></NavLink></li>
                        <li><NavLink className="link d-flex justify-content-between" to="/en/store" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Store <i className="bi bi-arrow-right-short"></i></NavLink></li>
                        <li><NavLink className="link d-flex justify-content-between" to="/en/companies" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Companies <i className="bi bi-arrow-right-short"></i></NavLink></li>
                    </ul>
                    <div className="btns gap-3 ms-4 justify-content-between d-flex">
                        <NavLink to={'/signin'} className={'w-100'}>
                            <button className="btn w-100 btn-outline-primary">
                                Sign In
                            </button>
                        </NavLink>
                        <NavLink to={'/signup'} className=" w-100 ">
                            <button className="btn w-100 btn-primary">
                                Sign Up
                            </button>
                        </NavLink>
                    </div>
                </div> : ""
            }

        </>
    );
};

export default Header;
