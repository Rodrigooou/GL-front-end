import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ConteudoLogin.scss";
import Logo from "../../assets/Health-me.png";

export default function ContentLogin() {
  const [msgStatus, setMsgStatus] = useState("");
  const [classStatus, setClassStatus] = useState("");
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  useEffect(() => {
    // Verificar se há informações de usuário armazenadas no sessionStorage ao montar o componente
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUsuario((prevUsuario) => ({ ...prevUsuario, ...JSON.parse(storedUser) }));
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
        const user = users.find(
          (u) => u.email === usuario.email && u.senha === usuario.senha
        );

        if (user) {
          // Armazena as informações do usuário no sessionStorage
          sessionStorage.setItem("user", JSON.stringify(user));

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
    // Verificar se há informações de usuário armazenadas no sessionStorage ao montar o componente
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUsuario((prevUsuario) => ({ ...prevUsuario, ...JSON.parse(storedUser) }));
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
              <img src={Logo} alt="Health-me Logo" />
            </div>
            <div className="login">
              <div>
                <label htmlFor="idName">Email:</label>
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
