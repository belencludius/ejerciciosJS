//Definí una función tieneBloque que tome por parámetro 
//un array array y devuelva si dicho array tiene un bloque de 
//3 o más ítems consecutivos idénticos.
// tieneBloque([1, 2, 3])
// false
//  tieneBloque([1, 1, 1, 2, 3])
// true
//  tieneBloque([1, 2, 3, 3, 3])
// true
//  tieneBloque([1, 2, 3, 3, 3, 8])
// true
//  tieneBloque([1, 2, 2, 3, 3, 4])
// false

const tieneBloque = (array) => {
  let esConsecutivo = false;
  let indice = 0;
  while (indice + 2 < array.length && !esConsecutivo) {
    console.log("1 ",array[indice])
    console.log("2 ",array[indice + 1])
    console.log("3 ",array[indice + 2])
    esConsecutivo = array[indice] === array[indice + 1] && array[indice] === array[indice+2]
    indice++; 
  }
  return esConsecutivo

}
