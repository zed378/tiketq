import { role } from "../../redux/auth";

export interface register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role: role;
}

export interface login {
  identity: string;
  password: string;
}
