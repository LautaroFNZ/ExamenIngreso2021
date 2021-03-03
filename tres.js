/*
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/

function mostrar()
{
	let nombre;
	let estadocivil;
	let edad;
	let temperatura;
	let sexo;
	let precio=600;
	let respuesta="si";
	let contviudostercera=0;
	let banderasoltera=1;
	let edadsoltermin;
	let nombresolteramin;
	let preciobruto;
	let preciofinal;
	let contadorpasajeros=0;
	let acumedad=0;



	do{
		nombre=prompt("Ingrese su nombre: ");
		while(isNaN(nombre)==false)
		{

			nombre=prompt("ERROR.Ingrese su nombre: ");
		}

		estadocivil=prompt("Ingrese un estado civil(soltero, casado o viudo) ");

		while(estadocivil != "soltero" && estadocivil != "casado" && estadocivil != "viudo")
		{
			estadocivil=prompt("ERROR.Ingrese un estado civil(soltero, casado o viudo) ");
		}

		edad= parseInt(prompt("Ingrese edad."));

		while(isNaN(edad))
		{
			edad= parseInt(prompt("ERROR.Ingrese edad valida."));
		}

		temperatura= parseFloat(prompt("Ingrese su temperatura corporal."));

		while(isNaN(temperatura))
		{

			temperatura= parseFloat(prompt("ERROR.Ingrese su temperatura corporal."));
		}

		sexo=prompt("Ingresar sexo (f o m)");

		while(sexo!= "f" && sexo != "m")
		{
			sexo=prompt("ERROR.Ingresar sexo (f o m)");
		}

	//	a) La cantidad de personas con estado "viudo" de mas de 60 años.

	if(estadocivil=="viudo" && edad >= 60)
	{
		contviudostercera++;

	}

	// b) el nombre y edad de la mujer soltera mas joven.

	if(sexo=="f" && estadocivil=="soltero")
	{
		if(banderasoltera || edad < edadsoltermin)
		{
			edadsoltermin=edad;
			nombresolteramin=nombre;
			banderasoltera=0;
		}

	}

acumedad+=edad;	

contadorpasajeros++;

respuesta=prompt("Quiere seguir ingresando datos?");

	}while(respuesta=="si");//fin bucle.



	// c) cuanto sale el viaje total sin descuento.

	preciobruto=precio*contadorpasajeros;

	// d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.




if(contviudostercera!=0)
{
	console.log("Hay " +  contviudostercera + " personas viudas con mas de 60 años.");
}else{
	console.log("No hay personas viudas mayores a 60.");
}

if(banderasoltera!=1)
{
	console.log("La soltera mas joven se llama " + nombresolteramin + " y tiene " +edadsoltermin);
}else{
	console.log("No se ingresaron mujeres solteras.");
}

console.log("El viaje total sin descuento sale " + preciobruto);


}// fin funcion.
