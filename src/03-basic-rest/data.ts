import { type User } from "./interface.ts";

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
    email: "john.doe@example.com",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 21,
    email: "jane.doe@example.com",
    isActive: true,
  },
  {
    id: 3,
    name: "John Smith",
    age: 22,
    email: "john.smith@example.com",
    isActive: true,
  },
  {
    id: 4,
    name: "Jane Smith",
    age: 23,
    email: "jane.smith@example.com",
    isActive: true,
  },
  {
    id: 5,
    name: "Doe Smith",
    age: 20,
    email: "doe.smith@example.com",
    isActive: false,
  },
  {
    id: 6,
    name: "Smith Doe",
    age: 20,
    email: "smith.doe@example.com",
    isActive: false,
  },
];
