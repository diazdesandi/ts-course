// Ejemplos de funciones y arrow functions
// La diferencia entre arrow functions y funciones tradicionales es que
// las arrow functions no tienen su propio this, sino que heredan el this
// del contexto en el que se define.
// Las arrow functions se pueden usar como funciones de callback,
// pero no como funciones de constructor.

// Funcion anonima
// Significa que no tiene nombre y se define en una variable
const saludar = function (nombre: string) {
  return `Hola ${nombre}`;
};

console.log(saludar("Juan"));   

// Funciones tradicionales
function sumar(a: number, b: number): number {
  return a + b;
}

// Arrow functions
const restar = (a: number, b: number) => {
  return a - b;
};

// Arrow functions con return implícito
const multiplicar = (a: number, b: number) => a * b;
const dividir = (a: number, b: number) => a / b;

console.log(sumar(3, 4)); // 7
console.log(restar(10, 3)); // 7
console.log(multiplicar(2, 3)); // 6
console.log(dividir(10, 2)); // 5
