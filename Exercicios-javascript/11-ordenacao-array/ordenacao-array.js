function ordena(arr, propriedade ){
     const comparacao = (a, b) => {
          if(a[propriedade] > b[propriedade]){
               return -1
          }else if(a[propriedade] < b[propriedade]) {
               return 1
          }else{
               return 0
          }
     }
     
     return arr.sort(comparacao)
}


const pessoas = [ 
     { nome: "Hamilton", idade: 25},
     { nome: "Kelvis", idade: 29},
     { nome: "Gabriel", idade: 18},
]

console.log(ordena(pessoas, "idade"))
console.log(ordena(pessoas, "nome"))

 