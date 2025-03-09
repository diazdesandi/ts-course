// Promises
// Las promises son objetos que representan el resultado de una operación asíncrona
// Las promises pueden estar en 3 estados:
// - Pending: La promesa no ha sido resuelta
// - Fulfilled: La promesa ha sido resuelta
// - Rejected: La promesa ha sido rechazada

console.log('Inicio');

// Crear una promesa
// La promesa recibe una función que recibe dos parámetros: resolve y reject
// resolve es una función que se ejecuta cuando la promesa se cumple
// reject es una función que se ejecuta cuando la promesa no se cumple
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa 1 ha sido resuelta");
    }, 1000);
});


// Consumir una promesa
// then es una función que se ejecuta cuando la promesa se cumple
// catch es una función que se ejecuta cuando la promesa no se cumple
promesa.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});

// Orden de ejecución
// Se ejecutan en un hilo secundario al hilo principal
// y se ejecutan despues de que se haya ejecutado todo el hilo principal
// 1. Se ejecuta el constructor de la promesa
// 2. Se ejecuta el then
// 3. Se ejecuta el catch

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesa 2 ha sido rechazada");
    }, 1000);
});

promesa2.then(console.log).catch(console.warn).finally(() => {
    console.log("Promesa 2 ha sido ejecutada");
});

console.log('Fin');
