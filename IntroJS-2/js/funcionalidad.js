class funcionalidad extends EntidadAbstracta{

	constructor(){

		super();

		this.entidad = 'funcionalidad';
		this.columnasamostrar = Array('nombre_funcionalidad','descrip_funcionalidad');

		this.inicializar();

	}

	cargar_formulario_html(){

		let formulario = `

			<label id="label_id_funcionalidad">id_funcionalidad</label>
			<input type="text" id="id_funcionalidad" name="id_funcionalidad" />
			<spam id="div_error_id_funcionalidad"></span>
			<br>

			<label id="label_nombre_funcionalidad">nombre_funcionalidad</label>
			<input type="text" id="nombre_funcionalidad" name="nombre_funcionalidad" />
			<spam id="div_error_nombre_funcionalidad"></span>
			<br>

			<label id="label_descrip_funcionalidad">descrip_funcionalidad</label>
			<input type="text" id="descrip_funcionalidad" name="descrip_funcionalidad" />
			<spam id="div_error_descrip_funcionalidad"></span>
			<br>


		`;

		document.getElementById("IU_form").innerHTML = formulario;

		return true;

	}

	createForm_ADD(){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}


		//tratar validaciones
		//document.getElementById("id_funcionalidad").setAttribute("onblur","validar.comprobar_id__funcionalidad();");
		document.getElementById("nombre_funcionalidad").setAttribute("onblur","validar.comprobar_nombre_funcionalidad();");
		document.getElementById("descrip_funcionalidad").setAttribute("onblur","validar.comprobar_descrip_funcionalidad();");
		
		document.getElementById('label_id_funcionalidad').style.display = "none";
		document.getElementById('id_funcionalidad').style.display = "none";

		let boton = document.createElement('button');
	    boton.type = 'submit';
	    let imgsearch = document.createElement('img');
	    imgsearch.src = './iconos/ADD.png';
	    boton.append(imgsearch);
	    document.getElementById('IU_form').append(boton);

	    //document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_add";
	    //document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_add";
	    document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.ADD();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_SEARCH(){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		//tratar validaciones
		document.getElementById("id_funcionalidad").setAttribute("onblur","validar.comprobar_id_funcionalidad_SEARCH();");
		document.getElementById("nombre_funcionalidad").setAttribute("onblur","validar.comprobar_nombre_funcionalidad_SEARCH();");
		document.getElementById("descrip_funcionalidad").setAttribute("onblur","validar.comprobar_descrip_funcionalidad_SEARCH();");
		

		let boton = document.createElement('button');
	    boton.type = 'submit';
	    let img = document.createElement('img');
	    img.src = './iconos/SEARCH.png';
	    boton.append(img);
	    document.getElementById('IU_form').append(boton);

	    //document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_search";
	    //document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_search";
	    document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.SEARCH();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_DELETE(valoresfila){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		//rellenar los datos
		document.getElementById('id_funcionalidad').value = valoresfila.id_funcionalidad;
		document.getElementById('nombre_funcionalidad').value = valoresfila.nombre_funcionalidad;
		document.getElementById('descrip_funcionalidad').value = valoresfila.descrip_funcionalidad;        

		//tratar validaciones (NO HAY VALIDACIONES PORQUE NO SE PERMITE LA MODIFICACION DE DATOS)

		//poner no activos los campos

		document.getElementById('id_funcionalidad').setAttribute('readonly',true);
		document.getElementById('nombre_funcionalidad').setAttribute('readonly',true);
		document.getElementById('descrip_funcionalidad').setAttribute('readonly',true);
		

		let boton = document.createElement('button');
	    boton.type = 'submit';
	    let img = document.createElement('img');
	    img.src = './iconos/DELETE.png';
	    boton.append(img);
	    document.getElementById('IU_form').append(boton);

	    //document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_delete";
	    //document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_delete";
	    document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.DELETE();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_SHOWCURRENT(valoresfila){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		//rellenar los datos
		document.getElementById('id_funcionalidad').value = valoresfila.id_funcionalidad;
		document.getElementById('nombre_funcionalidad').value = valoresfila.nombre_funcionalidad;
		document.getElementById('descrip_funcionalidad').value = valoresfila.descrip_funcionalidad;        

		//tratar validaciones (NO HAY VALIDACIONES PORQUE NO SE PERMITE LA MODIFICACION DE DATOS)

		//poner no activos los campos
		document.getElementById('id_funcionalidad').setAttribute('readonly',true);
		document.getElementById('nombre_funcionalidad').setAttribute('readonly',true);
		document.getElementById('descrip_funcionalidad').setAttribute('readonly',true);
		
	    //document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_delete";
	    //document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_delete";
	    document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_EDIT(valoresfila){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		//rellenar los datos
		document.getElementById('id_funcionalidad').value = valoresfila.id_funcionalidad;
		document.getElementById('id_funcionalidad').setAttribute("readonly",true);
		document.getElementById('nombre_funcionalidad').value = valoresfila.nombre_funcionalidad;
		document.getElementById('descrip_funcionalidad').value = valoresfila.descrip_funcionalidad;        

		//tratar validaciones 
		document.getElementById("id_funcionalidad").setAttribute("onblur","validar.comprobar_id__funcionalidad();");
		document.getElementById("nombre_funcionalidad").setAttribute("onblur","validar.comprobar_nombre_funcionalidad();");
		document.getElementById("descrip_funcionalidad").setAttribute("onblur","validar.comprobar_descrip_funcionalidad();");
				

		let boton = document.createElement('button');
	    boton.type = 'submit';
	    let img = document.createElement('img');
	    img.src = './iconos/EDIT.png';
	    boton.append(img);
	    document.getElementById('IU_form').append(boton);

	    //document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_delete";
	    //document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_delete";
	    document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.EDIT();");
		document.getElementById("div_IU_form").style.display = 'block';

	}




}