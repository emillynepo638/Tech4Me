var temperatura;
var resultado;
var unidade;

function conversao() {

    temperatura = parseFloat(prompt("Digite a temperatura"));

    unidade = prompt("Digite a unidade de temperatura");

     switch (unidade) {
        case "°C":
            resultado = (temperatura - 32) * 5 / 9;
            alert(temperatura + "°C é igual a " + resultado.toFixed(2) + "°F");

            break;
        case "°F":
            resultado = (temperatura * 9/5) + 32;
            alert(temperatura + "°F é igual a " + resultado.toFixed(2) + "°C");
            break;
        default:
            alert("Essa unidade é inválida!");
     }
    }