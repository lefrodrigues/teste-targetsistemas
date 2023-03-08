// armazenando o arquivo json na variavel data //
const data = require("./dados.json");

// menor faturamento diario do mes //
let minFat = data[0].valor;
for (let i = 1; i < data.length; i++) {
  if (data[i].valor < minFat) {
    minFat = data[i].valor;
  }
}
console.log(`O menor faturamento diário no mês foi: R$ ${minFat}.`);

// maior faturamento diario do mes //
let maxFat = data[0].valor;
for (let i = 1; i < data.length; i++) {
  if (data[i].valor > maxFat) {
    maxFat = data[i].valor;
  }
}
console.log(`O maior faturamento diário no mês foi: R$ ${maxFat}.`);

//numero de dias em que o faturamento foi superior a media mensal//

let sum = 0; //variavel que acumula a soma
let average = 0; //variavel que acumula a media
let validDays = 0; //variavel que acumula qtdade de dias com faturamento > 0
let betterDays = 1; //variavel que acumula qtdade de dias com faturamento acima da nedia mensal

for (i = 0; i < data.length; i++)
  //validando os dias
  if (data[i].valor > 0) {
    validDays++;

    //somando o faturamento dos dias validos
    sum += data[i].valor;

    //media dos dias validos
    average = sum / validDays;

    //validando qtos dias o faturamento foi maior que a media mensal
    if (data[i].valor > average) {
      betterDays++;
    }
  }
console.log(
  `O número de dias em que o faturamento diário ficou acima da média mensal, foram ${betterDays} dias.`
);
