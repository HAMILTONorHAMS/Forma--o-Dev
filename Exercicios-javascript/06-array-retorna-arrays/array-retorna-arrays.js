// Desenvolva uma função que recebe como parâmetro um objeto e retorne uma array de arrays, onde cada elemento do array é outro array contendo o par chave/valor de um atributo do objeto 
///Dica: O método Object.entries() retorna uma array dos próprios pares [key, value] enumeráveis de um dado objeto

const pessoa = { nome: "Hamilton", idade: 25, id: 1}
const arrayFinal = retornaArray(pessoa)

function retornaArray(objeto){
     let resultado = Object.entries(objeto)
     return resultado     
}
console.log(arrayFinal)