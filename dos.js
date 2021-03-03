/*

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre.
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota.
*/

function mostrar()
{
  let nombre;
  let tipocursada;
  let cantmaterias;
  let sexo;
  let nota;
  let edad;
  let respuesta="si";
  let banderacursada=1;
  let edadcursadalibremin;
  let nombrecursadalibremin;
  let banderaremota=1;
  let edadremotomax;
  let cantmateriasremotamax;
  let nombreremotomax;
  let contadorfemenino=0;
  let contadormasculino=0;
  let contadornobinario=0;
  let acumnotafem=0;
  let acumnotamasc=0;
  let acumnotanb=0;
  let promediofem;
  let promediomasc;
  let promedionb;
  let banderamp=1;
  let nombremp;
  let promedio;
  let notamp;
  let materiasmp;


  do{
    nombre=prompt("Ingrese un nombre: ");

		while(isNaN(nombre)==false)
		{
			nombre=prompt("ERROR.Ingrese un nombre valido: ");
    }
    
    tipocursada=prompt("Ingrese su tipo de cursada (libre, presencial, remota)");

    while(tipocursada!= "libre" && tipocursada!="presencial" && tipocursada!="remota")
    {
      tipocursada=prompt("ERROR.Ingrese su tipo de cursada (libre, presencial, remota)");

    }

    cantmaterias=parseInt(prompt("Ingrese una cantidad de materias mayor a 0 y menor a 8: "));

    while(isNaN(cantmaterias) && cantmaterias < 0 && cantmaterias > 8)
    {
      cantmaterias=parseInt(prompt("ERROR.Ingrese una cantidad de materias mayor a 0 y menor a 8: "));

    }

    sexo=prompt("Ingrese un sexo (femenino-masculino-nobinario): ");

		while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
		{
			sexo=prompt("ERROR.Ingrese un sexo valido (femenino-masculino-nobinario): ");
		}

    nota=parseInt(prompt("Ingrese una nota entre 1 y 10"));

		while(nota <= 1 && nota >= 10)
		{
			nota=prompt("ERROR.Ingrese una nota entre 1 y 10");
    }
    
    edad=parseInt(prompt("Ingrese la edad "));

		while(isNaN(edad))
		{
			edad=prompt("ERROR. Ingrese la edad: ");
    }
    
    
    // a) El nombre del mejor promedio que no sea masculino.

    if(sexo=="femenino" || sexo == "no binario")
    {
      if( banderamp || nota > notamp)
      {
      notamp=nota;
      nombremp=nombre;
      banderamp=0;
      }

    }



// b) El nombre del mas joven de los alumnos entre los que la dan libre

if(tipocursada=="libre"){


  if(banderacursada || edad < edadcursadalibremin)
  {
    edadcursadalibremin=edad;
    nombrecursadalibremin=nombre;
    banderacursada=0;

  }

}
// c) El promedio de nota por sexo.

if(sexo=="femenino")
{
  contadorfemenino++;
  acumnotafem+=nota;

}else if(sexo == "masculino")
{
  contadormasculino++;
  acumnotamasc+=nota;

}else
{
  contadornobinario++;
  acumnotanb+=nota;

}


// d) La edad y nombre del que cursa mas materias que no sean en forma remota.

if(tipocursada=="libre" || tipocursada=="presencial")
{
    
  if( banderaremota || cantmaterias > cantmateriasremotamax)
  {
    cantmateriasremotamax=cantmaterias;
    edadremotomax=edad;
    nombreremotomax=nombre;
    banderaremota=0;
  
  }
  
}

respuesta=prompt("Quiere seguir ingresando datos?");
  }while(respuesta=="si");// fin bucle

if(contadorfemenino!=0)
{
promediofem=acumnotafem/contadorfemenino;

console.log("El promedio de nota de sexo femenino es:" + promediofem);
}else
{
  

  console.log("No se han ingresado mujeres.");
}


if(contadormasculino!=0)
{
  promediomasc=acumnotamasc/contadormasculino
  console.log("El promedio de nota masculino es: " + promediomasc);
}else
{
  console.log("No se han ingresado hombres.")

}

if(contadornobinario!=0)
{
  promedionb=acumnotanb/contadornobinario;
  console.log("El promedio de nota de las personas de sexo no binario es: " + promedionb);

}else
{
  console.log("No se han ingresado personas de sexo no binario.")

}

if(banderacursada = 1){

  console.log("No hay alumnos que cursen libre.");
}else
{

console.log("El alumno mas joven que cursa libre es " + nombrecursadalibremin);
}


console.log("La edad y nombre de la persona que cursa mas materias que no sean de forma remota son: " + nombreremotomax + "  " + edadremotomax);

console.log("El alumno de nota promedio mas alta es " + nombremp + " con una nota de  " + notamp);

}// fin funcion.
