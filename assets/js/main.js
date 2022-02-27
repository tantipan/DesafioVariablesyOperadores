
function operaciones(){
  var num2 = 0;
  var num1 = 0;
  alert("Ingrese 2 numero distintos y mayores a 0");
  do{
    num1 = parseInt(prompt("Ingrese el primero numero: "));
    num2 = parseInt(prompt("Ingrese el segundo numero: "));
  }while (num1 <= 0 || num2 <= 0 || num1==num2);

  alert("La suma de los numeros es : "+ sumar(num1,num2));
  alert("La resta de los numeros es : "+ restar(num1,num2));
  alert("La multiplicacion de los numeros es : "+ multiplicar(num1,num2));
  alert("La division de los numeros es : "+ dividir(num1,num2));
  alert("El modulo de los numeros es : "+ modulo(num1,num2));
}

function sumar(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1+n2);
}

function restar(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1-n2);
}

function multiplicar(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1*n2);
}

function dividir(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1/n2);
}

function dividir(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1/n2);
}

function modulo(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1%n2);
}


function temperatura(){
  var grado = prompt("Ingresar la temperatura en grados Celsius: ");

  var Kelvin = parseFloat(grado) + 273.15;
  var Fahrenheit = (parseFloat(grado) * 9/5) + 32;

  alert("La temperatura en Kelvin es: " + Kelvin);
  alert("La temperatura en Fahrenheit es: " + Fahrenheit);
}

function cantidad_dias(){
  var dias = parseInt(prompt("Ingrese una cantidad de días: "));

  var años = Math.floor(dias/365);
  var semanas = Math.floor((dias-(años*365))/7);
  var dias = dias-(años*365)-(semanas*7);

  alert("resultado es "+ años +" años, " + semanas + " semanas y " + dias + " días.")
}

function numeros(){
  var numeros = 0;
  for(cont=1; cont < 6; cont++){
    numeros += parseInt(prompt("Ingrese un numero ("+ cont +")"));
  }
  alert("La suma de todos los números es: " + numeros);
  alert("El promedio de los " + (cont-1) + " números ingresados es: " + (numeros/(cont-1)));
}
