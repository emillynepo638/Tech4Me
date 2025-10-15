// // Pede a temperatura atual
// var temperatura = prompt("Digite a temperatura atual em graus Celsius:");

// // Converte o valor digitado em número
// temperatura = Number(temperatura);

// // Pede se está chovendo (true ou false)
// var chuva = prompt("Está chovendo? (true/false)");

// // (true ou false em JavaScript)
// if (chuva === "true") {
//   chuva = true;
// } else {
//   chuva = false;
// }

// // Verifica se o clima é ideal:
// // Temperatura < 32 E NÃO está chovendo
// if (temperatura < 32 && chuva === false) {
//   alert("O clima está ideal para atividades ao ar livre!");
// } else {
//   alert("O clima não está ideal no momento.");
// }

// Pede a temperatura atual
var temperatura = prompt("Digite a temperatura atual em graus Celsius:");

// Converte o valor digitado em número
temperatura = Number(temperatura);

// Pede se está chovendo (responde com sim ou não)
var chuva = prompt("Está chovendo? (sim/não)");

// Verifica se o clima é ideal
// O clima ideal é quando a temperatura < 32 E NÃO está chovendo
if (temperatura < 32 && chuva.toLowerCase() === "não") {
  alert("O clima está ideal para atividades ao ar livre!");
} else {
  alert("O clima não está ideal no momento.");
}
