
function mostrar_error_campo(id, codigoerror){
	document.getElementById('div_error_'+id).style.display = 'inline';
	document.getElementById('div_error_'+id).innerHTML = codigoerror;
	document.getElementById(id).style.borderBlockColor = 'red';
	document.getElementById('submit_button').focus();
}

function mostrar_exito_campo(id){
	document.getElementById('div_error_'+id).style.display = 'none';
	document.getElementById('div_error_'+id).innerHTML = '';
	document.getElementById(id).style.borderBlockColor = 'green';
}