let formulario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", taller3);
function taller3(){
    event.preventDefault();


    let numero = parseInt(document.getElementById("numero").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let numero3 = parseInt(document.getElementById("numero3").value);


    if(isNaN(numero) || isNaN(numero2) || isNaN(numero3)){
        resultado.innerText="Completa los tres nummeros";
        resultado.className="error"
        return;
    }

    else if (numero === numero2 && numero2  === numero3){
        resultado.innerText="Los tres numeros son iguales";
        resultado.className="exito";
        return;

    }
    else if(numero > numero2 && numero > numero3){
        resultado.innerText = `El numero Mayor es ${numero}`;
        resultado.className = "exito";
    
    }
    else if (numero2 > numero && numero2 > numero3){
        resultado.innerText = `El numero Mayor es ${numero2}`;
        resultado.className = "exito";
    }
        
    else {
        resultado.innerText = `El numero Mayor es ${numero3}`;
        resultado.className = "exito";
    }
    
    }
    
    
