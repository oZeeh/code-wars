function addBinary(a, b) {
    let decimal = a + b
    decimal = convertDecimalToBinary(decimal)
    return decimal
}

function convertDecimalToBinary(decimal) {
    let binaryArray = []
    while (decimal > 0){
        binaryArray.unshift(decimal % 2)
        decimal = Math.floor(decimal / 2)
    }

    return binaryArray.length ? binaryArray.join('') : "0"
}
console.log(addBinary(1, 1))