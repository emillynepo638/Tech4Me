// Lista
const alunos = [
    { nome: "Ana", idade: 22, peso: 55, altura: 1.65 },
    { nome: "Carlos", idade: 30, peso: 92, altura: 1.80 },
    { nome: "Marcos", idade: 28, peso: 70, altura: 1.75 },
    { nome: "Julia", idade: 19, peso: 48, altura: 1.60 }
];

// Arrow para calcular IMC
const calcIMC = (peso, altura) => (peso / (altura ** 2)).toFixed(2);

// Arrow para classificar IMC
const classificar = imc => 
    imc < 18.5 ? "Abaixo do peso" :
    imc <= 24.9 ? "Peso normal" :
    imc <= 29.9 ? "Sobrepeso" :
    "Obesidade";

const lista = document.getElementById("lista");

alunos.forEach(aluno => {
    const imc = calcIMC(aluno.peso, aluno.altura);
    const classificacao = classificar(imc);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${aluno.nome}</h2>
        <p><strong>Idade:</strong> ${aluno.idade}</p>
        <p><strong>Peso:</strong> ${aluno.peso} kg</p>
        <p><strong>Altura:</strong> ${aluno.altura} m</p>
        <p><strong>IMC:</strong> ${imc}</p>
        <p><strong>Classificação:</strong> ${classificacao}</p>
    `;

    lista.appendChild(card);
});
