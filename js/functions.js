function contar() {

    var init = document.getElementById('init');
    var final = document.getElementById('final');
    var passo = document.getElementById('jump');
    var res = document.getElementById('res')

    if (init.value.length == '' || final.value.length == '' || passo.value == '') {
        res.innerHTML = `Impossível contar.`
    } else {
        res.innerHTML = `Contando: <br>`
        var initvalue = Number(init.value);
        var finalvalue = Number(final.value);
        var passovalue = Number(passo.value);

        if (passovalue == 0) {
            alert('Passo inválido. Considerando passo como 1');
            passovalue = 1;
        }

        //CONTAGEM DECRESCENTE
        if (initvalue > finalvalue) {
            for (calc = initvalue; calc >= finalvalue; calc -= passovalue) {
                res.innerHTML += `${calc} `;
            }
            //CONTAGEM CRESCENTE
        } else {
            for (calc2 = initvalue; calc2 <= finalvalue; calc2 += passovalue) {
                res.innerHTML += `${calc2} `;
            }
        }
    }

}