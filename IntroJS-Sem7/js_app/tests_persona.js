let def_tests_persona = Array(
    Array('persona','nombre_persona',1,'cumple tamaño minimo','ADD','nombre_persona_min_size_KO','Tamaño muy corto. Debe estar entre 4 y 20 caracteres'),
    Array('persona','nombre_persona',2,'cumple tamaño minimo','ADD',true,'Nombre persona correcto'),


);

let pruebas_persona = Array(
    Array('persona','nombre_persona',1,1,'ADD','aa','nombre_persona_min_size_KO'),
    Array('persona','nombre_persona',1,1,'ADD','javier',true),
    



);

let pruebas_file_persona = Array(
    Array(),
    Array()



);