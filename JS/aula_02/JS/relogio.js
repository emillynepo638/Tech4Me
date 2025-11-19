function atualizarRelogio() {
  const agora = new Date();

  let horas = String(agora.getHours()).padStart(2, "0");
  let minutos = String(agora.getMinutes()).padStart(2, "0");
  let segundos = String(agora.getSeconds()).padStart(2, "0");

  document.getElementById("relogio").textContent =
    `${horas}:${minutos}:${segundos}`;
}

// Atualiza a cada 1 segundo
setInterval(atualizarRelogio, 1000);

// Chama uma vez no início para não esperar 1s
atualizarRelogio();
