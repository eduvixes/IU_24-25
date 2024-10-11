class Manejo_Dom{

    constructor(){

    }

mostrar_error_campo(id, codigoerror){
	document.getElementById('div_error_'+id).style.display = 'inline';
	document.getElementById('div_error_'+id).innerHTML = codigoerror;
	document.getElementById(id).style.borderBlockColor = 'red';
	document.getElementById('submit_button').focus();
}

mostrar_exito_campo(id){
	document.getElementById('div_error_'+id).style.display = 'none';
	document.getElementById('div_error_'+id).innerHTML = '';
	document.getElementById(id).style.borderBlockColor = 'green';
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
    
        
                for (let clave in datosfilas[i]){
        
                    if (columnasamostrar.includes(clave)){
        
                        if (this.datosespecialestabla.includes(clave)){
                            let valorcolumna = this.cambiardatosespecialestabla(clave,datosfilas[i][clave]);
                            textolineadatos += '<td>'+valorcolumna+'</td>';
                        }
                        else{
                            textolineadatos += '<td>'+datosfilas[i][clave]+'</td>';
                        }
        
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
    


} // fin de clase