
function operaciones(){
  // Se declaran las variables de 2 numero y se inicializan en 0
  var num2 = 0;
  var num1 = 0;

  // Se le indica al usuario que debe ingresar 2 numeros mayores a 0 y distntos entre si
  alert("Ingrese 2 numero distintos y mayores a 0");

// Se inicia el ciclo por lo meenos una vez
  do{
    // Se solicita al usuario ingresar los 2 numeros
    num1 = parseInt(prompt("Ingrese el primero numero: "));
    num2 = parseInt(prompt("Ingrese el segundo numero: "));

    // Se verifica si los numeros son menores a 0 y si son iguales.
    //   En caso verdadero se vuelven a solicitar los numeros
    //   En caso de ser falso se sale del ciclo

  }while (num1 <= 0 || num2 <= 0 || num1==num2);

// Se muestra el resultado de la suma
  alert("La suma de los numeros es : "+ sumar(num1,num2));
// Se muestra el resultado de la resta
  alert("La resta de los numeros es : "+ restar(num1,num2));
// Se muestra el resultado de la multiplicacion
  alert("La multiplicacion de los numeros es : "+ multiplicar(num1,num2));
// Se muestra el resultado de la divison
  alert("La division de los numeros es : "+ dividir(num1,num2));
// Se muestra el modulo ente ambos numeros
  alert("El modulo de los numeros es : "+ modulo(num1,num2));
}

// Esta funcion recibe como parametros 2 numeros y retorna la suma de ellos
function sumar(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1+n2);
}
// Esta funcion recibe como parametros 2 numeros y retorna la resta entre ellos
function restar(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1-n2);
}

// Esta funcion recibe como parametros 2 numeros y retorna la multiplicacion de ellos
function multiplicar(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1*n2);
}

// Esta funcion recibe como parametro 2 numeros y retorna la divisoin entre ellos
function dividir(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1/n2);
}

// Esta funcion recibe como parametro 2 numeros y retorna el modulo de ellos
function modulo(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return (n1%n2);
}


// Esta funcion solicita al usuario la temperaturaen grados Celsius y
  // los transforma a Kelvin y Fahrenheit
function temperatura(){

  // Solicita al usuario la temperatura en Celcius
  var grado = prompt("Ingresar la temperatura en grados Celsius: ");

// Transforma la temperatura a grados Kelvin, conservando 3 decimales
  var Kelvin = (parseFloat(grado) + 273.15).toFixed(3);
// Transforma la temperatura a grados Fahrenheit, conservando 3 decimales
  var Fahrenheit = ((parseFloat(grado) * 9/5) + 32).toFixed(3);

// Muestra por pantalla ambas temperaturas
  alert("La temperatura en Kelvin es: " + Kelvin);
  alert("La temperatura en Fahrenheit es: " + Fahrenheit);
}

// Solicita al usuario cantidad de dias y los muestra en formato
// x años, x semanas y x dias
function cantidad_dias(){
// Solcita al usuario los dias
  var dias = parseInt(prompt("Ingrese una cantidad de días: "));

// Calcula los años teniendo en cuanta 1 año = 365 dias
  var años = Math.floor(dias/365);

// Calcula las semanas con
// - los dias restantes de la operacion anterior
// - Considerando 1 semana = 7 dias
  var semanas = Math.floor((dias-(años*365))/7);

// Calcula los dias restantes
  var dias = dias-(años*365)-(semanas*7);
// Muestra el resultado por pantalla
  alert("resultado es "+ años +" años, " + semanas + " semanas y " + dias + " días.")
}

// Esta funcion solicita al usuario 5 numeros y
//  realiza las operaciones de suma y promedios
function numeros(){
  // Declara la variable nuemros y la inicializa en 0
  var numeros = 0;
  // Se comienza el ciclo desde el numero 1 al seis
  // para solicitar al usuario 5 numeros
  for(cont=1; cont < 6; cont++){
    // Solicita al usuario ingresar los numeros
    // Los transforma a Enteros
    // y acumula su suma en la variable numeros
    numeros += parseInt(prompt("Ingrese un numero ("+ cont +")"));
  }
// Muestra por pantalla la suma
  alert("La suma de todos los números es: " + numeros);
// Muestra por pantalla el promedio
  alert("El promedio de los " + (cont-1) + " números ingresados es: " + (numeros/(cont-1)));
}
