export interface Produto {
  id: number;
  nome: string;
  descricao?: string;
  img?: string;
  categoria?: string;
  estoque?: number;
  preco: number;
  marca: string;
  ativo: boolean;
}
