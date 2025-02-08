import React from "react";
import "./Header.css";
import logo from "./assets/images/MJ.png";

function Header() {
  return (
    <header>
      <img src={ logo } alt="Logo do Portfólio" width="150"/>
      <h1>Bem vindo aos meus projetos!</h1>
      <nav>
        <ul>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
