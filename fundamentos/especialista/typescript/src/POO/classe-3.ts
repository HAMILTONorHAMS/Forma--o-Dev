/// ### Classe Simples ###

// Padronização da classe começa com letra maiuscula. Posso inicializar o atributo dentro da classe com algum valor fixo ou undefined e adicionar o valor posteriormente. Caso não setta qual o scopo do atributo, ele vem público de natureza

//O atributo iniciou undefined
class Curso {
  nome: string | undefined;
}

const c1 = new Curso();
//Definiu o valor do nome aqui
c1.nome = "Iniciando no Typescript";
console.log(c1);

///Atributo readonly -> os dados não pode ser mudados, sendo um atributo imutável, não pode ser alterado.

class CursoPivado {
  //com readonly, ão possível alterar o valor do 'id', não podendo ser modificado
  readonly id: number;

  public nome: string | undefined;

  ////Inicializando o atributo privado do objeto e passa o id do parametro do construtor
  constructor(id: number) {
    this.id = id;
    if (id < 1) throw new Error("id invalido");
  }
}

///O id tem que ser passado como parametro na hora de criar um novo objeto apartir da classe
const cp = new CursoPivado(123);

c1.nome = "iniciando curso de Readonly";
console.log(cp.id);
console.log(cp.nome);

export {};
