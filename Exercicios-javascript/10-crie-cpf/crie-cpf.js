///Crie um CPF válido


///PArt 1 - Gerar uma rray com os 9 primeiros números de forma aleatória

function digitosAleatorios(){
     let numeroAleatorio = []
     for (let i = 0; i < 9; i++){
          let numero = Math.random()*9
          numeroAleatorio.push(Math.trunc(numero))
     }
     return numeroAleatorio
}

function primeiroDigito(arr){
     let soma = 0;
     for (let i=0; i < 9; i++){
          soma += arr[i]*(10-i)
     }
     const resto = soma % 11
     const digitoVerificador = resto > 1 ? 11 - resto : 0
     return[ ... arr, digitoVerificador]
}

function segundoDigito(arr){  
     let soma = 1;
     for (let i=1; i < 10; i++){
          soma += arr[i]*(11-i)
     }
     const resto = soma % 11
     const digitoVerificador = resto > 1 ? 11 - resto : 0
     return[ ... arr, digitoVerificador]

}

const cpfAleatorio = digitosAleatorios();
const cpfPrimeiraVerificacao = primeiroDigito(cpfAleatorio);
const cpfSegundaVerificacao = segundoDigito(cpfAleatorio);
console.log(cpfSegundaVerificacao)