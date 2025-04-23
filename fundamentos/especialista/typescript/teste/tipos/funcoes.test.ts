///Desenvolvimento orientado a teste. Ou seja, cria o teste primeiro e depois cria a função.

import {
  imprimirNoConsole,
  multiplicar,
  multiplicarPerigosa,
  ola,
  saudacao,
} from "../../src/tipos/funcoes";

test("Deve retornar uma saudação baseada na hora atual", () => {
  const s = saudacao();
  expect(s).toBe("Bom dia");
});

test("Deve retornar um olá para o usuário", () => {
  const oi = ola("Hamilton");
  expect(oi).toBe("Olá Hamilton! Passar bem!");
});

test("Deve multiplicar dois números", () => {
  const resultado = multiplicar(4, 5);
  expect(resultado).toBe(20);
});
test("Deve retornar NaN como resultado, já que o tipo de parâmetro é do tipo any", () => {
  const resultado = multiplicarPerigosa("a", 5);
  expect(resultado).toBeNaN();
});

test("Deve retornar vazia", () => {
  const r = imprimirNoConsole();
  expect(r).toBeUndefined();
});
