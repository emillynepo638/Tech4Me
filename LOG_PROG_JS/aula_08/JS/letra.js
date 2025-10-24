function primeiraLetraMinuscula(nome) {
    if (nome.length === 0) {
        return "Nome vazio!";
    }

    var primeiraLetra = nome[0].toLowerCase();
    return primeiraLetra;
}

function mostrarPrimeiraLetra() {
    var nome = document.getElementById("nomeCandidato").value;
    var resultado = primeiraLetraMinuscula(nome);

    document.getElementById("resultado").textContent = "Primeira letra em minúscula: " + resultado;
}
