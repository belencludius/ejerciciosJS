// Definí una función removerDuplicados que tome por parámetros
// un array array 
// y que devuelva un array con los mismos 
// valores de array pero sin valores duplicados.
//removerDuplicados([1, 1, 1])
// [1]
//  removerDuplicados([1, 1, 2, 2, 3, 3])
// [1, 2 ,3]
//  removerDuplicados([5, 23, 8, 5, 5, 44, 23])
// [5, 23 ,8, 44]

const removerDuplicados = (array) =>{
  let valorSinDuplicado = []
  for (data of array){
    if ( !valorSinDuplicado.includes(data){
      valorSinDuplicado.push(data)
    }
  }
    return valorSinDuplicado
}






