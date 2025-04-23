/// ### Tipos básicos de Variáveis
const nome: string = " Hamilton";
console.log(nome);

let estaChovendo: boolean;

///Preciso atribui um valor, por exemplo o boolean recebe: true or false. Sendo assim, o console.log('') não consegue acessar a informação, pois não foi passado um valor.
estaChovendo = true; // Agora atribuindo um valor a variável, agora o console.log(''), consegue acessar

console.log(estaChovendo);

///Se não tipasse como :number. Ele infere o tipo :number. Pois, ele ja entendeu que 2 é number.
const idade: number = 27;
console.log(idade);

///Usando any, aceita vários tipos de valores. MAS não é uma boa prática. E sempre pega o último valor que é passado
let variavel: any = 4;
variavel = "Texto";
variavel = false;
variavel = { nome: "Hamilton" };
console.log(variavel);

///Quando a variável não é declarada e ne inicializada e sem passar o tipo. Por inferência, ela acaba pegando o tipo :any.
let misterio;
misterio = "Texto";
misterio = false;
misterio = { nome: "Hamilton" };
console.log(misterio);
