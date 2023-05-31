function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
        // window.alert('Faltam dados')
    } else {
        res.innerHTML = `Contando: <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <=0) {
            window.alert('Passo inválido!!! Considerando passo 1')
            p = 1
        }

        if (i < f){
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} → `
            }
        } else {
            for (var c = i; c >= f; c -= p)
            res.innerHTML += `${c} → `
        }
        res.innerHTML += 'FIM'



    }
}