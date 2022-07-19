const express = require('express')
const sqlite = require('sqlite')
const app = express();

app.use(express.json());

const database = new sqlite.Database('./data_loja', (err) => {
    if (err) {
        console.log("Erro ao abrir base de dados " + err.message);
    } else {
        console.log("Conectado com o Banco de Dados")
    }
})

app.post("/clientes", (req, res, next) => {
    database.run("INSERT INTO CLIENTE (cpf_cliente,nome_cliente,endereco_cliente,cep_cliente,email_cliente,senha_cliente) VALUES(?,?,?,?,?,?)",
    [req.body.cpf, req.body.nome, req.body.endereco, req.body.cep, req.body.email, req.body.senha],
    function(err, result){
        if(err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.status(201).json({
            "ID": this.lastID
        })
    })
})


app.listen(3306, () => {
    console.log('Iniciando o ExpressJS na porta 3000')
})