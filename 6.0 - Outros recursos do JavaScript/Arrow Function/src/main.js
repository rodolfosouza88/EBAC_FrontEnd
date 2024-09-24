// 1. Função básica de soma

// Função tradicional
function somarTradicional(a, b) {
    return a + b;
}

// Usando arrow function
const somarArrow = (a, b) => a + b;

console.log(somarTradicional(3, 5)); // 8
console.log(somarArrow(3, 5)); // 8

// 2. Arrow function sem parâmetros

const digaOi = () => 'Oi!';
console.log(digaOi()); // "Oi!"

// 3. Arrow function com um parâmetro

const cumprimentar = nome => `Olá, ${nome}!`;
console.log(cumprimentar('Rodolfo')); // "Olá, Rodolfo!"

// 4. Arrow function com várias instruções

const multiplicar = (a, b) => {
    const resultado = a * b;
    return resultado;
};
console.log(multiplicar(4, 3)); // 12

// 5. Arrow function sem `return` explícito

const dobro = num => num * 2;
console.log(dobro(5)); // 10

// 6. Arrow function como callback

const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8]

// 7. Arrow function sem alterar o `this`

function Pessoa(nome) {
    this.nome = nome;

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`);
    };
}

const rodolfo = new Pessoa('Rodolfo');
rodolfo.falar(); // "Meu nome é Rodolfo"
