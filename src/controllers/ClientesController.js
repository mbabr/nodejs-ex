const Clientes = require('../models/Clientes');

module.exports = {
    async store(req, res) {
        const nome = req.body.nome;
        const cliente = await Clientes.create({ nome });

        return res.json(cliente);
    }
}