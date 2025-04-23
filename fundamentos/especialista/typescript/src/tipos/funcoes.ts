export function saudacao(): string {
  const manha: boolean = new Date().getHours() < 12;
  console.log(manha);
  return manha ? "Bom dia" : "Boa tarde";
}

export function ola(nome: string): string {
  return `Olá ${nome}! Passar bem!`;
}

export function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}
export function multiplicarPerigosa(n1: any, n2: any): number {
  return n1 * n2;
}

export function imprimirNoConsole(): void {
  console.log("Exemplo de funcao");
}

imprimirNoConsole();
