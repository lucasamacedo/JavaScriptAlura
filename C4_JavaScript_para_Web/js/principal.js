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

botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    console.log(pacienteTr);
});
//console.log(IMC);