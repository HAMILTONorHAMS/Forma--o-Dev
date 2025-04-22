export interface ContaCorrente {
  numero: number;
  saldo: number;
  movimentar: (valor: number) => void;
}
