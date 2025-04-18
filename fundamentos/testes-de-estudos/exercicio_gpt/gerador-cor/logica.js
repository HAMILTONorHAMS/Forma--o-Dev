const colors = ["red" , "black" , "blue" , "green" , "brown"]


function gerarNumber() {
  const aleatorio = Math.floor(Math.random()*5)
  return aleatorio
  }
gerarNumber()
function mudarCor() {
  const indice = gerarNumber()

  document.body.style.backgroundColor = colors[indice]

  /// Cores ramdomicas
//   document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}}`
}

//// Cores ramdomicas com setInterval 
function mudarCor() {
     setInterval(function(){
         document.body.style.backgroundColor = 
         `#${Math.floor(Math.random()*16777215).toString(16)}`
     }, 500)
   
   }

//// Cores ramdomicas com setInterval 

function mudarCor(){
  intervalo = setInterval(function(){
    document.body.style.backgroundColor = 
    `#${Math.floor(Math.random()*16777215).toString(16)}`
  }, 500)
}
function pararCor(){
  clearInterval(intervalo)
}
function deixarBranco(){
  clearInterval(intervalo)
  document.body.style.backgroundColor = "white"
}1