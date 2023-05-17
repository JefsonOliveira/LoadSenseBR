import React from "react";
import "./styles.css";
import Logo from "../../images/Logo.png"


function Login() {
  return (
    <div className="template">
      <div className="container">
        <img className="h-[115px] mt-3" src={Logo} alt=""/>
        <div className="line"></div>

        <div className="containerInput">
          <h4>Seu e-mail</h4>
          <input
            type="text"
            className="email"
            placeholder="contato@gmail.com"
          />
          <h4>Sua senha</h4>
          <input className="passWord" type="password" placeholder="1234" />
        </div>
        <div clasName="checkLogado">
        </div>
        <div className="buttonLogar">
          <button

            className="logar mt-5"
            type="submit"
            onClick={() => alert("clicou")}
          >
            <h2 className="font-bold">ENTRAR</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
