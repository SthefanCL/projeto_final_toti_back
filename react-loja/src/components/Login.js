import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {

  const Navigate = useNavigate();
  const [data, setData] = useState ({email: "", senha: ""})

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const URL = "http://localhost:3001/login"

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cliente = await axios.post(URL,data)
    .then((response) => {
      Navigate('/');
    }, (error) => {
      console.log(error);
    });
  }

  return (
    <div className="container">
      <div className="NewContact">
            <form onSubmit={handleSubmit}>
              <label><h3>E-mail:
                  <input
                    type="text"
                    name="email"
                    placeholder="E-Mail"
                    defaultValue={data.email}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <label><h3>Senha:
                  <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    defaultValue={data.senha}
                    onChange={handleChange}
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