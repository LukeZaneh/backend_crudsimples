import clientePersistence from "../persistence/cliente.persistence.js";

async function getTodosClientes(req, res){
    // regra de negócio
    // chama persistência
    
    return await clientePersistence.getTodosClientes()
}

async function getUmCliente(cpf){
    // regra de negócio
    // chama persistência
    
    return await clientePersistence.getUmCliente(cpf)
}

async function criarCliente(cpf, nome, salario, nasc){
    
    var resultado = await clientePersistence.criarCliente(cpf, nome, salario, nasc)
    return resultado
}

async function excluirCliente(cpf){
    // regra de negócio
    // chama persistência
    
    return await clientePersistence.excluirCliente(cpf)
}


async function alterarCliente(cpfnew, nome, salario, nasc,cpfold){
    
    var resultado = await clientePersistence.alterarCliente(cpfnew, nome, salario, nasc, cpfold)
    return resultado
}



export default { getTodosClientes, getUmCliente, criarCliente, excluirCliente, alterarCliente }