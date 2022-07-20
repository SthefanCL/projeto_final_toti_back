import ConnectionDb from './ConnectionDb'

export default function Cliente() {
app.post("/cliente", (req, res, next) => {
    ConnectionDb.run("INSERT INTO cliente (cpf_cliente,nome_cliente,endereco_cliente,cep_cliente,email_cliente,senha_cliente)VALUES(?,?,?,?,?,?)",
    [req.body.cpf,req.body.nome,req.body.endereco,req.body.cep,req.body.email,req.body.senha],
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
}