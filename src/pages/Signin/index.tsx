import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import setValidationErros from '../../utils/setValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, LoginArea, AnimationLoginArea, Background } from './styles';

import logo from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

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

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = setValidationErros(error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          title: 'Falha ao fazer login',
          type: 'error',
          description: 'Verifique as credenciais.',
        });
      }
    },
    [signIn, addToast, history]
  );

  return (
    <Container>
      <LoginArea>
        <AnimationLoginArea>
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
        </AnimationLoginArea>
      </LoginArea>
      <Background />
    </Container>
  );
};

export default SignIn;
