class test{

    constructor(entidad){
        this.nombreentidad = entidad;
    }

    test_run(){

        document.getElementById('div_IU_test').style.display = 'block';
        this.resolve_def_test();
        this.resolve_pruebas();
        this.array_def = eval('def_tests_'+this.nombreentidad);
        this.array_pruebas = eval('pruebas_'+this.nombreentidad);
        this.array_pruebas_file = eval('pruebas_file_'+this.nombreentidad);
        this.test_entidad();
        this.test_entidad_files();
        
        //this.resolve_pruebas_file();

    }

    resolve_def_test(){

        this.verificarDefTest();

    }

    resolve_pruebas(){

        this.verificarPruebas();

    }

    test_entidad(){

        //cargo formulario 
        let test_class = new persona(test);
        test_class.cargar_formulario_html();
        let botonsumit = document.createElement('input');
        botonsumit.id = 'submit_button';
        document.getElementById('IU_form').append(botonsumit);

        for (let i=0;i<this.array_pruebas.length;i++){
            console.log(this.array_pruebas[i]);
            var campotest = this.array_pruebas[i][1];
            var numdeftest = this.array_pruebas[i][2];
            var numprueba = this.array_pruebas[i][3];
            var acciontest = this.array_pruebas[i][4];
            var valortest = this.array_pruebas[i][5];
            var respuestatest = this.array_pruebas[i][6];

            // creo objeto html sino cargo formulario           
            
            //meto valor en objeto
            document.getElementById(campotest).value = valortest; 

            //llamo a funcion
            if (acciontest == 'SEARCH'){
                var resultadotest = eval('test_class.comprobar_'+campotest+'_SEARCH()')
            }
            else{
                //por si hay que distinguir la accion en las comprobaciones creo el atributo del objeto con la accion
                test_class.accion = acciontest;
                var resultadotest = eval('test_class.comprobar_'+campotest+'()');
            }

            // compruebo si el resultado del test y la respuesta esperada es la misma

            // presento el resultado

            console.log(resultadotest);

        }


    }

    test_entidad_files(){

        //cargo formulario 
        let test_class = new persona(test);
        test_class.cargar_formulario_html();
        let botonsumit = document.createElement('input');
        botonsumit.id = 'submit_button';
        document.getElementById('IU_form').append(botonsumit);
        let salidatest = `<tr><th>NumDefTest</th><th>NumPrueba</th><th>Prueba</th><th>valor</th><th>Respuesta Test</th><th>Respuesta esperada</th><th>Resultado</th></tr>`

        for (let i=0;i<this.array_pruebas_file.length;i++){
            console.log(this.array_pruebas_file[i]);
            var campotest = this.array_pruebas_file[i][1];
            var numdeftest = this.array_pruebas_file[i][2];
            var numprueba = this.array_pruebas_file[i][3];
            var acciontest = this.array_pruebas_file[i][4];
            var clasedetest = this.array_pruebas_file[i][5];
            var valortest = this.array_pruebas_file[i][6];
            var respuestatest = this.array_pruebas_file[i][7];

            // creo objeto html sino cargo formulario           
            
            //meto valor en objeto
            document.getElementById(campotest).value = valortest; 

            //llamo a funcion
            if (acciontest == 'SEARCH'){
                var resultadotest = eval('test_class.comprobar_'+campotest+'_SEARCH()')
            }
            else{
                //por si hay que distinguir la accion en las comprobaciones creo el atributo del objeto con la accion
                test_class.accion = acciontest;
                var resultadotest = eval('test_class.comprobar_'+campotest+'()');
            }

            // compruebo si el resultado del test y la respuesta esperada es la misma
            if (respuestatest == resultadotest){
                var resultadoestetest = 'CORRECTO';
            }
            else{
                var resultadoestetest = 'INCORRECTO';
            }

            var lineasalida = `<tr><th>`+numdeftest+`</th><th>`+numprueba+`</th><th>`+clasedetest+`</th><th>`+valortest+`</th><th>`+resultadotest+`</th><th>`+respuestatest+`</th><th>`+resultadoestetest+`</th></tr>`
            salidatest += lineasalida;
            // presento el resultado

            document.getElementById('salidaresultadosprueba').innerHTML = salidatest;
            document.getElementById('resultadopruebas').style.display = 'block';

            console.log(resultadotest);

        }


    }

    devolver_def(num_def){

        for (let i=0;i<this.array_def.length;i++){
            if (this.array_def[i][2] == num_def){
                return this.array_def[i];
            }
        }
    }



    verificarDefTest(){

        let probe_def = eval("def_tests_"+this.nombreentidad);
        let filacorrecta = true;

        let salidatabla = "<tr><th>Entidad</><th>Campo</th><th>Num. DefTest</th><th colspan='7'>Datos</th>";
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
    
        document.getElementById('contenidoTests').style.display = 'block';
    
    }

    verificarPruebas(){

        let probe_def = eval("pruebas_"+this.nombreentidad);
        let filacorrecta = true;

        let salidatabla = "<tr><th>Entidad</><th>Campo</th><th>Num.Def</th><th>Num.Prob</th><th colspan='6'>Datos</th>";
        let salidalinea = '';
        
        probe_def.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>'+element[0]+'</td>';
            salidalinea += '<td>'+element[2]+'</td>';
            salidalinea += '<td>'+element[3]+'</td>';
            filacorrecta = true;
            for (let i=0;i<7;i++){
                salidalinea += '<td>'+typeof(element[i])+'</td>';
            }
            if (
                (typeof(element[0])=='string')  &&
                (typeof(element[1])=='string')  &&
                (typeof(element[2])=='number')  &&
                (typeof(element[3])=='number')  &&
                (typeof(element[4])=='string')  &&
                (typeof(element[5])=='string')  &&
                ((typeof(element[6])=='string') || (typeof(element[6])=='boolean'))
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

        document.getElementById('tablaresultadosprueba').innerHTML = salidatabla;

        if (filacorrecta){
            document.getElementById('resultadoprueba').innerHTML = 'formato correcto en las pruebas';
        }

        document.getElementById('contenidoPruebas').style.display = 'block';

    }

} //end class