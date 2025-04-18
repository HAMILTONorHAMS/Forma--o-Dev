let alunos = [
     {
       nome: 'Hamilton',
       nota: 7,
       status: 'aprovado'   
     },
     {
       nome: 'Kelvis',
       nota: 9,
       status: 'aprovado'   
     },
     {
       nome: 'Pafuncio',
       nota: 5.5,
       status: 'pendente '
     },
     {
       nome: 'Bololo',
       nota: 4,
       status: 'reprovado'   
     },
]

const adicionarAluno = aluno => alunos.push(aluno);

// const removerAluno = aluno => alunos.slice(aluno);

const Aluno1 = {
     nome: 'novato',
     nota: 2,
     status: 'reprovado'
}
adicionarAluno(Aluno1)
// console.log(alunos);


// alunos.forEach((aluno, index) => console.log(aluno, index))


// const alunoMap = alunos.map((aluno, index) => `Aluno ${aluno.nome} e index ${index}`);
// const alunoMap = alunos.map((aluno) => {
//      return {
//           nome: aluno.nome,
//           nota: aluno.nota
//      }
// });
// const alunoMap = alunos.map((aluno) => ({
//      nome: aluno.nome,
//      nota: aluno.nota
// }));
const alunoMap = alunos.map(({ nome, nota }) => ({ nome, nota }));

// const devolverParcial = ({ nome, nota }) => ({ nome, nota })



function devolverParcial({nome, nota}){
    return {
     name: nome, 
     classification: nota
    }
}
function devolverParcial2({nome, nota}){
    return {
     nome: nome, 
     nota: nota
    }
}
function devolverParcial3({nome, nota}){
    return {
      nome, 
      nota
    }
}
function devolverParcial4({nome, nota}){
    return {
      name: nome, 
      nota
    }
}
const devolverParcia5 = ({nome, nota}) => ({
      nome, 
      nota
})

const alunoMap2 = alunos.map(devolverParcia5);
console.log(alunoMap2) 
