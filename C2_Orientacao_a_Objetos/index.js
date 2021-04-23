import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 1112233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 8882233309;

const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 1001;
contaCorrenteLucas.cliente = cliente1;
contaCorrenteLucas.depositar(1000);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

contaCorrenteLucas.transferir(100, conta2);

console.log(contaCorrenteLucas);
console.log(conta2);