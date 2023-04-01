function countChars(obj){
    document.getElementById("charNum").innerHTML = `Caracteres escritos: ${obj.value.length}`;
}

function mayEdad(edad, nombre){
    var edad = document.getElementById("user_age").value;
    var nombre = document.getElementById("user_name").value;

    if(edad >=17) {
        document.getElementById("age").innerHTML = `Hola ${nombre.value}, no eres mayor de edad.`;
    } else if(edad <=18) {
        document.getElementById("age").innerHTML = `Hola ${nombre.value}, eres mayor de edad.`;
    } else if(edad >=0) {
        document.getElementById("age").innerHTML = `No es una edad válida.`;
    }
}