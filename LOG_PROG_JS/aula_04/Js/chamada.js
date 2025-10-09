// total de alunos
const totalAlunos = 24;

// número de presentes
var presentes = 17;

// calcular a metade do total
const metade = totalAlunos / 2;

// comparar e guardar resultados
var maisDaMetade = presentes > metade;    // true, pois 17 > 12
var metadeOuMais = presentes >= metade;   // true, pois 17 >= 12

// mostrar tudo no console
console.log("Total de alunos:", totalAlunos);
console.log("Presentes:", presentes);
console.log("Metade da turma:", metade);
console.log("Mais da metade?", maisDaMetade);
console.log("Metade ou mais?", metadeOuMais);
