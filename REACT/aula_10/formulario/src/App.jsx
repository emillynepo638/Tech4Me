import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [dados, setDados] = useState(null);

  const menorDeIdade = idade !== "" && idade < 18;

  function cadastrar(e) {
    e.preventDefault();

    setDados({
      nome: nome,
      email: email,
      idade: idade
    });
  }

  return (
    <div className="container">
      <h1>Cadastro de Usuário</h1>

      <form className="formulario" onSubmit={cadastrar}>
        <label>
          Nome
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Idade
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </label>

        {menorDeIdade && (
          <p className="erro">Você precisa ter 18 anos ou mais.</p>
        )}

        <button type="submit" disabled={menorDeIdade}>
          Cadastrar
        </button>
      </form>

      {dados && (
        <div className="resultado">
          <h2>Dados cadastrados</h2>
          <p><strong>Nome:</strong> {dados.nome}</p>
          <p><strong>Email:</strong> {dados.email}</p>
          <p><strong>Idade:</strong> {dados.idade}</p>
        </div>
      )}
    </div>
  );
}

export default App;