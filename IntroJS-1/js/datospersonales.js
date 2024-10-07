class datospersonales extends Validaciones{

	constructor(){

		super();

		dom_functions = new Manejo_Dom();
		
		entidad = 'datospersonales';
		columnasamostrar = array('columna1','columna2');
		datos = ;
		this.crearTablaDatos();

	}

	cargar_formulario_html(){
		
		let formulario = `

		<form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return validar.comprobar_datospersonales();">

			<label for="name">Name:</label>
			<input type="TEXT" id="name" name="name-enviado-por-javi" onblur="validar.comprobar_name();"><span id="div_error_name"></span>
			<br>

			<label for="age">Age:</label>
			<input type="number" id="age" name="age-enviado-por-javi" onblur="validar.comprobar_age();">
			<span id="div_error_age"></span>
			<br>
			  
			<label for="email">Email:</label>
			<input type="text" id="email" name="email-enviado-por-javi" onblur="validar.comprobar_email();
			">
			<span id="div_error_email"></span>
			<br>

			<label for="date">Date:</label>
			<input type="date" id="date" name="date-enviado-por-javi">
			<br>

			<label for="photo">Photo:</label>
			<input type="file" id="file" name="file-enviado-por-javi">
			<br>

			<fieldset>
				<legend>Selecciona tu opción</legend>
				Sin selección: <input type="checkbox" id='no_choice' name="eleccion_enviado_por_javi[]" value="no_choice" checked><br>
				Selección 1: <input type="checkbox" id='eleccion1' name="eleccion_enviado_por_javi[]" value="uno"><br>
				Selección 2: <input type="checkbox" id='eleccion2' name="eleccion_enviado_por_javi[]" value="dos"><br>
				Seleccion 3: <input type="checkbox" id='eleccion3' name="eleccion_enviado_por_javi[]" value="tres"><br>
			</fieldset>

			<input id="submit_button" type="submit" value="Submit">

		</form>


		`;

	}

	crearTablaDatos(){

		dom_functions.mostrarTitulos(this.columnasamostrar);
		dom_functions.mostrarDatos(this.entidad, this.datos)
	
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
		if (!(this.format('name', '^[0-9]'))){
			mostrar_error_campo('name','name_format_KO');
			return false;
		}
		mostrar_exito_campo('name');
		return true;
	}

	comprobar_age(){
		
		if (!(this.min_size('age',1))){
			mostrar_error_campo('age','age_min_size_KO');
			return false;
		}
		if (!(this.max_size('age',3))){
			mostrar_error_campo('age','age_max_size_KO');
			return false;
		}
		mostrar_exito_campo('age');
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
		
		/*this.comprobar_name();
		this.comprobar_age();
		this.comprobar_email();*/

		let result = ((this.comprobar_name()) &
					 (this.comprobar_age()) &
					 (this.comprobar_email()))
		
		result = Boolean(result);
		
		return result;

	}

}