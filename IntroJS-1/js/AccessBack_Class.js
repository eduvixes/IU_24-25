class AccessBack{

	constructor(){

	}

	SEARCH(entidad){

        let funcionalidad = Array(
		{
            "id_funcionalidad": "1",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "2",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "3",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "4",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "5",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "6",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "7",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "545",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "623",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "642",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "648",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "650",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "697",
            "nombre_funcionalidad": "nombre_funcionalidad",
            "descrip_funcionalidad": "descrip_funcionalidad"
        },
        {
            "id_funcionalidad": "721",
            "nombre_funcionalidad": "eva",
            "descrip_funcionalidad": "holaquease"
        },
        {
            "id_funcionalidad": "724",
            "nombre_funcionalidad": "prueba1212",
            "descrip_funcionalidad": "prueba"
        },
        {
            "id_funcionalidad": "725",
            "nombre_funcionalidad": "prueba12",
            "descrip_funcionalidad": "prueba12"
        },
        {
            "id_funcionalidad": "731",
            "nombre_funcionalidad": "qwerterty",
            "descrip_funcionalidad": "qwerggggggggggggggggggggggggggggggggggggggggggggggg"
        },
        {
            "id_funcionalidad": "734",
            "nombre_funcionalidad": "el",
            "descrip_funcionalidad": "sshhshhs"
        }
        );

        let datospersonales = Array(
        {
            "dni": "11111111H",
            "nombre_persona": "aaasdasdasdasdasdas",
            "apellidos_persona": "Martinez",
            "fechaNacimiento_persona": "2023-09-06",
            "direccion_persona": "Camino de los BArros",
            "telefono_persona": "999999999",
            "email_persona": "aaron02072003@gmail.com",
            "foto_persona": ""
        },
        {
            "dni": "123132",
            "nombre_persona": "12312313jhkjhkjhkjhkjhkjhkjhkjhkjhkjh",
            "apellidos_persona": "12313212313213",
            "fechaNacimiento_persona": "2024-01-02",
            "direccion_persona": "LKJLFAKJDFAF LKASDJFKLASJDFLAKF LKAJSDLFKASJDFLKAJDF LKAJDFLKAJDFLKASDJF LAKSDJFLAKSDJFLAKDFJ",
            "telefono_persona": "11111",
            "email_persona": "11111",
            "foto_persona": "edit_accion.jpg"
        }
        );

        let usuario = Array(
         {
            "dni": "35581292Q",
            "usuario": "RBL",
            "contrasena": "4a95b1149f9ea2f9295e7cc0c2660468",
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "dni": "54507875z",
            "usuario": "admin",
            "contrasena": "698d51a19d8a121ce581499d7b701668",
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "dni": "77479735A",
            "usuario": "adrian",
            "contrasena": "753e99682cd34bfbc035b329354a6609",
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "dni": "35600364k",
            "usuario": "adsada",
            "contrasena": "056f32ee5cf49404607e368bd8d3f2af",
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "dni": "54227803J",
            "usuario": "ali",
            "contrasena": "86318e52f5ed4801abe1d13d509443de",
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "dni": "81643182J",
            "usuario": "analsex",
            "contrasena": "a09302313bd087b88a54fe1a010eb62e",
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "dni": "99999999R",
            "usuario": "ejemplo1",
            "contrasena": "ejemplo1",
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "dni": "56943433s",
            "usuario": "jesusnavas",
            "contrasena": "25f9e794323b453885f5181f1b624d0b",
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "dni": "12345678E",
            "usuario": "kratos",
            "contrasena": "4e2a1f5b626b2e898b57045e4b651161",
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "dni": "11111111H",
            "usuario": "root",
            "contrasena": "63a9f0ea7bb98050796b649e85481845",
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        }
        );

        rolaccionfuncionalidad = Array(
            {
            "id_funcionalidad": {
                "id_funcionalidad": "1",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "1",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "1",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "2",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "1",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "2",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "1",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "3",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "1",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "4",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "1",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "5",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "1",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "6",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "1",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "6",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "1",
                "rol_name": "Básico",
                "rol_description": "Usuario Básico"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "1",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "7",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "2",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "1",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "2",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "2",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "2",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "3",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "2",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "4",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "2",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "5",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "2",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "6",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "2",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "7",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "3",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "1",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "3",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "2",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "3",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "3",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "3",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "4",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "3",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "5",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "3",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "6",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "3",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "7",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "4",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "1",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "4",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "2",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "4",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "3",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "4",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "4",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "4",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "5",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "4",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "6",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "4",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "7",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "5",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "1",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "5",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "2",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "5",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "3",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "5",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "4",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "5",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "5",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "5",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "6",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "5",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "7",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "6",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "1",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "6",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "2",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "6",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "3",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "6",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "4",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "6",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "5",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "6",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "6",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "6",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "7",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "7",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "1",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "7",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "2",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "7",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "3",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "7",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "4",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "7",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "5",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "7",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "6",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "7",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "7",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "545",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "1",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "648",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "1",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "648",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "2",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "648",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "3",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "648",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "4",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "648",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "5",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        },
        {
            "id_funcionalidad": {
                "id_funcionalidad": "648",
                "nombre_funcionalidad": "nombre_funcionalidad",
                "descrip_funcionalidad": "descrip_funcionalidad"
            },
            "id_accion": {
                "id_accion": "6",
                "nombre_accion": "nombre_accion",
                "descrip_accion": "descrip_accion"
            },
            "id_rol": {
                "id_rol": "0",
                "rol_name": "Admin",
                "rol_description": "Administrador"
            }
        }
        );

		return eval(entidad);

	}

}