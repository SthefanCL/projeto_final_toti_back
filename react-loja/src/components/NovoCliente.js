import React, { useState } from "react";
import axios from 'axios';

export default function NovoCliente() {

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
    await axios.post(URL,data);
  }

  return (
    <div className="container">
      <div className="NewContact">
        <h1 className="agr">Salvar novo Cliente</h1>
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
                    type="text"
                    name="email"
                    placeholder="Senha"
                    defaultValue={data.email}
                    onChange={handleChange}
                    required
                  /></h3>
              </label>
              <div className="button">                
                <button className="salvar" type="submit">Salvar</button>
              </div>
            </form>
      </div>
    </div>
  );
}