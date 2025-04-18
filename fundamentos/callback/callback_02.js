//// Chama a fn varias vezes durante um intervalo de tempo 

// Pooling  -> A cada intervalo buscar a informacao na API

/// Ela executa um callback de forma assincrona, ou seja.
// setInterval(function(){
//      console.log('A cada 3 segundos')
// }, 3000)///o segundo parametro da fn setInterval é a quantidades de milisegundos que vai ter um intervalo entre uma executacao e outra 

// const intervalo = setInterval(() => console.log('a cada 2 segundos'), 2000)
// /// usando Arrow Function não coloca a palavra CONST, não tem as chaves também {}, não possui RETURN.
// setTimeout(() => {
//      clearInterval(intervalo)
// }, 5000);

let pomodoro = 5
const intervalo = setInterval(() => {     
     console.log(pomodoro)
     if (pomodoro === 0 ) {
          // clearInterval(intervalo)
     }
     pomodoro--;
}, 1000)

