const express = require('express');
const ClientesController = require('./controllers/ClientesController');
const ChequesController = require('./controllers/ChequesController');
const router = express.Router();

//RAIZ
router.get('/', function (req, res) {
  res.send('');
});

//CLIENTES
router.post('/api/clientes', ClientesController.store);
router.get('/api/clientes', ClientesController.findAll);
router.get('/api/clientes/:id', ClientesController.show);
router.delete('/api/clientes/:id', ClientesController.delete);
router.put('/api/clientes/:id', ClientesController.update);

//CHEQUES
router.post('/api/cheques', ChequesController.store);
router.get('/api/cheques', ChequesController.findAll);
router.get('/api/cheques/:id', ChequesController.show);
router.get('/api/cheques-find/:id', ChequesController.show);
router.delete('/api/cheques/:id', ChequesController.delete);
router.put('/api/cheques/:id', ChequesController.update);

//Calculadoras
router.post('/api/cheques/calculaChequePorValor', ChequesController.calculaChequePorValor);
router.post('/api/cheques/calculaCheque', ChequesController.calculaCheque);

module.exports = router;