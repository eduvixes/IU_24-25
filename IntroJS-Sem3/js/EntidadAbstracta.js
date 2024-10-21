class EntidadAbstracta extends Manejo_Dom{

	constructor(){
		super();
	}

	inicializar(){

		if (eval(this.datosespecialestabla)){}
		else{
			this.datosespecialestabla = Array();
		}
		//this.dom_functions = new Manejo_Dom();
		this.access_functions = new AccessBack();
		this.validaciones = new Validaciones();
		
		this.datos = this.access_functions.SEARCH(this.entidad);

		this.crearTablaDatos();
	}

	crearTablaDatos(){

		document.getElementById("id_tabla_datos").style.display = 'block';
		this.mostrarTitulos(this.columnasamostrar);
		this.mostrarDatos(this.entidad, this.datos, this.columnasamostrar);
	
	}

	cargar_formulario_html(){
		return false;
	}

	cargar_formulario_dinamico(){
		return false;
	}

	cargar_parametros_dinamico(){
		return false;
	}

	createForm_EDIT(parametros){
		
		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}
		else{
			if (eval(this.cargar_formulario_dinamico())){
				this.cargar_formulario_dinamico();
			}
		}
		
		if (eval(this.cargar_parametros_dinamico())){
			this.cargar_parametros_dinamico();
		}

	}

	createForm_ADD(){
		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}
		
	}

}