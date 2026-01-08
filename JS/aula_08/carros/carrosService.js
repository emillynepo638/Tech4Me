const postCarro = async (id, nomeCarro, modeloCarro, corCarro, anoCarro) => {
    fetch("http://localhost:3000/carros", {
        method: 'POST',
        body: JSON.stringify({
            id: id,
            nome: nomeCarro,
            modelo: modeloCarro,
            cor: corCarro,
            ano: anoCarro
    }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json());
}

const getCarro = async () => {    
    const response = await fetch('http://localhost:3000/carros');
    let responseGet = await response.json();
    
    return responseGet;
}

const putCarro = async (nomeCarro, id) => {
    fetch('http://localhost:3000/carros/' + id, {
        method: 'PUT',
        body: JSON.stringify({
            nome: nomeCarro,
    }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json());
}

const deleteCarro = async (id) => {
    fetch('http://localhost:3000/filmes/' + "2", {
        method: 'DELETE',
    })
    .then((response) => response.json());
}

export { postCarro, getCarro, putCarro, deleteCarro}