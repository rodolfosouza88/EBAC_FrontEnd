function calcularArea(a, b) {
    if (b === undefined) {
        // Se apenas 1 argumento for passado, calcule a área de um quadrado
        return a * a;
    } else {
        // Se 2 argumentos forem passados, calcule a área de um retângulo
        return a * b;
    }
}

console.log(calcularArea(10));      // 16 (área de um quadrado)
console.log(calcularArea(4, 5));   // 20 (área de um retângulo)
