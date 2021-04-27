botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoForm(form);

    console.log(paciente);

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
    imcTd.textContent = calculaImc(peso, altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});

function obtemPacienteDoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}