/// Ex-01-Cria uma lista de pessoas, que contenha nome, sobrenome e ano de nascimento. Essa lista, vai ser inicializada de modo vazio, adicione 2 objetos de pessoa, sem utilizar funçao, apenas, com funcao de manipulacao de array. 

// const pessoas = [ ]

// const pessoa01 = {
//      nome:"Hamilton",
//      sobrenome: "Rodrigues",
//      anoNasc: 1999
// }

// const pessoa02 = {
//      nome:"Kevlis",
//      sobrenome: "Rodrigues",
//      anoNasc: 1995
// }
// const res1 = pessoas.push(pessoa01)
// const res2 = pessoas.push(pessoa02)

// console.log(pessoas)
const pessoas = [ ]

const pessoa01 = {
     nome:"Hamilton",
     sobrenome: "Rodrigues",
     anoNasc: 1999
}

const pessoa02 = {
     nome:"Kevlis",
     sobrenome: "Rodrigues",
     anoNasc: 1995
}
let resultado = pessoas.push(pessoa01)
resultado = pessoas.push(pessoa02)

console.log(pessoas)
