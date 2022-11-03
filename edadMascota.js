

function dogAge (absoluteAge) { //Perros chicos.
    relativeAge = 0;
    if (absoluteAge >= 1) {
        relativeAge = relativeAge + 20;  // El primer año equivale a 20 años.
        if (absoluteAge >= 2) {
            absoluteAge --;
            relativeAge = relativeAge + 8; //El segundo año equivale a 8 años.
        }
        absoluteAge --;
    }
    relativeAge = relativeAge + (absoluteAge*4); //los siguientes años despues de los 
                                                // los 2 primeros, equivalen a 4 años c/u.

    return relativeAge;
}

console.log("\nEdad Perruna: " +  dogAge(5) + "\n");

