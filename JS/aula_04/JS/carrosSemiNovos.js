const anoInput = document.getElementById("ano");
const btn = document.getElementById("analisar");
const resultado = document.getElementById("resultado");

btn.onclick = () => {
    const anoCarro = Number(anoInput.value);
    const anoAtual = new Date().getFullYear();

    if (!anoCarro || anoCarro > anoAtual) {
        resultado.textContent = "Ano inválido!";
        return;
    }

    const diferenca = anoAtual - anoCarro;

    const status = diferenca <= 2 ? "🚗 Seminovo" : "🚘 Usado";

    resultado.textContent = `Classificação: ${status}`;
};
