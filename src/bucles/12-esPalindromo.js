// Definí una función esPalindromo que tome una palabra y 
// devuelva si dicha palabra es palíndroma, es decir, 
// si puede leerse de igual manera de izquierda a derecha  
// que de derecha a izquierda .

// esPalindromo('ada')
// true
//  esPalindromo('reconocer')
// true
//  esPalindromo('mama')
// false
//  esPalindromo('javascript')
// false

const esPalindromo = (palabra) => {
  let esViceversa = true;
  let indice = 0;
  while (indice < palabra.length / 2 && esViceversa){
    esViceversa = palabra[indice] === palabra[palabra.length-1-indice] 
    indice++;
  }
  return esViceversa
}

