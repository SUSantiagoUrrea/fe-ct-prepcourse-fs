/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar el método map. Es un método para arreglos que devuelve otro arreglo.

  // Tu código acá:
  return array.map(function(elemento) { return elemento[propiedad]}) /*El map va a recorrer elemento por elemento del arreglo */
  // Retorna el valor de la propiedad que le llega por parámetro en cada uno de los elementos, en este caso los objetos. Se llama al parámetro propiedad por medio de notación por punto (.) "elemento.propiedad". El punto pregunta literalmente como si fuera una propiedad, pero entre corchetes pregunta por el valor de la propiedad, entonces se usa corchetes elemento[propiedad]
}

// No modifiques nada debajo de esta linea //

module.exports = pluck