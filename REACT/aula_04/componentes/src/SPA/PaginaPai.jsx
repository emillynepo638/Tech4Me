import Cabecalho from "./Cabecalho.jsx";
import Conteudo from "./Conteudo.jsx";
import Rodape from "./Rodape.jsx";

function PaginaPai() {
    return (
        <div>
            <h1>Aula 4 de React</h1>
            <Cabecalho/>
            <Conteudo/>
            <Rodape/>
        </div>
    );
}

export default PaginaPai;