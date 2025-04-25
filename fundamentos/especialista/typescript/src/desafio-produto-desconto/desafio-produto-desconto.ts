///Minha resolução utilizando Interface

interface Produto {
  nome: string;
  preco: number;
  desconto: number;
  precoComdesconto: number;
}

function aplicarDesconto(preco: number, desconto: number): number {
  return preco - preco * desconto;
}

const produtos: Produto = {
  nome: "Notebook",
  preco: 100,
  desconto: 0.3,
  precoComdesconto: aplicarDesconto(100, 0.3),
};
console.log(produtos);

///Solução da Formação Dev utilizando type
type ProdutoTipo = {
  nome: string;
  preco: number;
  desconto: number;
  precoComDesconto: () => number;
};

let produto: ProdutoTipo = {
  nome: "Notebook",
  preco: 100,
  desconto: 0.3,
  precoComDesconto() {
    return this.preco * (1 - this.desconto);
  },
};
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);
console.log(produto.precoComDesconto());
console.log(produto);
