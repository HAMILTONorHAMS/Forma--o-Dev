///A função do tipo never, não pode finalizar, ou seja, não pode retornar nenhum valor.

function falhar(msg: string): never {
  throw new Error(msg);
}

//Fluxo com mais de um caminho. Porém, não retorna anda
function falhr(msg: string): never {
  if (msg.length > 10) {
    throw new Error(msg);
  } else {
    throw new Error(msg);
  }
}

falhar("Teste de erro");
