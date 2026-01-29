import { carregarJS } from "./conteudoJS.js";
import { carregarReact } from "./conteudoReact.js";

const btnJS = document.getElementById("btn-js");
const btnReact = document.getElementById("btn-react");

btnJS.addEventListener("click", () => {
  carregarJS();
});

btnReact.addEventListener("click", () => {
  carregarReact();
});
