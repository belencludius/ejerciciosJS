const { invertirCaso } = require('../../src/arrays/04-invertirCaso')

describe('Invertir Caso', () => {

  it('deberia invertir mayusculas y minusculas de `Ada Lovelace`', () => {
    expect(invertirCaso(`Ada Lovelace`)).toMatch(`aDA lOVELACE`)
  })

  it('deberia invertir mayusculas y minusculas de `feliz cumple`', () => {
    expect(invertirCaso(`feliz cumple`)).toMatch(`FELIZ CUMPLE`)
  })

  it('deberia invertir mayusculas y minusculas de `jAvAsCrIpT`', () => {
    expect(invertirCaso(`jAvAsCrIpT`)).toMatch(`JaVaScRiPt`)
  })

})