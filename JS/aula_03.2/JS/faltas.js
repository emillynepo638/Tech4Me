const alunos = [
  { nome: "Ana", presente: true },
  { nome: "Bruno", presente: false },
  { nome: "Carla", presente: true },
  { nome: "Diego", presente: false }
];

const faltas = alunos.filter(a => a.presente === false).length;

console.log("Total de faltas:", faltas);
