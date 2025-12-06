const inputLivros = document.getElementById("inputLivros");
const btnGerar = document.getElementById("btnGerar");
const recibo = document.getElementById("recibo");

btnGerar.onclick = () => {
    let qtd = Number(inputLivros.value);

    if (qtd <= 0 || isNaN(qtd)) {
        recibo.textContent = "Por favor, informe um número válido!";
        return;
    }

    recibo.textContent = `Recibo gerado: você emprestou ${qtd} livro(s).`;
};
