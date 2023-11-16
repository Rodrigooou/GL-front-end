import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ConteudoLogin.scss"
import Logo from "../../assets/Health-me.png"

export default function ContentLogin() {
  const [msgStatus, setMsgStatus] = useState("");
  const [classStatus, setClassStatus] = useState("");
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
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
        const user = users.find((u) => u.email === usuario.email && u.senha === usuario.senha);
  
        if (user) {
          // Armazena o nome do usuário no localStorage
          localStorage.setItem("userName", user.name);  // Corrigido para armazenar o nome
  
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
  
  useEffect(() => {
    // Verificar se há um nome de usuário armazenado no localStorage ao montar o componente
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUsuario((prevUsuario) => ({ ...prevUsuario, name: storedName }));
    }
  }, []);
  return (
    <>
      <main>

        <h2 className={classStatus}>{msgStatus}</h2>

        <form name="Login" onSubmit={handleSubmit}>
          <fieldset>
            <div className="titulo">
              <h3>Health-me</h3>
              <img src={Logo}/>
            </div>
            <div className="login">
              <div>
                <label htmlFor="idName">Nome:</label>
                <input
                  type="email"
                  name="email"
                  id="idName"
                  value={usuario.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="idSenha">Senha:</label>
                <input
                  type="password"
                  name="senha"
                  id="idSenha"
                  value={usuario.senha}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="btn_lc">
              <div className="bt">
                <input type="submit" value="Logar" id="btnLogar" />
              </div>
            </div>
          </fieldset>
        </form>
      </main>
    </>
  );
}
