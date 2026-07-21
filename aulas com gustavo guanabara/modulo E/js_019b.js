function contar() {
    let ini = document.getElementById('txtInicio')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F6B6}`
            } 
        } else {
                //contagem regressiva
                for(let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F6B6}`
                }
            }
        res.innerHTML += '\u{1F3C3} '
    }
}