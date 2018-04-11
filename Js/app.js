var input = prompt("Ingresa una frase");
var finalInput = ""; //variable para almacenar valor otorgado por el usuario

function validateInput(input){ //valida que solo sean letras no espacios ni numeros
  while(input == ""){
    input = prompt("Ingresa una cadena valida");

  } //validando si tiene numbers mediante un ciclo y que mande un prompt en caso de que si
  for(var i = 0; i < input.length; i++){
    var chain = input[i];
    if(chain === '0' ||
        chain === '1' ||
        chain === '2' ||
        chain === '3' ||
        chain === '4' ||
        chain === '5' ||
        chain === '6' ||
        chain === '7' ||
        chain=== '8' ||
        chain === '9'){

input = prompt('La palabra ingresada contiene números, Ingresa una cadena valida' );
          return;
   };
//iterando la cadena
    var asciiCharCode = input.charCodeAt(i); // variable que almacena los espacios a recorrer.
    var totalOfSpaces = 33; //creando variable con la fórmula del codigo César.
    var newCharCode = ((asciiCharCode - 65 + totalOfSpaces) % 26) + 65;
      finalInput = finalInput + String.fromCharCode(newCharCode);

    };
      return finalInput;

    };

};

alert('La palabra que ingresaste convertida a Cifrado de César es: ' + cipher());
console.log(cipher());
