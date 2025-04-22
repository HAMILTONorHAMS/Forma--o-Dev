const carrinho = [
     { nome: 'caneta', qtde: 10, preco: 3.50 },
     { nome: 'caderno', qtde: 4, preco: 27.10 },
     { nome: 'impressora', qtde: 1, preco: 649.50 },
     { nome: 'lapis', qtde: 3, preco: 5.82 },
     { nome: 'tesoura', qtde: 5, preco: 7.50 },
]
const apenasNome = produto => produto.nome
const calcularTotal = produto => produto.qtde * produto.preco

console.log(carrinho.map(apenasNome))
console.log(carrinho.map(calcularTotal))
