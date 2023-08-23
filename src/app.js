const express = require('express')
const cors = require('cors');
const helmet = require('helmet');

// routers
const todosRouter = require('./routes/todosRouter');

const app = express();

app.use(helmet());

app.use(express.json({
    limit: "50mb"
}));

app.use(express.urlencoded({
    limit: "50mb",
    extended: true
}));

app.use(cors({
    credentials: true,
}));

app.use('/todos', todosRouter)

module.exports = app;