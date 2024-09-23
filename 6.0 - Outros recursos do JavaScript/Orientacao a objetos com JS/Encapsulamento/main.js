class Carro {
    #marca;  // Atributo privado

    constructor() {
        this.#marca = 'Honda';  // Atribuindo a marca privada
    }

    getMarca() {
        return this.#marca;  // Método para acessar a marca
    }

    setMarca(novaMarca) {
        this.#marca = novaMarca;  // Método para alterar a marca
    }
}

let meuCarro = new Carro();

// Tentando acessar diretamente o atributo (isso dá erro)
// console.log(meuCarro.#marca);  // ERRO: não pode acessar diretamente

// Usando o método para ver a marca
console.log(meuCarro.getMarca());  // "Honda"

// Alterando a marca para outra (por exemplo, "Toyota")
meuCarro.setMarca('Toyota');
console.log(meuCarro.getMarca());  // "Toyota"
