const postPokemon = async (idPokemon, nomePokemon, tipoPokemon, nivelPokemon, regiaoPokemon) => {
    fetch(`http://localhost:3000/pokemon`, {
        method: "POST",
        body: JSON.stringify(
            {
            id: idPokemon,
            nome: nomePokemon,
            tipo: tipoPokemon,
            nivel: nivelPokemon,
            regiao: regiaoPokemon
        }
    ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
}

const getPokemon = async () => {
    const resposta = await fetch(`http://localhost:3000/pokemon`);
    let dados = await resposta.json();

    return dados;
}

const putPokemon = async (idPokemon, nomePokemon, tipoPokemon, nivelPokemon, regiaoPokemon) => {
    fetch(`http://localhost:3000/pokemon/${idPokemon}`, {
        method: "PUT",
        body: JSON.stringify(
            {
            nome: nomePokemon,
            tipo: tipoPokemon,
            nivel: nivelPokemon,
            regiao: regiaoPokemon
        }
    ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
}

const deletarPokemon = async (idPokemon) => {
    fetch(`http://localhost:3000/pokemon/${idPokemon}`, {
    method: "DELETE"

    })
}

export {postPokemon, getPokemon, putPokemon, deletarPokemon};