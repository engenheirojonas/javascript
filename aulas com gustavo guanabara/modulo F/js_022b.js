//somar 2 numeros diferentes definindo os dois numeros
function soma1(n1, n2) {
   return n1 + n2
}
console.log(soma1(2, 7))


/*se o segundo numero nao for definido, se somara
n1 + undefinied = NaN 
    o NaN quer dizer, Not a Number

n1 + Nada = NaN 
*/
function soma2(n1, n2) {
   return n1 + n2
}
console.log(soma2(2))


//para evitar NaN, faremos o seguinte:
function soma3(n1=0, n2=0) {
   return n1 + n2
}
console.log(soma3(2))