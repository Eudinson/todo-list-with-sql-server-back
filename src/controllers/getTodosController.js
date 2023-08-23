const getTodosModel = require('../models/getTodosModel');

const getTodosController = async (req, res) => {
    
    const data = await getTodosModel();

    try {
        return res.status(200).send(data);
    } catch (error) {
        console.log('getTodosController says: ', error.message)
    }
}

module.exports = getTodosController;