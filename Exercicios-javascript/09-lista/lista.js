////Transforma o conteúdo em uma array de objetos / Crie uma função que irá retornar todos os estados de uma determinada região / Crie uma função que retorna o nome do estado de acorod com a sigla

const estados = `SIGLA; ESTADO; CAPITAL; REGIÃO;
AC; ACRE; RIO BRANCO; NORTE;
AL; ALAGOAS; MACEIÓ; NORDESTE;
AP; AMAPÁ; MACAPÁ; NORTE;
AM; AMAZONAS; MANAUS; NORTE;
BA; BAHIA; SALVADOR; NORDESTE;
CE; CEARÁ; FORTALEZA; NORDESTE;
DF; DISTRITO FEDERAL; BRASÍLIA; CENTRO OESTE;
ES; ESPÍRITO SANTO; VITÓRIA; SUDESTE;
GO; GOIÁS; GOIÂNIA; CENTRO OESTE;
MA; MARANHÃO; SÃO LUÍS; NORDESTE;
MT; MATO GROSSO; CUIABÁ; CENTRO OESTE;
MS; MATO GROSSO DO SUL; CAMPO GRANDE; CENTRO OESTE;
MG; MINAS GERAIS; BELO HORIZONTE; SUDESTE;
PA; PARÁ; BELÉM; NORTE;
PB; PARAÍBA; JOÃO PESSOA; NORDESTE;
PR; PARANÁ; CURITIBA; SUL;
PE; PERNAMBUCO; RECIFE; NORDESTE;
PI; PIAUÍ; TERESINA; NORDESTE;
RJ; RIO DE JANEIRO; RIO DE JANEIRO; SUDESTE;
RN; RIO GRANDE DO NORTE; NATAL; NORDESTE;
RS; RIO GRANDE DO SUL; PORTO ALEGRE; SUL;
RO; RONDÔNIA; PORTO VELHO; NORTE;
RR; RORAIMA; BOA VISTA; NORTE;
SC; SANTA CATARINA; FLORIANÓPOLIS; SUL;
SP; SÃO PAULO; SÃO PAULO; SUDESTE;
SE; SERGIPE; ARACAJU; NORDESTE;
TO; TOCANTINS; PALMAS; NORTE;`;

let estadosSplit = estados.split("\n")

let objetosEstados = []

for( let i=1; i<estadosSplit.length; i++){
     let estadoAtual = estadosSplit[i]
     let informacoesEstado = estadoAtual.split(";")
     let objetoEstado = {
          sigla: informacoesEstado[0].trim(),
          nome: informacoesEstado[1].trim(),
          capital: informacoesEstado[2].trim(),
          regiao: informacoesEstado[3].trim()
     }
     objetosEstados.push(objetoEstado)
}
function procuraPorRegiao(regiao){
     let estadosDaRegiao = []
     for(let i =0; i < objetosEstados.length; i++){
          let estado = objetosEstados[i]
          if( estado.regiao === regiao){
               estadosDaRegiao.push(estado)
          }
     }
     return estadosDaRegiao
}
// console.log(objetosEstados)
// console.log(procuraPorRegiao('SUL'))

function encontraNome(sigla){
     for (estado of objetosEstados){
          if(estado.sigla === sigla){
               return estado.nome
          }
     }
}

console.log(encontraNome("MS"))