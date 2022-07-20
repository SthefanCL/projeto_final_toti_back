const express = require('express');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const db = new sqlite3.Database('./data/data_loja.db', (err) => {
    if (err) {
        console.log("Erro ao abrir base de dados " + err.message)
    } else {
        console.log("Conectado com o Banco de Dados")
    }
})

app.post("/cliente",(req, res, next) => {
  //  const senhaCriptografada = bcrypt.hashSync(req.body.senha, salt);
  //  console.log("Senha Mascarada: ", senhaCriptografada)
    NewCliente = db.run("INSERT INTO cliente (cpf_cliente,nome_cliente,endereco_cliente,cep_cliente,email_cliente,senha_cliente)VALUES(?,?,?,?,?,?)",
        [req.body.cpf, req.body.nome, req.body.endereco, req.body.cep, req.body.email, req.body.senha],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.status(201).json({
                "ID": this.lastID
            });
        }) 
})

app.get("/cliente", (req, res, next) => {
    db.all("SELECT * FROM cliente", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ rows });
    });
});

app.post("/senha", async (req, res, next) => {
    const senhaCriptografada = bcrypt.hashSync(req.body.senha, salt);
    console.log("Senha Mascarada: ", senhaCriptografada)
    db.run("INSERT INTO cliente (cpf_cliente,nome_cliente,endereco_cliente,cep_cliente,email_cliente,senha_cliente)VALUES(?,?,?,?,?,?)",
        [req.body.cpf, req.body.nome, req.body.endereco, req.body.cep, req.body.email, senhaCriptografada],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.status(201).json({
                "ID": this.lastID
            });
        }) 
})

app.listen(3001, () => {
    console.log('Iniciando o Express-JS na porta 3001')
})