const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()


app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

app.get('/produtos', cors(), async(request, response, next) => {

    let controleListaProdutos = require('./model/consultas.js')
    let produtos = controleListaProdutos.getListarProdutos()
    response.json(produtos)
    response.status(200)
})


app.get('/clientes', cors(), async(request, response, next) => {

    let controleListaClientes = require('./model/consultas.js')
    let clientes = controleListaClientes.getListarClientes()
    response.json(clientes)
    response.status(200)
})


app.get('/categorias', cors(), async(request, response, next) => {

    let controleListaCategorias = require('./model/consultas.js')
    let categorias = controleListaCategorias.getListarCategorias()
    response.json(categorias)
    response.status(200)
})

app.get('/comentarios/:produtoId', cors(), async(request, response, next) => {

    let idProduto = request.params.produtoId
    let controleComentarios = require('./model/consultas.js')

    let dadosComentarios = controleComentarios.getComentariosPorProduto(idProduto)

    if (dadosComentarios) {
        response.json(dadosComentarios)
        response.status(200)
    } else {
        response.status(404)
        response.json({ erro: "Não foi possivel encontrar um item" })
    }

})

app.get('/produtos/:categoriaNome', cors(), async(request, response, next) => {

    let nomeCategoria = request.params.categoriaNome
    let controleProdutosCategorias = require('./model/consultas.js')

    let dadosProdutos = controleProdutosCategorias.getProdutosPorCategoria(nomeCategoria)

    if (dadosProdutos) {
        response.json(dadosProdutos)
        response.status(200)
    } else {
        response.status(404)
        response.json({ erro: "Não foi possivel encontrar um item" })
    }

})

app.get('/endereco/:clienteId', cors(), async(request, response, next) => {
    let clienteId = request.params.clienteId
    let controleEnderecoCliente = require('./model/consultas.js')

    let dadosEndereco = controleEnderecoCliente.getEnderecoCliente(clienteId)

    if (dadosEndereco) {
        response.json(dadosEndereco)
        response.status(200)
    } else {
        response.status(404)
        response.json({ erro: "Não foi possivel encontrar um item" })
    }

})

app.listen(8080, function() {
    console.log('servidor rodando na porta 8080')
})