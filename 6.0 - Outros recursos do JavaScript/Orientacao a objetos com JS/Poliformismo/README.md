# Poliformisnmo

## O que é Polimorfismo

Polimorfismo significa muitas formas. Em programação, isso quer dizer que diferentes objetos podem ter métodos com o mesmo nome, mas que fazem coisas diferentes dependendo do objeto.

### Exemplo simples
Imagine que você tem dois animais um Cachorro e um Gato. Ambos podem fazer um som, mas o som que eles fazem é diferente. O cachorro vai latir, e o gato vai miar.

Agora, a mágica do polimorfismo é que você pode dar o mesmo comando para ambos (falar), e cada um vai fazer a sua própria coisa!

Como isso funciona no código.

### O que acontece aqui:

Cachorro e Gato herdam de Animal, mas cada um implementa seu próprio comportamento para o método falar.
Mesmo que o método tenha o mesmo nome (falar), o comportamento é diferente para cada classe filha. Isso é polimorfismo: vários "tipos" (Cachorro, Gato) podem "falar" de maneiras diferentes.