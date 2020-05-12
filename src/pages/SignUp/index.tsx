import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import setValidationErrors from '../../utils/setValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, LoginArea, AnimationLoginArea, Background } from './styles';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('Email é obrigatório')
          .email('Insira um email válido'),
        password: Yup.string().min(6, 'Mínimo 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = setValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <LoginArea>
        <AnimationLoginArea>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input
              name="name"
              icon={FiUser}
              placeholder="Nome"
              autoComplete="off"
            />
            <Input
              name="email"
              icon={FiMail}
              placeholder="Email"
              autoComplete="off"
            />
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              autoComplete="off"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="signin">
            <FiArrowLeft />
            Já tenho cadastro
          </Link>
        </AnimationLoginArea>
      </LoginArea>
    </Container>
  );
};

export default SignUp;
