import { StatusUsusario } from "./status-usuario";

export interface Usario {
  id: number;
  nome: string;
  email: string | null;
  senha?: string;
  status: StatusUsusario;
}
