/// Ex-03-Criei uma lista vazia, use o método de adicionar pessoa, e criei uma fn para calcular a idade de uma pessoa. Preencher uma nov apropriedade de idade. Agora crie outra funcao que irá imprimir, nome completo e a sua idade.

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
pessoas.push(pessoa01)
pessoas.push(pessoa02)


const calcularIdade = (anoNasc) => {
     const date = new Date();
     const currentYear = date.getFullYear() 
     const idade  = currentYear - anoNasc
     return idade
}
calcularIdade(pessoa01.anoNasc)

const nomeCompleto = (pessoa)  => {
     // let resultado = pessoa.nome +' '+ pessoa.sobrenome
     let resultado =  `${pessoa.sobrenome}, ${pessoa.nome}`
     return resultado
}
nomeCompleto(pessoa01)

// console.log(`Nome completo de: ${nomeCompleto(pessoa01)} com a idade de: ${calcularIdade(pessoa01.anoNasc)}`)
console.log(`Full Name: ${nomeCompleto(pessoa01)}. Has ${calcularIdade(pessoa01.anoNasc)} years old.`)
            