///Conjunto de valore especificos. Vem como padrão o valor inteiro da lista (Começando por "0"), mas pode setar uma string para saida do valor.

enum DiaSemana {
     DOMINGO = "Domingo",
     SEGUNDA = "Segunda-Feira",
     TERCA = "Terça-Feira",
     QUARTA = "Quarta-feira",
     QUINTA = "Quinta-Feira",
     SEXTA = "Sexta-Feira",
     SABADO = "Sabado"
}



let diaSemana = DiaSemana.DOMINGO;
console.log(diaSemana)

diaSemana = DiaSemana.QUARTA
console.log(diaSemana)

diaSemana = DiaSemana.SABADO;
console.log(diaSemana)
