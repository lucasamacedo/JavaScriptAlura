var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// var pacientes = document.querySelector("#tabela-pacientes").querySelectorAll(".paciente"); // da certo, só nao sei se é do jeito que to pensando
var pacientes = document.querySelectorAll(".paciente");
var paciente;

for(var i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    var IMC = calculaImc(peso, altura);

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){
        console.log("Valor de peso de paciente inválido!");
        tdImc.textContent = "Peso inválido";
        //console.log(paciente.classList);
        paciente.classList.add("paciente-invalido");
    } else if(!alturaEhValida){
        console.log("Valor de altura do paciente inválido!");
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    else{
        var tdImc = paciente.querySelector(".info-imc").textContent = IMC;
    }
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000)
        return true;
    return false;
}

function validaAltura(altura){
    if(altura > 0 && altura < 3)
        return true;
    return false;
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}