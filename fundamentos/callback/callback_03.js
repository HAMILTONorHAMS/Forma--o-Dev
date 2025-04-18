/// Callback de chamada de um arquivo para outro 

const path = require('path') ///importante um funcionalidade do NODE que mostra o caminho do arquivo
const fs = require('fs') //chama a fn que vai ler o conteudo do arquivo, ela espera uma fn de callback 

const caminho = path.join(__dirname, '../callback/dados/aprovado.txt')


fs.readFile( caminho, function( erro, conteudo ){ /// primeiro parametro seria o erro/segundo parametro "buffer", seria o conteudo
     console.log(erro)
     console.log(conteudo.toString()) // utiliza o método toString(), para poder ler o conteudo do arquivo e transformar ele em string
})

fs.readFile( caminho, lerArquivo = ( erro, conteudo ) => { 
     if (erro) return /// Aqui trata o erro, ou seja, utiliza o if, caso tenha erro, só executa o erro, caso não, executa o console log com o metodo para transformar em string.
     console.log(conteudo.toString()) 
})

console.log(__dirname + '/callback/dados/aprovado.txt') /// Variável onde passa o caminho do arquivo atual


fs.readFile(caminho, lerArquivo) /// Executa primeiro, pois é uma fn assincrona, que ele processa em paralelo 
console.log('fim !!!')


const conteudo = fs.readFileSync(caminho) /// espera ate a leitura do arquivo terminar, para poder lancar 
console.log(conteudo.toString())
console.log("fimmmm 2")

