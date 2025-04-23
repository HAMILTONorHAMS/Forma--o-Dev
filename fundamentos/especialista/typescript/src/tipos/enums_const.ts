///Dessa maneira, pode ser atribuida e ficar alterando o valor interno.

const VendaStatus = {
  INICIADA: "Iniciada",
  CONCLUIDA: "Concluida",
  CANCELADA: "Cancelada",
};

VendaStatus.INICIADA = "123";
console.log(VendaStatus.INICIADA);

///Para fazer com que não pode ser alterada posteriormente.
const Erros = {
  NOME_NULO: "nome_nulo",
  EMAIL_NAO_ENCONTRADO: "emai_nao_encontrado",
  URL_INVALIDA: "url_invalido",
} as const;

let erro: string;
erro = Erros.NOME_NULO;
erro = "cpf_invalido";
console.log(erro);

///Assim pode criar uma enumeração dinâmica, ou seja, pode ser atribuido um valor diferente da enumeração
