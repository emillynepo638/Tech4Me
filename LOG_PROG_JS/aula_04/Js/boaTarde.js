// Pede para digitar a hora atual
var hora = prompt("Digite a hora atual (0 a 23):");

// Converte a hora para número
hora = Number(hora);

// Verifica se ainda pode falar boa tarde (12h até 17h)
var podeDesejarBoaTarde = hora >= 12 && hora < 18;

// Mostra o resultado no alert
alert("Posso desejar boa tarde? " + podeDesejarBoaTarde);
