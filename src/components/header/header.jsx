import React from "react";
import "./Header.css"; // Importe o CSS do Header
import logo from "../../assets/images/logo.png"; // Caminho correto para a imagem

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo do Portfolio" className="logo" />
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