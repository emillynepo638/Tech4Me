let tempo = 4 * 60; // 4 minutos em segundos

const timerEl = document.getElementById("timer");
const statusEl = document.getElementById("status");

const formatar = (s) => {
    let min = Math.floor(s / 60);
    let seg = s % 60;
    return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
};

timerEl.textContent = formatar(tempo);

const intervalo = setInterval(() => {

    tempo--;

    timerEl.textContent = formatar(tempo);

    if (tempo <= 0) {
        clearInterval(intervalo);
        timerEl.textContent = "00:00";
        statusEl.textContent = "Oferta encerrada!";
        statusEl.style.opacity = 1;
    }

}, 1000);
