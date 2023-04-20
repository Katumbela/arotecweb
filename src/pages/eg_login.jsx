import React, { useState } from 'react';
import fazerLogin from '../backend/auth_login';
import axios from 'axios';

 function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fazerLogin(username, password).then(user => {
      // Redireciona o usuário para a página principal ou outra página de destino
      window.location.href = '/home';
    });
  }


function fazerLogin(username, password) {
    return axios.post('/api/login', { username, password })
      .then(response => {
        // Salva o token do usuário na localStorage ou em algum outro lugar de armazenamento
        localStorage.setItem('token', response.data.token);
        // Retorna os dados do usuário para que possam ser usados em outros lugares na aplicação
        return response.data.user;
      });
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;

