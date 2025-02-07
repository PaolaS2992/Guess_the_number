function coincidencia(){
    let numeroAleatorio = Math.floor(Math.random() * (5 - 1)) + 1;
    let numeroIngresado = document.getElementById("numeroIngresado").value;
    let respuesta = "";
    
    if (numeroIngresado > numeroAleatorio) {
        // console.log("El nro ingresado: " + numeroIngresado + " NO es igual a: " + numeroAleatorio);
        respuesta = "El nro ingresado: " + numeroIngresado + " es MAYOR al: " + numeroAleatorio;
    } 
    if (numeroIngresado < numeroAleatorio){
        respuesta = "El nro ingresado: " + numeroIngresado + " es MENOR al: " + numeroAleatorio;
    }
    if (numeroIngresado == numeroAleatorio) {
        //console.log("El nro ingresado: " + numeroIngresado + " SI es igual a: " + numeroAleatorio);
        respuesta = "ADIVINASTE El nro ingresado: " + numeroIngresado + " es IGUAL al: " + numeroAleatorio;
    }

    document.getElementById('respuesta').innerHTML = respuesta;
    
}