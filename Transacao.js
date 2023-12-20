class Transacao {
  constructor(descricao, valor) {
      this.descricao = descricao;
      this.valor = valor;
  }

  getDescricao() {
      return this.descricao;
  }

  setDescricao(descricao) {
      this.descricao = descricao;
  }

  getValor() {
      return this.valor;
  }

  setValor(valor) {
      this.valor = valor;
  }

  apresentar(){
     return "Esta transação tem como descrição: " + this.descricao + ", Este é o valor: " + this.valor;
}

module.exports = Transacao;
