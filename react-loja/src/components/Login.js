import React from "react";
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <div className="container">
      <div className="NewContact">
            <form>
              <label><h3>E-mail:
                  <input
                    type="text"
                    name="email"
                    placeholder="E-Mail"
                    required
                  /></h3>
              </label>
              <label><h3>Senha:
                  <input
                    type="text"
                    name="email"
                    placeholder="Senha"
                    required
                  /></h3>
              </label>
              <div className="button">                
                <button className="salvar" type="submit">Accese</button>
              </div>
            </form>            
              <div className="buttonNew">
                <Link to={{pathname:`/new`}}>
                  <p className="agr">Cadastrese aqui</p>
                </Link>
              </div>
      </div>
    </div>
  );
}