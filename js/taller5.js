let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", taller5);
function taller5(event){
    event.preventDefault();

    let primero = parseInt(document.getElementById("primero").value);
    let segundo = parseInt(document.getElementById("segundo").value);
    let operacion =document.getElementById("operacion").value;

    if(isNaN(primero) || isNaN(segundo)){
        resultado.innerText = "Escribe los dos numeros";
        resultado.className = "error";
        return;

    }
    else if(operacion === ""){
    resultado.innerText = "Selecciona una operacion";
    resultado.className = "error";
    return;
    }
    
    else if (operacion === "division" && segundo === 0){
        resultado.innerText = "No es posible dividir entre cero";
        resultado.className = "error";
        return;
    }

    let total = 0;
    let signo = "";

    switch(operacion){
        case "suma":
            total = primero + segundo;
            signo = "+";
            break;

        case "resta":
            total = primero - segundo;
            signo = "-";
            break;

        case "multiplicacion":
            total = primero * segundo;
            signo = "x";
            break;

        case "division":
            total = primero / segundo;
            signo = "/";
            break;
    }
    resultado.innerText = primero + " " + signo + " " + segundo + " = " + total;
    resultado.className = "exito";
}
