/*accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

function accum(s) {
    sArray = [...s]
    mumbledArray = []
    for (let i = 0; i < sArray.length; i++){
        mumbledArray.push(capitalizeFirstLetter(sArray[i].repeat(i + 1)))
    }
    return mumbledArray.join('-')
}

function capitalizeFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const str = "RqaEzty"
console.log(accum(str))