/// Trabalhando com 3 parametros 


/// Somar(3)(4)(5)

// const somar = (a) => {
//      return (b) => (c) => a + b + c 
// }

// console.log(somar(2) (4) (4))

const somando = (a) => {
     return (b) => (c) => a + b + c
}
console.log(somando(5)(10)(15));

// passando uma fn dentro de outra, atribuindo valores separadamente