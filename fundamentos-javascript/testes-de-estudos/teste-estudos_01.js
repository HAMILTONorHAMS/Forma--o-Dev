//// Exemplos de objetos; Com Métodos, Status e Propriedades

const impressora = {
     marca: "epson",
     tipoImpressao: " pretoBranco",
     voltagem: "120v",
     semFio: true,
     imprimir: function(){
          console.log("Imprimindo...")
     },
     conectar: function(){
          console.log("conectando...")
     }
}

const aluno = {
     nome: "hamilton",
     idade: 25,
     peso: 70,
     altura: 1.83,
     estudar: function(){
          console.log('Estudando....')
     }
}

const cachorro = { 
     nome: "Laika",
     raca: "Pasto Alemao",
     peso: 25,
     status: "Saudável",
     latir: function(){
          console.log("Latindo")
     }
}

const car = {
     marca: "Fiat",
     tipoCombustivel: "Gasolina",
     moto: 2.0,
     portas: 2,
     status: "Ligado",
     Dirigir: function(){
          console.log("Dirigindo")
     }
}