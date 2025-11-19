function descontoPar(preco) {
  return preco * 0.80; // 20% de desconto
}

function descontoImpar(preco) {
  return preco * 0.90; // 10% de desconto
}

// --- parte principal ---

let preco = Number(prompt("Digite o preço do produto:"));
let minuto = new Date().getMinutes(); 
// ou: let minuto = Number(prompt("Digite o minuto atual:"));

let aplicarDesconto;

// escolhe a função usando só uma váriavel
if (minuto % 2 === 0) {
  aplicarDesconto = descontoPar;
} else {
  aplicarDesconto = descontoImpar;
}

let precoFinal = aplicarDesconto(preco);

console.log(`Minuto atual: ${minuto}`);
console.log(`Preço original: R$ ${preco.toFixed(2)}`);
console.log(`Preço com desconto: R$ ${precoFinal.toFixed(2)}`);
