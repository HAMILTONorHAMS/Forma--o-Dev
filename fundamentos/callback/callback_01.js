function bomDia() {
     console.log('Bom diaaaaaaaaa')
}

setTimeout(bomDia, 3000) /// Aqui passamos uma fn como parametro de uma outra fn
//esse setTimeout passa uma fn e o proximo paremetro seria o tempo que ele vai esperar para ele ser executado 

const boaSemana = () => console.log('Boa Semanaaaaaaaaaaaaaaaaaa !!!')
setTimeout(boaSemana, 2000)

