import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, LoginArea, Background } from './styles';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <LoginArea>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Faça seu login</h1>
        <Input icon={FiMail} name="email" placeholder="Email" />
        <Input icon={FiLock} name="passoword" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <a href="#">Esqueci minha senha</a>
      </form>

      <Link to="signup">
        <FiLogIn />
        Criar conta
      </Link>
    </LoginArea>
    <Background />
  </Container>
);

export default SignIn;
