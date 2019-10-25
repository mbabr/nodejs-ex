const Cheques = require('../models/Cheques');
const Datas = require('../utils/Datas');

module.exports = {
    calculaChequePorValor(valorTotal, datas) {
        const quantidadeCheques = datas.length;
        var valorCheque = valorTotal / quantidadeCheques;
        var quantidadeDias = [];
        var dataAtual = new Date();

        datas.map((item, index) => {
            var dataCheque = new Date(Datas.toSystem(item));
            var timeDiff = Math.abs(dataCheque.getTime() - dataAtual.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            quantidadeDias[index] = diffDays;
        });

        var valorJuros = valorCheque * 0.05;

        while (valorCheque * quantidadeCheques - valorJuros < valorTotal) {
            valorCheque++;
            valorJuros = 0;

            quantidadeDias.map((item, index) => {
                valorJuros += valorCheque / 30 * item * 0.05;
            });
        }

        return valorCheque;
    },
    calculaCheque(valorUnitario, datas) {

        var chequesArr = [];
        var dataAtual = new Date();
        valorTotal = 0;

        datas.map((item, index) => {
            var dataCheque = new Date(Datas.toSystem(item));
            var timeDiff = Math.abs(dataCheque.getTime() - dataAtual.getTime());
            var quantidadeDias = Math.ceil(timeDiff / (1000 * 3600 * 24));

            valorChequeComJuros = valorUnitario - (valorUnitario / 30 * 0.05 * quantidadeDias);
            chequesArr[index] = {"data": item, "valor": valorChequeComJuros};
            valorTotal += valorChequeComJuros;
        });

        resposta = {
            "valorTotal": valorTotal,
            "cheques": chequesArr
        };

        return resposta;
    }
}