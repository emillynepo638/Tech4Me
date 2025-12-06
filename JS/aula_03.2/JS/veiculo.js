const veiculos = [
    { marca: "Ford", modelo: "Fiesta", ano: 2015, valorCompra: 20000, valorAtual: 28000, cor: "Prata" },
    { marca: "Chevrolet", modelo: "Onix", ano: 2020, valorCompra: 45000, valorAtual: 58000, cor: "Branco" },
    { marca: "Volkswagen", modelo: "Gol", ano: 2008, valorCompra: 15000, valorAtual: 19000, cor: "Preto" }
];

// Arrow functions das regras
const calcLucro          = v => v.valorCompra * 0.03;
const calcIPVA           = v => v.valorAtual * 0.04;
const calcLicenciamento  = v => (new Date().getFullYear() - v.ano) <= 10 ? 160 : 0;

// Montar a tabela
const tbody = document.querySelector("#tabela-veiculos tbody");

veiculos.forEach(v => {
    const lucro = calcLucro(v);
    const ipva = calcIPVA(v);
    const lic = calcLicenciamento(v);

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${v.marca}</td>
        <td>${v.modelo}</td>
        <td>${v.ano}</td>
        <td>R$ ${v.valorCompra.toFixed(2)}</td>
        <td>R$ ${v.valorAtual.toFixed(2)}</td>
        <td>${v.cor}</td>
        <td>R$ ${lucro.toFixed(2)}</td>
        <td>R$ ${ipva.toFixed(2)}</td>
        <td>R$ ${lic.toFixed(2)}</td>
    `;

    tbody.appendChild(tr);
});
