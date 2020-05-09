import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, LoginArea, Background } from './styles';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <LoginArea>
        <img src={logo} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input name="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Entrar</Button>
          <a href="#">Esqueci minha senha</a>
        </Form>

        <Link to="signup">
          <FiLogIn />
          Criar conta
        </Link>
      </LoginArea>
      <Background />
    </Container>
  );
};

export default SignIn;
