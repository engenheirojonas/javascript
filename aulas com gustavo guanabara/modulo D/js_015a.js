var idade = 22
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('Voto opcional')
    }
}

// Ou melhor abreviando o ninho "else if"

var idade = 25
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 16) {
        console.log('Voto opcional')
}