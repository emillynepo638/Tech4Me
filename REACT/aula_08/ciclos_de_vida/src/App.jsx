function App() {
  const salvarLocalStorage = () => {
    localStorage.setItem("usuario", "Gabriela");
  };

  const buscarLocalStorage = () => {
    const usuario = localStorage.getItem("usuario");

    console.log(usuario);
  };

  const removerLocalStorage = () => {
    const usuario = localStorage.removeItem("usuario");

  };

  // ********************************************************

  const salvarSessionStorage = () => {
    sessionStorage.setItem("usuario", "Gabriela");
  };

  const buscarSessionStorage = () => {
    const usuario = sessionStorage.getItem("usuario");

    console.log(usuario);
  };

  const removerSessionStorage = () => {
    const usuario = sessionStorage.removeItem("usuario");
  };

  // ********************************************************

  const salvarCookies = () => {
    document.cookie = "token=abc123; path=/";
  };

  const buscarCookies = () => {
    console.log(document.cookie);
  };

  const removerCookies = () => {
    document.cookie = "token=abc123; max-age=0; path=/";
  };

  return (
    <>
      <h1>Local Storage</h1>

      <button onClick={salvarLocalStorage}>Salvar Local Storage</button>
      <button onClick={buscarLocalStorage}>Buscar Local Storage</button>
      <button onClick={removerLocalStorage}>Remover Local Storage</button>

      <h1>Session Storage</h1>

      <button onClick={salvarSessionStorage}>Salvar Session Storage</button>
      <button onClick={buscarSessionStorage}>Buscar Session Storage</button>
      <button onClick={removerSessionStorage}>Remover Session Storage</button>

      <h1>Cookies</h1>

      <button onClick={salvarCookies}>Salvar Cookies</button>
      <button onClick={buscarCookies}>Buscar Cookies</button>
      <button onClick={removerCookies}>Remover Cookies</button>
    </>
  )
}

export default App
