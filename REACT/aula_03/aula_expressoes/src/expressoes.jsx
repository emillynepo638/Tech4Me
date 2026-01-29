function Expressoes() {
  // let nome = "React";
  // let saudacoes = `<p>Bem vindos ao ${nome + "!"}</p>`


  // return (
  //  saudacoes
  // )

  // const m1 = <em>pedras</em>;
  // const m2 = <strong>sais</strong>

  // return <p>Os minerais são compostos de {m1} e {m2}</p>;

  // const m1 = 9;
  // const m2 = 6;

  // return <p>Os minerais são compostos de {m1 + m2} e {m2}</p>;

  const fusca = {ano: "1953", direcao: true};

  return <div>
    <h2>Carro fabricado em {fusca.ano}</h2>
    <h3>Possui direção? {fusca.direcao ? "Sim" : "Não"}</h3>
  </div>

}


export default Expressoes
