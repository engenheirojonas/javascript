//PERCURSO PARA EXIBIÇAO DE VETORES
// vetor na tela

let valores = [5,8,2,9,3]



/*primeira forma de mostrar los na tela

console.log(valores)

*/



/*segunda forma de mostrar los na tela

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

*/



/* terceira foram de mostrar os vetores na tela - assimm voce podes Personalizar a saida na tela


for (let pos=0; pos<valores.length; pos++) {
    console.log(`A POSIÇAO ${pos} tem o valor ${valores[pos]}`)
}

*/



/* A QUARTA FORMA, a mais simples e a Recomendada
a maneira mais simplificado. este 
"FOR" que só funciona para "VETORES" E "OBJETOS"
"FOR" otimizado para variaveis compostas ou vetores
*/

//lê-se: para cada posiçao dentro do num ..... mostra o 
for (let pos in valores) {
    console.log(`A POSIÇAO ${pos} tem o valor ${valores[pos]}`)
}