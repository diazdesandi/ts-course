import axios from "axios";
import { User, Post } from "./interfaces.ts";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// CRUD utilizando genericos
// T es el tipo de dato que se va a utilizar, aunque por defecto es unknown
// Al utilizar T, se puede utilizar cualquier tipo de dato que se quiera utilizar
// Por ejemplo, se puede utilizar User, Post, etc.
// Utilizando genericos podemos reutilizar el codigo para diferentes tipos de datos,
// pero se pierde granularidad en el codigo.
// En el caso de que no querer utilizar genericos, podriamos reemplazar T por una union de tipos
// Por ejemplo, T = User | Post, y asi poder utilizar un determinado tipo de datos.
type T = User | Post;

// Error es de tipo unknown para que pueda recibir cualquier tipo de error
// Error es de tipo unknown para que pueda recibir cualquier tipo de error
const ErrorHandler = (error: unknown) => {
  console.log(error);
  throw error;
};

// GET - Obtener todos los recursos
const getData = async <T>(url: string): Promise<T | void> => {
  try {
    const { data } = await api.get<T>(url);
    return data;
  } catch (error) {
    ErrorHandler(error);
  }
};

// GET BY ID - Obtener un recurso por su id
const getDataById = async <T>(url: string, id: string): Promise<T | void> => {
  try {
    const { data } = await api.get<T>(`${url}/${id}`);
    return data;
  } catch (error) {
    ErrorHandler(error);
  }
};

// POST - Crear un nuevo recurso
const postData = async <T>(url: string, body: T): Promise<T | void> => {
  try {
    const { data } = await api.post<T>(url, body);
    return data;
  } catch (error) {
    ErrorHandler(error);
  }
};

// PUT - Actualizar un recurso existente
const putData = async <T>(url: string, body: Partial<T>): Promise<T | void> => {
  try {
    const { data } = await api.put<T>(url, body);
    return data;
  } catch (error) {
    ErrorHandler(error);
  }
};

// DELETE - Eliminar un recurso existente
const deleteData = async <T>(url: string): Promise<T | void> => {
  try {
    const { data } = await api.delete<T>(url);
    return data;
  } catch (error) {
    ErrorHandler(error);
  }
};

// Ejemplo de usuario
const user: User = {
  id: 2,
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
  website: "https://www.example.com",
  company: {
    name: "Example Inc",
    catchPhrase: "We do it right",
    bs: "We do it right",
  },
};

const userPost: Post = {
  userId: user.id,
  id: 1,
  title: "My first post",
  body: "This is my first post",
};

// Ejemplo de uso
// const getUsers = await getData<User[]>("/users");
const getUsers = async (): Promise<User[]> => {
  const users = await getData<User[]>("/users");
  if (!users) throw new Error("No se encontraron usuarios");
  return users;
};

const getUserById = await getDataById<User>("/users", "1");
const createUser = await postData<User>("/users", user);
const updateUser = await putData<User>(`/users/${user.id}`, {
  ...user,
  name: "Jane Doe",
});
const deleteUser = await deleteData<User>(`/users/${user.id}`);

// Ejemplo de uso de post
const createPost = await postData<Post>("/posts", userPost);
const updatePost = await putData<Post>(`/posts/${userPost.id}`, {
  ...userPost,
  title: "My updated post",
});
const deletePost = await deleteData<Post>(`/posts/${userPost.id}`);

console.log({ getUsers, getUserById, createUser, updateUser, deleteUser });
console.log({ createPost, updatePost, deletePost });
