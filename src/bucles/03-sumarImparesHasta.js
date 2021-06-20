// sumarImparesHasta(numero)

// Crear una función sumarImparesHasta que tome como argumento un número (numero)
// y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

// sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
// sumarImparesHasta(13) // 49
// sumarImparesHasta(47) // 576

const sumarImparesHasta = numero => {
  let resultado = 0;
  for (let i = 1; i<=numero; i+=2) {
    // console.log("+++ i +++ ", i);
    resultado = resultado + i;
  }
  return resultado;
}

module.exports = {
  sumarImparesHasta
}