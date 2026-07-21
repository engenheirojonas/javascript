function verificar() { 
    var data = new Date() 
    var ano = data.getFullYear() // Guarda o ano atual (ex: 2026)
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res') 
    
    // CORREÇÃO: fano.value convertido para número e comparado com a variável ano
    if (fano.value.length == 0 || Number(fano.value) > ano) { 
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamo ${genero} com ${idade} anos.`

        //centalizar texto usando javascript
        res.style.textAlign = 'center'
    }
}