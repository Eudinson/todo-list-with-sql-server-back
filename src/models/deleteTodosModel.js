const pool = require('../_database/db');
const sql = require('mssql/msnodesqlv8');

const deleteTodosModel = async (reqBody) => {

    const { id } = reqBody;

    const query = `
    DELETE FROM 
    todo_list
    WHERE
    id = @id_param
    `
    const input = {
        param: "id_param",
        type: sql.Int,
        value: id
    }

    try {
        await pool.connect()
        const response = await pool
            .request()
            .input(input.param, input.type, input.value)
            .query(query)
        return response;
    } catch (error) {
        console.log('deleteTodosModel says: ', error.message)
    }
}

module.exports = deleteTodosModel;