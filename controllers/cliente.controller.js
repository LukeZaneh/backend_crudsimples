import clienteServices from '../services/cliente.services.js'

async function getTodosClientes(req, res){
    // capturar os dados
    // validar os dados
    // chamar camada de serviços

    const resultado = await clienteServices.getTodosClientes()
    res.send(JSON.stringify(resultado))
}

async function criarCliente(req, res){
    const cpf = req.body.cpf
    const nome = req.body.nome
    const salario = req.body.salario
    const nasc = req.body.nasc

    //validação dos dados

    //chamada para o controller
    const resultado = await clienteServices.criarCliente(cpf, nome, salario, nasc)

    //retornar para o usuário final
    res.send(resultado)
}
async function getUmCliente(req, res) {
    const cpf = req.params.cpf

    var resultado = null

    if(cpfValido(cpf)) {

        //chamar camada de serviço
        resultado = await clienteServices.getUmCliente(cpf)
    }

    res.send(resultado)
}

function cpfValido(cpf) {
    return true
}

async function excluirCliente(req, res) {
    const cpf = req.params.cpf
    var resultado = null

    if(cpfValido(cpf)) {

        //chamar camada de serviço
        resultado = await clienteServices.excluirCliente(cpf)
    }

    res.send(resultado)
}

async function alterarCliente(req, res){
    const cpfold = req.params.cpf
    const cpfnew = req.body.cpf
    const nome = req.body.nome
    const salario = req.body.salario
    const nasc = req.body.nasc

    //validação dos dados

    //chamada para o controller
    const resultado = await clienteServices.alterarCliente(cpfnew, nome, salario, nasc, cpfold)

    //retornar para o usuário final
    res.send(resultado)
}


export default { getTodosClientes, getUmCliente, criarCliente, excluirCliente, alterarCliente }