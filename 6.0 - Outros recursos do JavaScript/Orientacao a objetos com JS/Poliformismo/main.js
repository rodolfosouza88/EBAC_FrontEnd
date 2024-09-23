class Animal {
    falar() {
        return "O animal está fazendo um som.";
    }
}

class Cachorro extends Animal {
    falar() {
        return "O cachorro está latindo: Au Au!";
    }
}

class Gato extends Animal {
    falar() {
        return "O gato está miando: Miau!";
    }
}

let meuCachorro = new Cachorro();
let meuGato = new Gato();

console.log(meuCachorro.falar());  // "O cachorro está latindo: Au Au!"
console.log(meuGato.falar());      // "O gato está miando: Miau!"
