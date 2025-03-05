// Objetos
const persona = {
  nombre: "Luis",
  edad: 35,
  direccion: {
    calle: "123",
    ciudad: "Santiago",
  },
};

// Clonar objeto pero no rompiendo la referencia
// const persona2 = persona;

// Clonar un objeto rompiendo la usando spread
// Si tiene propiedades anidadas, no se clona, se copia la referencia
// const persona2 = {...persona}
// Clona rompiendo la referencia con propiedades anidadas
// const persona2 = { ...persona, direccion: { ...persona.direccion } };

// Clonar un objeto rompiendo la referencia
const persona2 = structuredClone(persona);
persona2.nombre = "Juan";

// console.log(persona);
// console.log(persona2);

// Desestructuración de objetos
const { nombre, edad, direccion } = persona;


console.log(nombre, edad, direccion);


