// import { Carrinho } from "./interfaces/carrinho";
// import { produtoMock } from "./interfaces/mock-produto";

import { Carrinho } from "./interfaces/carrinho";
import { carrinho, produtoMock } from "./interfaces/mock-produto-e-carrinho";

// //Versão #1
let totalDosProdutos = 0;
for (let produto of produtoMock) {
  totalDosProdutos += produto.preco;
}
console.log(`O total da soma dos produto é: R$ ${totalDosProdutos}.`);

// /// #Versão2

const totaisPoritem = carrinho.map((item) => {
  return item.produto.preco * item.quantidade;
});
let totalDoCarrinho = 0;

for (let itemTotal of totaisPoritem) {
  totalDoCarrinho += itemTotal;
}

console.log(`O total do carrinho é R$ ${totalDoCarrinho}`);
