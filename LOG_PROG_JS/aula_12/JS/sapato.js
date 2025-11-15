var sapatos = ["tênis", "sandália", "bota", "sapato social", "chinelo"];
var gavetas = ["gaveta 1", "gaveta 2", "gaveta 3", "gaveta 4", "gaveta 5"];

function localizarSapato() {
    var busca = document.getElementById("nomeSapato").value.toLowerCase();
    var indice = sapatos.indexOf(busca);
    var resultado = document.getElementById("resultado");

    if (indice !== -1) {
        resultado.innerText = "O " + sapatos[indice] + " está na " + gavetas[indice] + ".";
    } else {
        resultado.innerText = "Calçado não encontrado!";
    }
}
