import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import setValidationErros from '../../utils/setValidationErrors';
import { useAuth } from '../../hooks/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, LoginArea, Background } from './styles';

import logo from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors([]);

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email é obrigatório')
            .email('Email inválido'),
          password: Yup.string()
            .required('Senha é obrigatória')
            .min(6, 'Mínimo 6 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        const errors = setValidationErros(error);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <LoginArea>
        <img src={logo} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input name="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Entrar</Button>
          <a href="/forgot">Esqueci minha senha</a>
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
