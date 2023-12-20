const Conta = require("./Conta");
const Imposto = require("./Imposto");
const Pagamento = require("./Pagamento");
const Salario = require("./Salario");
const Despesa = require("./Despesa");

class ProcessadorTransacoes {
    processar(transacao) {
        if (transacao instanceof Conta) {
            return transacao.apresentar();
        } else if (transacao instanceof Imposto) {
            return transacao.apresentar();
        } else if (transacao instanceof Pagamento) {
            return transacao.apresentar();
        } else if (transacao instanceof Salario) {
            return transacao.apresentar();
        } else if (transacao instanceof Despesa) {
            return transacao.apresentar();
        } else {
            return "Tipo de transação não reconhecido";
        }
    }
}

module.exports = ProcessadorTransacoes;

