import axios from "axios";
import { User } from "./interfaces.ts";
// Define la URL base de la API
const baseURL = "https://jsonplaceholder.typicode.com/";

// Define la interfaz User

// Crea una instancia de axios
const api = axios.create({
  baseURL, // Typescript soporta el shorthand de variables con el mismo nombre que la propiedad
  headers: {
    "Content-Type": "application/json",
  },
});

// Obtiene todos los usuarios
const getUsers = async (): Promise<void> => {
  // Obtiene todos los usuarios

  // Descomponemos la respuesta de la petición GET a /users
  // data: Es la propiedad que contiene la información de la respuesta (response.data), en este caso, un arreglo de usuarios
  // data es de tipo User[]
  // En este caso desestructuramos la respuesta de la petición GET a /users, para obtener directamente el arreglo de usuarios
  // response es de tipo AxiosResponse<User[]>
  // y contiene otras propiedades como status, statusText, headers, config, etc.
  const { data } = await api.get("/users");

  try {
    // Mapea los datos de la respuesta a la interfaz User
    // Imprime en consola la tabla de los usuarios
    const table = data.map((user: User) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
      };
    });
    console.table(table);
  } catch (error) {
    console.log(error);
  }
};

// Obtiene un usuario por su id
const getUserById = async (id: number): Promise<void> => {
  try {
    // Obtiene un usuario por su id
    const { data } = await api.get(`/users/${id}`);
    // Desestructura los datos de la respuesta
    const { name, username, email, phone, website, company, address } = data;
    console.table({
      id: data.id,
      name,
      username,
      email,
      phone,
      website,
      company: company.name,
      address: `${address.street} ${address.suite}, ${address.city}, ${address.zipcode}`,
    });
  } catch (error) {
    console.log(error);
  }
};

// Crea un nuevo usuario
const createUser = async (user: User): Promise<void> => {
  try {
    const { data } = await api.post("/users", user);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Partial es una interfaz que permite que los campos de la interfaz User sean opcionales
// Esto es útil para cuando no queremos actualizar todos los campos de un usuario
// Por ejemplo, si queremos actualizar el nombre de un usuario, no es necesario enviar todos los campos de la interfaz User
const updateUser = async (id: number, user: Partial<User>): Promise<void> => {
  try {
    const { data } = await api.put(`/users/${id}`, user);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Elimina el usuario con el id especificado
const deleteUser = async (id: number) => {
  try {
    const { data } = await api.delete(`/users/${id}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Ejemplo de usuario
const user: User = {
  id: 200,
  name: "John Doe",
  username: "john.doe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    suite: "Apt 1",
    city: "Anytown",
    zipcode: "12345",
  },
  phone: "123-456-7890",
  website: "example.com",
  company: {
    name: "Example Inc",
    catchPhrase: "We do it better",
    bs: "We make it happen",
  },
};

getUsers();
getUserById(2);
createUser(user);
updateUser(2, {
  name: "John Doe Updated",
});
deleteUser(1);
