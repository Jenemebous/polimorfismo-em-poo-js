const Transacao = require("./Transacao")

class Pagamento extends Transacao {
    constructor(descricao, valor, beneficiario) {
      super(descricao, valor);
      this.beneficiario = beneficiario;
    }
    get beneficiario(){
        return this.beneficiario;
    }
    set beneficiario(novoBeneficiario){
        this.beneficiario = novoBeneficiario
    }
  

    apresentar() {
      return "O beneficiário do pagamento é o " + this.beneficiario + ", Este é o valor: " + this.valor;
    }
  }


  module.exports = Pagamento;
