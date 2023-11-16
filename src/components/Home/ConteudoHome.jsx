import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConteudoHome.scss"

export default function Conteudo() {
  const navigate = useNavigate();

  // Em outro componente ou parte do código onde você precisa acessar o valor do name
  const storedName = localStorage.getItem("userName");

  const handleLogout = () => {
    // Limpar o nome armazenado no localStorage ou realizar qualquer lógica de logout necessária
    localStorage.removeItem("userName");

    // Navegar para a página de login ou a página inicial após o logout
    navigate("/");
  };

  return (
    <>
      <h2>Bem Vindo, {storedName}!</h2>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
        <div class="item">Item 7</div>
      </div>     
    </>
  );
}
