function contar() {

    var init = document.getElementById('init');
    var final = document.getElementById('final');
    var passo = document.getElementById('jump');
    var res = document.getElementById('res')

    if (init.value.length == '' || final.value.length == '' || passo.value == '') {
        window.alert('[ERRO] Digite um valor válido')
    } else {
        res.innerHTML = `Contando: <br>`
        var initvalue = Number(init.value);
        var finalvalue = Number(final.value);
        var passovalue = Number(passo.value);

        if (initvalue > finalvalue) {
            for (calc = initvalue; calc >= finalvalue; calc -= passovalue) {
                res.innerHTML += `${calc} `;
            }
        } else {
            for (calc2 = initvalue; calc2 <= finalvalue; calc2 += passovalue) {
                res.innerHTML += `${calc2} `;
            }
        }
    }

}