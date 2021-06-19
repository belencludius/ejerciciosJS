const { multiplicar } = require('../src/multiplicar.js')

describe('Multiplication', () => {

  it('Cualquier número por 0 debería ser 0', () => {
    expect(multiplicar(0, 100)).toBe(0)
  })

  it('Cualquier número por 1 debería ser el mismo número', () => {
    expect(multiplicar(1, 100)).toBe(100)
  })

  it('5 por 4 debería dar 20', () => {
    expect(multiplicar(5, 4)).toBe(20)
  })

})