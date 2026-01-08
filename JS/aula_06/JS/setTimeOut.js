console.log("1-> Esse é o primeiro texto que vc viu e o primeiro da ordem de execução.");

setTimeout(() => {
    console.log("2-> Esse é o terceiro texto que vc viu e o segundo da ordem de execução.");
}, 1000);

console.log("3-> Esse é o segundo texto que vc viu e o terceiro da ordem de execução.");
