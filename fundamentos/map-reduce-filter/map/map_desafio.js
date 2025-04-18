const alunos = [{
     name: 'Harley Totaro',
     n1: 1.9,
     n2: 4.6,
     n3: 4.2,
     n4: 6.3
}, {
     name: 'Dannye Glede',
     n1: 7.9,
     n2: 1.2,
     n3: 3.9,
     n4: 5.7
}, {
     name: 'Regen Kynvin',
     n1: 7.7,
     n2: 8.7,
     n3: 2.3,
     n4: 7.2
}, {
     name: 'Frederich Dibson',
     n1: 6.3,
     n2: 6.4,
     n3: 6.8,
     n4: 7.9
}, {
     name: 'Corey Dinning',
     n1: 5.4,
     n2: 7.6,
     n3: 2.8,
     n4: 3.8
}, {
     name: 'Hetti Sennett',
     n1: 7.7,
     n2: 3.6,
     n3: 3.2,
     n4: 9.1
}]
// resultado esperado: { nome: 'nome', media: x.x}

function calcularMedia (aluno){
     return {
          nome: aluno.name,
          media: (aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4) / 4
     }
}
console.log(alunos.map(calcularMedia))
