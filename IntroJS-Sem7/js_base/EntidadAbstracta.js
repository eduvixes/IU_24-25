class EntidadAbstracta extends DOM_class{

	constructor(){
		super();
	}

	inicializar(){

		if (eval(this.datosespecialestabla)){}
		else{
			this.datosespecialestabla = Array();
		}

		this.access_functions = new ExternalAccess();
		this.validaciones = new validacionesatomicas();
		this.test = new test(this.entidad);

		// mostrar boton de test una vez creada la clase de entidad
		this.mostrar_boton_test();

		// poner no visible los test y vaciarlos
		document.getElementById('div_IU_test').style.display = 'none';
		this.cerrar_test();
		this.cerrar_pruebas();
		
		this.SEARCH();


	}

	/*

	crearTablaDatos(){

		document.getElementById("id_tabla_datos").style.display = 'block';
		this.mostrarTitulos(this.columnasamostrar);
		this.mostrarDatos(this.entidad, this.datos, this.columnasamostrar);
	
	}

	*/

	crearTablaDatos(){

		document.getElementById("id_tabla_datos").style.display = 'block';

		//construir tabla
		this.hacertabla();
		//construir select
		this.construirSelect();
		
		//ocultar segun columnasamostrar
		this.mostrarocultarcolumnas();

	}

	cargar_formulario(){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}
		else{
			if (eval(this.cargar_formulario_dinamico)){
				this.cargar_formulario_dinamico();
			}
			else{
				alert('no existe formulario');
			}
		}

	}

	/*
	cargar_formulario_html(){
		return false;
	}

	cargar_formulario_dinamico(){
		return false;
	}

*/
	async SEARCH(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'SEARCH')
        .then((respuesta) => {
            
            //limpiar el formulario
        	this.cargar_formulario_html();

            //poner el div del formulario no visible
            document.getElementById("div_IU_form").style.display = 'none';

            this.datos = respuesta['resource'];

            if (respuesta['code'] == 'RECORDSET_DATOS'){
            	this.crearTablaDatos();
            }
            else{
				document.getElementById("id_tabla_datos").style.display = 'block';
				this.mostrarTitulos(this.columnasamostrar);
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }

        });
    
    }

    async ADD(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'ADD')
        .then((respuesta) => {

        	if (respuesta['ok']){
            
	            //limpiar el formulario
	            this.cargar_formulario();

	            //poner el div del formulario no visible
	            document.getElementById("div_IU_form").style.display = 'none';

	            this.SEARCH();

	        }
	        else{

	        	// mostrar mensaje error accion
	        	alert('error : '+respuesta['code']);
	        }

        });
    
    }

    async DELETE(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'DELETE')
        .then((respuesta) => {

        	if (respuesta['ok']){
            
	            //limpiar el formulario
	            this.cargar_formulario();

	            //poner el div del formulario no visible
	            document.getElementById("div_IU_form").style.display = 'none';

	            this.SEARCH();
	        }
	        else{

	        	// mostrar mensaje error accion
	        	alert('error : '+respuesta['code']);
	        }

        });
    
    }

    async EDIT(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'EDIT')
        .then((respuesta) => {

        	if (respuesta['ok']){
            
	            //limpiar el formulario
	            this.cargar_formulario();

	            //poner el div del formulario no visible
	            document.getElementById("div_IU_form").style.display = 'none';

	            this.SEARCH();

	        }
	        else{

	        	// mostrar mensaje error accion
	        	alert('error : '+respuesta['code']);
	        }

        });
    
    }

	cambiacolumnastabla(atributo){

		/*if (this.columnasamostrar.includes(atributo)){
			this.columnasamostrar = this.columnasamostrar.filter(columna => columna != atributo);
			this.mostrarDatos();
		}
		else{
			alert('no esta');
		}*/

		document.querySelector("th[class='"+atributo+"']").style.display = 'none';

	}

}
