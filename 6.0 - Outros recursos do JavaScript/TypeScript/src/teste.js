"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos Básicos
let estaChovendo = true;
let idade = 36;
let altura = 1.77;
let nome = "Rodolfo";
// Arrays
// Tipando arrays
const colegas = ["Rodolfo", "Nathalee", "David"];
// Outra forma de tipar arrays
const tecnologias = ["React", "TypeScript", "Vue.js"];
// Array de apenas leitura - readonly array
const notas = [7, 9, 10];
//tipo Any
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = false;
dadosDaApi = "Rodolfo";
// Tuplas
const lista = ["Rodolfo", true, 36];
// União de Tipos
let idadeDoRodolfo = 26;
idadeDoRodolfo = "36 anos";
// Enum - Define um conjunto de valores nomeados
var Status;
(function (Status) {
    Status[Status["Sucesso"] = 0] = "Sucesso";
    Status[Status["Aguardando"] = 1] = "Aguardando";
    Status[Status["Erro"] = 2] = "Erro";
})(Status || (Status = {}));
let estadoAtual = Status.Sucesso;
console.log(estadoAtual); // Saída: 0 (valor do enum)
const produto1 = {
    nome: "Teclado Mecânico",
    preco: 250.00,
    emEstoque: true
};
// Funções tipadas
function somar(a, b) {
    return a + b;
}
const resultado = somar(5, 3);
console.log(resultado); // Saída: 8
// Funções que retornam 'void' (sem retorno)
function mostrarMensagem(mensagem) {
    console.log(mensagem);
}
mostrarMensagem("Bem-vindo ao TypeScript!");
const usuario1 = {
    nome: "Rodolfo",
    idade: 36,
    email: "rodolfovasconcellos88@gmail.com"
};
// Type Assertions - Forçando um tipo específico
let valor = "Este é um texto";
let tamanhoTexto = valor.length;
console.log(tamanhoTexto); // Saída: 16
// Classes - Orientação a Objetos
class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
    mostrarInformacoes() {
        console.log(`Carro: ${this.marca}, Ano: ${this.ano}`);
    }
}
const meuCarro = new Carro("Toyota", 2021);
meuCarro.mostrarInformacoes(); // Saída: Carro: Toyota, Ano: 2021
