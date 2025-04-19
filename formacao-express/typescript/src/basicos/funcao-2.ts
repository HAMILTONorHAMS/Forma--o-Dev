///Tipagem explicita -> Definir o tipo dos parametros e o tipo da funcao

function somar(a: number, b: number): number {
  return a + b;
}

const y: number = 7;

console.log(somar(1, 2));
console.log(somar(2, 5));
console.log(somar(10, 2));
console.log(somar(20, 2));
console.log(somar(y, 2));
