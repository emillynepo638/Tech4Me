import Filme from "./Filme";
import PropsChildren from './propsChildren';


// FORMA ESTÁTICA DE CHAMAR COMPONENTES PASSANDO PROPS
// function App() {

//   return (
//    <div>
//     <Filme genero="Comédia" titulo="O meme do mal"/>
//     <Filme genero="Ação" titulo="Top Gun"/>
//     <Filme genero="Drama" titulo="A paixão de Cristo"/>
//    </div>
//   )
// }

// *******************************************************************************************************

// FORMA DINÂMICA DE CHAMAR COMPONENTES PASSANDO PROPS

// function App() {

//   let filmes = [
//     {genero:"Comédia", titulo:"O meme do mal"},
//     {genero:"Ação", titulo:"Top Gun"},
//     {genero:"Drama", titulo:"A paixão de Cristo"},
//   ];

//   let componentesFilmes = [];

//   for (const filme of filmes) {
//     componentesFilmes.push(<Filme titulo={filme.titulo} genero={filme.genero}/>)
//   }

//   return componentesFilmes;

// }

// PROPS ESPECIAIS / CHIRLDREN

function App() {
  return <PropsChildren>Este é o conteúdo entre tags</PropsChildren>;
}


export default App
