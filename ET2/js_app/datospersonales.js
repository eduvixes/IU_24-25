class datospersonales extends EntidadAbstracta{

	constructor(){

		super();
		
		this.entidad = 'datospersonales';
		this.columnasamostrar = Array('dni','fechaNacimiento_persona','direccion_persona','telefono_persona');
		
		this.inicializar();

	}

	cargar_formulario_html(){
		
		let formulario = `

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


		`;

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();")
		document.getElementById("IU_form").innerHTML = formulario;
		document.getElementById("div_IU_form").style.display = 'block';

	}

	comprobar_name(){
		
		if (!(this.validaciones.min_size('name',4))){
			this.mostrar_error_campo('name','name_min_size_KO');
			//return false;
			return 'name_min_size_KO';
		}
		if (!(this.validaciones.max_size('name',8))){
			this.mostrar_error_campo('name','name_max_size_KO');
			return false;
		}
		if (!(this.validaciones.format('name', '^[0-9]'))){
			this.mostrar_error_campo('name','name_format_KO');
			return false;
		}
		this.mostrar_exito_campo('name');
		return true;
	}

	comprobar_age(){
		
		if (!(this.validaciones.min_size('age',1))){
			this.mostrar_error_campo('age','age_min_size_KO');
			return false;
		}
		if (!(this.validaciones.max_size('age',3))){
			this.mostrar_error_campo('age','age_max_size_KO');
			return false;
		}
		this.mostrar_exito_campo('age');
		return true;
	}
	
	comprobar_email(){
		
		if (!(this.validaciones.min_size('email',4))){
			this.mostrar_error_campo('email','email_min_size_KO');
			return false;
		}
		if (!(this.validaciones.max_size('email',20))){
			this.mostrar_error_campo('email','email_max_size_KO');
			return false;
		}
		this.mostrar_exito_campo('email');
		return true;
	}

	comprobar_submit(){
		
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