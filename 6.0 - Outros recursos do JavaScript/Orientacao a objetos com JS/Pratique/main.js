// Classe Abstrata
class Animal {
    constructor(nome) {
        if (this.constructor === Animal) {
            throw new Error("Não é possível instanciar uma classe abstrata.");
        }
        this.nome = nome;
    }

    falar() {
        throw new Error("Método 'falar' deve ser implementado.");
    }
}

// Classe Cachorro que herda de Animal
class Cachorro extends Animal {
    falar() {
        return `${this.nome} diz: Au Au!`;
    }
}

// Classe Gato que herda de Animal
class Gato extends Animal {
    falar() {
        return `${this.nome} diz: Miau!`;
    }
}

// Criando instâncias
let rex = new Cachorro("Rex");
let mimi = new Gato("Mimi");
let bolinha = new Cachorro("Bolinha");

// Chamando o método falar
console.log(rex.falar());    // "Rex diz: Au Au!"
console.log(mimi.falar());   // "Mimi diz: Miau!"
console.log(bolinha.falar()); // "Bolinha diz: Au Au!"
