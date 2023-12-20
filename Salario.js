const Transacao = require("./Transacao")

  class Salario extends Transacao {
    constructor(descricao, valor, funcionario) {
      super(descricao, valor);
      this.funcionario = funcionario;
    }
  
    apresentar() {
      return "Este salário é para o funcionário " + this.funcionario + ", Este é o valor: " + this.valor;
    }
  }


  module.exports = Salario;
