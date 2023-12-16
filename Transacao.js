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
}

module.exports = Transacao;
