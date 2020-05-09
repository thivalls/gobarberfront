import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, LoginArea, Background } from './styles';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <LoginArea>
        <img src={logo} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input name="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="signin">
          <FiArrowLeft />
          Já tenho cadastro
        </Link>
      </LoginArea>
    </Container>
  );
};

export default SignUp;
