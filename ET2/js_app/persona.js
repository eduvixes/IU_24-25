class persona extends EntidadAbstracta{

	constructor(){

		super();
		
		this.entidad = 'persona';
		this.columnasamostrar = Array('dni','fechaNacimiento_persona','foto_persona','telefono_persona');
		
		this.inicializar();

	}

	/*
	carga e inicialización del formulario de la clase
	*/

	cargar_formulario_html(){
		
		let formulario = `

			<label class="label_dni">dni</label>
			<input type='text' id='dni' name='dni'></input>
			<spam id="div_error_dni" class="errorcampo"><a id="error_dni"></a></spam>
			<br>
			
			<label class="label_nombre_persona">Nombre de pila</label>
			<input type='text' id='nombre_persona' name='nombre_persona'></input>
			<spam id="div_error_nombre_persona" class="errorcampo"><a id="error_nombre_persona"></a></spam>
			<br>
			
			<label class="label_apellidos_persona">apellidos</label>
			<input type='text' id='apellidos_persona' name='apellidos_persona'></input>
			<spam id="div_error_apellidos_persona" class="errorcampo"><a id="error_apellidos_persona"></a></spam>
			<br>
			
			<label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
			<input type='date' id='fechaNacimiento_persona' name='fechaNacimiento_persona'></input>
			<spam id="div_error_fechaNacimiento_persona" class="errorcampo"><a id="error_fechaNacimiento_persona"></a></spam>
			
			<br>
			<label class="label_direccion_persona">Dirección Postal</label>
			<!--<input type='text' id='direccion_persona' name='direccion_persona'></input>-->
			<textarea rows="5" cols="33" type='text' id='direccion_persona' name='direccion_persona'></textarea>
			<spam id="div_error_direccion_persona" class="errorcampo"><a id="error_direccion_persona"></a></spam>
			<br>

			<label class="label_telefono_persona">Teléfono Persona</label>
			<input type='text' id='telefono_persona' name='telefono_persona'></input>
			<spam id="div_error_telefono_persona" class="errorcampo"><a id="error_telefono_persona"></a></spam>
			
			<br>
			<label class="label_email_persona">Correo Electronico</label>
			<input type='text' id='email_persona' name='email_persona'></input>
			<spam id="div_error_email_persona" class="errorcampo"><a id="error_email_persona"></a></spam>
			
			<br>
			<label id="label_foto_persona" class="label_foto_persona">Foto Persona</label>
			<input type='text' id='foto_persona' name='foto_persona'></input>
			<a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
			<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
			<input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona'></input>
			<spam id="div_error_foto_persona" class="errorcampo"><a id="error_nuevo_foto_persona"></a></spam>
			<br>


		`;

		document.getElementById("IU_form").innerHTML = formulario;

	}

	/*
	creacion de formularios
	*/

	createForm_ADD(){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		document.getElementById('label_foto_persona').remove();
		document.getElementById('foto_persona').remove();
		document.getElementById('link_foto_persona').remove();

		this.colocarvalidaciones('SEARCH');
		
		this.colocarboton('ADD');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.ADD();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_SEARCH(){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		document.getElementById('label_foto_persona').remove();
		document.getElementById('foto_persona').remove();
		document.getElementById('link_foto_persona').remove();

		this.colocarvalidaciones('SEARCH');
		
		this.colocarboton('SEARCH');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.SEARCH();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_EDIT(parametros){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		document.getElementById('foto_persona').setAttribute('readonly',true);

		this.rellenarvaloresform(parametros);

		document.getElementById('link_foto_persona').href += parametros.foto_persona;

		this.colocarvalidaciones('ADD');
		
		this.colocarboton('EDIT');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.EDIT();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_DELETE(parametros){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		document.getElementById('label_nuevo_foto_persona').remove();
		document.getElementById('nuevo_foto_persona').remove();
		
		this.rellenarvaloresform(parametros);

		document.getElementById('link_foto_persona').href += parametros.foto_persona;

		this.ponernoactivoform();

		this.colocarboton('DELETE');


		document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.DELETE();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_SHOWCURRENT(parametros){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		document.getElementById('label_nuevo_foto_persona').remove();
		document.getElementById('nuevo_foto_persona').remove();
		
		this.rellenarvaloresform(parametros);

		document.getElementById('link_foto_persona').href += parametros.foto_persona;

		this.ponernoactivoform();

		document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	/*
	comprobacion campos ADD, EDIT
	*/

	comprobar_dni(){

	}

	comprobar_nombre_persona(){

		if (!(this.validaciones.min_size('nombre_persona',4))){
			this.mostrar_error_campo('nombre_persona','nombre_persona_min_size_KO');
			//return false;
			return 'nombre_persona_min_size_KO';
		}
		if (!(this.validaciones.max_size('nombre_persona',8))){
			this.mostrar_error_campo('nombre_persona','nombre_persona_max_size_KO');
			//return false;
			return 'nombre_persona_max_size_KO'
		}
		if (!(this.validaciones.format('nombre_persona', '^[A-Za-z]'))){
			this.mostrar_error_campo('nombre_persona','nombre_persona_format_KO');
			//return false;
			return 'nombre_persona_format_KO'
		}
		this.mostrar_exito_campo('nombre_persona');
		return true;

	}

	comprobar_apellidos_persona(){

		if (!(this.validaciones.min_size('apellidos_persona',4))){
			this.mostrar_error_campo('apellidos_persona','apellidos_persona_min_size_KO');
			//return false;
			return 'apellidos_persona_min_size_KO';
		}
		if (!(this.validaciones.max_size('apellidos_persona',8))){
			this.mostrar_error_campo('apellidos_persona','apellidos_persona_max_size_KO');
			//return false;
			return 'apellidos_persona_max_size_KO'
		}
		if (!(this.validaciones.format('apellidos_persona', '^[A-Za-z]'))){
			this.mostrar_error_campo('apellidos_persona','apellidos_persona_format_KO');
			//return false;
			return 'apellidos_persona_format_KO'
		}
		this.mostrar_exito_campo('apellidos_persona');
		return true;
	}

	comprobar_fechaNacimiento_persona(){

	}

	comprobar_direccion_persona(){

	}

	comprobar_telefono_persona(){

	}

	comprobar_email_persona(){

		if (!(this.validaciones.min_size('email_persona',5))){
			this.mostrar_error_campo('email_persona','email_persona_min_size_KO');
			//return false;
			return 'email_persona_min_size_KO';
		}
		if (!(this.validaciones.max_size('email_persona',20))){
			this.mostrar_error_campo('email_persona','email_persona_max_size_KO');
			//return false;
			return 'email_persona_max_size_KO';
		}
		if (!(this.validaciones.format('email_persona','^[^@]+@[^@]+\.[a-zA-Z]{2,}$'))){
			this.mostrar_error_campo('email_persona','email_persona_format_KO');
			//return false;
			return 'email_persona_format_KO';
		}
		this.mostrar_exito_campo('email_persona');
		return true;
	}

	comprobar_foto_persona(){

	}

	comprobar_nuevo_foto_persona(){

	}

	comprobar_submit(){
		
		let result = (
					(this.comprobar_nombre_persona()) &
					(this.comprobar_apellidos_persona()) &
					(this.comprobar_email_persona()) 
				);
		
		result = Boolean(result);
		
		return result;

	}

	/*
	comprobacion campos SEARCH
	*/
	comprobar_dni_SEARCH(){

	}

	comprobar_nombre_persona_SEARCH(){

		if (!(this.validaciones.max_size('nombre_persona',8))){
			this.mostrar_error_campo('nombre_persona','nombre_persona_max_size_KO');
			//return false;
			return 'nombre_persona_max_size_KO'
		}
		if (!(this.validaciones.format('nombre_persona', '[A-Za-z ]{0,8}'))){
			this.mostrar_error_campo('nombre_persona','nombre_persona_format_KO');
			//return false;
			return 'nombre_persona_format_KO'
		}
		this.mostrar_exito_campo('nombre_persona');
		return true;

	}

	comprobar_apellidos_persona_SEARCH(){

		if (!(this.validaciones.max_size('apellidos_persona',8))){
			this.mostrar_error_campo('apellidos_persona','apellidos_persona_max_size_KO');
			//return false;
			return 'apellidos_persona_max_size_KO'
		}
		if (!(this.validaciones.format('apellidos_persona', '[A-Za-z ]{0,20}'))){
			this.mostrar_error_campo('apellidos_persona','apellidos_persona_format_KO');
			//return false;
			return 'apellidos_persona_format_KO'
		}
		this.mostrar_exito_campo('apellidos_persona');
		return true;

	}

	comprobar_fechaNacimiento_persona_SEARCH(){

	}

	comprobar_direccion_persona_SEARCH(){

	}

	comprobar_telefono_persona_SEARCH(){

	}

	comprobar_email_persona_SEARCH(){

		if (!(this.validaciones.max_size('email_persona',20))){
			this.mostrar_error_campo('email_persona','email_persona_max_size_KO');
			//return false;
			return 'email_persona_max_size_KO';
		}
		if (!(this.validaciones.format('email_persona','^[a-zA-Z0-9.@_]{0,20}'))){
			this.mostrar_error_campo('email_persona','email_persona_format_KO');
			//return false;
			return 'email_persona_format_KO';
		}
		this.mostrar_exito_campo('email_persona');
		return true;

	}

	comprobar_foto_persona_SEARCH(){

	}


	comprobar_submit_SEARCH(){
		
		let result = ((this.comprobar_nombre_persona_SEARCH()) &
					 (this.comprobar_apellidos_persona_SEARCH()) &
					 (this.comprobar_email_persona_SEARCH()))
		
		result = Boolean(result);
		
		return result;

	}

	/*
	metodos auxiliares
	*/
	colocarboton(accion){

		let boton = document.createElement('button');
		boton.id = 'submit_button';
	    boton.type = 'submit';
	    let img = document.createElement('img');
	    img.src = './iconos/'+accion+'.png';
	    boton.append(img);
	    document.getElementById('IU_form').append(boton);

	}

	rellenarvaloresform(parametros){
		//obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
			if (document.getElementById(campos[i].id).type == 'file'){
                
			}
			else{
                document.getElementById(campos[i].id).value = parametros[campos[i].id];
			}
        }
	}

	colocarvalidaciones(accion){
		let evento;
		//obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
			if ((document.getElementById(campos[i].id).tagName == 'INPUT') && (document.getElementById(campos[i].id).type !== 'file')){
                evento = 'onblur';
			}
			else{
				evento = 'onchange';
			}

		document.getElementById(campos[i].id).setAttribute (evento,'validar.comprobar_'+campos[i].id+'_'+accion+'();');
        
		}
	}

	ponernoactivoform(){
		//obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
                document.getElementById(campos[i].id).setAttribute('readonly', true);
        }
	}

}