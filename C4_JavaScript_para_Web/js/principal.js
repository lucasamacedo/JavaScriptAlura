var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");
var paciente;

for(var i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    var IMC = peso / (altura * altura);
    
    if(peso <= 0 || peso >= 1000){
        console.log("Valor de peso de paciente inválido!");
        tdImc.textContent = "Peso inválido";
        //console.log(paciente.classList);
        paciente.classList.add("paciente-invalido");
    } else if(altura <= 0 || altura >= 3.00){
        console.log("Valor de altura do paciente inválido!");
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    else{
        var tdImc = paciente.querySelector(".info-imc").textContent = IMC.toFixed(2);
    }
}



//console.log(IMC);