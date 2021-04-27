var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector("#primeiro-paciente").querySelector(".info-altura");
var altura = tdAltura.textContent;

var IMC = peso / (altura * altura);
document.querySelector("#primeiro-paciente").querySelector(".info-imc").textContent = IMC;
//console.log(IMC);