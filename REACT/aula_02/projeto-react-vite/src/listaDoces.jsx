// function ListaDoces() {

//   return (
//     <>
//       <h1>Vite + React</h1>
//     </>
//   )
// }

// export default ListaDoces

let id = 26;

export default function() {
  let listaDoces =
  <div>
    <h1>Lista não Ordenada</h1>
    <ul>
      <li>Bala</li>
      <li>Chiclete</li>
      <li>Pirulito</li>
    </ul>

     <h2>Lista Ordenada</h2>
    <ol>
      <li>Bala</li>
      <li>Chiclete</li>
      <li>Pirulito</li>
    </ol>

    {/* {<textarea name="teste" rows={4} id={`teste_${id}`}></textarea>
    <input type="text" readOnly />} */}
  </div>

return listaDoces;

}