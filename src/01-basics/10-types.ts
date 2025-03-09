// Tipos de datos exclusivos de TypeScript

// 1. Union Types
// Permiten combinar múltiples tipos en un solo tipo

// Sin union type
const value: string | number = "Hello";

// Con union type
type StringOrNumber = string | number;

const value2: StringOrNumber = "Hello";

// 2. Interfaces
// Definen estructuras de datos con propiedades y métodos
interface Person {
  id?: number;
  firstName: string;
  lastName: string;
  age: number;
}

// Herencia de interfaces
interface User extends Person {
  email: string;
  isActive: boolean;
}

const user: User = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  isActive: true,
};

// Interfaces con funciones
interface PersonWithFullName extends Person {
  fullName: () => string;
}

const personWithFullName: PersonWithFullName = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: () => {
    return `${personWithFullName.firstName} ${personWithFullName.lastName}`;
  },
};

// 3. Enums
// Definen un conjunto de constantes con nombre
enum Color {
  Red,
  Green,
  Blue,
}

const color: Color = Color.Red;

// 4. Type Aliases
// Permiten crear tipos personalizados
type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};

// 5. Type Guards
// Permiten verificar el tipo de una variable en tiempo de ejecución
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const isStringResult = isString("Hello");

// 6. Type Inference
// Permite inferir el tipo de una variable
const inferredValue = "Hello";
console.log(typeof inferredValue); // string
console.log({ inferredValue }); // { inferredValue: 'Hello' }

// 7. Type Assertions
// Permiten afirmar que una variable es de un tipo específico
const typedValue = "Hello" as string;

// 8. Function Types
// Definen el tipo de una función
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting = greet("John");

// 8.1 Promises
const arrayPromise = (data: string[]): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

// 9. Type Parameters
// Permiten crear tipos genéricos
function identity<T>(value: T): T {
  return value;
}

const result = identity<string>("Hello");

// Ejemplo de exportación
export { User, Person, PersonWithFullName, Color, Point };
export type { StringOrNumber };
export const add = (a: number, b: number): number => a + b;
