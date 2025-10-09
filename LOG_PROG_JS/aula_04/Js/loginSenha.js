// Resposta no console true e false
// Senha = abc123
// senhaUsuario ?

function login() {
const senha = "abc123";
const senhaUsuario = prompt("Digite a sua senha: ");
var resultadoSenha = senha === senhaUsuario;

console.log(senha);
console.log(senhaUsuario);

console.log("Resultado da senha: " + resultadoSenha );

}

login ();

