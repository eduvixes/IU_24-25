class test{

    constructor(entidad){
        this.nombreentidad = entidad;
    }

    test_run(){

        this.resolve_def_test();
        this.resolve_pruebas();
        this.resolve_pruebas_file();

    }

    resolve_def_test(){

        this.verificarDefTest();


    }



    verificarDefTest(){

        let probe_def = eval("def_tests_"+this.nombreentidad);
        let filacorrecta = true;

        let salidatabla = "<tr><th>Num Def Test</><th>Campo</th><th>Num. DefTest</th><th colspan='7'>Datos</th>";
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
                (typeof(element[4])=='string') &&
                ((typeof(element[5])=='string') || (typeof(element[5])=='boolean')) &&
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
    
        document.getElementById('tablaresultadostest').innerHTML = salidatabla;
    
        if (filacorrecta){
            document.getElementById('resultadodef').innerHTML = 'formato correcto en las pruebas de test';
        }
    
        document.getElementById('div_IU_test').style.display = 'block';
    
    }

}