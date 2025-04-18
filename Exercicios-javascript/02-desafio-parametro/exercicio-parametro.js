///Escreva uma função que recebe um objeto como primeiro parâmetro e, como o segundo parâmetro, o nome de uma propriedade. Caso a propriedade não exista no primeiro parâmetro, retorne o objeto original. Caso a propriedade exista, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.
///Dicas: Quando for fazer a passagem de parâmetro em string / quando não existe a propriedade do objeto, o valor dele é undefined.



function removerAtributo(objeto, atributo){
     if(objeto[atributo]){
          let objetoCopia = {...objeto}
          delete objetoCopia[atributo]
          return objetoCopia
     }else{
          return objeto
     }
}

const pessoa = { nome: "Hamilton", idade: 25}

const pessoaAtualizada = removerAtributo(pessoa, "idade")
console.log(pessoa);
console.log(pessoaAtualizada);