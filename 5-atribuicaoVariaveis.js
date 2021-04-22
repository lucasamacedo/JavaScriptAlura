console.log("Trabalhando com atribuição de variáveis");

const idade = 24;
let primeiroNome = "Lucas";
const sobrenome = "A.";

console.log(primeiroNome + sobrenome);
// Ambos as duas opções abaixo retornam o mesmo resultado
console.log(primeiroNome, sobrenome);
//console.log(nome + " " + sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

let i = 0;
i += 1;

//primeiroNome += sobrenome;
//console.log(primeiroNome);

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);
