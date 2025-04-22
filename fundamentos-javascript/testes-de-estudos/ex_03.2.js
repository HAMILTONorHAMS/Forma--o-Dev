/// Ex-03-Criei uma lista vazia, use o método de adicionar pessoa, e criei uma fn para calcular a idade de uma pessoa. Preencher uma nova apropriedade de idade. Agora crie outra funcao que irá imprimir, n ome completo e a sua idade.
// const adicionar = pessoas.push(pessoa1, pessoa2, pessoa3)

const adiconarPessoa = (pessoa) => {
     pessoas.push(pessoa)
}
const calcularIdade = (anoNasc) => {
     const data = new Date
     const anoAtual = data.getFullYear()
     const idade = anoAtual - anoNasc

     return idade
}

const juntarNome = (pessoa) => {
     const fullName = `${pessoa.nome} ${pessoa.sobrenome}`
     return fullName
}

const fazerAniversario = (pessoa) => {
     const idadeAtualizada = pessoa.idade + 1
     return idadeAtualizada
}
const imprimirTela = (texto) => {
    console.log(texto)
}

const pessoas = []

const pessoa1 = {
     nome: "Hamilton",
     sobrenome: "Rodrigues",
     anoNasc: 1999
}

const pessoa2 = {
     nome: "Kelvis",
     sobrenome: "Rodrigues",
     anoNasc: 1995
}

const pessoa3 = {
     nome: "gordin",
     sobrenome: "bololo",
     anoNasc: 1990
}
adiconarPessoa(pessoa1)
adiconarPessoa(pessoa2)
adiconarPessoa(pessoa3)

for (let pessoa of pessoas) {
     const idade = calcularIdade(pessoa.anoNasc)
     pessoa.idade = idade

     // const aniversario = idade + 1
     // pessoa.aniversario = aniversario

     const fullName = juntarNome(pessoa)
     imprimirTela(`Fullname: ${fullName}. Has ${idade} years old.`)

}
imprimirTela(pessoas)
imprimirTela('aniversariante')
pessoas[2].idade = fazerAniversario(pessoas[2])
pessoas[2].idade = fazerAniversario(pessoas[2])
imprimirTela(pessoas[2])

