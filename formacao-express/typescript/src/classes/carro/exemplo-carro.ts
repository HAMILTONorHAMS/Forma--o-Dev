import { Carro } from "./carro";

let civic = new Carro();
civic.marca = "Honda";
civic.acelerar();

console.log(civic);

//Pode settar uma nova velocidade
// civic.setVelocidadeAtual(560);

//imprime o novo valor settado
// console.log(civic.getVelocidadeAtual());

//Imprime a velocidade atual como se fosse atributo e não um método
// console.log(civic.velocidadeAtual);

//Usando o set para atribnuit um novo valor ao atributo
civic.velocidadeAtual = 160;

console.log(typeof civic);

///Imprimindo a velocidade settada, alterando o atributo do objeto
console.log(civic.velocidadeAtual);
