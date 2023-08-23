const updateTodosModel = require('../models/updateTodosModel');

const updateTodosController = async (req, res) => {

    const data = await updateTodosModel(req.body);

    try {
        return res.status(200).send(data)
    } catch (error) {
        console.log('updateTodosController says: ', error.message)
    }

}

module.exports = updateTodosController;