/// Não importa muito o nome do parametro, desde que seja do mesmo tipo. Assim, ela pode ser atribuida em uma variavel.
/// Esse tipo, pode ser usado para ser atribuido em várias variáveis
type Operacao = (a: number, b: number) => number;

let operacao: Operacao;

function somar(n1: number, n2: number): number {
  return n1 + n2;
}
function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}

operacao = somar;
console.log(operacao(5, 5));

operacao = multiplicar;
console.log(operacao(5, 5));
