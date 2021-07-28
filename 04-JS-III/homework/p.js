
function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    const nuevoArray = [];
    var numero = -4;
    for (let j = 0; j < 10; j++) {
      numero +=2;
      nuevoArray[j] = numero;
      if (numero === j) {
        console.log("Se interrumpió la ejecución");
          break;
      }
    }
    console.log(nuevoArray);
  }
 