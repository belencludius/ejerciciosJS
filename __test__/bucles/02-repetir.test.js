const {repetir}= require('../../src/bucles/02-repetir')

// 2) repetir(valor, cantidad)
// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, 
// y devuelva una array con valor repetido cantidad de veces.

describe('repetirValor',()=>{
  it('deberia repetir tres veces lovelace',()=>{
    expect(repetir('lovelace', 3).length).toBe(3)
  })
})