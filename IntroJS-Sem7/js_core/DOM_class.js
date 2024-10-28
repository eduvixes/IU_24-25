class DOM_class{

    constructor(){

    }

mostrar_error_campo(id, codigoerror){
	document.getElementById('div_error_'+id).style.display = 'inline';
	document.getElementById('div_error_'+id).innerHTML = codigoerror;
    document.getElementById('div_error_'+id).className = codigoerror;
    document.getElementById(id).className = 'errorcampo';
	document.getElementById('submit_button').focus();
    setLang();
}

mostrar_exito_campo(id){
	document.getElementById('div_error_'+id).style.display = 'none';
	document.getElementById('div_error_'+id).innerHTML = '';
    document.getElementById(id).className = 'exitocampo';
}

mostrarTitulos(columnasamostrar){

            let textolineatitulos = '<tr>';
        
            for (let atributo in columnasamostrar){
        
                textolineatitulos += '<th class="'+columnasamostrar[atributo]+'">'+columnasamostrar[atributo]+'</th>';
        
            }
        
            textolineatitulos += '<th colspan="3"></th>';
        
            textolineatitulos += '</tr>';
        
            let cabecera = document.getElementById("titulostablacabecera");
            cabecera.innerHTML = textolineatitulos;
        
            return cabecera;
        
}

crearboton(entidad, accion, parametros){
        let columna = document.createElement('td');
        let opcion = document.createElement('img');
        opcion.src = "./iconos/"+accion+'.png';
        let textoonclick = "validar.createForm_"+accion+"("+parametros+");"
        opcion.setAttribute('onclick',textoonclick);
        columna.appendChild(opcion);
        return columna.outerHTML;
    
}


mostrarDatos(entidad, datosfilas, columnasamostrar){

            let textolineadatos = '';

            for (let i=0;i<datosfilas.length;i++){
        
                textolineadatos += '<tr style="background-color:grey;">';
    
                for (let j=0;j<columnasamostrar.length;j++){
    
                    let clave = columnasamostrar[j];
        
                        if (this.datosespecialestabla.includes(clave)){
                            let valorcolumna = this.cambiardatosespecialestabla(clave,datosfilas[i][clave]);
                            textolineadatos += '<td>'+valorcolumna+'</td>';
                        }
                        else{
                            textolineadatos += '<td>'+datosfilas[i][clave]+'</td>';
                        }
        
                }
        
                // crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)
        
                let lineaedit = this.crearboton(entidad, 'EDIT', JSON.stringify(datosfilas[i]));
                let lineadelete = this.crearboton(entidad, 'DELETE', JSON.stringify(datosfilas[i]));
                let lineashowcurrent = this.crearboton(entidad, 'SHOWCURRENT', JSON.stringify(datosfilas[i]));
        
                textolineadatos += lineaedit+lineadelete+lineashowcurrent;
        
                textolineadatos += '</tr>';
        
            }
            
            let cuerpo = document.getElementById('muestradatostabla');
            cuerpo.innerHTML = textolineadatos;
        
        }
    
    cerrar_formulario(){

        document.getElementById("IU_form").innerHTML = '';
        document.getElementById("IU_form").setAttribute('onsubmit',"");
        document.getElementById("IU_form").setAttribute('action',"");
        document.getElementById("div_IU_form").style.display = 'none';

    }

    cerrar_test(){
        document.getElementById("contenidoTests").style.display = 'none';
        document.getElementById("tablaresultadostest").innerHTML = '';
    }

    cerrar_pruebas(){
        document.getElementById("contenidoPruebas").style.display = 'none';
        document.getElementById("tablaresultadosprueba").innerHTML = '';
    }

    cerrar_tabla(){

        document.getElementById("titulostablacabecera").innerHTML = '';
        document.getElementById("muestradatostabla").innerHTML = '';
        document.getElementById("id_tabla_datos").style.display = 'none';

    }

    mostrar_boton_test(){
        document.getElementById('botonTEST').style.display = 'inline';
    }


} // fin de clase
