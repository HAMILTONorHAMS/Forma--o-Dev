// Função que possui APENAS 1 parâmetro, pode retirar os parênteses, o return e as chaves

// const somar = a => b => c => a + b + c
// console.log(somar(10)(15)(15))

// const subtrair = (a , b) => a - b
// console.log(subtrair(10, 5))

// ///  Mesmo que não tenha nenhum parâmetro, não é possível remover os parênteses
// const bomDia = () => 'Bom dia !!!'
// console.log(bomDia())
     

const somando = a => b => c => a + b + c 
console.log(somando(10)(20)(30)) /// Aqui passamos 3 fn, uma com cada parametro, entao nao precisa de parentesees 

const menos = (a , b) => a - b 
console.log(menos( 100, 50 )) // Aqui são passado 1 fn com 2 parametros

const boaSemana = () => 'Boa Semanaaaaaa Carai' /// Aqui não tem parametro, mas é OBRIGADO a passar o parenteses
console.log(boaSemana())