const Cheques = require('../models/Cheques');
const ChequesService = require('../services/ChequesService');

module.exports = {
    async store(req, res) {
        const { clientes_id, valor, data_entrada, data_bom_para } = req.body;

        const cheque = await Cheques.create({
            clientes_id,
            valor,
            data_entrada,
            data_bom_para
        });

        return res.json(cheque);
    },
    async update(req, res) {
        const { id } = req.params;
        const { clientes_id, valor, data_entrada, data_bom_para } = req.body;

        const cheque = await Cheques.findByIdAndUpdate(id, {
            clientes_id,
            valor,
            data_entrada,
            data_bom_para
        }, {
            useFindAndModify: false
        });

        return res.json(cheque);
    },
    async show(req, res) {
        const { id } = req.params;
        const cheque = await Cheques.findById(id);
        return res.json(cheque);
    },
    async findAll(req, res) {
        const cheques = await Cheques.find();
        return res.json(cheques);
    },
    async delete(req, res) {
        const { id } = req.params;
        const cheque = await Cheques.findById(id);
        return res.json(cheque.delete());
    },
    calculaChequePorValor(req, res) {
        const { valor, datas } = req.body;
        return res.json(ChequesService.calculaChequePorValor(valor, datas));
    },
    calculaCheque(req, res) {
        const { valor, datas } = req.body;
        return res.json(ChequesService.calculaCheque(valor, datas));
    }
}