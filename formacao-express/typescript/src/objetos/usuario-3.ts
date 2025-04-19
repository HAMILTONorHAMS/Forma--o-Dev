import { StatusUsusario } from "./status-usuario";
import { Usario } from "./usuario";

////Objetos Parciais -> utilizando a propriedade nativa Partial<> e passa a interface dentro do <>

let novoUsuario: Partial<Usario> = {
  nome: "Hamilton",
  status: StatusUsusario.ATIVO,
};

console.log(novoUsuario.nome);
console.log(novoUsuario.email);
console.log(novoUsuario.status);
console.log(novoUsuario.senha);
