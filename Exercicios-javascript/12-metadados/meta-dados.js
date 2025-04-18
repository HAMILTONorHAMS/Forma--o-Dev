//Escreva uma função qeu recebe um objeto e retorno esse objeto com uma chave a mais que contèm o metadados do objeto. Esses metadados serão as quantidades de atributosdo tipo string, number, booleane function que o objeto inical possui. Caso o objeto passado como parâmetro seja vazio, o retorno deve ser vazio



function metadados(objeto){
     let metadados = {
          qtdBollean: 0,
          qtdString: 0,
          qtdNumber: 0,
          qtdFunction:0
     }
     let valoresObjeto = Object.values(objeto)
     for (valor of valoresObjeto){
          switch(typeof valor){
               case "boolean":
                    metadados.qtdBollean +=1
                    break
               case "number":
                    metadados.qtdNumber ++
                    break
               case "string":
                    metadados.qtdString ++
                    break
               case "function":
                    metadados.qtdFunction ++
                    break
          }
     }
     objeto.metadados = metadados
     
     return objeto
}

const carro = {
     modelo: "Gol",
     marca: "Volkswagen",
     cor: "verde",
     ano :2007,
     qtdePortas: 4,
     vidroEletricos: true,
     seguro: true,
     acelerar: () => console.log("Indo mais rápido..."),
     frear: () => console.log("Parando..."),
     abrirVidros: () => console.log("Abrindo vidros..",)
};

console.log(metadados(carro))