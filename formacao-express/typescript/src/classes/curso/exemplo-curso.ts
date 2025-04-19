import { Aula } from "../aula/aulta-exemplo";
import { Curso } from "./curso";

const aulas: Aula[] = [
  new Aula("Introdução", "urlAula", 220),
  new Aula("Configuração", "urlAula", 1220),
  new Aula("Criando o projeto", "urlAula", 3220),
  new Aula("Primeiro componente", "urlAula", 4220),
];

const novoCurso = new Curso(
  "Angular é essencial",
  "Hamilton Rodrigues",
  "R$ 250,00",
  "Descriçao do objeto",
  aulas
);
console.log(novoCurso);
console.log(novoCurso.duracaoEmSegundos);
