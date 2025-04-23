/// Atribuido um tipo dentro de uma variável, pode ser alterada posteriormente com reatribuição de cosntantes

type StatusVdenda = "inicada" | "concluida" | "cancelada";

let st: StatusVdenda = "concluida";
st = "cancelada";

console.log(st);
