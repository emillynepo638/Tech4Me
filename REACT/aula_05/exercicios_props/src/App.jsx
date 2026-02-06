import './App.css'


function ListaFilmesChildren({ children }) {
  return (
    <>
      <h2>Filmes (props.children)</h2>
      <ul>
        {children}
      </ul>
    </>
  );
}

function ListaFilmesObjeto() {
  const filmes = [
    { id: 1, nome: "Vingadores", ano: 2012 },
    { id: 2, nome: "Homem-Aranha", ano: 2019 },
    { id: 3, nome: "Interestelar", ano: 2014 },
    { id: 4, nome: "Matrix", ano: 1999 },
    { id: 5, nome: "Avatar", ano: 2009 },
  ];

  return (
    <>
      <h2>Filmes (props objeto)</h2>
      <ul>
        {filmes.map((filme) => (
          <li key={filme.id}>
            {filme.nome} ({filme.ano})
          </li>
        ))}
      </ul>
    </>
  );
}

export default function App() {
  return (
    <>
      <ListaFilmesChildren>
        <li>Vingadores</li>
        <li>Homem-Aranha</li>
        <li>Interestelar</li>
        <li>Matrix</li>
        <li>Avatar</li>
      </ListaFilmesChildren>

      <ListaFilmesObjeto />
    </>
  );
}
