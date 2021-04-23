import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Lucas", 1112233309);

const contaCorrenteLucas = new ContaCorrente(cliente1, 1001);
contaCorrenteLucas.depositar(1000);
contaCorrenteLucas.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteLucas);