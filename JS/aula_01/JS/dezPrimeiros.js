const lista = document.getElementById("top10");

const valores = [
  "Ada Lovelace",
  "Alan Turing",
  "Grace Hopper",
  "Dennis Ritchie",
  "Ken Thompson",
  "Tim Berners-Lee",
  "Linus Torvalds",
  "Bjarne Stroustrup",
  "James Gosling",
  "Guido van Rossum"
];

for (let i = 0; i < valores.length; i++) {
  const li = document.createElement("li");
  li.textContent = valores[i];

  // alterna as cores
  if (i % 2 === 0) {
    li.classList.add("odd");   // ímpar
  } else {
    li.classList.add("even");  // par
  }

  lista.appendChild(li);
}
