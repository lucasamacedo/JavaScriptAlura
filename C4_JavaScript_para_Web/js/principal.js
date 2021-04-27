var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var IMC = peso / (altura * altura);

if(peso <= 0 || peso >= 1000){
    console.log("Valor de peso de paciente inválido!");
    tdImc.textContent = "Peso inválido";
} else if(altura <= 0 || altura >= 3.00){
    console.log("Valor de altura do paciente inválido!");
    tdImc.textContent = "Altura inválida";
}
else{
    var tdImc = paciente.querySelector(".info-imc").textContent = IMC;
}

//console.log(IMC);