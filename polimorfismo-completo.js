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

    apresentar() {
        return "Esta transação tem como descrição: " + this.descricao + ", Este é o valor: " + this.valor;
    }
}

class Conta extends Transacao {
    constructor(descricao, valor, tipoConta) {
        super(descricao, valor);
        this.tipoConta = tipoConta;
    }

    getTipoConta() {
        return this.tipoConta;
    }

    setTipoConta(novoTipo) {
        this.tipoConta = novoTipo;
    }

    apresentar() {
        return "Esta transação é da conta " + this.tipoConta + ", Este é o valor: " + this.valor;
    }
}

class Salario extends Transacao {
    constructor(descricao, valor, funcionario) {
        super(descricao, valor);
        this.funcionario = funcionario;
    }

    getFuncionario() {
        return this.funcionario;
    }

    setFuncionario(novoFunc) {
        this.funcionario = novoFunc;
    }

    apresentar() {
        return "Este salário é para o funcionário " + this.funcionario + ", Este é o valor: " + this.valor;
    }
}

class Pagamento extends Transacao {
    constructor(descricao, valor, beneficiario) {
        super(descricao, valor);
        this.beneficiario = beneficiario;
    }

    getBeneficiario() {
        return this.beneficiario;
    }

    setBeneficiario(novoBeneficiario) {
        this.beneficiario = novoBeneficiario;
    }

    apresentar() {
        return "O beneficiário do pagamento é o " + this.beneficiario + ", Este é o valor: " + this.valor;
    }
}

class Imposto extends Transacao {
    constructor(descricao, valor, tipoImposto) {
        super(descricao, valor);
        this.tipoImposto = tipoImposto;
    }

    getTipoImposto() {
        return this.tipoImposto;
    }

    setTipoImposto(novoImposto) {
        this.tipoImposto = novoImposto;
    }

    apresentar() {
        return "Este é um imposto " + this.tipoImposto + ", Este é o valor: " + this.valor;
    }
}

class Despesa extends Transacao {
    constructor(descricao, valor, categoria) {
        super(descricao, valor);
        this.categoria = categoria;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(novaCategoria) {
        this.categoria = novaCategoria;
    }

    apresentar() {
        return "Esta despesa é de categoria " + this.categoria + ", Este é o valor: " + this.valor;
    }
}

class ProcessadorTransacoes {
    processar(transacao) {
        if (transacao instanceof Conta || transacao instanceof Imposto || transacao instanceof Pagamento || transacao instanceof Salario || transacao instanceof Despesa) {
            return transacao.apresentar();
        } else {
            return "Tipo de transação não reconhecido";
        }
    }
}

const transacao1 = new Conta('Compra', 100, 'corrente');
const transacao2 = new Imposto('Imposto de Renda', 200, 'federal');
const transacao3 = new Pagamento('Aluguel', 500, 'Proprietário Carlos');
const transacao4 = new Salario('Salário de Dezembro', 3000, 'João');
const transacao5 = new Despesa('Material de Escritório', 50, 'escritório');

const processador = new ProcessadorTransacoes();

console.log(processador.processar(transacao1));
console.log(processador.processar(transacao2));
console.log(processador.processar(transacao3));
console.log(processador.processar(transacao4));
console.log(processador.processar(transacao5));
