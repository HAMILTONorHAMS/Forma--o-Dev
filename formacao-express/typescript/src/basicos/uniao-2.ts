/// Criando tipos com valores especificos

type NotaOrConceito =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F";

let nota: NotaOrConceito = 7;

nota = "F";
console.log(nota);

nota = "A";
console.log(nota);

nota = "B";
console.log(nota);

nota = 9;
console.log(nota);
