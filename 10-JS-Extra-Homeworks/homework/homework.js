// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  /*var matriz = [];
  for(const clave in objeto){
    matriz.push([clave, objeto[clave]]);
  }
  return matriz;*/
  return Object.entries(objeto);
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const objeto = {};
  for (let j = 0; j < string.length; j++) {
    if (Object.keys(objeto).includes(string[j]) ) {
      objeto[string[j]] = objeto[string[j]] + 1;
    }else {
      objeto[string[j]] = 1;
    }
    
  }

  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var letrasMayus = "";
  
  var letrasMinus= "";
  
  for (let p = 0; p < s.length ; p++) {
    if (s.charAt(p) === s.charAt(p).toUpperCase()) {
      
      letrasMayus = letrasMayus + s.charAt(p);
    }else{
      letrasMinus = letrasMinus + s.charAt(p);
    }    
  }
  //return (letrasMayus+letrasMinus);

  return "".concat(letrasMayus,letrasMinus);
}




function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo = str.split(' ').map (valor => {
    return valor.split('').reverse().join('');
  }).join(' ');
  
  return espejo;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numeroAString = numero.toString();
  //console.log (numeroAString)
 var nuevoNumeroAString = numeroAString.split('').reverse().join('');
  //console.log (nuevoNumeroAString)
  
  if (numeroAString === nuevoNumeroAString) return "Es capicua";
  else return "No es capicua"
  
}




function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //p.replaceAll('dog', 'monkey')
  // cadena = cadena.replaceAll("a", " ");
  // cadena = cadena.replaceAll("b", " ");
  // cadena = cadena.replaceAll("c", " ");

  cadena = cadena.replace("a", "");
  cadena = cadena.replace("b", "");
  cadena = cadena.replace("c", "");

  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var ArrayRearrenging = arr.sort((elementoActual , elementoSig) => {
    return elementoActual.length - elementoSig.length;
  });
  return ArrayRearrenging;

}
  

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i].length > arr[j].length) {
//         var auxm = arr[i];
//         arr[i] = arr[j];
//         arr[j] = auxm;
      
//       }
//     }
//   }
//   return arr;
// }

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray = [];  
  for (let i = 0; i< arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        nuevoArray.push(arreglo1[i]);
      }
      
    }
  }

  return nuevoArray;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

