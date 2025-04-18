///Crie uma função que recebe um objeto como parâmetro e retorna segundo objeto com as chaves e valores do primeiro objeto invertidas
//Dica: Primeira coisa é identificar as chaves e valores do objeto / 
function recebeObjeto(objeto) { 
     let objetoRetorno = {}
     let conteudoObjeto = Object.entries(objeto)
     for (par of conteudoObjeto ){
          objetoRetorno[par[1]] = par[0]
     }
     return objetoRetorno
}

const objeto = {nome: "hamilton", idade: '25', id: "1"}
const objetoinvertido = recebeObjeto(objeto)


console.log(objeto)
console.log(objetoinvertido)