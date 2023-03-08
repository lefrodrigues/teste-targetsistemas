// Declarando as variaveis
const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;

// soma de todos os faturamentos por Estado
let totalMes = sp + rj + mg + es + outros;

//porcentagem de contribuição no faturamento de cada Estado
let estsp = (sp / totalMes) * 100;
let estrj = (rj / totalMes) * 100;
let estmg = (mg / totalMes) * 100;
let estes = (es / totalMes) * 100;
let estoutros = (outros / totalMes) * 100;

// impressao das porcentagens de participacao de cada estado no faturamento mensal da distribuidora
console.log(
  `As porcentagens de contribuição de cada Estado no faturamento foram: 
  SP - ${estsp.toFixed(2)}%  
  RJ - ${estrj.toFixed(2)}%  
  MG - ${estmg.toFixed(2)}%  
  ES - ${estes.toFixed(2)}% 
  Outros - ${estoutros.toFixed(2)}%`
);
