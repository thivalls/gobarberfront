import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Logo GoBarber" />

      <form>
        <input placeholder="Digite seu nome completo" />
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
