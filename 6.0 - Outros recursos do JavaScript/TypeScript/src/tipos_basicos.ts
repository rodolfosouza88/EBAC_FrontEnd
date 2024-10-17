import { LocalActivityTwoTone } from "@material-ui/icons";

// Tipos básicos
let estaChovendo: boolean = false;
const Nacionalidade: string = 'Brasileiro';

// Arrays
const colegas: string[] = ['Leo', 'Hugo', 'Dherik'];
const tecnologias: Array<string> = ['CSS', 'HTML', 'JavaScript'];

// Array de apenas leitura
const notas: ReadonlyArray<number> = [9, 10, 8, 7.5];

// Tupla
const lista: [nome: string, matriculado: boolean, idade: number] = ['Rodolfo', true, 36];

// Union Types
let idadeRodolfo: string | number = 36;
idadeRodolfo = 36; // número
idadeRodolfo = '36 anos'; // string

// Any type
let qualquerCoisa: any; // aceita qualquer tipo de dado
