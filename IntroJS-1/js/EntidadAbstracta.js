class EntidadAbstracta{

	constructor(){

	}

	inicializar(){

		this.dom_functions = new Manejo_Dom();
		this.access_functions = new AccessBack();
		this.validaciones = new Validaciones();
		
		this.datos = this.access_functions.SEARCH();

		this.crearTablaDatos();
	}

	crearTablaDatos(){

		document.getElementById("id_tabla_datos").style.display = 'block';
		this.dom_functions.mostrarTitulos(this.columnasamostrar);
		this.dom_functions.mostrarDatos(this.entidad, this.datos, this.columnasamostrar);
	
	}

}