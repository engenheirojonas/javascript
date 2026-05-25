/*
        CONDIÇÃO MÚLTIPLA
    ela tem a possibilidade de valores fixos; é muito util em situaçoes pontuais ou especificos.
    é tambem uma forma de abreviar as if
    
    e é necessario inserir o break

    o swich só funciona com numeros e caracteres string entre aspas. isso não dá para intervalos (ex > 18)

    E é muito limitado do que o if mas se usa em situaçoes pontuais
 */

var agorar = new Date()
var diaSem = agora.getDay()

/*
quando se trata de dias da semana, em javascript, sao representados pelos numeros
    
    0 = Domingo
    1 = Segunda-feira
    2 = Terça-feira
    3 = Quarta-feira
    4 = Quinta-feira
    5 = Sexta-feira
    6 = Sábado

*/

console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break

}