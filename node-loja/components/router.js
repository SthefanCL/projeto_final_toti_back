import { Router } from "express";
import { InsertCliente, UpdateCliente, SelectClientes, SelectCliente, DeleteCliente, LoginCliente} from './cliente.js';
import Express from 'express';
const app = Express();
app.use(Express.json());

export function Router(){
    Router.get('/', (req, res)=>{
        res.json({
            "statusCode": 200,
            "msg": "Api Rodando"
        })
    })
    Router.get('/clientes', SelectClientes);
    Router.get('/cliente', SelectCliente);
    Router.post('/cliente', InsertCliente);
    Router.post('/cliente', LoginCliente);
    Router.put('/cliente', UpdateCliente);
    Router.delete('/cliente', DeleteCliente);
    
    app.listen(3001, () => {
        console.log('Iniciando o Express na porta 3001')
    })
}