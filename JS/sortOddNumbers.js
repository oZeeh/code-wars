function sortArray(array) {
    indices = [];

    array
        .filter((v, i) => v % 2 && indices.push(i))
        .sort((a, b) => a - b)
        .forEach((v, i) => array[indices[i]] = v);

    return array;
}

const array1 = [1,7]
const array2 = [5, 8, 6, 3, 4]
console.log(sortArray(array2))