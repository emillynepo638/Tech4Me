function registrarSabores() {
  var sorvetes = [];
  var quantidadeSabores = parseInt(prompt("Quantos sabores deseja cadastrar?"));

  for (var i = 0; i < quantidadeSabores; i++) {
    var sabor = prompt("Digite o nome do sabor " + (i + 1) + ":");
    var estoque = parseInt(prompt("Digite a quantidade em estoque do sabor " + sabor + ":"));

    // Adiciona o sabor e a quantidade como um objeto dentro do array
    sorvetes.push({ nome: sabor, quantidade: estoque });
  }

  var lista = document.getElementById("listaSabores");
  lista.innerHTML = ""; // limpa antes de mostrar

  for (var i = 0; i < sorvetes.length; i++) {
    var item = document.createElement("li");
    item.textContent = sorvetes[i].nome + " — " + sorvetes[i].quantidade + " unidades";
    lista.appendChild(item);
  }
}
