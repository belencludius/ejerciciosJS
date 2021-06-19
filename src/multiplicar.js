const multiplicar = (a, b) => {
  let acumulador = 0;
  for(let i = 0; i < b; i++)
    acumulador += a;
  return acumulador; 
}

module.exports = {
  multiplicar
}