// https://servicodados.ibge.gov.br/api/docs/localidades#api-UFs-estadosGet
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios

// fetch(url,config);

const getMunicipio = async () => {
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/RJ/municipios');
    const municipios = await resposta.json();

    let addLi = "";
    let itemLi = "";

    for (let i = 0; i < municipios.length; i++) {
        addLi = document.createElement("li");
        itemLi = document.createTextNode(municipios[i].nome);

        addLi.appendChild(itemLi);
        document.getElementById("municipios").appendChild(addLi);
    }




    console.log(municipios);
}

getMunicipio();