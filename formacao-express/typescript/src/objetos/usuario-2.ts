/// Criando interface e testando os tipos junto com o ENUM e propriedade opcional

import { StatusUsusario } from "./status-usuario";
import { Usario } from "./usuario";

let usuarioLogado: Usario = {
  id: 1,
  nome: "Hamilton",
  email: null,
  status: StatusUsusario.ATIVO,
};

console.log(usuarioLogado.nome);
console.log(usuarioLogado.status);
console.log(usuarioLogado.id);
