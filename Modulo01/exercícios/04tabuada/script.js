function gerar(){
    var num = Number(document.getElementById('txtnum').value)
    var res = document.getElementById('res')
    res.innerHTML = null
    for(var c=1; c<=20; c++){
    res.innerHTML += `${num} x ${c} = ${num*c}<br>`
   }
}