
//Tem que fazer 3 entregas
/// a) Diretoria: Nome e médias dos alunos 
/// b) Aluno: Nome do aluno -> Aprovado(>7)/ Reprovado(<5)/ Recuperação(5.1 > nota < 6.9)
/// C) Pais: Aprovado/Reprovado/Recuperação

//Dicas: Aninha estrutura de controles e estruturas de repetição / Gerar um novo objeto para entregas da professora/ Utilizar funções, utilizandos funções de outras funções.

function entregaPraDiretoria(aluno) {
     let objtRetorno = {
          nome: aluno.nome,
          materias: []
     }
     for (materia of aluno.materias) {
          let acc = 0;
          for (nota of materia.notas) {
               acc = acc + nota
          }
          objtRetorno.materias.push({
               nome: materia.nome,
               media: acc / 4
          })
     }
     return objtRetorno
}

function entregaProAluno(aluno) {
     let alunoComMedia = entregaPraDiretoria(aluno)
     let objetoRetorno = {
          nome: alunoComMedia.nome,
          materias: []
     }
     for (materia of alunoComMedia.materias) {
          let conceito
          if (materia.media >= 7) {
               conceito = "Aprovado"
          } else if (materia.media < 7 && materia.media >= 5) {
               conceito = "Recuperação"
          } else {
               conceito = "Reprovado"
          }
          objetoRetorno.materias.push({
               nome: materia.nome,
               conceito: conceito
          })
     }
     return objetoRetorno
}

function entregaProsPais(aluno) {
     let alunoConceito = entregaProAluno(aluno);
     let conceitos = [];
     for (materia of alunoConceito.materias) {
          conceitos.push(materia.conceito)
     }
     if (conceitos.includes("Reprovado")) {
          return "Reprovado"
     } else if (!conceitos.includes("Reprovado") && !conceitos.includes("Recuperação")) {
          return "Aprovado"
     } else {
          let indiceAprovado = conceitos.indexOf("Aprovado")
          let ultimoIndiceAprovado = conceitos.lastIndexOf("Aprovado")
          if (indiceAprovado != indiceAprovado){
               return "Recuperação"
          }else{
               return "Reprovado"
          }
     }
}

const hamilton = {
     nome: "Hamilton",
     materias: [
          {
               nome: "Português",
               notas: [7.4, 8, 6, 5]
          },
          {
               nome: "Matemática",
               notas: [7.4, 8, 6, 7.2]
          },
          {
               nome: "Ciências",
               notas: [7.4, 9, 10, 5]
          },
          {
               nome: "Estudos Sociais",
               notas: [6, 5, 7, 5]
          },
     ]
}
console.log(entregaPraDiretoria(hamilton));
console.log(entregaProAluno(hamilton));
console.log(entregaProsPais(hamilton));