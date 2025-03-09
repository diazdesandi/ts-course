// Ejemplos de variables y tipos de datos
// Var no se debe de usar porque genera una variable global
// y puede ser reasignada en cualquier parte del código
// var ciudad = "Santiago";

// let es una variable que puede ser reasignada y tiene un scope de bloque
let nombre: string = "Juan";

// const es una variable que no puede ser reasignada y tiene un scope de bloque
const edad: number = 30;

if(true) {
    let nombre: string = "Pedro";
    const edad: number = 25;
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`); 
}

console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`); 