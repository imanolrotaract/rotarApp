// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  res = array[0];
  return res
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  res = array[array.length - 1]
  return res
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  res = array.length
  return res
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (i=0; i < array.length; i++ ) {
    array[i]=array[i]+1;
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase = "";
  for (i=0 ; i < palabras.length; i++ ){
    if (i === palabras.length - 1) {
      frase = frase + palabras[i]
    } else {
    frase = frase + palabras[i] + " "
    }
  }
  return frase
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código: 
  for (i=0 ; i < array.length; i++ ){
    if (array[i] === elemento) {
      return true
    }
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  res = 0;
  for (i=0 ; i < numeros.length; i++ ){
    res = res + numeros[i];
  }
  return res
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var x=0;
  var prom;
  for (i=0; i < resultadosTest.length ; i++) {
    x = x + resultadosTest[i];
    if (i === resultadosTest.length - 1 ){
      prom = (x/resultadosTest.length);
      return prom
    }  
  }
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  for (i=0 ; i < numeros.length ; i++) {
    var x = 0;
    j=0;
    for (j=0 ; j < numeros.length ; j++) {
      if (numeros[i] >= numeros[j]) {
        x = x + 1
      } else {
        x=0;
      }
      if (x === (numeros.length - 1)) {
        var res= numeros[i];
        return res
      }
    }
  }
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var x = arguments;
  if (x.length === 0) {
    return 0
  } else if (x.length === 1) {
      res = arguments;
    return res[0]
  } else {
    res1 = arguments
    res= 1;
    for (i = 0; i < x.length; i++) {
      res = res * res1[i];
    }
    return res
  }
  

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  x=0;

  for (i=0 ; i < arreglo.length ; i++) {
    if (arreglo[i] > 18) {
      x = x + 1
    }
  }
  return x
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  if (numeroDeDia === 1 || numeroDeDia === 7 ) {
    return "Es fin de semana"
  } else {
    return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var truco = n + " ";
  if ( truco[0] === "9" ) {
    return true
  } else {
    return false
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  x = 0 ;
  for ( i=0 ; i < arreglo.length ; i++ ) { 
    if ( arreglo[0] === arreglo[i] ) {
      x = x + 1;
    }
  }
  if ( x === arreglo.length ) {
    return true
  } else {
    return false
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var res = [];
  for ( i=0 ; i < array.length ; i++ ) {
    if ( array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ) {
      res.push(array[i]);
    }
  }
  if ( res.length < 3 ) {
    return "No se encontraron los meses pedidos"
  } else {
    return res
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var res = [];
  for ( i=0 ; i < array.length ; i++ ) {
    if ( array[i] > 100 ) {
      res.push(array[i]);
    }
  }
  return res
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  res = [];
  i = 0;
  do {
    numero = numero + 2 ;
    res.push(numero)
    if ( res[i] === i ) {
      return "Se interrumpió la ejecución"
    }
    i++
  } while ( i < 10 )
  return res
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  res = [];
  i = 0;
  for ( i = 0 ; i < 10 ; i++) {
    if ( i === 5 ) {
      continue;
    }
    numero = numero + 2 ;
    res.push(numero)
  }
  return res
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
