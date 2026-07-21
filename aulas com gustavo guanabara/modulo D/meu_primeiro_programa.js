function verificar() { 
    var data = new Date() 
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('txtanoNasc') 
    var anoFuturo = document.getElementById('txtanoFuturo')
    var nome = document.querySelector('input#txtNome')
    
    var res = document.querySelector('div#res') 
  
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual ||  Number(anoNasc.value) < 1850) { 
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else if (anoFuturo.value.length == 0 || Number(anoFuturo.value) <= anoAtual) {
        window.alert('UPPS! O futuro começa no próximo ano, insira um valor superior ao ano atual.') 
    } else {
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var calc = Number(anoFuturo.value) - Number(anoNasc.value)
        var idade = anoAtual - Number(anoNasc.value)
        
        if (sexo[0].checked) {
            genero = 'Homem'
        } else if (sexo[1].checked) {
            genero = 'Mulher'
        }

        res.innerHTML = `O teu nome é <strong>${nome.value}</strong>, identificamos que és <strong>${genero}</strong> com <strong>${idade}</strong> anos de idade, e antevemos que em <strong>${anoFuturo.value}</strong> Você terás <strong>${calc}</strong> anos.`
    }
    
}