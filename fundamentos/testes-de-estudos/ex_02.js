/// Ex-02-Cria uma lista de pessoas, que contenha nome, sobrenome e ano de nascimento. Criar uma funcao que adiciona a pessoa na lista vazia;
const pessoas = []

const pessoa01 = {
     nome: "Hamilton",
     sobrenome: "Rodrigues",
     anoNasc: 1999
}

const pessoa02 = {
     nome: "Kevlis",
     sobrenome: "Rodrigues",
     anoNasc: 1995
}
const adicionarPessoa = (pessoa) => {
     if (pessoa == null) {
          console.log("Uma das pesssoas não possui valor")
     } else {
          pessoas.push(pessoa)
     }
}
adicionarPessoa(pessoa01)
adicionarPessoa(pessoa02)
adicionarPessoa()
console.log(pessoas)