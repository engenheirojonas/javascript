/*
Variavel composta

uma "variavel composta" ou um "vetor" ou um "Array" é um conjunto de elemento em que cada elemento tem um conteudo(valor) e uma chave (ou indice)

exemplo:
    var a = [chave1, chave2, chave3, chave4]

    let a = [chave1, chave2, chave3, chave4]

                    ou
    
    var a = [indice1, indice2, indice3, indice4]

    let a = [chave1, chave2, chave3, chave4]

*/

let num = [5,8,2,9,3]

console.log(`Nosso vetor é o ${num}`)


//criar uma nova chave dentro do teu vetor
num[5] = 10

console.log(`Nosso vetor é o ${num}`)


//acrescentar valores para o ultimo indice ou chave usando um metodo interno "push()" de todo elemento que é vetor que vai acrescentar um ultimo valor
num.push(25)

console.log(`Nosso vetor é o ${num}`)


//medir o comprimento do vetor com o atributo "length"
num.length

console.log(`O vetor tem ${num.length} chaves ou posiçoes`)


//mostrar posições das chaves ou indices
console.log(`o primeiro valor do vetor é: ${num[0]}`)
console.log(`o segundo valor do vetor é: ${num[1]}`)
console.log(`o terceiro valor do vetor é: ${num[2]}`)
console.log(`o quarto valor do vetor é: ${num[3]}`)
console.log(`o quinto valor do vetor é: ${num[4]}`)
console.log(`o sexto valor do vetor é: ${num[5]}`)
console.log(`o setimo valor do vetor é: ${num[6]}`)


//o metodo interno de vetores "sort()" coloca os vetores em ordem crescente
num.sort()

console.log(`Nosso vetor é o ${num}`)