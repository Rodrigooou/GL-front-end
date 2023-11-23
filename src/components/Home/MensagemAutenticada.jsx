import React from "react";
import { Link } from "react-router-dom";
import "./Authenticationmensagem.scss"; 
const AuthMessage = () => (
  <div className="auth-message">
    <p>Você não está autenticado para acessar esta página.</p>
    <p>
      Por favor, faça <Link to="/login">login</Link> para continuar.
    </p>
  </div>
);

export default AuthMessage;
