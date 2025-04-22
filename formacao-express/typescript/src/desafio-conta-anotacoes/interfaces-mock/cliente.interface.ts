import { ContaCorrente } from "./conta.interface";

export interface Cliente {
  nome: string;
  email: string;
  contas: ContaCorrente[];
}
