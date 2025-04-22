/// Function de soma 

// function soma (a,b) { 
//      return a + b
// }
// console.log(soma(10,10))

// const somaArrow = (a , b) => a + b;
// console.log(somaArrow(10, 10))


// Function com this para chamar nomes
const obj = {
     name: "Hamilton",
     showName: function(){
          console.log(this.name)
     },
objArrow: () =>{ console.log(this.name)}
}
obj.showName()
obj.objArrow()