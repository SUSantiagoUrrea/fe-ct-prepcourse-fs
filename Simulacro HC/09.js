/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribir una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo con base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price > 50;
  // }) => [{price: 100, name:'tv'}]

  Array.prototype.filtrar = function(funcion)  //Siempre que se vaya a definir un método para una clase se usa prototype. Los métodos son FUNCIONES, OJO  
  {  
    var filtrados = [];
    for(var i = 0; i < this.length; i++) 
    {
      if(funcion(this[i])) 
      {
        filtrados.push(this[i])
      }
    }
    return filtrados;
  } 
};

// No modifiques nada debajo de esta linea //

module.exports = filtrar