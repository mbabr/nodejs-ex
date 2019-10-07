const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://tt:P2prZBwCIRTpUqfj@cluster-tt-cheques-dsics.mongodb.net/tt?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

app.use(express.json());
app.use(router);

module.exports = app;
