//min_size()
//@param id Id objeto dom
//@param minsize tamaño minimo a validar
function min_size(id, minsize){
	let elemento = document.getElementById(id);
	switch (elemento.tagName){
		case 'INPUT':
			switch (elemento.type){
				case 'number':
				case 'email':
				case 'text':
					let valorelemento = elemento.value;
					if (valorelemento.length<minsize){
						alert(false);
						return false;
					}
					else{
						alert(true);
						return true;
					}
					break;
				case 'file':
					break;
				default:
					break;
			
			}
			break;
		
		case 'SELECT':
			break;
		default:
			break;
	}

}