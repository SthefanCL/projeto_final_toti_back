const express = require('express')
const sqlite3 = require('sqlite3')

export default function ConnectionDb(){

const app = express();

app.use(express.json());

const db = new sqlite3.Database('./data/data_loja.db', (err) => {
    if (err) {
        console.log("Erro ao abrir base de dados " + err.message);
    } else {
        console.log("Conectado com o Banco de Dados")
    }
})

app.listen(3306, () => {
    console.log('Iniciando o ExpressJS na porta 3306')
})

}