var celsius
var fahrenheit

function conversao() {

    celsius = parseFloat(prompt("Digite o valor da temperatura"));
    fahrenheit = (celsius * 9/5) + 32;
    
    alert(celsius + "°C");
    alert(fahrenheit + "°F");
}