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
router.post('/api/cheques', ChequesController.store);
  

module.exports = router;