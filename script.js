function countChars(obj){
    document.getElementById("charNum").innerHTML = `Caracteres escritos: ${obj.value.length}`;
}

function mayEdad(edad, nombre){
    var edad = document.getElementById("edad").value;
    var nombre = document.getElementById("nombre").value;

    if(edad >=18) {
        document.getElementById("age").innerHTML = `Hola ${nombre.value}, eres mayor de edad.`;
    } else if(edad <=17) {
        document.getElementById("age").innerHTML = `Hola ${nombre.value}, no eres mayor de edad.`;
    } else if(edad <=0) {
        document.getElementById("age").innerHTML = `No es una edad válida.`;
    }
}

function divisible(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if(num1%num2 == 0) {
        document.getElementById("modDiv").innerHTML = `El número ${num1.value} es divisible entre el número ${num2.value}`;
    } else {
        document.getElementById("modDiv").innerHTML = `El número ${num1.value} no es divisible entre el número ${num2.value}`;
    }
}