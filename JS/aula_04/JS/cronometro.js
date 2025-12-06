let tempo = 60;
let intervalo;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Atualiza o mostrador
const atualizarDisplay = () => display.textContent = tempo;

// Iniciar cronômetro
startBtn.onclick = () => {
    if (intervalo) return; // impedir iniciar duas vezes

    intervalo = setInterval(() => {
        tempo--;
        atualizarDisplay();

        if (tempo <= 0) {
            clearInterval(intervalo);
            intervalo = null;
            tempo = 0;
            atualizarDisplay();
        }
    }, 1000);
};

// Parar
stopBtn.onclick = () => {
    clearInterval(intervalo);
    intervalo = null;
};

// Resetar
resetBtn.onclick = () => {
    clearInterval(intervalo);
    intervalo = null;
    tempo = 60;
    atualizarDisplay();
};

// Mostrar os 60s
atualizarDisplay();
