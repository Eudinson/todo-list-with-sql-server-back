const deleteTodosModel = require('../models/deleteTodosModel');

const deleteTodosController = async (req, res) => {

    const data = await deleteTodosModel(req.body);

    try {
        return res.status(200).send(data)
    } catch (error) {
        console.log('deleteTodosController says: ', error.message)
    }

}

module.exports = deleteTodosController;