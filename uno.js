/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos^
*/
function mostrar()
{
	let nombre;
	let producto;
	let cantidad;
	let precio;
	let inflamable;
	let marca;
	let contadoralcohol=0;
	let acumalcohol=0;
	let contadoriac=0;
	let acumiac=0;
	let contadorquat=0;
	let acumquat=0;
	let promedioalcohol=0;
	let promedioiac=0;
	let promedioquat=0;
	let contadoriac2=0;
	let banderacaro=1;
	let productocaro;
	let marcaproductocaro;
	let tipoproductocaro;
	let acumcantcombustible=0;
	let acumcantexplo=0;
	let acumcantigni=0;
	let mensaje;


	for(let i=0;i<5;i++ )
	{

		nombre=prompt("Ingrese un nombre: ");

		producto=prompt("Ingrese un tipo de producto(alcohol, iac, quat)");
		while(producto!= "alcohol" && producto != "iac" && producto != "quat")
		{
			producto=prompt("ERROR.Ingrese un tipo de producto(alcohol, iac, quat)");

		}
		precio=parseInt (prompt("Ingrese un precio entre 100 y 300"));
		while(isNaN(precio) &&  precio < 100 || precio >300)
		{
			precio=parseInt (prompt("ERROR.Ingrese un precio entre 100 y 300"));

		} 
		cantidad=parseInt (prompt("Ingrese una cantidad mayor a 1 y menor a 1000"));
		while(isNaN(cantidad) &&  cantidad < 1 || cantidad > 1000)
		{
			cantidad=parseInt(prompt("ERROR.Ingrese una cantidad mayor a 1 y menor a 1000"));

		}
		inflamable=prompt("Ingrese tipo inflamable(ignifugo, combustible, explosivo) ");
		while(inflamable!= "ignifugo" && inflamable != "combustible" && inflamable!= "explosivo")
		{
			inflamable=prompt("ERROR.Ingrese tipo inflamable(ignifugo, combustible, explosivo) ");

		}
		marca=prompt("Ingrese una marca");

		// a) El promedio de cantidad por tipo de producto

		switch(producto){
			case "alcohol":
				contadoralcohol++;
				acumalcohol+=cantidad;
				break;
			case "iac":
				contadoriac++;
				acumiac+=cantidad;
				break;
			case "quat":
				contadorquat++;
				acumquat+=cantidad;
				break;		

		}

	// c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total

	if(producto=="iac" && precio <= 200){

		contadoriac2++;
	}

	// d) la marca y tipo del más caro de los productos

	if(banderacaro || precio > productocaro)
	{
		productocaro=precio;
		marcaproductocaro=marca;
		tipoproductocaro=producto;
		banderacaro=0;

	}

	// b) El tipo de inflamable con más cantidad de unidades en total de la compra

	switch(inflamable)
	{
		case "combustible":
			acumcantcombustible+=cantidad;
			break;
		case "explosivo":
			acumcantexplo+=cantidad;
			break;
		case "ignifugo":
			acumcantigni+=cantidad;
			break;		

	}



	}// fin for
	
	if(producto=="alcohol")
	{
		promedioalcohol=acumalcohol/contadoralcohol;
	}else if(producto=="iac")
	{
		promedioiac=acumiac/contadoriac;

	}else{

		promedioquat=acumquat/contadorquat;
	}


	if(acumcantcombustible>acumcantexplo && acumcantcombustible>acumcantigni)
	{
		mensaje="combustible";


	}else if(acumcantexplo>=acumcantcombustible && acumcantexplo>acumcantigni)
	{

		mensaje="explosivos";
	}else if(acumcantigni>acumcantcombustible && acumcantigni>acumcantexplo)
	{

		mensaje="ignifugos";
	}


	console.log("El promedio de cantidad de alcohol es " + promedioalcohol);
	console.log("El promedio de cantidad de iac es " + promedioiac);
	console.log("El promedio de cantidad de quat es "+ promedioquat);
	console.log("Hay " + contadoriac2 + " iac con precio menor a 200 (inclusive)");
	console.log("La marca y tipo del mas caro de los productos son: " + marcaproductocaro + "  " + tipoproductocaro);
	console.log("El tipo de inflamables con mas unidades en total de la compra es " + mensaje);

}// fin de la funcion
