function isPrimeNumber (number) {
    let i = 2;
    for (i; (number-1) % i != 0; i++) {
        console.log(i);
    }
    return "Verdadero: " + number;
}
console.log(isPrimeNumber(9));