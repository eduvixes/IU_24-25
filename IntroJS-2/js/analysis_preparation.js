class analysis_preparation extends EntidadAbstracta{

	constructor(){

		super();

		this.entidad = 'analysis_preparation';
		this.columnasamostrar = Array('id_analysis_preparation','name_analysis_preparation','file_analysis_preparation');
		this.datosespecialestabla = Array('file_analysis_preparation');

		this.inicializar();

	}

	cargar_formulario_html(){

		

		let formulario = `

			<label id="label_id_analysis_preparation">analysis_preparation(*):</label>
			<input type="text" id="id_analysis_preparation" name="id_analysis_preparation">
			<span id="div_error_id_analysis_preparation"></span>
			<br>

			<label id="label_name_analysis_preparation">name_analysis_preparation(*):</label>
			<input type="text" id="name_analysis_preparation" name="name_analysis_preparation">
			<span id="div_error_name_analysis_preparation"></span>
			<br>
			  
			<label id="label_description_analysis_preparation">description_analysis_preparation(*):</label>
			<input type="text" id="description_analysis_preparation" name="description_analysis_preparation">
			<span id="div_error_description_analysis_preparation"></span>
			<br>

			<label id="label_bib_analysis_preparation">bib_analysis_preparation</label>
			<input type="text" id="bib_analysis_preparation" name="bib_analysis_preparation" >
			<span id="div_error_bib_analysis_preparation"></span>
			<br>

			<fieldset>
	        <label id="label_file_analysis_preparation" class="label_foto_persona">file_analysis_preparation</label>
	        <input type='text' id='file_analysis_preparation' name='file_analysis_preparation'></input>
	        <a href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/" id="link_file_analysis_preparation" ><img id="img_file_analysis_preparation" src="./iconos/FILE.png"></img></a>
	        <label id="label_nuevo_file_analysis_preparation" class="label_nuevo_file_analysis_preparation">nuevo_file_analysis_preparation file_analysis_preparation</label>
	        <input type='file' id='nuevo_file_analysis_preparation' name='nuevo_file_analysis_preparation'></input>
	        <div id="div_error_file_analysis_preparation" class="errorcampo"><a id="error_nuevo_file_analysis_preparation"></a></div>
	        </fieldset>


		`;

		document.getElementById("IU_form").innerHTML = formulario;
		return true;

	}

	comprobar_submit_SEARCH(){

		return true;

	}

	comprobar_submit_ADD(){

		return true;

	}

	createForm_SEARCH(){

		alert("llego");

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		//tratar validaciones
		document.getElementById("id_analysis_preparation").setAttribute("onblur","validar.comprobar_id_analysis_preparation_SEARCH();");
		document.getElementById("id_analysis_preparation").setAttribute("onblur","validar.comprobar_name_analysis_preparation_SEARCH();");
		document.getElementById("id_analysis_preparation").setAttribute("onblur","validar.comprobar_description_analysis_preparation_SEARCH();");
		document.getElementById("id_analysis_preparation").setAttribute("onblur","validar.comprobar_bib_analysis_preparation_SEARCH();");
		document.getElementById("id_analysis_preparation").setAttribute("onblur","validar.comprobar_file_analysis_preparation_SEARCH();");

		//tratar ficheros
		//eliminar el label de nuevo fichero
		document.getElementById("label_nuevo_file_analysis_preparation").style.display = "none";
		//eliminar el input de nuevo fichero
		document.getElementById("nuevo_file_analysis_preparation").style.display = "none";
		//eliminar el img de enlace de fichero
		document.getElementById("img_file_analysis_preparation").style.display = "none";
		//document.getElementById("img_file").style.display = "none";

		let botonsearch = document.createElement('button');
	    botonsearch.type = 'submit';
	    let imgsearch = document.createElement('img');
	    imgsearch.src = './iconos/SEARCH.png';
	    botonsearch.append(imgsearch);
	    document.getElementById('IU_form').append(botonsearch);

	    //document.getElementById("class_contenido_titulo_form").addclass = "class_titulo_formulario_analysis_preparation_search";
	    //document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_search";
	    document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.SEARCH();");
		document.getElementById("div_IU_form").style.display = 'block';

	}


createForm_ADD(){

		if (eval(this.cargar_formulario_html())){
			this.cargar_formulario_html();
		}

		//tratar validaciones
		document.getElementById("id_analysis_preparation").setAttribute("onblur","validar.comprobar_id_analysis_preparation();");
		document.getElementById("id_analysis_preparation").setAttribute("onblur","validar.comprobar_name_analysis_preparation_();");
		document.getElementById("id_analysis_preparation").setAttribute("onblur","validar.comprobar_description_analysis_preparation();");
		document.getElementById("id_analysis_preparation").setAttribute("onblur","validar.comprobar_bib_analysis_preparation();");
		document.getElementById("id_analysis_preparation").setAttribute("onblur","validar.comprobar_file_analysis_preparation;");

		//tratar ficheros
		//eliminar el label de nuevo fichero
		document.getElementById("label_file_analysis_preparation").style.display = "none";
		//eliminar el input de nuevo fichero
		document.getElementById("file_analysis_preparation").style.display = "none";
		//eliminar el img de enlace de fichero
		document.getElementById("img_file_analysis_preparation").style.display = "none";
		//document.getElementById("img_file").style.display = "none";

		let boton = document.createElement('button');
	    boton.type = 'submit';
	    let imgsearch = document.createElement('img');
	    imgsearch.src = './iconos/ADD.png';
	    boton.append(imgsearch);
	    document.getElementById('IU_form').append(boton);

	    //document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_search";
	    //document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_search";
	    document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.ADD();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	cambiardatosespecialestabla(atributo, valoratributo){

		if (atributo == 'file_analysis_preparation'){

			let texto = valoratributo; 
			texto += `<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/`;
			texto += valoratributo;
			texto += `"><img src="./iconos/FILE.png" /></a>`;

			return texto;
		}

	}



}