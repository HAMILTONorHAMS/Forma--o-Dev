export type ContaCorrente = {
  numero: number;
  saldo: number;
  movimentar: (valor: number) => void;
};

export type Cliente = {
  nome: string;
  emaiil: string;
  contas: ContaCorrente[];
};

function movimentar(this: ContaCorrente, valor: number) {
  this.saldo += valor;
}

export const clientes: Cliente[] = [
  {
    nome: "Hamitlon",
    emaiil: "hamitlon@gmail.com",
    contas: [
      {
        numero: 123,
        saldo: 100,
        movimentar,
      },
    ],
  },
  {
    nome: "Joao",
    emaiil: "joao@gmail.com",
    contas: [
      {
        numero: 456,
        saldo: 200,
        movimentar,
      },
    ],
  },
];
function movimentarConta(numConta: number, valor: number) {
  const conta = clientes
    .map((cli) => {
      return cli.contas.find((cc) => cc.numero === numConta);
    })
    .filter((c) => c)[0];
  conta?.movimentar(valor);
}
function consultarSaldo(numConta: number): number | null {
  const conta = clientes
    .map((cli) => {
      return cli.contas.find((cc) => cc.numero === numConta);
    })
    .filter((c) => c)[0];
  return conta?.saldo ?? null;
}
movimentarConta(123, 1000);
console.log(consultarSaldo(123));
