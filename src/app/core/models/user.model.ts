import { UserRole } from "./role.model";

export interface User {
  id: number;
  email: string;
  role: UserRole;
}