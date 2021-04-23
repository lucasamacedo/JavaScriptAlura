class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valorSacado){
            this.saldo -= valorSacado;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 1112233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 8882233309;

const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 1001;
contaCorrenteLucas.saldo = 0;
console.log(contaCorrenteLucas.saldo);
contaCorrenteLucas.saldo += 100;
console.log(contaCorrenteLucas.saldo);

let valorSacado = 75;
contaCorrenteLucas.sacar(valorSacado);
console.log(contaCorrenteLucas.saldo);

console.log(cliente1);
console.log(cliente2);