class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // #saldo - Proposta de privatização de atributo
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor
        }
    }
    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;        
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

contaCorrenteLucas.depositar(225);
let valorSacado = 75;
valorSacado = contaCorrenteLucas.sacar(valorSacado);
console.log(valorSacado);

console.log(contaCorrenteLucas);