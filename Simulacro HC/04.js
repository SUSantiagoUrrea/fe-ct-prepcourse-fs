/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var NumeroAString = num.toString();
    var palabraSeparada = NumeroAString.split(""); /*El espacio entre las comillas del split es MUY IMPORTANTE, split("")*/
    var numeroalReves = []; 
      for (let i = 0; i < palabraSeparada.length; i++) { 
        numeroalReves.unshift(palabraSeparada[i]); /*O se puede con el método REVERSE, más corto. Devuelve un arreglo, únicamente arreglos, volteados, espejo o alrevés*/
      }
      var stringANumero = numeroalReves.join('');
      dePalabraANumero = stringANumero * 1;
      if (dePalabraANumero === num)
      return true;
      else
      return false;
  /*var numString =num.toString()
  var longitud = numString.length;
  for (let i = 0; i < Math.floor(longitud / 2); i++)
  if(numString[i] !== numString[longitud -1 - i]) {
    return false;
  }
  return true;*/
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico