const gritar = texto => texto.toUpperCase()
const enfatizar = texto => texto + '!!!!'
const exagerar = texto => texto.split('').join(' ')

const frases = ['Cuidado', 'Olha o carro']

const final = frases.map(gritar)
const final2 = frases.map(gritar).map(enfatizar)
const final3 = frases.map(gritar).map(enfatizar).map(exagerar)

console.log(final)
console.log(final2)
console.log(final3)