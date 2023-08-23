const pool = require('../_database/db');
const sql = require('mssql/msnodesqlv8');

const updateTodosModel = async (reqBody) => {

    const { id, todo } = reqBody;

    const query = `
    UPDATE 
    todo_list 
    SET
    todo = @todo_param
    WHERE
    id = @id_param
    `;

    const input = {
        id: {
            param: "id_param",
            type: sql.Int,
            value: id
        },
        todo: {
            param: "todo_param",
            type: sql.VarChar,
            value: todo
        }

    }

    try {
        await pool.connect()
        const response = await pool
            .request()
            .input(input.id.param, input.id.type, input.id.value)
            .input(input.todo.param, input.todo.type, input.todo.value)
            .query(query)
        return response;
    } catch (error) {
        console.log('updateTodosModel says: ', error.message)
    }
}

module.exports = updateTodosModel;