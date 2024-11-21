let def_tests_persona = Array(
    //campos no ficheros
    Array('persona','nombre_persona',1,'cumple tamaño minimo','ADD','nombre_persona_min_size_KO','Tamaño muy corto. Debe estar entre 4 y 20 caracteres'),
    Array('persona','nombre_persona',2,'cumple tamaño maximo','ADD','nombre_persona_max_size_KO','Tamaño muy grande. Debe estar entre 4 y 20 caracteres'),
    Array('persona','nombre_persona',3,'cumple formato','ADD','nombre_persona_format_KO','Formato inválido. Debe estar entre 4 y 20 caracteres alfabéticos'),
    Array('persona','nombre_persona',4,'es correcto','ADD',true,'Nombre persona correcto'),
    // ficheros
    Array('persona','nuevo_foto_persona',5,'existe fichero','ADD','nuevo_foto_persona_empty_KO','El fichero no existe. Debe subir una foto'),
    Array('persona','nuevo_foto_persona',6,'cumple nombre fichero','ADD','nuevo_foto_persona_format_name_file_KO','el nombre de fichero no cumple formato.'),
    Array('persona','nuevo_foto_persona',7,'cumple tipo fichero','ADD','nuevo_foto_persona_type_file_KO','el tipo de fichero no esta permitido'),
    Array('persona','nuevo_foto_persona',8,'cumple tamaño maximo fichero','ADD','nuevo_foto_persona_max_size_file_KO','el tamaño del fichero es muy grande.'),
    Array('persona','nuevo_foto_persona',9,'cumple tamaño minimo nombre fichero','ADD','nuevo_foto_persona_min_size_name_KO','el tamaño del nombre de fichero es muy pequeño'),
    Array('persona','nuevo_foto_persona',10,'cumple tamaño maximo nombre fichero','ADD','nuevo_foto_persona_max_size_name_KO','el tamaño del nombre de fichero es muy grande.'),
    Array('persona','nuevo_foto_persona',11,'fichero ok','ADD',true,'ok'),
    Array('persona','nuevo_foto_persona',12,'no existe fichero','EDIT',true,'ok'),
    Array('persona','nuevo_foto_persona',13,'cumple nombre fichero','EDIT','nuevo_foto_persona_format_name_file_KO','el nombre de fichero no cumple formato.'),
    Array('persona','nuevo_foto_persona',14,'cumple tipo fichero','EDIT','nuevo_foto_persona_type_file_KO','el tipo de fichero no esta permitido'),
    Array('persona','nuevo_foto_persona',15,'cumple tamaño maximo fichero','EDIT','nuevo_foto_persona_max_size_file_KO','el tamaño del fichero es muy grande.'),
    Array('persona','nuevo_foto_persona',16,'cumple tamaño minimo nombre fichero','EDIT','nuevo_foto_persona_min_size_name_KO','el tamaño del nombre de fichero es muy pequeño'),
    Array('persona','nuevo_foto_persona',17,'cumple tamaño maximo nombre fichero','EDIT','nuevo_foto_persona_max_size_name_KO','el tamaño del nombre de fichero es muy grande.'),
    Array('persona','nuevo_foto_persona',18,'fichero ok','EDIT',true,'ok'),
   
    

);

let pruebas_persona = Array(
    Array('persona','nombre_persona',1,1,'ADD','aa','nombre_persona_min_size_KO'),
    Array('persona','nombre_persona',2,2,'ADD','aaaaaaaaaaaaaaaaaaaaa','nombre_persona_max_size_KO'),
    Array('persona','nombre_persona',3,3,'ADD','aaaaaa1','nombre_persona_format_KO'),
    Array('persona','nombre_persona',4,4,'ADD','javier',true),
    



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
    Array('persona','nuevo_foto_persona',5,5,'ADD','existe',Array(),'nuevo_foto_persona_empty_KO'),
    Array('persona','nuevo_foto_persona',6,6,'ADD','cumple nombre fichero',Array('1111',Array('image/jpeg'),20000),'nuevo_foto_persona_format_name_file_KO'),
    Array('persona','nuevo_foto_persona',7,6,'ADD','type_file',Array('nombrejpg',Array('img/pdf'),20000),'nuevo_foto_persona_type_file_KO'),
    Array('persona','nuevo_foto_persona',8,8,'ADD','max_size_file',Array('nombrejpg',Array('image/jpeg'),200000000),'nuevo_foto_persona_max_size_file_KO'),
    Array('persona','nuevo_foto_persona',9,9,'ADD','min_size_name',Array('g',Array('image/jpeg'),20000),'nuevo_foto_persona_min_size_name_KO'),
    Array('persona','nuevo_foto_persona',10,10,'ADD','max_size_name',Array('a'.repeat(101),Array('image/jpeg'),20000),'nuevo_foto_persona_max_size_name_KO'),
    Array('persona','nuevo_foto_persona',11,11,'ADD','fichero ok',Array('nombrejpg',Array('image/jpeg'),20000),true),
    Array('persona','nuevo_foto_persona',12,12,'EDIT','noexiste',Array(),true),
    Array('persona','nuevo_foto_persona',13,13,'EDIT','cumple nombre fichero',Array('1111',Array('image/jpeg'),20000),'nuevo_foto_persona_format_name_file_KO'),
    Array('persona','nuevo_foto_persona',14,14,'EDIT','type_file',Array('nombrejpg',Array('img/pdf'),20000),'nuevo_foto_persona_type_file_KO'),
    Array('persona','nuevo_foto_persona',15,15,'EDIT','max_size_file',Array('nombrejpg',Array('image/jpeg'),200000000),'nuevo_foto_persona_max_size_file_KO'),
    Array('persona','nuevo_foto_persona',16,16,'EDIT','min_size_name',Array('g',Array('image/jpeg'),20000),'nuevo_foto_persona_min_size_name_KO'),
    Array('persona','nuevo_foto_persona',17,17,'EDIT','max_size_name',Array('a'.repeat(101),Array('image/jpeg'),20000),'nuevo_foto_persona_max_size_name_KO'),
    Array('persona','nuevo_foto_persona',18,18,'EDIT','fichero ok',Array('nombrejpg',Array('image/jpeg'),20000),true),
    
    



);