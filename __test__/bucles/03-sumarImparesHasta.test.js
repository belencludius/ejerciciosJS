const { sumarImparesHasta } = require('../../src/bucles/03-sumarImparesHasta')

describe('sumarImparesHasta', () => {

  it('deberia devolver 9', () => {
    expect(sumarImparesHasta(5)).toBe(9)
  })


  it('deberia devolver 49', () => {
    expect(sumarImparesHasta(13)).toBe(49)
  })

  it('deberia devolver 576', () => {
    expect(sumarImparesHasta(47)).toBe(576)
  })

})