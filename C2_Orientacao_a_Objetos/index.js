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

contaCorrenteLucas.depositar(225);
let valorSacado = 75;
valorSacado = contaCorrenteLucas.sacar(valorSacado);
console.log(valorSacado);

console.log(contaCorrenteLucas);