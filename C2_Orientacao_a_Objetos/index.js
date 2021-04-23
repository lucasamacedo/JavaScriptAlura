import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Lucas", 1112233309);

const cliente2 = new Cliente("Alice", 8882233309);

const contaCorrenteLucas = new ContaCorrente(cliente1, 1001);
contaCorrenteLucas.depositar(1000);

const conta2 = new ContaCorrente(cliente2, 102);

contaCorrenteLucas.transferir(100, conta2);

console.log(contaCorrenteLucas);
console.log(conta2);