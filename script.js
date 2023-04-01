function countChars(obj){
    document.getElementById("charNum").innerHTML = `Caracteres escritos: ${obj.value.length}`;
}

function tipoDe(){
    var value = parseInt(document.getElementById("obj"));
    document.getElementById("dataType").innerHTML = `Tipo de dato: ${typeof(value)}`;
}

function mayEdad(edad, nombre){
    var edad = document.getElementById("edad").value;
    var nombre = document.getElementById("nombre").value;

    if(edad >=18) {
        document.getElementById("age").innerHTML = `Hola ${nombre}, eres mayor de edad.`;
    } else if(edad <=17) {
        document.getElementById("age").innerHTML = `Hola ${nombre}, no eres mayor de edad.`;
    } else if(edad <=0) {
        document.getElementById("age").innerHTML = `No es una edad válida.`;
    }
}

function grades(){
    var nombr = document.getElementById("nombr").value;
    var materia = document.getElementById("materia").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var notafinal = (nota1 + nota2 + nota3)/3;

    if(notafinal >=3.0) {
        document.getElementById("grade").innerHTML = `Felicitaciones ${nombr}, su nota es ${notafinal}. Pasaste la materia ${materia}`;
    } else if(notafinal <3.0) {
        document.getElementById("grade").innerHTML = `Lo siento ${nombr}, su nota es ${notafinal}. No pasaste la materia ${materia}`;
    }
}

function numPar(){
    var num = document.getElementById("num").value;

    if(num%2 == 0) {
        document.getElementById("numEven").innerHTML = `El número ${num} es par`;
    } else {
        document.getElementById("numEven").innerHTML = `El número ${num} no es par`;
    }
}

function divisible(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if(num1%num2 == 0) {
        document.getElementById("modDiv").innerHTML = `El número ${num1} es divisible entre el número ${num2}`;
    } else {
        document.getElementById("modDiv").innerHTML = `El número ${num1} no es divisible entre el número ${num2}`;
    }
}