const Transacao = require("./Transacao")

  class Salario extends Transacao {
    constructor(descricao, valor, funcionario) {
      super(descricao, valor);
      this.funcionario = funcionario;
    }
    get funcionario(){
        return this.funcionario;
    }
    set funcionario(novoFunc){
        this.funcionario = novoFunc
    }
  
    apresentar() {
      return "Este salário é para o funcionário " + this.funcionario + ", Este é o valor: " + this.valor;
    }
  }


  module.exports = Salario;
