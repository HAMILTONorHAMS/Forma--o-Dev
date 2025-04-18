///Crie uma função que recebe dois arrays como parâmetros e retorna um objeto. As chaves do objeto serão os elementos do primeiro  array passado como parâmetros e os valores, os elemntos do segundo array.


const array1 = ["nome:", "idade", "id"]
const array2 = ["hamilton", 25, 1]


 function retornaObjeto(chaves, valores){
     let objeto = {}
     for (let i=0; i < chaves.length ; i++){
        objeto[chaves[i]] = valores[i]
     }
     return objeto
 }

 const objeto = retornaObjeto(array1, array2)
 console.log(objeto)