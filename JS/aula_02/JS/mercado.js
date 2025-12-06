const itens = [
    { nome: "Leite", preco: 7.50, validade: 12 },
    { nome: "Arroz", preco: 25.00, validade: 5 },
    { nome: "Macarrão", preco: 6.00, validade: 2 },
    { nome: "Refrigerante", preco: 8.50, validade: 1 }
];

const mesAtual = new Date().getMonth() + 1;

const calcDesconto = (preco, validade) =>
    (validade - mesAtual) <= 3 ? preco * 0.20 : preco * 0.05;

const calcPrecoFinal = (preco, desconto) => (preco - desconto).toFixed(2);

const calcStatus = validade =>
    validade < mesAtual ? "Vencido" : "Válido";

const lista = document.getElementById("lista");

itens.forEach(item => {
    const desconto = calcDesconto(item.preco, item.validade);
    const precoFinal = calcPrecoFinal(item.preco, desconto);
    const status = calcStatus(item.validade);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${item.nome}</h2>
        <p><strong>Preço normal:</strong> R$ ${item.preco.toFixed(2)}</p>
        <p><strong>Mês de validade:</strong> ${item.validade}</p>
        <p><strong>Desconto:</strong> R$ ${desconto.toFixed(2)}</p>
        <p><strong>Preço final:</strong> R$ ${precoFinal}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;

    lista.appendChild(card);
});
