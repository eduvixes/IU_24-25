class persona extends EntidadAbstracta{

	constructor(){

		super();
		
		this.entidad = 'persona';
		this.columnasamostrar = Array('dni','fechaNacimiento_persona','foto_persona','telefono_persona');
		this.datosespecialestabla = Array('fechaNacimiento_persona','foto_persona');
		
		this.inicializar();

	}

	/*
	carga e inicialización del formulario de la clase
	*/

	cargar_formulario_html(){

		// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
		this.accion = '';
		
		let formulario = `

			<label class="label_dni">dni</label>
			<input type='text' id='dni' name='dni'></input>
			<span id="div_error_dni"><a id="error_dni"></a></span>
			<br>
			
			<label class="label_nombre_persona">Nombre de pila</label>
			<input type='text' id='nombre_persona' name='nombre_persona'></input>
			<span id="div_error_nombre_persona" ><a id="error_nombre_persona"></a></span>
			<br>
			
			<label class="label_apellidos_persona">apellidos</label>
			<input type='text' id='apellidos_persona' name='apellidos_persona'></input>
			<span id="div_error_apellidos_persona" ><a id="error_apellidos_persona"></a></span>
			<br>
			
			<label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
			<input type='text' id='fechaNacimiento_persona' name='fechaNacimiento_persona'></input>
			<span id="div_error_fechaNacimiento_persona" ><a id="error_fechaNacimiento_persona"></a></span>
			
			<br>
			<label class="label_direccion_persona">Dirección Postal</label>
			<!--<input type='text' id='direccion_persona' name='direccion_persona'></input>-->
			<textarea rows="5" cols="33" type='text' id='direccion_persona' name='direccion_persona'></textarea>
			<span id="div_error_direccion_persona" ><a id="error_direccion_persona"></a></span>
			<br>

			<label class="label_telefono_persona">Teléfono Persona</label>
			<input type='text' id='telefono_persona' name='telefono_persona'></input>
			<span id="div_error_telefono_persona" ><a id="error_telefono_persona"></a></span>
			
			<br>
			<label class="label_email_persona">Correo Electronico</label>
			<input type='text' id='email_persona' name='email_persona'></input>
			<span id="div_error_email_persona" ><a id="error_email_persona"></a></span>

			<br>
			<label id="label_foto_persona" class="label_foto_persona">Foto Persona</label>
			<input type='text' id='foto_persona' name='foto_persona'></input>
			<a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
			<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
			<input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona'></input>
			<span id="div_error_nuevo_foto_persona"><a id="error_nuevo_foto_persona"></a></span>
			<br>


		`;

		document.getElementById("IU_form").innerHTML = formulario;

	}

	/*
	creacion de formularios
	*/

	createForm_ADD(){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'ADD';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_ADD';

		document.getElementById('label_foto_persona').remove();
		document.getElementById('foto_persona').remove();
		document.getElementById('link_foto_persona').remove();

		this.colocarvalidaciones('ADD');
		
		this.colocarboton('ADD');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.ADD();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_SEARCH(){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}

		document.getElementById('label_nuevo_foto_persona').remove();
		document.getElementById('nuevo_foto_persona').remove();
		document.getElementById('link_foto_persona').remove();

		this.colocarvalidaciones('SEARCH');
		
		this.colocarboton('SEARCH');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.SEARCH();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_EDIT(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'EDIT';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_EDIT';

		// relleno los valores de los atributos
		this.rellenarvaloresform(parametros);

		// desactivo los campos necesarios
		document.getElementById('foto_persona').setAttribute('readonly',true);
		document.getElementById('dni').setAttribute('readonly',true);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.fechaNacimiento_persona.split('-');
    	let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('fechaNacimiento_persona').value = fechaformateada;
		*/

		document.getElementById('fechaNacimiento_persona').value = this.cambiardatosespecialestabla('fechaNacimiento_persona', parametros.fechaNacimiento_persona);

		// añado el nombre de fichero a la ruta de href que tengo en el hiperenlace del fichero
		document.getElementById('link_foto_persona').href += parametros.foto_persona;

		

		// coloco las validaciones
		this.colocarvalidaciones('EDIT');

		document.getElementById('foto_persona').removeAttribute('onblur');
		
		// coloco el boton
		this.colocarboton('EDIT');

		// pongo valores a los onsubmit y action
		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.EDIT();");

		// pongo visible el formulario
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_DELETE(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}

		document.getElementById('label_nuevo_foto_persona').remove();
		document.getElementById('nuevo_foto_persona').remove();
		
		this.rellenarvaloresform(parametros);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.fechaNacimiento_persona.split('-');
    	let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('fechaNacimiento_persona').value = fechaformateada;
		*/

		document.getElementById('fechaNacimiento_persona').value = this.cambiardatosespecialestabla('fechaNacimiento_persona', parametros.fechaNacimiento_persona);

		document.getElementById('link_foto_persona').href += parametros.foto_persona;

		// pongo no activos todos los campos
		this.ponernoactivoform();

		this.colocarboton('DELETE');


		document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.DELETE();");
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_SHOWCURRENT(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}

		document.getElementById('label_nuevo_foto_persona').remove();
		document.getElementById('nuevo_foto_persona').remove();
		
		this.rellenarvaloresform(parametros);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.fechaNacimiento_persona.split('-');
    	let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('fechaNacimiento_persona').value = fechaformateada;
		*/

		document.getElementById('fechaNacimiento_persona').value = this.cambiardatosespecialestabla('fechaNacimiento_persona', parametros.fechaNacimiento_persona);

		document.getElementById('link_foto_persona').href += parametros.foto_persona;

		this.ponernoactivoform();

		document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	/*
	comprobacion campos ADD, EDIT
	*/

	comprobar_dni(){

	}

	comprobar_nombre_persona(){

		if (!(this.validaciones.min_size('nombre_persona',4))){
			this.mostrar_error_campo('nombre_persona','nombre_persona_min_size_KO');
			return 'nombre_persona_min_size_KO';
		}
		if (!(this.validaciones.max_size('nombre_persona',8))){
			this.mostrar_error_campo('nombre_persona','nombre_persona_max_size_KO');
			return 'nombre_persona_max_size_KO'
		}
		if (!(this.validaciones.format('nombre_persona', '^[A-Za-z]'))){
			this.mostrar_error_campo('nombre_persona','nombre_persona_format_KO');
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

		if (!(this.validaciones.format('fechaNacimiento_persona','[0-9]{2,}[/][0-9]{2,}[/][0-9]{4,}'))){
			this.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_format_KO');
			return 'fechaNacimiento_persona_format_KO';
		}
		if (!(this.validacionesespeciales('fechaNacimiento_persona','fechavalida'))){
			this.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_valid_KO');
			return 'fechaNacimiento_persona_valid_KO';
		}
		this.mostrar_exito_campo('fechaNacimiento_persona');
		return true;

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

	comprobar_nuevo_foto_persona(){

		if (document.getElementById('nuevo_foto_persona').files.length == 0){
			if (this.accion == 'EDIT'){
				return true;
			}
			else{
				if (this.accion = "ADD"){
					this.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_empty_KO');
					return 'nuevo_foto_persona_empty_KO';
				}
			}
		}
	
		// si tuviera un campo con multiples ficheros tendria que hacer un bucle para comprobar cada file[i]
		let mifichero = document.getElementById('nuevo_foto_persona').files[0];
		

		if (!(this.validaciones.max_size_file(mifichero,7))){
			this.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_file_KO');
			return 'nuevo_foto_persona_max_size_file_KO';
		}
		if (!(this.validaciones.type_file(mifichero,Array("application/pdf", "application/msword","image/jpeg")))){
			this.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_type_file_KO');
			return 'nuevo_foto_persona_type_file_KO';
		}
		if (!(this.validaciones.format_name_file(mifichero,'[A-Za-z.]'))){
			this.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_format_name_file_KO');
			return 'nuevo_foto_persona_format_name_file_KO';
		}
		if (!this.validaciones.min_size(nuevo_foto_persona,7)){
			this.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_min_size_KO');
			return 'nuevo_foto_persona_min_size_KO';
		}
		if (!this.validaciones.max_size(nuevo_foto_persona,100)){
			this.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_KO');
			return 'nuevo_foto_persona_max_size_KO';
		}

		this.mostrar_exito_campo('nuevo_foto_persona');
		return true;

	}

	comprobar_submit(){
		
		let result = 	(
					(this.comprobar_nombre_persona()) &
					(this.comprobar_apellidos_persona()) &
					(this.comprobar_email_persona()) &
					(this.comprobar_fechaNacimiento_persona()) &
					(this.comprobar_nuevo_foto_persona())
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
		
		if (!(this.validaciones.format('fechaNacimiento_persona',''))){
			this.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_format_KO');
			return 'fechaNacimiento_persona_format_KO';
		}
		
		this.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
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

		if (!(this.validaciones.max_size('_persona',20))){
			this.mostrar_error_campo('foto_persona','foto_persona_max_size_KO');
			//return false;
			return 'foto_persona_max_size_KO';
		}
		if (!(this.validaciones.format('foto_persona','^[a-zA-Z]{0,20}'))){
			this.mostrar_error_campo('foto_persona','foto_persona_format_KO');
			//return false;
			return 'foto_persona_format_KO';
		}
		this.mostrar_exito_campo('foto_persona');
		return true;
	}


	comprobar_submit_SEARCH(){
		
		let result = 	(
					(this.comprobar_nombre_persona_SEARCH()) &
					(this.comprobar_apellidos_persona_SEARCH()) &
					(this.comprobar_email_persona_SEARCH()) &
					(this.comprobar_fechaNacimiento_persona_SEARCH())
				);
		
		result = Boolean(result);
		
		return result;

	}

	/*
		metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
	*/

	cambiardatosespecialestabla(atributo, valoratributo){

		if (atributo == 'foto_persona'){

			if (valoratributo == ''){
				return "no hay fichero";
			}
			let texto = valoratributo; 
			texto += `<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/`;
			texto += valoratributo;
			texto += `"><img src="./iconos/FILE.png" /></a>`;

			return texto;

		}

		if (atributo == 'fechaNacimiento_persona'){

			let fech = valoratributo.split('-');
    		let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
    		return fechaformateada;

		}

	}

	/*
		metodo para validaciones especiales de atributos en los formularios
	*/

	validacionesespeciales(atributo, prueba){

		if (atributo == 'fechaNacimiento_persona'){
			if (prueba == 'fechavalida'){
				let fecha = document.getElementById(atributo).value;
				let fechaf = fecha.split("/");
				let day = fechaf[0];
				let month = fechaf[1];
				let year = fechaf[2];
				let date = new Date(year,month,'0');
				if((day-0)>(date.getDate()-0)){
					return false;
				}
				return true;
			}
		}

	}


	/*
	metodos auxiliares
	*/
	colocarboton(accion){

		let divboton = document.createElement('div');
		divboton.id = 'div_boton';
		//divboton.stype.display = 'block';
		document.getElementById('IU_form').append(divboton);
		let boton = document.createElement('button');
		boton.id = 'submit_button';
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/'+accion+'.png';
		boton.append(img);
		document.getElementById('div_boton').append(boton);

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
		if (accion == 'SEARCH'){
			document.getElementById(campos[i].id).setAttribute (evento,'validar.comprobar_'+campos[i].id+'_'+accion+'();');
		}
		else{
			document.getElementById(campos[i].id).setAttribute (evento,'validar.comprobar_'+campos[i].id+'();');
		}
        
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

	crearTablaDatos(){

		document.getElementById("id_tabla_datos").style.display = 'block';

		//construir tabla
		this.hacertabla();
		//construir select
		this.construirSelect();
		
		//ocultar segun columnasamostrar
		this.mostrarocultarcolumnas();

	}

	modificarcolumnasamostrar(atributo){


		let nuevascolumnas = Array();
		if (this.columnasamostrar.includes(atributo)){
			// borrar ese atributo
			for (let i=0;i<this.columnasamostrar.length;i++){
				if (this.columnasamostrar[i] == atributo){}
				else{
					nuevascolumnas.push(this.columnasamostrar[i]);
				}
			}
			this.columnasamostrar = nuevascolumnas;
		}
		else{
			// añadir
			this.columnasamostrar.push(atributo);
		}


		this.crearTablaDatos();
	}

	mostrarocultarcolumnas(){

		for (let columna of this.atributos){
			if (this.columnasamostrar.includes(columna)){}
			else{
				//document.querySelector("th[class='"+columna+" tabla-th-"+columna+"']").style.display = 'none';
				document.querySelector("th[class='"+columna+"']").style.display = 'none';
				let arraytds = document.querySelectorAll("td[class='tabla-td-"+columna+"']");
				for (let i=0;i<arraytds.length;i++){
					arraytds[i].style.display = 'none';
				}
			}
		}


	}

	construirSelect(){

		document.getElementById("seleccioncolumnas").innerHTML = '';
		
		let optionselect = '';
		for (let atributo of this.atributos){
			optionselect = document.createElement('option');
			optionselect.className = atributo;
			optionselect.innerHTML = atributo;
			optionselect.setAttribute("onclick","validar.modificarcolumnasamostrar('"+atributo+"');");
			if (this.columnasamostrar.includes(atributo)){
				optionselect.selected = true;
			}
			document.getElementById("seleccioncolumnas").append(optionselect);
		}
		setLang();
	}

	hacertabla(){

		// titulos

		document.getElementById("text_title_page").className = "text_titulo_page_"+this.entidad;
		document.getElementById('title_page').style.display = 'block';

		this.atributos = Object.keys(this.datos[0]);

		var textolineatitulos = '<tr>';

		for (let atributo of this.atributos){
		
        	textolineatitulos += '<th class="'+atributo+'">'+atributo+'</th>';
        
		}  
            
		textolineatitulos += '<th colspan="3"></th>';
        
        textolineatitulos += '</tr>';
        
        let cabecera = document.getElementById("titulostablacabecera");
        cabecera.innerHTML = textolineatitulos;

		// filas

		var textolineadatos = ''; 

		for (let i=0;i<this.datos.length;i++){
        
			textolineadatos += '<tr style="background-color:grey;">';

			for (let clave in this.datos[i]){

				if (this.datosespecialestabla.includes(clave)){
					let valorcolumna = this.cambiardatosespecialestabla(clave,this.datos[i][clave]);
					textolineadatos += '<td class="tabla-td-'+clave+'">'+valorcolumna+'</td>';
				}
				else{
					textolineadatos += '<td class="tabla-td-'+clave+'">'+this.datos[i][clave]+'</td>';
				}
	
			}
	
			// crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)
	
			let lineaedit = this.crearboton(this.entidad, 'EDIT', JSON.stringify(this.datos[i]));
			let lineadelete = this.crearboton(this.entidad, 'DELETE', JSON.stringify(this.datos[i]));
			let lineashowcurrent = this.crearboton(this.entidad, 'SHOWCURRENT', JSON.stringify(this.datos[i]));
	
			textolineadatos += lineaedit+lineadelete+lineashowcurrent;
	
			textolineadatos += '</tr>';
	
		}
		
		let cuerpo = document.getElementById('muestradatostabla');
		cuerpo.innerHTML = textolineadatos;

		setLang();

	}

	
}