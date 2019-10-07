const mongoose = require('mongoose');

const ClientesSchema = new mongoose.Schema({
    nome: String,
});

module.exports = mongoose.model('Clientes', ClientesSchema);