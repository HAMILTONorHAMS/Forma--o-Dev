// export class Curso {
//   nome: string;

import { Aula } from "../aula/aulta-exemplo";

//   constructor(nome: string) {
//     this.nome = nome;
//   }
// }

///Fazendo a mesma coisa de cima e criando um novo atributo usando o construtor
export class Curso {
  constructor(
    public nome: string,
    public auto: string,
    readonly valor: string = "",
    private descricao: string = "",
    readonly aulas: Aula[] = []
  ) {}

  //Criando um comportamento dentro do da classe do objeto, esse comportamento vira um atributo posterirmente
  get duracaoEmSegundos() {
    const duracoes = this.aulas.map((a) => a.duracaoEmSegundos);
    let total = 0;
    for (let duracao of duracoes) {
      total += duracao;
    }
    return total;
  }
}

///Não pode settar nova descrição, já que foi utilizado "readonly"
