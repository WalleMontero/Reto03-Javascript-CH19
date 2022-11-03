function oddNumber (number) {
    if (number % 2 == 0) {
        return "Número Par";
    } else {
        return "Número Impar";
    }
}


function legalAge (birthYear) {
    const year = new Date().getFullYear();
    //console.log("Año Actual: " + year);
    
    if ((year - birthYear) >= 18) {
        return "EL usuario es mayor de edad";
    } else {
        return "El usuario es menor de edad";
    }
}

console.log( oddNumber(2) );
console.log( legalAge(2015) );



