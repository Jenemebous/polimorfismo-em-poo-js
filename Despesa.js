const Transacao = require("./Transacao")

class Despesa extends Transacao {
    constructor(descricao, valor, categoria) {
      super(descricao, valor);
      this.categoria = categoria;
    }
  
   
    categoriaDaDespesa() {

      return "Esta despesa é de categoria " + this.categoria + ", Este é o valor: " + this.valor;
    }
  }

  module.exports = Despesa;

  