/* esse pequeno programe pergunta a tua idade e depois te diz se podes ou nao votar
*/
var idade = 17
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
}

/*no modo terminal do javascript usando node, podemos selecionar uma linha de comando e apenas executar aquilo.
 */

// Ou melhor

var idade = 19
if (idade < 16) {
    console.log('Não vota')
} else if (idade <= 18) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
}