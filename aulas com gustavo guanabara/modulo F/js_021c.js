//BUSCAR VALORES DENTRO DUM VETOR

/* este metodo interno do vetor vai indicar a chave onde o valor procurado estiver

//digita um numero que estiver dentro do vetor
    "  num.indexOf(9)  "
*/


let num = [5,8,2,9,3]

let pos = num.indexOf(5)
console.log(`O valor 8 esá na posição ${pos}`)



/* ATENÇAO

quando o valor nao for encontrado dentro vetor, a posiçao será -1

nesse caso faremos o seguinte:
*/


let val = [5,8,2,9,3,10]

//exemplo dum valor que nao esta no vetor
let indice = num.indexOf(11)

if (indice == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 esá na posição ${indice}`)
}

