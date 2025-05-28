// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYenes = valueInDollar * 156.5;
    // Retornamos el valor en dólares
    return valueInYenes;
}

const fromYenToPound = function(valueInYenes) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYenes * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar };