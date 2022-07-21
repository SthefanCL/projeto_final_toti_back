import { InsertCliente, UpdateCliente, SelectClientes, SelectCliente, DeleteCliente, LoginCliente} from './components/cliente.js';
import Express from 'express';
const app = Express();
app.use(Express.json());

app.post('/cliente', function(req, res){
    const NovoCliente= InsertCliente(req.body);
    res.json(NovoCliente)
})

app.put('/cliente', function(req, res){
    UpdateCliente(req.body)
    res.json({ message: `cliente atualizado com sucesso!` })
})

app.delete('/cliente', async function(req, res){
    const cliente = await DeleteCliente(req.body.id);
    res.json({ message: `cliente deletado com sucesso!` })
})

app.get('/clientes', async function(req, res){
    const clientes = await SelectClientes();
    res.json(clientes);
})

app.get('/cliente', async function(req, res){
    const cliente = await SelectCliente(req.body.id);
    res.json(cliente)
})

app.post('/login', function(req, res){
    const cliente = LoginCliente(req.body);
    res.send(cliente)
})

app.listen(3001, () => {
    console.log('Iniciando o Express na porta 3001')
})