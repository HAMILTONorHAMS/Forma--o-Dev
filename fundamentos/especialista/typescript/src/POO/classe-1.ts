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

///Atributo privado -> Dado fica restrito dentro do bloco de código, não pode acessar e/ou alterar o valor do "id"
///Para pode acessar o objeto privado, utiliza o método getter/get
///Para alterar o atributo privado, utilzia o método setter/set

class CursoPivado {
  private _id: number | undefined;
  public nome: string | undefined;

  ///getter
  get id() {
    return this._id;
  }
  ///setter
  set id(id: number | undefined) {
    if ((id ?? 0) > 0) {
      this._id = id;
    }
  }
}

const cp = new CursoPivado();
cp.id = 123;
c1.nome = "iniciando curso de Atributo privado";
console.log(cp.id);
console.log(cp.nome);
