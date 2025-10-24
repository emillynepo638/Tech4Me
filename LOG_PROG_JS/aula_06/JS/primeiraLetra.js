var participante;
var primLetra;

function definirData() {
  participante = prompt("Digite o seu primeiro nome:");

  // Se o usuário cancelar ou deixar vazio
  if (!participante) {
    alert("Esse nome não existe.");
    return;
  }

  participante = participante.toUpperCase();
  console.log(participante);

  primLetra = participante.substring(0, 1);
  console.log(primLetra);

  // Verifica se a primeira letra é vogal
  if (
    primLetra === "A" ||
    primLetra === "E" ||
    primLetra === "I" ||
    primLetra === "O" ||
    primLetra === "U" ||
    primLetra === "Y"
  ) {
    alert("A sua entrevista foi marcada para a Segunda-Feira");
  } else {
    naoEraVogal();
  }
}

function naoEraVogal() {
  alert("A sua entrevista foi marcada para a Terça-Feira");
}
