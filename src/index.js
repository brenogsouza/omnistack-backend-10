// Métodos HTTP: Get, Post, Put, Delete
// Tipos de parâmetros:
// Query: acessado por request.query,  usado par (filtros, ordenação, paginação...);
// Route: acessado por request.params usado para (Identificar um recurso na alteração ou remoção)
// Body: acessado por request.body usado para(Dados para criação ou alteração de um registro)
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes')
const app = express();

mongoose.connect(
    "mongodb+srv://radardev:12345@meubanco-tgxc0.mongodb.net/radardev?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
app.use(express.json());
app.use(routes);

app.listen(3333);