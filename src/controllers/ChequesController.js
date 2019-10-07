const Cheques = require('../models/Cheques');

module.exports = {
    async store(req, res) {
        const { clientes_id, valor, data_entrada, data_bom_para } = req.body;

        const cheque = await Cheques.create({
            clientes_id,
            valor,
            data_entrada,
            data_bom_para
        });

        const resposta = {};
        resposta['obj'] = cheque;
        resposta['teta'] = "oi";

        return res.json(resposta);
    }
}