function exemploTryCatch(entrada) {
  try {
    const valor_de_entrada = parseInt(entrada);
    if (isNaN(valor_de_entrada)) {
      throw new Error("Entrada nao eh um numero valido");
    }
    const resultado = valor_de_entrada / 10;
    console.log(`resultado: ${resultado}`);
  } catch (error) {
    console.log("caindo no catch");
    console.log(error.message);
  }
}

exemploTryCatch("123");
