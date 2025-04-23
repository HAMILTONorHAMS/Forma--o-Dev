////Por inferência, a variável pega o tipo string, já que foi inicializada com strings. Array homogênio
let habilidade = ["Cozinhar", "Praticar ESportes"];
console.log(habilidade[0]);
console.log(typeof habilidade);

///De forma explcita tipando como um array de string :string[]
let hobbies: string[] = ["Cozinhar", "Praticar ESportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

///Para trabalhar com um array com mais de um tipo(array heterogênio). Esse array seria do tipo: string | number, já que foi inicializada com os dois tipos de valores
let coisa = ["ola coisinha", "tudo bem ?", 123];
console.log("O que vem da variável let coisa", coisa);

///Definindo uma sequência no array. Sendo assim, não podemos mudar a sequência dos valores, sem mudar a sequência dos TIPOS.
let endereco: [string, number] = ["Rua A", 99];
endereco = ["Rua b", 80];
console.log("O que vem da variável let endereco", endereco);
