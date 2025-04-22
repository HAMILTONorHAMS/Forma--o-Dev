/// Cosnt com valores padronizados dentro dos parametros da arrow function

// const somar = (a = 0, b = 0 ) => a + b
// console.log(somar(10, 10))


const somaValoresPadroes = ( a = 10, b = 20) => a + b 
console.log(somaValoresPadroes())/// Se nao passar nada, ela pega os valores que foram passados no parametro 
console.log(somaValoresPadroes(5,5))/// Se passar um valor, ele sobrescreve o valor que estava atribuido no parametro

//não usa a palavra return, pois o return é implicito