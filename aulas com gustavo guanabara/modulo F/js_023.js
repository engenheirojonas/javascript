let num = document.querySelector('input#txtNum')
let lista = document.querySelector('select#listNum')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) //-1 indica que o valor não foi encontrado na lista 
    {
    return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        //adicionar o valor no vetor
        valores.push(Number(num.value))

        //adicionar o valor no SELECT
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finOpera() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        /* esse codigo vai analizar cada valor adicionado um por um até verificar qual o valor maior e qual o valor menor */
        for(let pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]

            //aqui o sistema fara a soma de todos os valores adicionados
            soma += valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media de todos os valores é ${media}.</p>`

    }
}

function refresh() {
    //para apagar os options de um select um por um
    const select = document.getElementById("listNum")
    while (select.firstChild) {
    select.removeChild(select.firstChild)
    }

    res.innerHTML = ''
}