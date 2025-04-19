import { Produto } from "./produto";

export interface Carrinho {
  produto: Produto;
  quantidade: number;
}
