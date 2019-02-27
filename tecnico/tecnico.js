
//¿Cuál número inicial, por debajo de 1.000.000 (un millón) produce la cadena más con mayor cantidad de términos?

  
function regla(num) {  //función regla a ejecutar y el contador lo pongo en la siguiente funcion
    if(num % 2 == 0) {
      return num / 2;
    }
    else {
      return (num * 3) + 1;
    }
  }
  
  function secuencia(num) { // funcion secuencia donde al numero aplico la regla y sumando el contador
    var contador = 1;
    while(num != 1) {
      num = regla(num);
      contador++; 
    }
    return contador;
  }
  
  function secuencia_Max(num) { // funcion donde  obtengo la secuencia mas larga
    var numero_inicial = 0;
    var max_cadena =0 ;
      
    for(var i=1; i < num; i++) {
      var cadena = secuencia(i); // cadena es la sentencia que se ejecuta en la funcion secuencia
      if(cadena > numero_inicial) {
        numero_inicial = cadena;
        max_cadena = i;
      }
    }
    return [numero_inicial,max_cadena];
  }
  
  console.log(secuencia_Max(1000000));// acá me muestra [525,837799]


//Ejercicio multiplicacion 

const multiplicar = a => b => a * b;
console.log(multiplicar(3)(5));




























