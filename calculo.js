function multi(){
    var n1 = parseInt(document.getElementById ("numer1").value);
    var n2 = parseInt(document.getElementById ("numer2").value);

    var resultado = n1 * n2;

    document.getElementById ("resultado") . innerHTML = "Resultado: " + resultado;

}
function divi(){
    var n1 = parseInt(document.getElementById ("numer1").value);
    var n2 = parseInt(document.getElementById ("numer2").value);
    
    var resultado = n1 / n2;
    
    document.getElementById ("resultado"). innerHTML = "Resultado: " + resultado;

}
function sub(){
    var n1 = parseInt(document.getElementById ("numer1").value);
    var n2 = parseInt(document.getElementById ("numer2").value);

    var resultado = n1 - n2;

    document.getElementById ("resultado"). innerHTML = "Resultado: " + resultado;

}
function soma(){
    var n1 = parseInt(document.getElementById ("numer1").value);
    var n2 = parseInt(document.getElementById ("numer2").value);

    var resultado = n1 + n2;

    document.getElementById ("resultado") . innerHTML = "Resultado: " + resultado;

}