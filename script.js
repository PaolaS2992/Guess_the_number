function cambiarTexto(){
    document.getElementById('titulo').innerText = "¡Texto cambiado con Javascript!"
}

function verificarEdad(){
    let edad = document.getElementById("edad").value;

    if(edad > 18){
        console.log(edad, "mayor de edad");
        document.getElementById('respuesta').innerHTML = "Eres mayor de edad" + edad;
    } else{
        console.log(edad, "MENOR de edad");
        document.getElementById('respuesta').innerHTML = "Eres MENOR de edad" + edad;
    }
    
}


function nroEnteroAleatorio(){
    min = Math.ceil(1)
    max = Math.floor(5)
    let numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;
    return numeroAleatorio;
}

function coincidencia(){
    let numeroAleatorio = nroEnteroAleatorio();
    let numeroIngresado = document.getElementById("numeroIngresado").value;
    let respuesta = "";
    
    if (numeroIngresado != numeroAleatorio) {
        // console.log("El nro ingresado: " + numeroIngresado + " NO es igual a: " + numeroAleatorio);
        respuesta = "El nro ingresado: " + numeroIngresado + " NO es igual a: " + numeroAleatorio;
    } else {
        //console.log("El nro ingresado: " + numeroIngresado + " SI es igual a: " + numeroAleatorio);
        respuesta = "El nro ingresado: " + numeroIngresado + " SI es igual a: " + numeroAleatorio;
    }

    document.getElementById('respuesta').innerHTML = respuesta;
    
}