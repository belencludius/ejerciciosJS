//Definí una función esSubconjunto que tome por parámetro dos arrays, subconjunto 
//y conjunto, y devuelva si subconjunto es realmente subconjunto de conjunto, es decir, 
// si todos los valores de subconjunto están en conjunto.

// esSubconjunto([1], [1, 2, 3])
// true
//  esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5])
// true
//  esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49])
// true
//  esSubconjunto([1, 2, 3], [1, 2])
// false
//  esSubconjunto([1], [2, 3, 4])
// false

//  esSubconjunto([1, 2], [5, 7, 2])
// false

const esSubconjunto = (subConjunto,conjunto) =>{
  let estaIncluido = true
  let i = 0;
  let j = 0;
  while (i < subConjunto.length && estaIncluido) {
    console.log('+++subConjunto[i]+++', subConjunto[i]);
    estaIncluido = false; 
    while(j < conjunto.length && !estaIncluido) {
      console.log('+++conjunto[j]+++', conjunto[j])
      estaIncluido = conjunto[j]=== subConjunto[i]
      j++;
    }
    j=0;
    i++;
  }  

  return estaIncluido
}
    // for (let i =0; i < subConjunto.length; i++){
    //   console.log('+++subConjunto[i]+++', subConjunto[i])
    //   for(let j = 0; j < conjunto.length; j++){
    //     console.log('+++conjunto[j]+++', conjunto[j])
    //     if (conjunto[j] === subConjunto[i])
    //       return true     
    //   }
    // }
    
}







// let removerDuplicados = (array) =>{
//   let valorSinDuplicado = []
//   for (let data of array){
//     if ( !valorSinDuplicado.includes(data)){
//       valorSinDuplicado.push(data)
//     }
//   }
//     return valorSinDuplicado
// }