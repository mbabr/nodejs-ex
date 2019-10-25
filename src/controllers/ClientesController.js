const Clientes = require('../models/Clientes');

module.exports = {
    async store(req, res) {
        const { nome } = req.body;

        const cliente = await Clientes.create({
            nome
        });

        return res.json(cliente);
    },
    async update(req, res) {
        const { id } = req.params;
        const { nome } = req.body;

        const cliente = await Clientes.findByIdAndUpdate(id, {
            nome,
        }, {
            useFindAndModify: false
        });

        return res.json(cliente);
    },
    async show(req, res) {
        const { id } = req.params;
        const cliente = await Clientes.findById(id);
        return res.json(cliente);
    },
    async findAll(req, res) {
        const cliente = await Clientes.find();
        return res.json(cliente);
    },
    async delete(req, res) {
        const { id } = req.params;
        const cliente = await Clientes.findById(id);
        return res.json(cliente.delete());
    },
}