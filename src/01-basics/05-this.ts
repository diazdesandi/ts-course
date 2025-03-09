// this
// this es el contexto en el que se ejecuta la función,
// se puede definir como el scope de la función

// this en objetos
const persona = {
  nombre: "Juan",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};

persona.saludar();

// this en funciones
function saludar() {
  console.log(this); // undefined
}

saludar();

// this en arrow functions
// Regresa {} que es el contexto del modulo del archivo\
const saludarArrow = () => {
  console.log(this);
};

saludarArrow();
