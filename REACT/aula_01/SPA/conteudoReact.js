export function carregarReact() {
  const app = document.getElementById("app");

  const Card = () => {
    return React.createElement(
      "div",
      { className: "card" },
      React.createElement("h2", null, "Emilly Nepomuceno"),
      React.createElement("p", null, "Time do coração: Flamengo ❤️🖤"),
      React.createElement("p", null, "Conteúdo renderizado com React")
    );
  };

  const root = ReactDOM.createRoot(app);
  root.render(React.createElement(Card));
}
