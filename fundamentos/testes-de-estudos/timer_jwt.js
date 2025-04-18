/// Compara a data ontem e hoje e da a diferenca em milisegundos
const tempo = () => {
     const agora = Math.floor(Date.now() / 1000);
     const segundosJWT = 1737635058; 
     const tempoRestante = segundosJWT - agora
   

     if (tempoRestante > 0) {
          const segundos = tempoRestante % 60;
          const minutos = Math.floor((tempoRestante / 60) % 60);
          const horas = Math.floor(tempoRestante / 3600);
          if(horas <= 0){
               console.log(`Faltam ${minutos} minutos e ${segundos} segundos para o token acabar !!`)
          }else if(minutos <= 0){
               console.log(`Faltam ${segundos} segundos para o token acabar !!`)
          }else if(horas> 0){
               console.log(`Faltam ${horas} horas, ${minutos} minutos e ${segundos} segundos para o token acabar !!`)
          }
          if(tempoRestante === 10) {
               /// local para a fn para renovar token
               console.log(`Precisa de um novo token`)
          }
          setTimeout(tempo, 1000)
     }else{
          console.log(`Token Expirado`)
     }
};
tempo()