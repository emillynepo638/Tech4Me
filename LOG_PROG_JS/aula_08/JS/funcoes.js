var total = 0;

function contaMercado(valorProduto, valorDesconto, nomeProduto) {
total = total + valorProduto - valorDesconto;

console.log("Bipado o produto: " + nomeProduto + " no valor de: " + valorProduto + " com o desconto de: " + valorDesconto);
console.log("Total:" + total);

}

function nomeProduto(produto) {
    return produto;

// var produto = nomeProduto;
// return produto;

}

contaMercado(10, 2, nomeProduto("Batata Frita"));
contaMercado(5, 1, nomeProduto("Nuggets"));
contaMercado(25, 5, nomeProduto("Coca-cola"));