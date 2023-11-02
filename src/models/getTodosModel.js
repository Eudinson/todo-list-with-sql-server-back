const pool = require('../_database/db');

const getTodosModel = async () => {

    const query = `SELECT * FROM todo_list ORDER BY id DESC`;

    try {
        await pool.connect()
        const response = await pool
        .request()
        .query(query)
        return response.recordset;
    } catch (error) {
        console.log('getTodosModel says: ', error.message)
    } 
}

module.exports = getTodosModel;