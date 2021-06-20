// Definí una función sumarSeccion que reciba como 
//argumento un array de números enteros array, 
//un número entero comienzo y un número entero cantidad, 
//y que devuelva la suma de cantidad de números de array 
//empezando a contar desde el ítem con índice comienzo.

//  sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3)
// 8 //(2 + 2 + 4 = 8)
//  sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4)
// 37 //(4 + 3 + 10 + 20 = 37)
//  sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1)
// 10



const sumarSeccion = (arrayDeNumerosEnteros, comienzo, cantidad)=>{
  let suma = 0;
  for (let i = comienzo ; i < comienzo  + cantidad ; i++) { 
    console.log("+++ i +++ ", i)
    console.log("+++ icomienzo  + cantidad +++ ", comienzo  + cantidad)
    console.log("+++ arrayDeNumerosEnteros[i] +++ ", arrayDeNumerosEnteros[i])
    console.log("+++ suma +++ ", suma)
    // suma = suma + arrayDeNumerosEnteros
    suma += arrayDeNumerosEnteros[i];
  }
  return suma;
}
