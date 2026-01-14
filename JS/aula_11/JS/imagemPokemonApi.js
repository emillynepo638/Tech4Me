const getImagemPokemon = async (nomePokemon) => {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`);
    const dados = await resposta.json();

    console.log(dados);

    return dados;
}