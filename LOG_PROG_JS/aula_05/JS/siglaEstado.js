// Pedi a sigla do estado
var sigla = prompt("Digite a sigla do seu estado (UF) - apenas Sudeste (SP, RJ, MG, ES):");

// Converte a sigla para maiúsculas para aceitar qualquer digitação
var siglaMaiuscula = sigla.toUpperCase();

// Usa switch para verificar cada caso
switch (siglaMaiuscula) {
  case "SP":
    alert("São Paulo");
    break;
  case "RJ":
    alert("Rio de Janeiro");
    break;
  case "MG":
    alert("Minas Gerais");
    break;
  case "ES":
    alert("Espírito Santo");
    break;
  default:
    alert("Sigla inválida ou não é do Sudeste.");
}
