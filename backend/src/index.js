const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://hugovinicius145:fj612kwi@cluster0-evfja.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json()); //Serve para todas as rotas da aplicação
app.use(routes);

app.listen(3333);