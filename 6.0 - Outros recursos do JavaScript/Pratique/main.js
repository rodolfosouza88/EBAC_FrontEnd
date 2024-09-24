// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 6 },
    { nome: 'Pedro', nota: 4 },
    { nome: 'Ana', nota: 8 },
    { nome: 'José', nota: 5.5 }
];

// Função para retornar alunos com nota maior ou igual a 6
const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);
