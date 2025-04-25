///Pode se alterar os valores das propriedades. Adicionadno ela posteriormente. Porém, tem que seguir as propriedaeds do objeto inicial

type Usuario = { nome: string; email: string };

let usuario: Usuario = {
  nome: "Hamilton",
  email: "hamilton@gmail.com",
};

console.log(usuario.email);
console.log(usuario.nome);

usuario = {
  nome: "Rodrigues",
  email: "mm@zmail.com",
};
console.log(usuario.email);
console.log(usuario.nome);
