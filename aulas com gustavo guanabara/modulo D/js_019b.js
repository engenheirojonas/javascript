function verificar() { 
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res') 
   
    if (fano.value.length == 0 || Number(fano.value) > ano) { 
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var saudar = document.getElementById('saudar')

        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade >= 0 && idade <= 11) {
                    //criança
                    img.setAttribute('src', 'js_019/menino.png')
                    saudar.innerHTML = 'Olá, menino!'
                } else if (idade >= 12 && idade <= 17) {
                    img.setAttribute('src', 'js_019/adolescente-homem.png')
                    saudar.innerHTML = 'Olá, Adolescente!'
                } else if (idade >= 18 && idade <= 44) {
                    img.setAttribute('src', 'js_019/jovem-homem.png')
                    saudar.innerHTML = 'Olá, Jovem! Aproveite sua juventude.'
                } else if (idade >= 45 && idade <=69) {
                    img.setAttribute('src', 'js_019/Adulto.png')
                    saudar.innerHTML = 'Olá, mais velho.'
                } else {
                    img.setAttribute('src', 'js_019/Idoso.png')
                    saudar.innerHTML = 'Olá, vóvó.'
                }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
                if (idade >= 0 && idade <= 11) {
                    //criança
                    img.setAttribute('src', 'js_019/menina.png')
                } else if (idade >= 12 && idade <= 17) {
                    img.setAttribute('src', 'js_019/adolescente-mulher.png')
                    saudar.innerHTML = 'Olá, Adolescente!'
                } else if (idade >= 18 && idade <= 44) {
                    img.setAttribute('src', 'js_019/jovem-mulher.png')
                    saudar.innerHTML = 'Olá, Jovem! Aproveite sua juventude.'
                } else if (idade >= 45 && idade <=69) {
                    img.setAttribute('src', 'js_019/Adulta.png')
                    saudar.innerHTML = 'Olá, mais velha'
                } else {
                    img.setAttribute('src', 'js_019/Idosa.png')
                    saudar.innerHTML = 'Olá, vôvô.'
                }
        }
        res.innerHTML = `Detectamos que és ${genero} com ${idade} anos.
        `
        res.style.textAlign = 'center'

        //o codigo final que visualiza uma imagem apartir do html
        res.appendChild(img) }
    }