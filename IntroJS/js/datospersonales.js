

	function comprobar_name(){
		let objname = new Validaciones;
		if (objname.min_size('name',4)){
			mostrar_exito_campo('name');
			return true;
		}
		else{
			mostrar_error_campo('name','name_min_size_KO');
			return false;
		}
	}

	function comprobar_email(){
		let objname = new Validaciones;
		if (objname.min_size('email',4)){
			mostrar_exito_campo('email');
			return true;
		}
		else{
			mostrar_error_campo('email','email_min_size_KO');
			return false;
		}
	}

	function comprobar_datospersonales(){
		
		comprobar_name();
		comprobar_email();

		return (comprobar_name() && comprobar_email());

	}