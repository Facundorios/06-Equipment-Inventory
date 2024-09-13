import { ValidRoles } from "./valid-roles";

export interface CreateUser {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  role: ValidRoles;
}
