// Arrays
let frutas: string[] = ["Manzana", "Banana", "Uva"];

// Array de objetos
const usuarios = [
  {
    nombre: "Ana",
    edad: 25,
  },
  {
    nombre: "Pedro",
    edad: 30,
  },
];

// map
const nombres = usuarios.map((usuario) => usuario.nombre);

console.log(nombres);

// filter
const mayoresDe25 = usuarios.filter((usuario) => usuario.edad > 25);

console.log(mayoresDe25);

// Se puede hacer push, pop, shift, unshift, etc.
const personas = ["Ana", "Pedro", "Juan"];

// Array como constante, no se puede hacer push, pop, shift, unshift, etc.
const verdura = ["Lechuga", "Tomate", "Cebolla"] as const;

const numeros = [1, 2, 3, 4, 5];

// numeros.push('6');

console.log(numeros);

// Desestructuración de arrays
const [persona1, persona2, persona3] = personas;

console.log(persona1, persona2, persona3);

// Desestructuración de arrays ignorando elementos
const [, , ...resto] = numeros;

console.log(resto);
