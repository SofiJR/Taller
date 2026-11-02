let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", taller4);
function taller4(event){
    event.preventDefault();

    let nombre= document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let correo = document.getElementById("correo").value;
    let contrasena = parseInt(document.getElementById("contrasena").value);
    let confirmar = parseInt(document.getElementById("confirmar").value);


    if (nombre.trim() === ""){
        resultado.innerText = "Escribe tu nombre";
        resultado.className = "error";
        return;
    }
    else if(isNaN(edad)){
        resultado.innerText = "Escribe tu edad";
        resultado.className = "error";
        return;
    }
    else if (edad < 18 || edad > 100){
        resultado.innerText="La edad debe ser un numero entero entre 18 y 100";
        resultado.className="error";
        return;

    }

    else if (correo.includes("@") == false || correo.includes(".") == false){
        resultado.innerText="Escribe un correo valido";
        resultado.className="error";
        return;
    }

    else if(contrasena != confirmar){
        resultado.innerText ="Las contraseña no coinciden";
        resultado.className = "error";
        return;
    }
    
    else{
        resultado.innerText=`Registro exito. Bienvenido(a) ${nombre}`;
    }

}