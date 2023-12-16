const Transacao = require("./Transacao");
const Conta = require("./Conta");
const Despesa = require("./Despesa");
const Imposto = require("./Imposto");
const Pagamento = require("./Pagamento");
const ProcessadorTransacoes = require("./ProcessadorTransacoes");
const Salario = require("./Salario");

  
  
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
  