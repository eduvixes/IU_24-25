class ExternalAccess{

	constructor(){

	}

    peticionBackGeneral(formulario, controlador, action, datosextra=null){

        var datos;
        
        if (formulario === ''){
            datos = new FormData();
        }
        else{
            formulario = document.getElementById(formulario);
            datos = new FormData(formulario);
        }
    
        datos.append('controlador', controlador);
        datos.append('action', action);
    
        if (datosextra==null){}
        else{
            for(var clave in datosextra){
                datos.append(clave, datosextra[clave]);
            }
        }
        
        return new Promise(function(resolve) { 
            $.ajax({
                type :"POST",
                url : "http://193.147.87.202/ET2/index.php",
                data : datos,
                processData : false,
                contentType : false,
            })
            .done(res => {
                resolve(res);
            })
            .fail(res => {
                alert('error : '+res.status);
            })
    
        });
    
    }


}
