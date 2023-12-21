const Transacao = require("./Transacao");

class Conta extends Transacao {
    constructor(descricao, valor, tipoConta) {
        super(descricao, valor);
        this.tipoConta = tipoConta;
    }

    get tipoConta(){
        return this.tipoConta;
    }
    set tipoConta(novoTipo){
        this.tipoConta = novoTipo
    }
    apresentar() {
        return "Esta transação é da conta " + this.tipoConta + ", Este é o valor: " + this.valor;
    }
}

module.exports = Conta;
