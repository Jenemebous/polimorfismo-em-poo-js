const Conta = require("./Conta");
const Imposto = require("./Imposto");
const Pagamento = require("./Pagamento");
const Salario = require("./Salario");
const Despesa = require("./Despesa");

class ProcessadorTransacoes {
    processar(transacao) {
        if (transacao instanceof Conta) {
            return transacao.tipoDaConta();
        } else if (transacao instanceof Imposto) {
            return transacao.tipoDoImposto();
        } else if (transacao instanceof Pagamento) {
            return transacao.beneficiarioDoPagamento();
        } else if (transacao instanceof Salario) {
            return transacao.funcionarioDoSalario();
        } else if (transacao instanceof Despesa) {
            return transacao.categoriaDaDespesa();
        } else {
            return "Tipo de transação não reconhecido";
        }
    }
}

module.exports = ProcessadorTransacoes;
