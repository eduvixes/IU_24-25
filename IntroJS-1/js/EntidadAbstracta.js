class EntidadAbstracta extends Manejo_Dom{

	constructor(){
		super();
	}

	inicializar(){

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

	createForm_EDIT(parametros){
		console.log(parametros);
	}

}