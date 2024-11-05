async function connect(){

    if(global.connection)
        return global.connection.connect();

    const {Pool} = require("pg") // Pool: CONEXÃO com cache.
    const pool = new Pool({
        //connectionString: texto que contém informações do banco de dados (db).
        connectionString: process.env.CONNECTION_STRING
    });

    const client = await pool.connect(); // await: pausar a execução.
    console.log('Criou o pool de conexão');
    
    // res: criará uma resposta para o cliente // query: ele consulta uma consulta (select now()) do cliente no momento.
    const res = await client.query('select now()'); 
    console.log(res.rows[0])
    client.release(); // o sistema entrega o que está com os requisitos predeficinidos.

    global.connection = pool;
    return pool.connect();
}
connect();

async function selectCustomers() {
    const client = await connect();
    const res = await client.query("SELECT * FROM cliente");
    return res.rows;// resultado das consultas(linhas)
}

module.exports = {
    selectCustomers
}