//outra forma de fazer este programa
var idade = 19
console.log('Você tens ${idade} anos')
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
}