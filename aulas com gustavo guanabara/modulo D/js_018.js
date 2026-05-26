function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()  //podes definir um valor fixo (exemplo: 13, 14, 20, ...) ao em vex de "data.getHours()"
    var saudacao = window.document.getElementById('saudar')
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'js_018/manha.png'
        document.body.style.background = '#926504ee'
        saudacao.innerHTML = 'Bom dia Senhor(a)'

    } else if (hora >= 12 && hora <= 17) {
        //Boa tarde!
        img.src = 'js_018/tarde.png'
        document.body.style.background = '#636346'
        saudacao.innerHTML = 'Boa tarde Senhor(a)'
    } else {
        //Boa noite!
        img.src = 'js_018/noite.png'
        document.body.style.background = '#172e4d'
        saudacao.innerHTML = 'Boa noite Senhor(a)'
    }
}