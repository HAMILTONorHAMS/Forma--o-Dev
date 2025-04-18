//// Varias fn e uma fn que agrupa todas elas 

// // fn -> 3 * 7
// // fn -> 3 + 7
// // fn -> 3 - 7
// // calcular (3)(7)(fn)

// const multiplicar = (a = 0, b =0) => a * b
//      // console.log(multiplicar(3, 7))


// const somar = (a = 0, b = 0 ) => a + b
//      // console.log(somar(3, 7));

// const subtrair = (a = 0, b = 0) => a - b
//      // console.log(subtrair(100, 10))

// const dividir = (a, b) => a / b 
//      // console.log(dividir(100, 10))


// const calcular = a => b => fn => fn(a, b)

// console.log(calcular(10)(8)(multiplicar))
// console.log(calcular(10)(8)(somar))
// console.log(calcular(10)(8)(subtrair))
// console.log(calcular(10)(8)(dividir))


const soma = ( a = 10, b = 10) =>a + b
console.log(`A soma de a + b, seria: ${soma( 5, 5 )}`);

const sub = ( a = 10, b = 10) =>a - b
console.log(`A subtração de a - b, seria: ${sub( 100, 50 )}`);

const multi = ( a = 10, b = 10) =>a * b
console.log(`A multiplicação de a * b, seria: ${multi( 10, 10 )}`);

const div = ( a = 10, b = 10) =>a / b
console.log(`A divisão de a / b, seria: ${div( 100, 10 )}`);

const calcular = a => b => fn => fn( a, b )
console.log(`A soma do a + b, seria: ${calcular(10)(10)(soma)}`)
console.log(calcular(10)(10)(sub))
console.log(calcular(10)(10)(multi))
console.log(calcular(10)(10)(div))