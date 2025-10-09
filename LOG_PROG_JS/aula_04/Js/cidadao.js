const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.onclick = function() {

  var idade = Number(prompt("Digite sua idade:"));
  var sexo = prompt("Digite seu sexo (M ou F):").toUpperCase();

  resultado.textContent = 
    (sexo === "M" && idade >= 18) || (sexo === "F" && idade >= 21)
    ? "Você é emancipado(a)!"
    : "Você não é emancipado(a).";
};
