
function mostrar_error_campo(id, codigoerror){
	document.getElementById('div_error_'+id).style.display = 'inline';
	document.getElementById('div_error_'+id).innerHTML = codigoerror;
	document.getElementById(id).style.borderBlockColor = 'red';
	document.getElementById('submit_button').focus();
}

function mostrar_exito_campo(id){
	document.getElementById('div_error_'+id).style.display = 'none';
	document.getElementById('div_error_'+id).innerHTML = '';
	document.getElementById(id).style.borderBlockColor = 'green';
}

 function mostrarTitulos(columnasamostrar){


        if (document.getElementById("titulostablacabecera")){

            return document.createElement('a');
        }
        else{

            let cabecera = document.createElement('thead');

            cabecera.id = "titulostablacabecera";
        
            let textolineatitulos = '<tr>';
        
            for (let atributo in columnasamostrar){
        
                textolineatitulos += '<th class="'+columnasamostrar[atributo]+'"></th>';
        
            }
        
            textolineatitulos += '<th colspan="3"></th>';
        
            textolineatitulos += '</tr>';
        
            cabecera.innerHTML = textolineatitulos;
        
            return cabecera;
        
        }
    
    }

    function mostrarDatos(entidad, datosfilas){

        if (document.getElementById("muestradatostabla")){
            //retornar elemento neutro a incluir en el html
        }
        else{
            let cuerpo = document.getElementById('muestradatostabla');
                   
            let textolineadatos = '';
        
            for (let i=0;i<datosfilas.length;i++){
        
                textolineadatos += '<tr style="background-color:grey;">';
    
        
                for (let clave in datosfilas[i]){
        
                    if (columnasamostrar.includes(clave)){
        
                        textolineadatos += '<td>'+datosfilas[i][clave]+'</td>';
        
                    }
                }
        
                // crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)
        
                let lineaedit = crearboton(entidad, 'EDIT', JSON.stringify(datosfilas[i]));
                let lineadelete = crearboton(entidad, 'DELETE', JSON.stringify(datosfilas[i]));
                let lineashowcurrent = crearboton(entidad, 'SHOWCURRENT', JSON.stringify(datosfilas[i]));
        
                textolineadatos += lineaedit+lineadelete+lineashowcurrent;
        
                textolineadatos += '</tr>';
        
            }
            
            cuerpo.innerHTML = textolineadatos;
        
        }
    
    }

    function crearboton(entidad, accion, parametros){
        let columna = document.createElement('td');
        let opcion = document.createElement('img');
        opcion.src = "./iconos/"+accion+'.png';
        let textoonclick = "Gestion_"+entidad+".createForm_"+accion+"("+parametros+");";
        opcion.setAttribute('onclick',textoonclick);
        columna.appendChild(opcion);
        return columna.outerHTML;
    
    }
