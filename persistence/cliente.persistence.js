import BD from './BD.js'


async function getTodosClientes(req, res){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("SELECT * FROM cliente;");
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function getUmCliente(cpf){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("SELECT * FROM cliente WHERE cpf=$1", [cpf]);
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function criarCliente(cpf, nome, salario, nasc){
    // conectar no BD
    // executar operação SQL

    var resultado = null

    const conn = await BD.conectar();
    try{
        var query = await conn.query
        ("INSERT INTO cliente (cpf, nome, salario, nasc) VALUES ($1, $2, $3, $4) returning *", [cpf,nome,parseFloat(salario).toFixed(2),nasc]);
        console.log(query)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function excluirCliente(cpf){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("DELETE FROM cliente WHERE cpf=$1 returning *", [cpf]);
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function alterarCliente(cpfnew, nome, salario, nasc, cpfold){
    // conectar no BD
    // executar operação SQL

    var resultado = null
    console.log(cpfnew + nome + salario + nasc + cpfold)

    const conn = await BD.conectar();
    try{
        let consulta = "update cliente set cpf=$1, nome=$2, salario=$3, nasc=$4 where cpf=$5 returning *"
        var query = await conn.query( consulta, [cpfnew, nome, parseFloat(salario).toFixed(2), nasc, cpfold]);
        console.log(query)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}
export default { criarCliente, getUmCliente, getTodosClientes, excluirCliente, alterarCliente }
