import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Faz o login com o email e senha informados
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Redireciona para a página de perfil, por exemplo
      window.location.href = '/perfil';
    } catch (error) {
      // Trata o erro e exibe uma mensagem de erro para o usuário
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Cria uma nova conta com o email e senha informados
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Redireciona para a página de perfil, por exemplo
      window.location.href = '/perfil';
    } catch (error) {
      // Trata o erro e exibe uma mensagem de erro para o usuário
      setError(error.message);
    }
  };

  return (
    <div className='container text-center'>
      <br />
      <br />
      
      {error != 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).' && <form className='w-100' onSubmit={handleSignIn}>
        <label className='text-secondary'>
          Email:
          <input className='w-100 form-control' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br /><br />
        <label className='text-secondary'>
          Senha:
          <input  className='w-100 form-control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <button className='btn btn-outline-primary' type="submit">Entrar</button>
      </form>}
      <form className='text-center' onSubmit={handleSignUp}>
       
      <br /><br />
        <label className='text-secondary'>
          Email:
          <input  className='form-control' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <br />
        <label className='text-secondary'>
          Senha:
          <input className='form-control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label><br /><br />
        <button className='btn btn-outline-primary' type="submit">Cadastrar</button>
      </form>
      {error == 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).' && <div>
        
        
      <p className='w-75 f-14 text-secondary'>Não há nenhum usuario correspondente à estes dados, crie uma conta!</p>
      
        </div>}
    </div>
  );
}

export default LoginPage;
