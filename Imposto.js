const Transacao = require("./Transacao")

class Imposto extends Transacao {
    constructor(descricao, valor, tipoImposto) {
      super(descricao, valor);
      this.tipoImposto = tipoImposto;
    }
  

    apresentar() {
      return "Este é um imposto " + this.tipoImposto + ", Este é o valor: " + this.valor;
    }
  }

  
  module.exports = Imposto;
  
