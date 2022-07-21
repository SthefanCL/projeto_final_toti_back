import { connectiondb } from './connectiondb.js';
import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10)

export function InsertCliente(cliente){
    connectiondb().then(db=>{
        const senhaCriptografada = bcrypt.hashSync(cliente.senha, salt)
        db.run('INSERT INTO cliente (cpf_cliente,nome_cliente,endereco_cliente,cep_cliente,email_cliente,senha_cliente) VALUES (?,?,?,?,?,?)', [cliente.cpf, cliente.nome, cliente.endereco, cliente.cep, cliente.email, senhaCriptografada]);
    });
}

export async function SelectClientes(){
    const db = await connectiondb();
    const res = await db.all('SELECT * FROM cliente');
    return res;
}

export async function SelectCliente(id){
    const db = await connectiondb();
    const res = await db.get('SELECT * FROM cliente WHERE id_cliente=?', [id]);
    return res;
}
export async function DeleteCliente(id){
    const db = await connectiondb();
    const res = await db.get('DELETE FROM cliente WHERE id_cliente=?', [id]);
    return res;
}

export async function LoginCliente(cliente){
    const db = await connectiondb();
    const res = await db.get('SELECT senha_cliente FROM cliente WHERE email_cliente=?', 
        [cliente.email], (err, rows) => {  
            if (err) {        
                res.json({ error: "Usuário não cadastrado"})          
            } else {          
                const senhaValida = bcrypt.compareSync(cliente.senha, rows.senha_cliente);          
                if (senhaValida) {
                next()                  
                } else {
                    res.json({ error: "Senha Inválida"})                  
                }
                }
    });
    return res;    
}

export function UpdateCliente(cliente){
    connectiondb().then(db=>{        
        const senhaAtualizada = bcrypt.hashSync(cliente.senha, salt)
        db.run('UPDATE cliente SET cpf_cliente=?, nome_cliente=?, endereco_cliente=?, cep_cliente=?, email_cliente=?, senha_cliente=? WHERE id_cliente=?', [cliente.cpf, cliente.nome, cliente.endereco, cliente.cep, cliente.email, senhaAtualizada, cliente.id]);
    });
}