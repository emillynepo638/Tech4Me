// Função que calcula o valor da compra de ações
function comprarAcao(codigo, valorAcao, quantidade) {
    var total = valorAcao * quantidade;
    return "Compra da ação " + codigo + ": " + quantidade + " x R$ " + valorAcao.toFixed(2) + " = R$ " + total.toFixed(2);
}

// Chamando a função 3 vezes
var compra1 = comprarAcao("ABC1", 12.50, 10);
console.log(compra1);

var compra2 = comprarAcao("XYZ2", 7.30, 15);
console.log(compra2);

var compra3 = comprarAcao("LMN3", 20.00, 5);
console.log(compra3);
