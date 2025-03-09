import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

// fetch
// fetch es una función que se encarga de hacer una petición a una url
// fetch devuelve una promesa que se resuelve con la respuesta de la petición
// fetch devuelve una promesa que se rechaza con el error de la petición

// fetch(`${baseURL}/users`)
//     .then(response => response.json())
//     .then(console.log)
//     .catch(console.warn);

// Usando axios
// axios es una librería que se encarga de hacer peticiones a una url,
// es más fácil de usar que fetch y tiene más funcionalidades como interceptores,
// transformaciones, etc.
// axios devuelve una promesa que se resuelve con la respuesta de la petición
// axios devuelve una promesa que se rechaza con el error de la petición

// Instancia de axios
// axios.get(baseURL)
//     .then(console.log)
//     .catch(console.warn);

// Usando una sola instancia de axios

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
  params: {},
});

api
  .get("/users")
  .then(console.log)
  //   .then((response) => {
  //     response.data.forEach((user: any) => {
  //       console.log(user.name);
  //     });
  //   })
  .catch(console.warn);
