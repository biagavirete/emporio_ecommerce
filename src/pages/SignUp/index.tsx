import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';

import toast, { Toaster } from 'react-hot-toast';
import './styles.scss';
import axios from 'axios';
import Logo from '../../components/Logo';

interface Request {
  name?: string;
  password?: string;
  email?: string;
}

const SignUp = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const [authorized, setAuthorized] = useState<boolean>(false);
  const [age, setAge] = useState();

  const register = async (requestBody: Request) => {
    try {
      const setToken = await api.post('/register', requestBody);
      if (setToken.status !== 400 || age === 'yes') {
        localStorage.setItem("token", setToken.data.accessToken);
        setAuthorized(true);
      }
    } catch (error) {
      console.log({ error });
      if (axios.isAxiosError(error)) {
        toast.error(String(error?.response?.data));
      }
    }
  };

  function onChangeValue(e: any) {
    setAge(e.target.value);
  }

  const signUp = async () => {

    if (age === undefined) {
      toast.error('Selecione uma das opções!');
      return;
    }

    if (age === 'no') {
      toast.error('Acesso somente a maiores de 18 anos');
      return;
    }

    const request = {
      name: nameInput.current?.value,
      email: emailInput.current?.value,
      password: passwordInput.current?.value
    };

    register(request);
  };

  return (
    <div className="main">
      <div className="signup-container">
        <div className="logo-container">
          <Logo />
        </div>
        <h2>Cadastre-se para acessar</h2>
        <div className="form">
          <div className="form-text">
            <input type="text" placeholder="Nome" ref={nameInput} />
            <input type="text" placeholder="E-mail" ref={emailInput} />
            <input type="password" placeholder="Senha" ref={passwordInput} />
          </div>
          <p>Maior de 18 anos?</p>
          <div className="form-radio" onChange={onChangeValue}>
            <input type="radio" id="yes" name="maior" value="yes" />
            <label htmlFor="yes">Sim</label  >
            <input type="radio" id="no" name="maior" value="no" />
            <label htmlFor="no">Não</label>
          </div>
          <Toaster />
          <button type="button" onClick={signUp}>Cadastrar</button>
          {authorized && <Redirect to="/home" />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;