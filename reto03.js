function businessHours (hour) {
    return (hour >= 9 && hour < 18) ? true : false;   
}

function businessDay (day) {
    return (day >= 1 && day <=5) ? true : false;
}

const date = new Date(); //Current Time

const dia = date.getDay(); //Día (0-6)
let weekDay = "";

const hora = date.getHours();
let hourAPM = "";

let mensaje1 = (businessDay(dia)) ? "Día Laborable" : "No es día Laborable";
let mensaje2 = (businessHours(hora)) ? " Laborable" : "No Laborable";

switch(dia) {
    case 0:
        weekDay = "Domingo";
        break;
    case 1:
        weekDay = "Lunes";
        break;
    case 2:
        weekDay = "Martes";
        break;
    case 3:
        weekDay = "Miercoles";
        break;
    case 4:
        weekDay = "Jueves";
        break;
    case 5:
        weekDay = "Viernes";
        break;
    case 6:
        weekDay = "Sabado";
        break;
}

if ((hora-12) < 0){
    hourAPM = hora + " a.m.";
} else {
    hourAPM = (hora - 12) + " p.m."; 
}

if (businessDay(dia)) { 
    console.log("Hoy " + weekDay + " es " + mensaje1);
    console.log("Hoy a las " + hourAPM + " es " + mensaje2);

} else {
    console.log("No es ni dia, ni hora laboral HOY");
}




