///Conte as ocorências das palavras em um texto e exiba todas ass palavras com mais de 6 ocorrências ordenasdas em ordem decrescente
///Dicas: Quebras textos em pedaços menores

const texto = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga pariatur, quod vel quas est nulla, vitae quae facilis iste velit incidunt natus eum magnam. Praesentium saepe ab excepturi eum! 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum facilis nisi in velit quae explicabo deserunt ipsum libero aliquam molestiae amet repellendus, voluptatum reprehenderit rerum provident ipsa, corrupti numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minima esse architecto excepturi, dolorem, assumenda debitis labore quidem non neque quae omnis quas molestias est optio, ut sunt quia dignissimos!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime vero at ipsa facilis illo architecto eius itaque ducimus praesentium quo, magnam in culpa sint dignissimos inventore non ex expedita? Quam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem adipisci, voluptates illo ab sunt dolores numquam magni blanditiis deleniti facilis in ipsa nulla illum et cum! Fuga, cum error.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas facere, officiis quas laboriosam odio amet corporis a cum dolore. Aperiam in cupiditate facilis ratione explicabo ea hic necessitatibus ab maiores!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsum omnis atque numquam, nisi necessitatibus voluptatum id provident impedit sed architecto accusantium quis, minima libero officia autem, modi ut distinctio!`


let paragrafos = texto.split("\n")
let frases = []

for (paragrafo of paragrafos) {
     let frasesParagrafo = paragrafo.split(".")
     frases.push(...frasesParagrafo)
}
let palavras = [ ]

for (frase of frases){
     let fraseSemVirgula = frase.replace(",","")
     let palavrasFrases = fraseSemVirgula.split(" ")
     palavras.push(...palavrasFrases)
}

let palavrasContagem = {}

for ( palavra of palavras) {
     if( palavrasContagem[palavra]){
          palavrasContagem[palavra] += 1
     }else{
          palavrasContagem[palavra] = 1
     }
}
let palavrascontagemArray = Object.entries(palavrasContagem)
let palavrasMais6 = []

for (parChave of palavrascontagemArray){
     if(parChave[1] >= 6 && parChave[0] !="") {
          palavrasMais6.push(parChave[0])
     }
}
function ordenacao (str1, str2){
     if(str1 > str2){
          return -1
     }else if(str2 > str1) {
          return 1
     }else{
          return 0
     }
}     
palavrasMais6.sort(ordenacao)

console.log(palavrasMais6)

