class usuario extends EntidadAbstracta{

	constructor(){
		
		super();

		this.entidad = 'usuario';
		this.columnasamostrar = Array('dni','usuario','id_rol');

		this.inicializar();

	}

	createForm_EDIT(parametros){
		console.log(parametros);
	}

} //fin de clase
