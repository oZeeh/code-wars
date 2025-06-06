const binaryArrayToNumber = arr => {
    let binary = arr.join('')
    return parseInt(binary, 2);
  };

const binary = [0, 1, 0, 1]
console.log(binaryArrayToNumber(binary))