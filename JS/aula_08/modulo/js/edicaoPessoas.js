import { putPessoa } from "../service/pessoasService"

const cadastrarPessoa = async () => {
    let nomePessoa = document.getElementById("nomePessoa").value;
    console.log(nomePessoa);
    

    putPessoa(nomePessoa);
}