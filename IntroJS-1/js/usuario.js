class usuario extends EntidadAbstracta{

	constructor(){
		
		super();

		this.entidad = 'usuario';
		this.columnasamostrar = Array('dni','usuario','id_rol');
		this.datosespecialestabla = Array('id_rol');

		this.inicializar();

	}

	cambiardatosespecialestabla(atributo, valoratributo){

		if (atributo == 'id_rol'){
			return valoratributo.rol_name;
		}

	}

	createForm_EDIT(parametros){
		console.log(parametros);
	}

} //fin de clase
