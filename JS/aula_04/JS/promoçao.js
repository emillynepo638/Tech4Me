const timerDisplay = document.getElementById("timer");
const statusMsg = document.getElementById("status");

let tempo = 4 * 60; // 4 minutos (em segundos)

function formatarTempo(segundos) {
  const m = String(Math.floor(segundos / 60)).padStart(2, "0");
  const s = String(segundos % 60).padStart(2, "0");
  return `${m}:${s}`;
}

timerDisplay.textContent = formatarTempo(tempo);

const contador = setInterval(() => {

  tempo--;

  timerDisplay.textContent = formatarTempo(tempo);

  // quando chegar em zero
  if (tempo <= 0) {
    clearInterval(contador);
    timerDisplay.textContent = "00:00";
    statusMsg.textContent = "Oferta encerrada";
  }

}, 1000);
