var frutas = ["Maçã", "Banana", "Uva", "Pera", "Manga", "Melancia"];

var posicao = parseInt(prompt("Digite a posição da fruta que você quer (começa no 0):"));

// Verifica se a posição existe no array
if (posicao >= 0 && posicao < frutas.length) {
    console.log("A fruta da posição " + posicao + " é: " + frutas[posicao]);
} else {
    console.log("Posição inválida! O array vai de 0 até " + (frutas.length - 1));
}
