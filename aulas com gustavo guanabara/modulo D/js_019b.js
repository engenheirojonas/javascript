function verificar() { 
    var data = new Date() 
    var ano = 2026//data.getFullYear() // Guarda o ano atual (ex: 2026)
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res') 
    
    // CORREÇÃO: fano.value convertido para número e comparado com a variável ano
    if (fano.value.length == 0 || Number(fano.value) > ano) { 
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        /*como fazer aparecer uma imagem apartir do javascript
        1. declarar o seguinte
            var img = document.createElement('img')
        
        2. depois logo apos a declaraçao
            img.setAttribute('id', 'foto')

        3. por fim no fim de todas as condiçoes 
            res.appendChild(img)

                res represente a div do html onde a imagem vai aparecer
         */

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var saudar = document.getElementById('saudar')

        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade = 0 && idade <= 11) {
                    //criança
                    img.setAttribute('src', 'js_019/menino.png')
                    saudar.innerHTML = 'Olá, menino'
                } else if (idade = 12 && idade <= 17) {
                    //Adolescente
                    img.setAttribute('src', 'js_019/adolescente-homem.png')
                    saudar.innerHTML = 'Olá, Adolescente'
                } else if (idade = 18 && idade <= 44) {
                    //Jovem
                    img.setAttribute('src', 'js_019/jovem-homem.png')
                    saudar.innerHTML = 'Olá, Jovem'
                } else if (idade = 45 && idade <= 69) {
                    //Adulto
                    img.setAttribute('src', 'js_019/Adulto.png')
                    saudar.innerHTML = 'Olá, Adulto'
                } else {
                    //Idoso
                    img.setAttribute('src', 'js_019/Idoso.png')
                    saudar.innerHTML = 'Olá, Mais-velho'
                }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
                  if (idade = 0 && idade < 11) {
                    //criança
                    img.setAttribute('src', 'js_019/menina.png')
                    saudar.innerHTML = 'Olá, menina'
                } else if (idade = 12 && idade <= 17) {
                    //Adolescente
                    img.setAttribute('src', 'js_019/adolescente-mulher.png')
                    saudar.innerHTML = 'Olá, Adolescente'
                } else if (idade = 18 && idade <= 44) {
                    //Jovem
                    img.setAttribute('src', 'js_019/jovem-mulher.png')
                    saudar.innerHTML = 'Olá, Jovem'
                } else if (idade = 45 && idade <= 69) {
                    //Adulto
                    img.setAttribute('src', 'js_019/Adulta.png')
                    saudar.innerHTML = 'Olá, Adulta'
                } else {
                    //Idoso
                    img.setAttribute('src', 'js_019/Idosa.png')
                    saudar.innerHTML = 'Olá, Mais-velha'
                }
        }
        res.innerHTML = `Detectamos que és ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'

        //o codigo final que visualiza uma imagem apartir do html
        res.appendChild(img)
    }
}