const area = document.getElementById("tabela-alunos");

// lista de alunos
const alunos = [
  { nome: "Ana",    n1: 8,  n2: 7 },
  { nome: "Bruno",  n1: 5,  n2: 6 },
  { nome: "Carlos", n1: 9,  n2: 8 },
  { nome: "Duda",   n1: 3,  n2: 4 },
  { nome: "Eva",    n1: 7,  n2: 7 }
];

const tabela = document.createElement("table");
tabela.border = "1";
tabela.style.borderCollapse = "collapse";
tabela.style.width = "400px";

// cabeçalho
const header = document.createElement("tr");
header.innerHTML = `
  <th>Aluno</th>
  <th>Nota 1</th>
  <th>Nota 2</th>
  <th>Média</th>
`;
tabela.appendChild(header);

// alunos
alunos.forEach(aluno => {
  const media = (aluno.n1 + aluno.n2) / 2;

  const tr = document.createElement("tr");

  // cor da linha de acordo com a média
  if (media < 6) {
    tr.style.backgroundColor = "tomato"; // vermelho
  } else if (media >= 7) {
    tr.style.backgroundColor = "lightgreen"; // verde
  }

  tr.innerHTML = `
    <td>${aluno.nome}</td>
    <td>${aluno.n1}</td>
    <td>${aluno.n2}</td>
    <td>${media.toFixed(1)}</td>
  `;

  tabela.appendChild(tr);
});

// coloca a tabela na página
area.appendChild(tabela);
