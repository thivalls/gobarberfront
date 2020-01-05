import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Logo GoBarber" />

      <form>
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
