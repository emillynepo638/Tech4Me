const produto = {
  nome: "Fone Bluetooth",
  precoOriginal: 220.00,
  desconto: 0.15, // 15% de desconto

  get precoFinal() {
    return this.precoOriginal - (this.precoOriginal * this.desconto);
  }
};

const statusPromo = produto.desconto > 0
  ? "Em promoção"
  : "Preço normal";

const texto = `
  <strong>Nome do produto:</strong> ${produto.nome}<br>
  <strong>Preço original:</strong> R$ ${produto.precoOriginal.toFixed(2)}<br>
  <strong>Preço com desconto:</strong> R$ ${produto.precoFinal.toFixed(2)}<br>
  <strong>Status:</strong> ${statusPromo}
`;

document.getElementById("produtoInfo").innerHTML = texto;
