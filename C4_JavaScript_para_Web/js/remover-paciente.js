var pacientes = document.querySelectorAll(".paciente");

var tabelaPacientes = document.querySelector("#tabela-pacientes");

tabelaPacientes.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover

    paiDoAlvo.classList.add("fadeOut");
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);
    
});
