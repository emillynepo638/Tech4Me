import {postPessoa} from "../service/pessoasService"

const cadastrarPessoa = async () => {
    let nomePessoa = document.getElementById("nomePessoa").value;
    console.log(nomePessoa);
    

    postPessoa(nomePessoa);
}