import React, { useContext, useEffect, useState } from 'react';
import logo from '../imgs/icone.png';
import cart from '../imgs/carrinho.png';
import '../css/header.css';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import en from '../en/imgs/uk.png'


const Header = (props) => {
    const [use, setUser] = useState([]);

    const [ph, setPh] = useState('')



    useEffect(() => {
        // Adicione um listener para o estado da autenticação
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                // Se não houver usuário autenticado, redirecione para a página de login
              
                const userData = {
                    name: '',
                    email: '',
                    pictureUrl: '',
                    tel: '',
                    uid:'',
                }

                localStorage.setItem('user', JSON.stringify(userData));

            }
        });


        // Retorne uma função de limpeza para remover o listener quando o componente for desmontado
        return unsubscribe;
    }, []);


    useEffect(() => {
        // Obtém o valor de 'user' do local storage quando o componente for montado
        const userString = localStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString);
            setUser(user);
            setPh(user.photo);
        }
        else {
            const userData = {
                name: '',
                email: '',
                pictureUrl: '',
                tel: '',
                uid:'',
            }
            setUser(userData);
        }
    }, []);

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
    
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;
  
        setPrevScrollPos(currentScrollPos);
        setVisible(visible);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);



  const handleLanguageChange = (lang) => {
    // Atualize a URL para refletir a escolha do usuário
    const currentPath = window.location.pathname;

    if (lang === 'en' && !currentPath.startsWith('/en')) {
      const newPath = '/en';
      window.location.pathname = newPath;
    } else if (lang === 'pt' && currentPath.startsWith('/en')) {
      const newPath = currentPath.slice(3);
      window.location.pathname = newPath;
    }
  };


    return (
        // <div className={`navbar ${visible ? 'navbar-show' : 'navbar-hide'}`}>
        <div className={``}>
            <header className='bg-white w-100 position-relative'>
                <div className=" bg-primary ">
                    <div className="d-flex dados py-2 container justify-content-between f-12 text-white">



                        {

                            use.name != '' ? <div className="position-relative" style={{padding:'.09rem 0'}}>
                                <img src={use.photo} className='rounded-circle' style={{height:'2.5em',border:'1px solid white', width:'2.5em', top:'-.35rem', position: 'absolute'}} alt={use.photo} />
                                <NavLink className={'text-white  ms-5 navlink'} to={'/pt/meus_cursos'} style={{marginBottom:'.5rem', border:'1px solid white', padding:'.25rem .5rem'}}>Meus Cursos <i className="bi bi-mortarboard-fill"></i></NavLink>
                            </div>
                                :
                                <div className="">
                                    <span>(+244) 938 811 659</span>
                                    <span>  | info@arotec.ao</span>
                                </div>}
                        {

                            use.name != '' ?
                                <span className='my-auto'> {use.name} &middot; <NavLink to={'/pt/login'} className={'text-white'}> <i className="bi bi-box-arrow-right"></i> </NavLink></span>
                                :

                                <div className="text-white">
                                    <NavLink className='text-white link' to="/pt/login">Login / </NavLink>
                                    <NavLink className='text-white link' to="/pt/criar_conta">Criar Conta {use.emal}</NavLink>
                                </div>
                        }

                    </div>
                </div>
                <div className="nav pt-3 pb-1 container d-flex justify-content-between ">
                    <div style={{ height: '2em', width: '2em' }} onClick={() => abrirMenu()} className='d-s'> <i className="bi bi-list" onClick={() => abrirMenu()} ></i></div>
                    <div className="div-logo">
                        <NavLink className="link" to="/pt/" ><img src={logo} alt="logo arotec" className='logo' /></NavLink>
                    </div>
                    <div className="list">
                        <ul>
                            <li><NavLink className="link" to="/pt/academia" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}> Academia </NavLink></li>
                            <li><NavLink className="link" to="/pt/projectos" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}> Projectos DIY</NavLink></li>
                            <li><NavLink className="link" to="/pt/loja" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Loja</NavLink></li>
                            <li><NavLink className="link" to="/pt/empresas" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Empresas</NavLink></li>
                        </ul>
                    </div>
                    <div className="d-flex icones gap-3">
                        <NavLink className={'cart-logo'} to="/pt/cart">
                            <div className="c d-flex gap-1 position-relative rounded-pill" style={{ height: '2em', padding: '.3rem .5rem' }}>
                                <b style={{ fontSize: "13px", position: 'absolute', top: '0', right: '-.2rem', background: '#0066be', color: 'white', width: '1.5em', display: 'grid', placeContent: 'center', height: '1.5em', borderRadius: '90px' }} className='text-white fw-light rounded-circle'>{qnt}</b>
                                <i style={{ fontSize: "21px" }} className="bi bi-cart text-secondary"></i>
                            </div>
                        </NavLink>
                        <NavLink to={'/pt/s/'}>
                            <i className="bi bi-search mt-2 f-1 text-secondary"></i>
                        </NavLink>
                    </div>
                </div>


            </header>
                        <NavLink className={'lang'} onClick={() => handleLanguageChange('en')}>
                            <img src={en} className='en-flag rounded-circle' alt="" />
                        </NavLink>
            {
                nav === 1 ? <div className="shadow list-mobile">
                    <div className="px-4 c-pointer f-26 text-primary" onClick={() => fecharMenu()}>
                        <span>&times;</span>
                    </div>
                    
                    <ul>
                        <li><NavLink className="link d-flex justify-content-between" to="/pt/academia" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}> Academia  <i className="bi bi-arrow-right-short"></i></NavLink></li>
                        <li><NavLink className="link d-flex justify-content-between" to="/pt/projectos" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}> Projectos DIY <i className="bi bi-arrow-right-short"></i></NavLink></li>
                        <li><NavLink className="link d-flex justify-content-between" to="/pt/loja" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Loja <i className="bi bi-arrow-right-short"></i></NavLink></li>
                        <li><NavLink className="link d-flex justify-content-between" to="/pt/empresas" style={({ isActive }) => isActive ? { color: '#0066be', borderBottom: '2px solid #0066be', paddingBottom: '6px' } : undefined}>Empresas <i className="bi bi-arrow-right-short"></i></NavLink></li>
                    </ul>

                    <div className="btns gap-3 ms-4 justify-content-between d-flex">
                        <NavLink to={'/pt/login'} className={'w-100'}>
                            <button className="btn w-100 btn-outline-primary">
                                Entrar
                            </button>
                        </NavLink>
                        <NavLink to={'/pt/criar_conta'} className=" w-100 ">
                            <button className="btn w-100 btn-primary">
                                Cadastro
                            </button>
                        </NavLink>
                    </div>
                </div> : ""
            }

        </div>
    );
};

export default Header;
