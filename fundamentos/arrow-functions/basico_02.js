//Function declaration -> Não retorna nada, pois não possui o return
function bomDia(){
     console.log("Bom dia !!!")
}
bomDia();

//Function expression -> Não retorna nada, pois não possui o return 
const boaTarde = function (){
     console.log("Boa Tarde !!")
}
boaTarde();

// Passar uma função como parametro para outra função
function executar (x){
     x()
}
executar(bomDia)// Quando passa a função bomDia dentro do executar, ele atribui o valor da function bomDia na saida
//executar(bomDia()) -> Da erro, pois o resultado do bomDia da undefined

//Teste para saber se é uma function 
function executar (x){
     if(typeof x === 'fucntion'){
          x()
     }  
}//Só vai ser executado se for uma function 
executar(1)//não executa
executar("bom dia")// não executa 
executar(bomDia)
executar(boaTarde)


//rerorna uma funcao a partir de outra funcao 
function potencia(exp){
     return function (base){
          return Math.pow(base, exp)
     }
}
const aoQuadrados = potencia(2)
console.log(aoQuadrados(4))
console.log(aoQuadrados(5))

const aoCubo = potencia(3)
console.log(aoCubo(4))
console.log(aoCubo(5))


const resultado = potencia(3)(10)
console.log(resultado)