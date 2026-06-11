//verificar se um número é impar ou par

function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

//chamada definindo uma variavel
let res = parimp(10)
console.log(res)

//ou fazer a chamada sem definir a variavel
console.log(parimp(25))