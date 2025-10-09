// Pede a idade do usuário
var idade = prompt("Digite sua idade:");

// Converte para número
idade = Number(idade);

// Verifica se o voto é facultativo (menores de 18 ou maiores de 70)
var votoFacultativo = idade < 18 || idade > 70;

// Resultado
alert("Seu voto é facultativo: " + votoFacultativo);
