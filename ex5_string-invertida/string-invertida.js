// declaração arrow function
const reverseString = (str) => {
  //variavel vazia para receber a strig invertida
  let reversedString = "";

  /*laço for percorrendo a string e decrementando a cada iteração,
    começando em -1, no caso o ultimo caracter*/
  for (let i = str.length - 1; i >= 0; i--) {
    // acumulando na variavel o incremento, de acordo com  indice, a string na forma invertida
    reversedString += str[i];
  }

  // retornando a string revertida
  return reversedString;
};
// impressao da string invertida, a qual fo passada como parametro
console.log(reverseString("Obrigado Target Sistemas"));
