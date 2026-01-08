const amarelas = ["🍌", "🍐", "🍍", "🍋"];
const vermelhas = ["🍎", "🍒", "🍉", "🌶️"];

console.log("Amarelas:", amarelas);
console.log("Vermelhas:", vermelhas);

// 🥝 no início — itens das listas — 🍓 no final
const frutas = ["🥝", ...amarelas, ...vermelhas, "🍓"];

console.log("Todas as frutas:", frutas);