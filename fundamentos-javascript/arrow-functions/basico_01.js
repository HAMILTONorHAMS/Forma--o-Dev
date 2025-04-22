const a = 4 ;
console.log(a);

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

//Function com parametros
function somar(a,b){
     return a + b
}
let resultado = somar( 3, 4 );
console.log(resultado)

//Function com parametros com valores fixos e opcionais 
function somar2(d = 11, c = 0){
     return c + d
}
let resultado2 = somar2(10, 30); ///Substitiu o valor que foi atribuido pelo parametro
console.log(resultado2)
