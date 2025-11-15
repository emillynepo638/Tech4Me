var notas = [8.5, 9.3, 6.7, 7.0, 10.0, 4.8];

// Ordenando da maior para a menor
notas.sort(function(a, b) {
    return b - a;   
});


console.log("Ranking final das notas:");
for (var i = 0; i < notas.length; i++) {
    console.log((i + 1) + "º lugar: " + notas[i]);
}
