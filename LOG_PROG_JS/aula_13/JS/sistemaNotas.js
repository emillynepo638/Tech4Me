// Objetos dos alunos
var aluno1 = {
    nome: "Ana",
    modulo: "JavaScript",
    nota_4: 7.5,
    nota_6: 8.0
};

var aluno2 = {
    nome: "Bruno",
    modulo: "Lógica",
    nota_4: 5.0,
    nota_6: 6.0
};

var aluno3 = {
    nome: "Carlos",
    modulo: "HTML",
    nota_4: 9.0,
    nota_6: 8.5
};

var aluno4 = {
    nome: "Daniela",
    modulo: "CSS",
    nota_4: 4.0,
    nota_6: 6.5
};

var aluno5 = {
    nome: "Eduarda",
    modulo: "Python",
    nota_4: 8.0,
    nota_6: 7.0
};

// Função para calcular média
function calcularMedia(avaliacao) {
    var media = (avaliacao.nota_4 + avaliacao.nota_6) / 2;
    return media;
}

// Função para exibir resultado
function mostrarResultado(aluno) {
    var mediaFinal = calcularMedia(aluno);

    console.log("Aluno: " + aluno.nome);
    console.log("Módulo: " + aluno.modulo);
    console.log("Média: " + mediaFinal);

    if (mediaFinal >= 7) {
        console.log("Resultado: APROVADO");
    } else {
        console.log("Resultado: REPROVADO");
    }

    console.log("---------------------------");
}

// Chamando a função para cada aluno
mostrarResultado(aluno1);
mostrarResultado(aluno2);
mostrarResultado(aluno3);
mostrarResultado(aluno4);
mostrarResultado(aluno5);
