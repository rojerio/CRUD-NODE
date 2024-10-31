require("dotenv").config(); //dotenv: biblioteca para gerenciar as variaveis de ambiente de um projeto.

const port = process.env.PORT; //que esteja na variavel de ambiente PORT de onte estamos hospedando.

const express = require("express"); // chamar, requerer o Express para um projeto.

const db = require("./db.js")

const app = express() //cria um aplicativo web atraves do Express.

app.get("/", (req,res) => {
    res.json({ // enviar resposta do JSON.
        menssage: "Funcionando!"
    })
})

app.get("/clientes", async(req,res) => {
    const clientes = await db.selectCustomers();
    res.json(clientes);
})

app.listen(port) //escutar as requisições que vem da porta.

console.log("backend rodando")