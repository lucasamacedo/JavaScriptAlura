console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado;

let i = 0;
let destinoExiste = false;
while (i < 3){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
    i++;
}

console.log("Destino existe: ", destinoExiste);