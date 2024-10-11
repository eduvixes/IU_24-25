function verificarDefTest(){

    probe_def = def_test;

    salidatabla = "<tr><th>Num Def Test</><th>Campo</th><th>Num. DefTest</th><th colspan='7'>Datos</th>";
    let salidalinea = '';
    
    probe_def.forEach(element => {
        salidalinea = "<tr>";
        salidalinea += '<td>'+element[0]+'</td>';
        salidalinea += '<td>'+element[1]+'</td>';
        salidalinea += '<td>'+element[2]+'</td>';
        filacorrecta = true;
        for (let i=0;i<7;i++){
            salidalinea += '<td>'+typeof(element[i])+'</td>';
        }
        if (
            (typeof(element[0])=='string')  &&
            (typeof(element[1])=='string')  &&
            (typeof(element[2])=='number')  &&
            (typeof(element[3])=='string')  &&
            (typeof(element[4])=='boolean') &&
            (typeof(element[5])=='string') &&
            (typeof(element[6])=='string')
            ){
                salidalinea += '<td>CORRECTA</td>';
            }
        else
            {
                salidalinea += '<td>ERROR</td>';
                filacorrecta = false;
            }
        salidalinea += "</tr>";
        salidatabla += salidalinea;
    });

    document.getElementById('tabla_def').innerHTML = salidatabla;

    if (filacorrecta){
        document.getElementById('resultadodef').innerHTML = 'formato correcto en las pruebas de test';
    }

    document.getElementById('testdefiniciones').style.display = 'block';

}

function verificarPruebas(){

    probe_def = pruebasunitarias_;

    salidatabla = "<tr><th>Num Def Test</><th>Campo</th><th>Num.Prueba</th><th colspan='6'>Datos</th>";
    let salidalinea = '';
    
    probe_def.forEach(element => {
        salidalinea = "<tr>";
        salidalinea += '<td>'+element[0]+'</td>';
        salidalinea += '<td>'+element[2]+'</td>';
        salidalinea += '<td>'+element[3]+'</td>';
        filacorrecta = true;
        for (let i=0;i<6;i++){
            salidalinea += '<td>'+typeof(element[i])+'</td>';
        }
        if (
            (typeof(element[0])=='number')  &&
            (typeof(element[1])=='string')  &&
            (typeof(element[2])=='string')  &&
            (typeof(element[3])=='number')  &&
            (typeof(element[4])=='string')  &&
            (typeof(element[5])=='boolean') 
            ){
                salidalinea += '<td>CORRECTA</td>';
            }
        else
            {
                salidalinea += '<td>ERROR</td>';
                filacorrecta = false;
            }
        salidalinea += "</tr>";
        salidatabla += salidalinea;
    });

    document.getElementById('tabla_prueba').innerHTML = salidatabla;

    if (filacorrecta){
        document.getElementById('resultadoprueba').innerHTML = 'formato correcto en las pruebas de test';
    }

    document.getElementById('testpruebas').style.display = 'block';

}

function probeintest(){
    
    salidatabla = "";
    def_test.forEach(element => {
        pruebaspordefinicion = buscarencolumna(pruebasunitarias_, element[2], element[1]);
        if (pruebaspordefinicion < 2){
            salidatabla += "<tr><td>En el campo "+element[1]+" y test definido "+element[3]+" deberia tener al menos una prueba de exito y una de error</td></tr>";
        }
        else{
            salidatabla += "<tr><td>En el campo "+element[1]+" para el test definido "+element[3]+" => existen "+pruebaspordefinicion+" pruebas</td></tr>";
        }
    });
    document.getElementById('tabla_pruebaentest').innerHTML = salidatabla;
    document.getElementById('pruebasentest').style.display = 'block';
}

function buscarencolumna(arraydepruebas, numtestdef, campo){

    let coincidencias = 0;
    arraydepruebas.forEach(element => {
        if ((element[0] == numtestdef) && (element[2] == campo)){
            coincidencias++;
        }
    });
    return coincidencias;
}
