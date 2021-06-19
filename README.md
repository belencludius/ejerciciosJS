# Ejercicios JS

El motivo de este repositorio es para poder practicar ejercicios de Javascript. La idea es tener una estructura que nos facilite la tarea y agregue funcionalidades. Se agregan una serie de pasos que al principio nos van a resultar engorrosos, pero que con el tiempo nos van a permitir entender más en profundidad el funcionamiento de nuestro código.

## Requisitos

### Terminal

Para poder ejecutar el código vamos a usar la terminal, se puede abrir la Terminal directamente, o ejecutarla desde el VSCode. Ir aprendiendo los comandos de la terminal y como navegar carpetas desde la línea de comando nos va a facilitar nuestras tareas del día a día

Algunos comandos básicos

El primer comando es `pwd`, significa print working directory, imprime la ruta del directorio donde estamos parados

```
$ pwd
```

Para entrar en un directorio/carpeta ejecutamos `cd [nombre de la carpeta]` preferentemente los nombre de carpetas no van a tener espacios o caracteres especiales, caso contrario, tendremos que escapar los espacios y los caracteres especiales.
```
$ cd [carpeta]
```

Para "salir" de la carpeta, subiendo un nivel, hay que ejecutar el siguiente comando
```
$ cd ..
```

Para volver al home del usuario
```
$ cd
```

Para creaar una carpeta
```
$ mkdir [carpeta]
```

Para crear un archivo (vacio), preferentemente, como las carpetas, los nombres de archivos no van a tener espacios o caracteres especiales
```
$ touch [nombre archivo]
```

En la terminal hay que recordar que el `.` hace referencia a la ruta actual o al directorio actual

### Node

Es necesario tener instalado Node para poder correr código Javascript en la terminal. Podemos verificar si tenemos Node instalado abriendo la Terminal y ejecutando

```
$ node --version
```

En el caso de tener Node instalado veremos que se imprime un texto similar al siguiente

```
v15.12.0
```

Caso contrario instalar Node, preferentemente siguiendo los pasos del siguiente [repositorio](https://github.com/nvm-sh/nvm)

## Repositorio

Una vez que clonamos el repositorio, dentro del repositorio, ejecutamos

```
$ npm install
```

esto va a permitir que se haga install de las bibliotecas que necesitamos

## Estructura

Dentro del repositorio tenemos 2 carpetas `./src` y `./__test__`, estas dos carpetas son las carpetas padres y aquí se va a estructurar nuestro código. Puede que con el tiempo esto varie, pero en principio vamos a crear 2 archivos por ejercico, un ejercicio para probar que la función que estamos creando hace lo que creemos que hace, y otro archivo donde programamos la función.

## Ciclo

Me parece que la mejor manera de explicar el cómo debería ser el ciclo de un ejercicio, es con un ejemplo. El ejemplo va a ser la función multiplicación

## 1. Crear archivos

Este paso lo voy a hacer desde la consola, voy a crear dos archivos, uno en la carpeta `./__test__`, el archivo que va a tener el código para probar la función, y otro en `./src`, donde está el código de la función.

Desde la raíz del repositorio, voy a ejecutar

```
$ touch ./__test__/multiplication.test.js
```

y 

```
$ touch ./src/multiplication.js
```

Si bien hasta ahora no hay relación entre los archivos, hay una relación implicita desde la estructura, ambos están al mismo nivel, y en el nombre, tienen el mismo nombre, salvo que el archivo de test le agrega `.test`.

si estuvieramos resolviendo una guía de ejercicios quizás sería conveniente crear dos carpetas con el mismo nombre, una en `./__test__` y otra en `./src` y estructurar los nombres de los archivos para que sigan una estructura lógica. Por ejemplo, si tuvieramos una guía de ejercicios de arrays

```
├── __test__
│   ├── arrays
│   │   └── 04-invertirCaso.test.js
│   └── multiplication.test.js
└── src
    ├── arrays
    │   └── 04-invertirCaso.js
    └── multiplication.js
```

## 2. Escribir pruebas

En el archivo de tests vamos a escribir las pruebas que queremos hacer

./__test__/multiplicar.test.js
```
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
```

La biblioteca que estamos usando para escribir los tests se llama `Jest`, al final voy a pegar el link como referencia, porque según lo que estemos probando los tests se escriben diferente pero la estructura básica es siempre la misma

```
describe('titulo', () => {

  it('descripcion', () => {
    
  })

})
```

## 3. Ejecutar los tests para que fallen

En este momento que tenemos los tests escritos, deberiamos ejecutarlos y ver que fallan, porque todavía no está escrito el código para que pasen. De hecho, si pasan, no estarían probando lo que deben probar.

Para ejecutarlos, desde la raiz del proyecto, corremos en una consola el siguiente comando

```
$ npm run test -- multiplication
```

Notese que el multiplication es para filtrar el test que me interesa correr, sino correría todos.

Una vez que los ejecuto, puedo leer el siguiente error que solucionaremos en el próximo paso

```
ReferenceError: multiplicar is not defined
```

Lo que dice el error es que la función multiplicar no está definida, y es cierto, en ninguna parte del archivo se puede ver la definición de `multiplicar`

## 4. Vincular archivos

Para que ambos archivos se puedan ejecutar simultaneamente vamos a tener que exportar la función, en el archivo que se encuentra en `./src` e importar la función en el archivo `./__test__`

./src/multiplication.js
```
const multiplicar = (a, b) => {

}

module.exports = {
  multiplicar
}
```

Notese que está definida la multiplicación, pero hasta el momento la función no hace nada, sólo se define y se exporta

./__test__/multiplication.test.js
```
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
```

Como ejercicio voy a volver a ejecutar el test. Ahora la función ya está definida, entonces, si bien la función no debería pasar los tests porque está vacia, el error debería cambiar. Nuevamente ejecuto

```
$ npm run test -- multiplication
```

Y efectivamente falló

```
expect(received).toBe(expected) // Object.is equality

    Expected: 0
    Received: undefined

      4 |
      5 |   it('Cualquier número por 0 debería ser 0', () => {
    > 6 |     expect(multiplicar(0, 100)).toBe(0)
        |                                 ^
      7 |   })
      8 |
      9 |   it('Cualquier número por 1 debería ser el mismo número', () => {

      at Object.<anonymous> (__test__/multiplicar.test.js:6:33)
```

Esperaba recibir un `0` y recibió `undefined`

## 5. Finalmente voy a escribir el código para pasar los tests

```
const multiplicar = (a, b) => {
  let acumulador = 0;
  for(let i = 0; i < b; i++)
    acumulador += a;
  return acumulador; 
}

module.exports = {
  multiplicar
}
```

Ejecutamos

```
$ npm run test -- multiplication
```

Y vemos que los tests pasaron

```
 PASS  __test__/multiplicar.test.js
  Multiplication
    ✓ Cualquier número por 0 debería ser 0 (1 ms)
    ✓ Cualquier número por 1 debería ser el mismo número
    ✓ 5 por 4 debería dar 20
```

## Referencias

* https://jestjs.io/docs/getting-started