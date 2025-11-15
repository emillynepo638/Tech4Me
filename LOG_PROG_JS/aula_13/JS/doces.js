// Criando um array com alguns doces
var doces = ["Brigadeiro", "Beijinho", "Paçoca"];

// Criando outra variável que aponta para a MESMA lista
var listaDoces = doces;

// Mostrando a lista inicial
console.log("Lista inicial:", listaDoces);

// Adicionando novos doces
listaDoces.push("Pé de moleque");
listaDoces.push("Bala de coco");

// Alterando um doce existente
listaDoces[1] = "Beijinho de coco";

// Mostrando as listas novamente
console.log("Lista modificada:", listaDoces);
console.log("Array original (doces):", doces);
