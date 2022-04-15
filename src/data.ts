import { User } from "./interface/user.interface";
import { Role } from "./role/user.role";

export const users: User[] = [
  {
    id: 1,
    name: "mubarak",
    email: "mubarak@gmail.com",
    role: Role.admin,
  },
  {
    id: 2,
    name: "jama",
    email: "jama@gmail.com",
    role: Role.user,
  },
  {
    id: 3,
    name: "ahmed",
    email: "ahmed@gmail.com",
    role: Role.user,
  },
  {
    id: 4,
    name: "mohamed",
    email: "mohamed@gmail.com",
    role: Role.user,
  },
];
