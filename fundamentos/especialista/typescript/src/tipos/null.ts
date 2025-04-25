///Uso do "null", ou seja, tentar retornar algo. Mas coloca o nulo para a função conseguir retornar sem problemas. Assim, coloca o null como opção.

type Usuario = { nome: string; email: string };

let x: string | null;

const usuarios: Usuario[] = [
  { nome: "Hamilton", email: "hamilton@gmail.com" },
  { nome: "Pedro", email: "Pedro@gmail.com" },
  { nome: "Gustavo", email: "Gustavo@gmail.com" },
  { nome: "Joao", email: "Joao@gmail.com" },
  { nome: "Jorge", email: "Jorge@gmail.com" },
];

function buscarPorEmail(email: string): Usuario | null {
  return usuarios.find((u) => u.email === email) ?? null;
}

console.log(buscarPorEmail("Jorge@gmail.com"));
console.log(buscarPorEmail("Jorge@gmail.com1")); ///Aqui vai retornar 'null', pois não esta no array
