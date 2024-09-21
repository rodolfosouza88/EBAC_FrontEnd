function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function () {
        console.log(this.nome + " diz: Olá")
    }
}

function Funcionario (nome, cargo, salario) {    
    this.cargo = cargo;
    let _salario = salario;

        this.retornaSalario = function () {
            return _salario
        }

    Pessoa.call(this, nome);

}


const funcionario1 = new Funcionario("Rodolfo", "Dev Front-end", 5000)

console.log(funcionario1.retornaSalario());

