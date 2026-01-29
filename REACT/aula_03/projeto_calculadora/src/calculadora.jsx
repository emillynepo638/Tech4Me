import { useState } from "react";
import logo from "./assets/calculadora.svg";
import "./calculadora.css";

export default function Calculadora() {
  const [expressao, setExpressao] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  function validarExpressao(texto) {
    // Permite: números, + - * / ( ) . espaços
    const permitido = /^[0-9+\-*/().\s]+$/;
    if (!texto.trim()) return "Digite uma expressão (ex: 2 + 2).";
    if (!permitido.test(texto)) return "Use apenas números e + - * / ( ) .";
    return "";
  }

  function calcular() {
    const msgErro = validarExpressao(expressao);
    if (msgErro) {
      setErro(msgErro);
      setResultado(null);
      return;
    }

    try {
      // Avalia a expressão de forma simples (para exercício).
      // O regex acima limita caracteres para reduzir riscos.
      const valor = Function(`"use strict"; return (${expressao})`)();

      if (Number.isNaN(valor) || !Number.isFinite(valor)) {
        setErro("Resultado inválido (verifique a expressão).");
        setResultado(null);
        return;
      }

      setResultado(valor);
      setErro("");
    } catch {
      setErro("Expressão inválida. Ex: (2 + 3) * 4");
      setResultado(null);
    }
  }

  function limpar() {
    setExpressao("");
    setResultado(null);
    setErro("");
  }

  function aoPressionar(e) {
    if (e.key === "Enter") calcular();
    if (e.key === "Escape") limpar();
  }

  return (
    <div className="page">
      <div className="glow" />

      <main className="calc">
        <header className="calc__header">
          <div className="logoBox">
             <img src={logo} alt="Logo Calculadora" className="logo" />
             <span className="logoText">Calculadora</span>
          </div>

         <h1 className="title">Calculadora de Expressões</h1>
           <p className="subtitle">
              Digite algo como <span className="hint">(2 + 3) * 4</span> e clique em calcular.
          </p>
        </header>

        <section className="panel">
          <label className="label" htmlFor="expr">
            Expressão matemática
          </label>

          <div className="inputRow">
            <input
              id="expr"
              className="input"
              placeholder="Ex: 10 / 2 + (3 * 4)"
              value={expressao}
              onChange={(e) => setExpressao(e.target.value)}
              onKeyDown={aoPressionar}
              autoComplete="off"
            />

            <button className="btn btn--primary" onClick={calcular}>
              Calcular
            </button>

            <button className="btn btn--ghost" onClick={limpar} type="button">
              Limpar
            </button>
          </div>

          <div className="output">
            <div className="output__box">
              <span className="output__label">Resultado</span>

              {erro ? (
                <span className="output__value output__value--error">{erro}</span>
              ) : resultado !== null ? (
                <span className="output__value">{resultado}</span>
              ) : (
                <span className="output__value output__value--muted">
                  —
                </span>
              )}
            </div>

            <div className="tips">
              <p className="tipTitle">Atalhos</p>
              <ul className="tipList">
                <li>
                  <kbd>Enter</kbd> calcular
                </li>
                <li>
                  <kbd>Esc</kbd> limpar
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span className="footer__dot" />
          <p className="footer__text">
            Suporta <b>+ - * /</b> e parênteses.
          </p>
        </footer>
      </main>
    </div>
  );
}
