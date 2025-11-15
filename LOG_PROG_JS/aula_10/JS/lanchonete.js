var sanduiche = "";
var listaAcomp = [];
var max = 5;

var iniciar = document.getElementById("iniciar");
var areaAcomp = document.getElementById("areaAcomp");
var acompInput = document.getElementById("acomp");
var add = document.getElementById("add");
var lista = document.getElementById("lista");
var contador = document.getElementById("contador");
var resultado = document.getElementById("resultado");
var resumo = document.getElementById("resumo");

iniciar.onclick = function () {
  sanduiche = document.getElementById("sanduiche").value;

  if (sanduiche === "") {
    alert("Digite o nome do sanduíche.");
    return;
  }

  listaAcomp = [];
  lista.innerHTML = "";
  contador.textContent = "0 / 5";
  resultado.style.display = "none";
  areaAcomp.style.display = "block";
  acompInput.focus();
};

add.onclick = function () {
  var item = acompInput.value.toLowerCase().trim();

  if (item === "") {
    alert("Digite um acompanhamento ou 'concluir'");
    return;
  }

  if (item === "concluir") {
    finalizar();
    return;
  }

  if (listaAcomp.length >= max) {
    alert("Máximo de acompanhamentos atingido.");
    return;
  }

  listaAcomp.push(item);

  var li = document.createElement("li");
  li.textContent = item;
  lista.appendChild(li);

  acompInput.value = "";
  acompInput.focus();

  contador.textContent = listaAcomp.length + " / " + max;

  if (listaAcomp.length === max) {
    finalizar();
  }
};

function finalizar() {
  var total = listaAcomp.length * 2;

  resumo.textContent =
    "Sanduíche: " + sanduiche +
    " | Acompanhamentos: " + (listaAcomp.length > 0 ? listaAcomp.join(", ") : "Nenhum") +
    " | Total: R$ " + total.toFixed(2);

  areaAcomp.style.display = "none";
  resultado.style.display = "block";
}
