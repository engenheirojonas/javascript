/* A principal diferença está no escopo e na redeclaração.

Enquanto o var possui escopo global ou de função (podendo ser redeclarado livremente), 

o let possui escopo de bloco, sendo mais seguro e previsível para o desenvolvimento de software moderno.

Aqui estão os detalhes destas diferenças:

    1. Escopo (Onde a variável existe)
        var: Tem escopo de função ou global. Se você declará-la dentro de um bloco (como um if ou for), ela "vazará" e poderá ser acessada fora dele.

        let: Tem escopo de bloco. Ela só existe dentro do par de chaves { } onde foi criada (como dentro de um if, while ou for), o que evita conflitos no código.
    
    2. Redeclaração
        var: Permite que a mesma variável seja declarada novamente dentro do mesmo escopo sem gerar erros, o que pode causar acidentes ao sobrescrever variáveis.
        
        let: Não permite ser declarada novamente no mesmo escopo. Se você tentar, o JavaScript retornará um erro.
        
    3. Comportamento no Hoisting (Elevação)
        var: É "elevada" para o topo do seu escopo e inicializada com o valor undefined antes mesmo da linha em que foi declarada ser lida.
        
        let: Também é elevada ao topo, mas não é inicializada. Tentar usá-la antes de sua declaração resulta em um erro de referência.
*/

function contar() {
    let ini = document.getElementById('txtInicio')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados')
    } else {
        alert('Tudo ol')
    }
}