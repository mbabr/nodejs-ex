const mongoose = require('mongoose');

const ChequesSchema = new mongoose.Schema({
    clientes_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    valor: Number,
    data_entrada: Date,
    data_bom_para: Date,
});

module.exports = mongoose.model('Cheques', ChequesSchema);