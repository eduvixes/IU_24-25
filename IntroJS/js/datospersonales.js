class datospersonales extends Validaciones{

	constructor(){
		super();
	}	

	comprobar_name(){
		
		if (!(this.min_size('name',4))){
			mostrar_error_campo('name','name_min_size_KO');
			return false;
		}
		if (!(this.max_size('name',8))){
			mostrar_error_campo('name','name_max_size_KO');
			return false;
		}
		mostrar_exito_campo('name');
		return true;
	}

	comprobar_email(){
		
		if (!(this.min_size('email',4))){
			mostrar_error_campo('email','email_min_size_KO');
			return false;
		}
		if (!(this.max_size('email',20))){
			mostrar_error_campo('email','email_max_size_KO');
			return false;
		}
		mostrar_exito_campo('email');
		return true;
	}

	comprobar_datospersonales(){
		
		this.comprobar_name();
		this.comprobar_email();

		return (this.comprobar_name() && this.comprobar_email());

	}

}