// Async y await
// Async y await son palabras reservadas que se utilizan para manejar promesas
// Async es una función que devuelve una promesa
// Await es una palabra reservada que se utiliza para esperar a que una promesa se resuelva
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

async function obtenerUsuarios() {
  try {
    // const response = await api.get('/users');
    // console.log(response.data);
    // return response.data;
    const { data } = await api.get("/users");
    return data;
  } catch (error) {
    throw error;
  }
}

obtenerUsuarios().then(console.log);
