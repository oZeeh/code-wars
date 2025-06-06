function disemvowel(str){
    const vowels = ['a','e','i','o','u']
    const strArray = [...str]
    
    return strArray.filter((letter) => !vowels.includes(letter.toLowerCase())).join('')
}

console.log(disemvowel("Bom dia"))