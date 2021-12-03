// "x" e "y" son números enteros (int).
// Devuelve el número más grande
// Si son iguales, devuelve cualquiera de los dos
// Tu código:
const obtenerMayor = (x, y) => {
  if (!x || !y) return console.warn(`No ingresaste todos los valores`);
  if (typeof x !== "number" || typeof y !== "number")
    return console.error(`Los valores deben ser numeros`);
  if (!Number.isInteger(x) || !Number.isInteger(y))
    return console.warn(`Los valores deben ser numeros enteros`);

  if (x >= y) return x;
  else return y;
};

//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"
const mayoriaDeEdad = (edad) => {
  if (!edad) return console.warn(`No ingresatse ningun valor`);
  if (typeof edad !== "number")
    return console.error(`El valor debe ser un numero`);
  if (edad < 0) return console.warn(`Dato invalido`);

  if (edad >= 18) return `Allowed`;
  else return `Not allowed`;
};

//Recibimos un estado de conexión de un usuario representado por un valor numérico.
//Cuando el estado es igual a 1, el usuario está "Online"
//Cuando el estado es igual a 2, el usuario está "Away"
//De lo contrario, presumimos que el usuario está "Offline"
//Devolver el estado de conexión de usuario en cada uno de los casos.
const conection = (status) => {
  if (!status) return console.warn(`You didn't pass any value`);
  if (typeof status !== "number")
    return console.error(`Value must be a number (1 or 2)`);

  if (status === 1) return `Online`;
  else if (status === 2) return `Away`;
  else return `Offline`;
};

// Devuelve "true" si "numero" es 10 o 5
// De lo contrario, devuelve "false"
// Tu código:
const esDiezOCinco = (numero) => {
  if (!numero) return console.warn(`No ingresaste ningun valor`);
  if (typeof numero !== "number")
    return console.error(`El valor debe ser un numero`);

  return numero === 5 || numero === 10;
};

// Devuelve "true" si "numero" es menor que 50 y mayor que 20
// De lo contrario, devuelve "false"
// Tu código:
const estaEnRango = (numero) => {
  if (!numero) return console.warn(`No ingresaste ningun valor`);
  if (typeof numero !== "number")
    return console.error(`El valor debe ser un numero`);

  return numero > 20 && numero < 50;
};

// Devuelve "true" si "numero" es un entero (int/integer)
// Ejemplo: 0.8 -> false
// Ejemplo: 1 -> true
// Ejemplo: -10 -> true
// De lo contrario, devuelve "false"
// Pista: Puedes resolver esto usando `Math.floor`
// Tu código:
const esEntero = (numero) => {
  if (!numero) return console.warn(`No ingresaste ningun valor`);
  if (typeof numero !== "number")
    return console.error(`El valor debe ser un numero`);

  return Number.isInteger(numero);
};

// Si "numero" es divisible entre 3, devuelve "fizz"
// Si "numero" es divisible entre 5, devuelve "buzz"
// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
// De lo contrario, devuelve el numero
function fizzBuzz(numero) {
  if (!numero) return console.warn(`No ingresaste ningun valor`);
  if (typeof numero !== "number")
    return console.error(`El valor debe ser un numero`);

  if (numero % 15 === 0) return "Fizzbuzz";
  else if (numero % 5 === 0) return "buzz";
  else if (numero % 3 === 0) return "fizz";
  else return numero;
}

//La función recibe tres números distintos.
//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//Si no se cumplen ninguna de las condiciones anteriores, retornar false.
const operadoresLogicos = (num1, num2, num3) => {
  if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
  else if (num1 === 0 || num2 === 0 || num3 === 0) return "Error";
  else if (num1 > num2 && num1 > num3) return "Numero 1 es mayor y positivo";
  else if (num3 > num1 && num3 > num2) {
    return (num3 += 1);
  } else return false;
};

// Devuelve "true" si "numero" es primo
// De lo contrario devuelve "falso"
// Pista: un número primo solo es divisible por sí mismo y por 1
// Pista 2: Puedes resolverlo usando un bucle `for`
// Nota: Los números 0 y 1 NO son considerados números primos
const esPrimo = (numero) => {
  if (!numero) return console.warn(`No ingresaste ningun valor`);
  if (typeof numero !== "number")
    return console.error(`El valor debe ser un numero`);

  if (numero === 0) return console.warn("El numero debe ser mayor a 1");
  if (numero === 1) return "Es primo";

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return "No es primo";
  }
  return "Es primo";
};

//Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
//si su valor es true y “Soy falso” si su valor es false.
//Escribe tu código aquí
const esVerdadero = (valor) => {
  //Si hago una validacion escribiendo que si valor no existe me anula el valor 'false'. No se por qué
  if (typeof valor !== "boolean")
    return console.error("Tipo de Valor incorrecto");

  return valor === false ? "Soy falso" : "Soy verdadero";
};

//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//Escribe tu código aquí
const tablaDelSeis = () => {
  const tablaDelSeis = [];
  for (let i = 0; i <= 10; i++) {
    tablaDelSeis.push(i * 6);
  }
  return tablaDelSeis;
};

//Solucion con parametro solicitado al usuario:

const tablaDelSeis2 = (num) => {
  if (!num) return console.warn(`No ingresaste ningun valor`);
  if (typeof num !== "number")
    return console.error(`El valor debe ser un numero`);
  const tablaDelSeis = [];
  for (let i = 0; i <= 10; i++) {
    tablaDelSeis.push(i * num);
  }
  return tablaDelSeis;
};

//Solucion usando metodo map()://Cambio de pensamiento: No puedo usa map() porque las variables dadas no son arrays, sino que la funcion devuelve un array.

//Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
//Escribe tu código aquí
const tieneTresDigitos = (numero) => {
  if (!numero) return console.warn(`No ingresaste ningun valor`);
  if (typeof numero !== "number")
    return console.error(`El valor debe ser un numero`);

  let myNumber = numero.toString();
  if (myNumber.length === 3) return true;
  else return false;
};

//Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//Retornar el valor final.
//Usar el bucle do ... while.
const doWhile = (numero) => {
  if (!numero) return console.warn(`No ingresaste ningun valor`);
  if (typeof numero !== "number")
    return console.error(`El valor debe ser un numero`);

  let contador = 0;

  do {
    numero += 5;
    contador++;
  } while (contador < 8);
  return numero;
};
