const Transacao = require("./Transacao")

class Imposto extends Transacao {
    constructor(descricao, valor, tipoImposto) {
      super(descricao, valor);
      this.tipoImposto = tipoImposto;
    }
  get tipoImposto(){
        return this.tipoImposto;
    }
    set tipoImposto(novoImposto){
        this.tipoImposto = novoImpostos
    }

    apresentar() {
      return "Este é um imposto " + this.tipoImposto + ", Este é o valor: " + this.valor;
    }
  }

  
  module.exports = Imposto;
  
