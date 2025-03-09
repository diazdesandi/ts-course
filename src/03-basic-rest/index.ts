import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { users } from "./data.ts";
import { User } from "./interface.ts";

dotenv.config();

// Inicializar el servidor
const app = express();

// Se utiliza para parsear el body de las peticiones que vienen en formato JSON
app.use(express.json());

// Puerto en el que el servidor escuchará las peticiones
// Se puede obtener desde el entorno o desde una variable de configuración
const port = process.env.PORT || 3000;

// Routes
// GET - localhost:3000/
app.get("/", (_, res: Response) => {
  res.send("Hello World!");
});

// Obtener todos los usuarios
// GET - localhost:3000/users
// GET - localhost:3000/users?limit=5&offset=0
// Query: { limit: number, offset: number }
app.get("/users", (req: Request, res: Response) => {
  try {
    // Paginación y offset para obtener un subconjunto de usuarios
    const { limit = 5, offset = 0 } = req.query;

    const usersToSend = users.slice(+offset, +offset + +limit);

    if (!usersToSend) {
      res.status(404).json({
        message: "No hay usuarios para mostrar",
      });
      return;
    }

    res.status(200).json({
      users: usersToSend,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los usuarios",
      error,
    });
  }
});

// Obtener un usuario por su ID
// GET - localhost:3000/users/:id
// Params: { id: number }
app.get("/users/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = users.find((user) => user.id === +id);

    if (!user) {
      res.status(404).json({
        message: "Usuario no encontrado",
      });
      return;
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el usuario",
      error,
    });
  }
});

// Crear un nuevo usuario
// POST - localhost:3000/users
// Body: { name: string, email: string, age: number }
app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;

    if (users.some((user) => user.email === email)) {
      res.status(400).json({
        message: "El usuario ya existe",
      });
      return;
    }

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
      age,
      isActive: true,
    };

    users.push(newUser);

    res.status(201).json({
      message: "Usuario creado correctamente",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error,
    });
  }
});

// Actualizar un usuario por su ID
// PUT - localhost:3000/users/:id
// Body: { name: string, email: string, age: number }
app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const userIndex = users.findIndex((user) => user.id === +id);
    if (userIndex === -1) {
      res.status(404).json({
        message: "Usuario no encontrado",
      });
      return;
    }

    const updatedUser = {
      ...users[userIndex],
      name,
      email,
      age,
    };

    users[userIndex] = updatedUser;

    res.status(200).json({
      message: "Usuario actualizado correctamente",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el usuario",
      error,
    });
  }
});

// Eliminar un usuario por su ID
// DELETE - localhost:3000/users/:id
app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === +id);
    if (userIndex === -1) {
      res.status(404).json({
        message: "Usuario no encontrado",
      });
      return;
    }

    users.splice(userIndex, 1);
    res.status(200).json({
      message: "Usuario eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el usuario",
      error,
    });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
