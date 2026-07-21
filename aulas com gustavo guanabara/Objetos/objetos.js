/* o básico
os fundamentos do que é um objeto e do que ele serve para o nosso dia a dia, em que ele é útil.

Pra coisas simples, o array serve muito bem, mas para coisas mais avançadas o array começa a ficar um pouco limitado. porque o indice não se pode renomear
pois se eu colocar o valor "nome" na primeira casa (indice) eu não consigo chamar aquela parte (indice) de baixo de nome,

array declara com colchetes [], se você quiser declarar um objeto é só você utilizar chaves {},

OBJETOS
Os objetos são variáveis, variável guarda valores, só que além de guarda valores, que são os atributos,
objetos podem guardar funcionalidades, que é oque a gente chama de métodos.

*/

let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        //auto referencia ao objeto
        this.peso += p
    }
}
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)


//Outramente
let cliente = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        //auto referencia ao objeto
        this.peso += p
    }
}
//aumentar o peso 
console.log(`Engordou ${cliente.engordar(5)}`)  //basta mudar o valor 5

console.log(`${cliente.nome} pesa ${cliente.peso} Kg`)