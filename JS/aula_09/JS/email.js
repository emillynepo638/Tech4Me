// Objeto original
const usuario = {
  nome: "Emilly",
  idade: 20
};

// objeto usando spread syntax
const usuarioComEmail = {
  ...usuario,
  email: "emilly@email.com"
};

console.log("Usuário:", usuario);
console.log("Usuário com e-mail:", usuarioComEmail);
