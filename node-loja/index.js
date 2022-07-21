import Express from 'express';
import bcrypt from 'bcrypt';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

const salt = bcrypt.genSaltSync(10);

const app = Express();

app.use(Express.json());

const db = new sqlite3.Database('./data/data_loja.db', (err) => {
    if (err) {
        console.log("Erro ao abrir base de dados " + err.message)
    } else {
        console.log("Conectado com o Banco de Dados")
    }
})
/*------------------------------------------------
-----------------------CRUD CLIENTE---------------
-------------------------------------------------*/

app.post("/cliente",(req, res, next) => {
  const senhaCriptografada = bcrypt.hashSync(req.body.senha, salt);
    db.run("INSERT INTO cliente (cpf_cliente,nome_cliente,endereco_cliente,cep_cliente,email_cliente,senha_cliente)VALUES(?,?,?,?,?,?)",
        [req.body.cpf, req.body.nome, req.body.endereco, req.body.cep, req.body.email, senhaCriptografada],
        function(err, result){
            if(err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "Cliente Cadastrado ID": this.lastID
            })
        }) 
})

app.get("/clientes", (req, res, next) => {
    db.all("SELECT * FROM cliente", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ rows });
    });
});

const confirmaLogin = (req, res, next) => {
    db.get("SELECT senha_cliente FROM cliente WHERE cliente.email_cliente = (?)",
     [req.body.email], (err, rows) => {  
        if (err) {        
            res.json({ error: "Usuário não cadastrado"})          
        } else {          
            const seValido = bcrypt.compareSync(req.body.senha, rows.senha_cliente);          
            if (seValido) {
               next()                  
               } else {
                res.json({ error: "Senha Inválida"})                  
               }
            }
        })
    }

app.post("/login", confirmaLogin, (req, res) =>  {
    res.send("Bem-vindo " + req.body.email)
})

app.put("/cliente/",(req, res, next) => {
    const senhaCriptografada = bcrypt.hashSync(req.body.senha, salt);
      db.run("UPDATE cliente SET cpf_cliente=?, nome_cliente=?, endereco_cliente=?, cep_cliente=?, email_cliente=?, senha_cliente=? WHERE id_cliente=?",
          [req.body.cpf, req.body.nome, req.body.endereco, req.body.cep, req.body.email, senhaCriptografada, req.body.id],
          function(err, result){
              if(err) {
                  res.status(400).json({ "error": err.message })
                  return;
              }
              res.status(201).json("Cliente atualizado ID")
          }) 
  })

app.delete("/cliente", (req, res, next) => {
    db.all("DELETE FROM cliente WHERE id_cliente=?", [req.body.id],
        res.status(200).json(req.body.id + ": eliminado"));
});

/*--------------------------------------------------
--------------------------CRUD PRODUTO--------------
--------------------------------------------------*/

app.listen(3001, () => {
    console.log('Iniciando o Express-JS na porta 3001')
})