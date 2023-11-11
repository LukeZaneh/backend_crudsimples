import express from 'express'
import bodyParser from 'body-parser'
import clienteRouter from './routes/cliente.routes.js'

const app = express()

//converte objeto request no formato JSON
app.use(express.json())

//configura o nome da pasta onde os arquivos estáticos estarão
app.use(express.static('public'))

//Faz o Parser dos pacotes recebidos
app.use(bodyParser.urlencoded({extended:true}))

app.use("/cliente", clienteRouter)

app.listen(3000, mensagemServidor)

function mensagemServidor(){
    console.log("servidor está rodando!!!")
}

