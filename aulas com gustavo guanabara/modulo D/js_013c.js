//para ver o comportamento deste programa tenta mudar o valor da variavel pais
var pais = 'França'
console.log(`O seu pais é ${pais}`)

        //Condição Composta
if (pais == 'Angola'){
    console.log('Você, és Angolano')
} else {
    console.log('Você, és um Estrangeiro')
}

// Ou melhor
var pais = 'Angola'
console.log(`O seu pais é ${pais}`)
if (pais != 'Angola'){
    console.log('Você, és um Estrangeiro')
} else {
    console.log('Você, és Angolano')
}