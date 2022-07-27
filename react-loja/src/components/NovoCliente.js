import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NovoCliente() {

  const Navigate = useNavigate();

  const [data, setData] = useState ({id: null, cpf: "", nome: "", endereco: "", cep: "", telefone: "", email: "", senha: ""})

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const URL = "http://localhost:3001/cliente"

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cliente = await axios.post(URL,data);
    if (cliente){
      Navigate('/login');
    }else
     console.error();
  }

  return (
    <div className="container">
      <div className="NewContact">
            <form onSubmit={handleSubmit}>
              <label><h3>CPF:
                  <input
                    type="text"
                    name="cpf"
                    placeholder="CPF"
                    defaultValue={data.cpf}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <label><h3>Nome:
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    defaultValue={data.nome}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <label><h3>Endereco:
                  <input
                    type="text"
                    name="endereco"
                    placeholder="Endereco"
                    defaultValue={data.endereco}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <label><h3>CEP:
                  <input
                    type="text"
                    name="cep"
                    placeholder="CEP"
                    defaultValue={data.cep}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <label><h3>Telefone:
                  <input
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                    defaultValue={data.telefone}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
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
                <button className="salvar" type="submit">Cadastrarme</button>
              </div>
            </form>
      </div>
    </div>
  );
}