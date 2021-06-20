// invertir(array)
// Crear una función invertir que tome como argumento un array array y que devuelva 
//un array con los mismos valores pero en orden invertido.

// invertir([1, 2, 3]) // [3, 2, 1]
// invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]const crearCuentaRegresiva = numeroInicial => {
  
const invertir = arrayDeNumeros =>{
  let arrayInvertido = [];
  for(let i = arrayDeNumeros.length - 1; i >= 0; i--) {
    arrayInvertido.push(arrayDeNumeros[i])
  }
  return arrayInvertido
}





  
