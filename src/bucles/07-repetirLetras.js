// Definí una función repetirLetras que reciba como argumento un string palabra 
// y un número entero cantidad, y devuelva una string donde cada letra de palabra 
// esté repetida cantidad de veces.

// repetirLetras('hola', 2)
// 'hhoollaa'
//  repetirLetras('ada', 3)
// 'aaadddaaa'
//  repetirLetras('ah!', 5)
// aaaaahhhhh!!!!!'
//  repetirLetras('basta', 1)
// 'basta'

const repetirLetras = (palabra, cantidad) => {
  let nuevoString = ''
  for(const letra of palabra) {
    // console.log('*** letra *** ', letra)
    // console.log('*** letra cantidad *** ', letra * cantidad)
    for(const i = 0; i < cantidad; i++) {
      nuevoString = nuevoString + letra
    }
  }
  return nuevoString
}

module.exports = {
  repetirLetras
}