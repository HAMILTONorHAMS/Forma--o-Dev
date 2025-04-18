/// Passando uma fn com parametro e recebe uma isntrucao de fn tambem
// Comportamento da constante LET, reatribuindo valor 

// const executar = (fn) => fn()

// const bomDia = () => "Bom dia!!!"
// const boaTarde = () => "Boa Tarde !"

// let resultado = executar(bomDia)
// console.log(resultado)

// resultado = executar(boaTarde)
// console.log(resultado)

const executa = (fn) => fn()

const boaSemana = () => 'Boa semanaaaa !!!'
const alinhado = () => 'Estamos alinhados'

let resultado = executa(boaSemana)
console.log(resultado);


resultado = executa(alinhado); // NÃO COLOCA A PALAVRA LET, pois ela ja foi instanciada, ou seja, só reatribui o valor a constante.
console.log(resultado)
