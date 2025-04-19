export class Carro {
  public marca!: string;
  private _velocidadeAtual: number = 0;

  // getters e setters
  //   getVelocidadeAtual() {
  //     return this._velocidadeAtual;
  //   }
  //   setVelocidadeAtual(novaVelocidade: number) {
  //     this._velocidadeAtual = novaVelocidade;
  //   }

  ///Utilizando o get e set separado, usa-se o get como um valor de atributo e não um método.
  ///Escondendo esse método dentro do objeto, apontando para o atributo interno do objeto;
  get velocidadeAtual() {
    return this._velocidadeAtual;
  }

  set velocidadeAtual(novaVelocidade: number) {
    if (novaVelocidade >= 220) return;
    this._velocidadeAtual = novaVelocidade;
  }

  acelerar(): void {
    this._velocidadeAtual += 5;
  }
}

/// Se eu eu colocar o underline na frente do atributo (_atributo) qyuer dizer que ele é um atributo interno da função
// Ao utilizar getters e setters para cessar um atributo privado
