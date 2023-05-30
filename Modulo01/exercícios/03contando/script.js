function contar() {
    var inicio = document.getElementById('inicio')
    var ini = Number(inicio.value)

    var fim = document.getElementById('fim')
    var teste = Number(fim.value)

    var passo = document.getElementById('passo')
    var pass = Number(passo.value)

    var res = document.getElementById('res')



    res.innerHTML = `Contando:`

    for (var krl = ini ; krl <= teste ; krl += pass) {
        res.innerHTML += `${krl} -> `
    }



}