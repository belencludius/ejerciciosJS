const { repetirLetras } = require('../../src/bucles/07-repetirLetras')

describe('repetir letras', () => {
  // repetirLetras('hola', 2)
// 'hhoollaa'
  it('deberia repetir 2 veces cada letra', () => {
    expect(repetirLetras('hola', 2)).toEqual('hhoollaa')
  })

//  repetirLetras('ada', 3)
// 'aaadddaaa'
//  repetirLetras('ah!', 5)
// aaaaahhhhh!!!!!'
//  repetirLetras('basta', 1)
// 'basta'


})