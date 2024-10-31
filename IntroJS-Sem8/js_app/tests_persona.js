let def_tests_persona = Array(
    Array('persona','nombre_persona',1,'cumple tamaño minimo','ADD','nombre_persona_min_size_KO','Tamaño muy corto. Debe estar entre 4 y 20 caracteres'),
    Array('persona','nombre_persona',2,'cumple tamaño minimo','ADD',true,'Nombre persona correcto'),
    Array('persona','nuevo_foto_persona',3,'existe fichero','ADD','nuevo_foto_persona_empty_KO','El fichero no existe. Debe subir una foto'),
    Array('persona','nuevo_foto_persona',4,'existe fichero','EDIT',true,'ok'),
    

);

let pruebas_persona = Array(
    Array('persona','nombre_persona',1,1,'ADD','aa','nombre_persona_min_size_KO'),
    Array('persona','nombre_persona',1,1,'ADD','javier',true),
    



);
/*
la entidad, 
el campo, 
el número de definición de test, 
el número de prueba (secuencial desde 1 hasta el final)
la acción a realizar
el parámetro a probar (max_size_file, type_file, format_name_file)
el valor de parámetro a probar
el codigo asociado de error/valor true de exito

*/
let pruebas_file_persona = Array(
    Array('persona','nuevo_foto_persona',3,1,'ADD','existe','','nuevo_foto_persona_empty_KO'),
    Array('persona','nuevo_foto_persona',4,2,'EDIT','noexiste','',true),



);