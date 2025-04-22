import { Cliente } from "./cliente.interface";
import { ContaCorrente } from "./conta.interface";

export function movimentar(this: ContaCorrente, valor: number) {
  this.saldo += valor;
}

export const clientes: Cliente[] = [
  {
    nome: "Hamilton",
    email: "hamilton.rodrigues@gmail.com",
    contas: [
      {
        numero: 123,
        saldo: 100,
        movimentar,
      },
      {
        numero: 456,
        saldo: 200,
        movimentar,
      },
    ],
  },
  {
    nome: "Kelvis",
    email: "kelvis.rodrigues@gmail.com",
    contas: [
      {
        numero: 89,
        saldo: 100,
        movimentar,
      },
      {
        numero: 987,
        saldo: 200,
        movimentar,
      },
    ],
  },
  {
    nome: "Gabriel",
    email: "gabriel.rodrigues@gmail.com",
    contas: [
      {
        numero: 321,
        saldo: 100,
        movimentar,
      },
      {
        numero: 654,
        saldo: 200,
        movimentar,
      },
    ],
  },
];
