const addTodosModel = require('../models/addTodosModel');

const addTodosController = async (req, res) => {

    const data = await addTodosModel(req.body);

    try {
        return res.status(200).send(data)
    } catch (error) {
        console.log('addTodosController says: ', error.message)
    }

}

module.exports = addTodosController;