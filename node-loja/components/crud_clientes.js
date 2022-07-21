import { connectiondb } from './connectiondb.js';
import Express from 'express';

const salt = bcrypt.genSaltSync(10);

const app = Express();

  app.post('/cliente', function(req, res){
    const cliente=req.body;
    connectiondb().then(db=>{
        const senhaCriptografada = bcrypt.hashSync(cliente.senha, salt)
        db.run('INSERT INTO cliente (cpf_cliente,nome_cliente,endereco_cliente,cep_cliente,email_cliente,senha_cliente) VALUES (?,?,?,?,?,?)', [cliente.cpf, cliente.nome, cliente.endereco, cliente.cep, cliente.email, senhaCriptografada]);
    });
    res.json()
})

app.listen(3001, () => {
    console.log('Iniciando o Express na porta 3001')
})