/// Função callback presente no método ".map" / ".filter" / ".find" / ".foreach" -> Explicação do que é recebido como parâmetro.

// const funcaoDeCallBackQueRecebeItemDeItereacao = (item, indice, array) => {
//   console.log("item", item);
//   console.log("indice", indice);
//   console.log("array", array);
// };

import { clientes } from "./interfaces-mock/clintes.mock";

function movimentarConta(numConta: number, valor: number) {
  const conta = clientes
    .map((cli) => {
      return cli.contas.find((cc) => cc.numero === numConta);
    })
    .filter((c) => c)[0];
  conta?.movimentar(valor);
  console.log(conta);
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
movimentarConta(123, -500);
console.log(`O saldo da conta é de R$ ${consultarSaldo(123)}`);
