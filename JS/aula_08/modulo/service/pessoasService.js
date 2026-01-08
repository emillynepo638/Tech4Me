
const postPessoa = async (nomePessoa) => {
    fetch("http://localhost:3000/pessoas", {
        method: 'POST',
        body: JSON.stringify({
            nome: nomePessoa,
    }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json());
}

const getPessoa = async () => {
    const response = await fetch('http://localhost:3000/pessoas');
    let responseGet = await response.json();
    
    return responseGet;
}

const putPessoa = async (nomePessoa) => {
    fetch('http://localhost:3000/pessoas/' + id, {
        method: 'PUT',
        body: JSON.stringify({
            nome: nomePessoa,
    }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json());
}

const deletePessoa = async (id) => {
    fetch('http://localhost:3000/filmes/' + "2", {
        method: 'DELETE',
    })
    .then((response) => response.json());
}

export { postPessoa, getPessoa, putPessoa }