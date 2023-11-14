import React from "react";
import { useNavigate } from "react-router-dom";

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
      <h1>Bem Vindo, {storedName}!</h1>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
