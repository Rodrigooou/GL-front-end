import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ContentLogin() {
  const [msgStatus, setMsgStatus] = useState("");
  const [classStatus, setClassStatus] = useState("");
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    name: "",
    senha: "",
  });

  useEffect(() => {
    // Verificar se há um nome de usuário armazenado no localStorage ao montar o componente
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUsuario((prevUsuario) => ({ ...prevUsuario, name: storedName }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      if (response.ok) {
        const users = await response.json();
        const user = users.find((u) => u.name === usuario.name && u.senha === usuario.senha);

        if (user) {
          // Armazena o nome do usuário no localStorage
          localStorage.setItem("userName", usuario.name);

          setMsgStatus("Login realizado com sucesso!!");
          setClassStatus("login-sucesso");
          navigate("/home");
        } else {
          setMsgStatus("Usuário e/ou Senha incorretos!");
          setClassStatus("login-erro");
        }
      } else {
        setMsgStatus("Erro ao processar a solicitação");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setMsgStatus("Erro ao processar a solicitação");
    }
  };
  return (
    <>
      <main>
        <h1>Login - Informações do Usuário</h1>

        <h2 className={classStatus}>{msgStatus}</h2>

        <form name="Login" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <div>
              <label htmlFor="idName">Nome:</label>
              <input
                type="text"
                name="name"
                id="idName"
                placeholder="Digite o seu Nome."
                value={usuario.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite a sua Senha."
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <div className="btn_lc">
            <div className="bt">
              <input type="submit" value="Logar" id="btnLogar" />
            </div>

          </div>
        </form>
      </main>
    </>
  );
}
