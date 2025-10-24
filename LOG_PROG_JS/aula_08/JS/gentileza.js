function gentileza(nome, hora) {
    var saudacao;

    if (hora >= 0 && hora < 12) {
        saudacao = "Bom dia, " + nome + "!";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde, " + nome + "!";
    } else if (hora >= 18 && hora <= 23) {
        saudacao = "Boa noite, " + nome + "!";
    } else {
        saudacao = "Horário inválido, " + nome + ".";
    }

    return saudacao;
}

function executarGentileza() {
    var nomeUsuario = prompt("Digite seu nome:");
    var horaAtual = Number(prompt("Digite a hora atual (0 a 23):"));

    var mensagem = gentileza(nomeUsuario, horaAtual);

    alert(mensagem);
}
