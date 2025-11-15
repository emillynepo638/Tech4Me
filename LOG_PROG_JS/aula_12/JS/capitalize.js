function capitalizar() {
    var frase = document.getElementById("frase").value;

    // Divide a frase em palavras
    var palavras = frase.split(" ");

    // Cria um novo array com as palavras capitalizadas
    var resultado = [];

    for (var i = 0; i < palavras.length; i++) {
        var palavra = palavras[i];
        // Transforma a primeira letra em maiúscula e o resto em minúscula
        var novaPalavra = palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
        resultado.push(novaPalavra);
    }

    // Junta tudo novamente em uma frase
    var fraseFinal = resultado.join(" ");

    document.getElementById("resultado").innerText = fraseFinal;
}
