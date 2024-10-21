class rolaccionfuncionalidad extends EntidadAbstracta{

	constructor(){
		
		super();

		this.entidad = 'rolaccionfuncionalidad';
		this.columnasamostrar = Array('id_rol','id_accion','id_funcionalidad');
		this.datosespecialestabla = Array('id_rol','id_accion','id_funcionalidad');

		this.inicializar();

	}

	cambiardatosespecialestabla(atributo, valoratributo){

		if (atributo == 'id_rol'){
			return valoratributo.rol_name;
		}

		if (atributo == 'id_accion'){
			return valoratributo.nombre_accion;
		}

		if (atributo == 'id_funcionalidad'){
			return valoratributo.nombre_funcionalidad;
		}

	}
}