const pool = require('../_database/db');
const sql = require('mssql/msnodesqlv8')

const addTodosModel = async (reqBody) => {

    const { todo } = reqBody;

    const query = `INSERT INTO todo_list
    (
        todo
    ) 
    VALUES
    (
        @todo_param
    )
    `

    const input = {
        param: "todo_param",
        type: sql.VarChar,
        value: todo
    }

    try {
        await pool.connect()
        const response = await pool
        .request()
        .input(input.param, input.type, input.value)
        .query(query)
        return response;
    } catch (error) {
        console.log('addTodosModel says: ', error.message)
    }
}

module.exports = addTodosModel;