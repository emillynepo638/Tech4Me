var numero1;
var numero2;
var soma, subtracao, multiplicacao, divisaoInteira, divisaoReal;

function calculo1() {
  // Pede os dois números
  numero1 = parseFloat(prompt("Digite o primeiro número: "));
  numero2 = parseFloat(prompt("Digite o segundo número: "));

  // Calcula operações básicas
  soma = numero1 + numero2;
  subtracao = numero1 - numero2;
  multiplicacao = numero1 * numero2;

  // Verifica se é possível dividir
  if (numero2 !== 0) {
    divisaoReal = numero1 / numero2;
    divisaoInteira = Math.floor(numero1 / numero2); // divisão inteira arredondada para baixo
  } else {
    divisaoReal = "Impossível dividir por zero";
    divisaoInteira = "Impossível dividir por zero";
  }

  // Mostra resultados
  alert("Soma: " + soma);
  alert("Subtração: " + subtracao);
  alert("Multiplicação: " + multiplicacao);
  alert("Divisão real: " + divisaoReal);
  alert("Divisão inteira: " + divisaoInteira);
}
