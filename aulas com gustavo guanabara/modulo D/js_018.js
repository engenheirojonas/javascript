function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()  //podes definir um valor fixo (exemplo: 13, 14, 20, ...) ao em vex de "data.getHours()"
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'js_018/manha.png'
        document.body.style.background = '#ffad00'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'js_018/tarde.png'
        document.body.style.background = '#636346'
    } else {
        //Boa noite!
        img.src = 'js_018/noite.png'
        document.body.style.background = '#172e4d'
    }
}