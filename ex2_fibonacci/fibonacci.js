function isFibonacci(num) {
  //declaração da variavel //
  let fib = [0, 1];

  // a sequência de fibonacci
  while (fib[fib.length - 1] < num) {
    //somando o -1 (ultimo) e penultimo -2 indices do array e o push coloca a soma no final do array//
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  // verificando se o parametro está incluso na sequencia fibonacci e exibindo a mensagem //
  fib.includes(num)
    ? console.log(`O número ${num} integra a sequência de Fibonacci.`)
    : console.log(`O número ${num} não integra a sequência de Fibonacci.`);
}
//chamada da função para validar o prarametro de entrada, altere o parametro e veja o resultado //
isFibonacci(5);
