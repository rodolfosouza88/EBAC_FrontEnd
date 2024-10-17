// Importação de ícones do Material-UI
import { ContactsTwoTone } from "@material-ui/icons";

// Tipos Básicos
let estaChovendo: boolean = true;
let idade: number = 36;
let altura: number = 1.77;
let nome: string = "Rodolfo";

// Arrays
// Tipando arrays
const colegas: string[] = ["Rodolfo", "Nathalee", "David"];
// Outra forma de tipar arrays
const tecnologias: Array<string> = ["React", "TypeScript", "Vue.js"];
// Array de apenas leitura - readonly array
const notas: ReadonlyArray<number> = [7, 9, 10];

//tipo Any
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = false;
dadosDaApi = "Rodolfo"

// Tuplas
const lista: [nome: string, estaEstudando: boolean, idade: number] = ["Rodolfo", true, 36];

// União de Tipos
let idadeDoRodolfo: number | string = 26;
idadeDoRodolfo = "36 anos";

// Enum - Define um conjunto de valores nomeados
enum Status {
    Sucesso,
    Aguardando,
    Erro
}
let estadoAtual: Status = Status.Sucesso;
console.log(estadoAtual); // Saída: 0 (valor do enum)

// Type Aliases - Definindo tipos personalizados
type Produto = {
    nome: string;
    preco: number;
    emEstoque: boolean;
};

const produto1: Produto = {
    nome: "Teclado Mecânico",
    preco: 250.00,
    emEstoque: true
};

// Funções tipadas
function somar(a: number, b: number): number {
    return a + b;
}
const resultado = somar(5, 3);
console.log(resultado); // Saída: 8

// Funções que retornam 'void' (sem retorno)
function mostrarMensagem(mensagem: string): void {
    console.log(mensagem);
}
mostrarMensagem("Bem-vindo ao TypeScript!");

// Interfaces - Definindo contratos de tipos
interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

const usuario1: Usuario = {
    nome: "Rodolfo",
    idade: 36,
    email: "rodolfovasconcellos88@gmail.com"
};

// Type Assertions - Forçando um tipo específico
let valor: any = "Este é um texto";
let tamanhoTexto: number = (valor as string).length;
console.log(tamanhoTexto); // Saída: 16

// Classes - Orientação a Objetos
class Carro {
    marca: string;
    ano: number;

    constructor(marca: string, ano: number) {
        this.marca = marca;
        this.ano = ano;
    }

    mostrarInformacoes(): void {
        console.log(`Carro: ${this.marca}, Ano: ${this.ano}`);
    }
}

const meuCarro = new Carro("Toyota", 2021);
meuCarro.mostrarInformacoes(); // Saída: Carro: Toyota, Ano: 2021
