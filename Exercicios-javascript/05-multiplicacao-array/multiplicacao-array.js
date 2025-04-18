//Dados dois arrays de números [a,b] e [d,e] crie uma função que faça a multiplicação do primeiro array com o segundo de maneira distributiva e imprima na tela, ou seja, (a*b), (a*e), (b*d) e (d*e). A função deve ser capaz de receber como parâmetros arrays de qualquer tamanho e não só co dois parâmetros.
///Dica: aninhamento de laços de repetição / 

const array1 = [1, 2, 3]
const array2 = [6, 5]

function multiplicaoArray(array1, array2){
     for ( let i=0; i<array1.length; i++){
          for(let j=0; j<array2.length; j++){
               console.log(`${array1[i]} * ${array2[j]} = ${array1[i]*array2[j]}`)
          } 
     }
}
multiplicaoArray(array1, array2)