///Crie uma função que recebe um objeto que representa uma forma geométrica. O objeto vai ter o tipo da forma e você deve calcular a area da forma de acordo com o seu tipo. Os tipos disponíveis são: circulo, triângulo e retângulo.


//Exemplo de constante 
const circulo = { tipo: "circulo", raio: 4.5 } //area = pi * (area * area)
const triangulo = { tipo: "triangulo", base: 4.5, altura: 7.8 } // area base*altura / 2 
const retangulo = { tipo: "retangulo", base: 8.2, altura: 8 } //area = base * altura


function calcularArea(forma) {
     let area
     switch (forma.tipo) {
          case "circulo":
               if(forma.raio){
                    area = Math.PI * (forma.raio**2)
               } else {
                    area = 0
               }
               console.log("tenho um circulo")
               break;
          case "triangulo":
               if(forma.base && forma.altura){
                    area = (forma.base * forma.altura) / 2 
               }else {
                    area = 0
               }
               console.log("tenho um triangulo")
               break;
          case "retangulo":
               if(forma.base && forma.altura){
                    area = forma.base * forma.altura
               }else {
                    area = 0
               }
               console.log("tenho um retangulo")
               break;
     }
     return area
}
console.log(calcularArea(circulo))
console.log(calcularArea(triangulo))
console.log(calcularArea(retangulo))