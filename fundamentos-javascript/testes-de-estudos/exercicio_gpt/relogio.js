/// Funcao relogio com Regular Function 
     setInterval(tempo, 1000);
     function tempo(){
          const time = new Date()
          const timeString = time.toLocaleTimeString();
          console.log(timeString)
     }
/// Funcao relogio com Arrow Fucntion 
     const tempo = () => {
          const time = new Date()
          const timeString = time.toLocaleTimeString();
          console.log(timeString)
     }
     setInterval(tempo, 1000);
