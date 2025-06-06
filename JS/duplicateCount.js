function duplicateCount(text) {
    var freq = {};
    var duplicates = 0;

    for (var i = 0; i < text.length; i++) {
        var character = text.charAt(i).toLowerCase(); // Case insensitive
        if (freq[character]) {
            freq[character]++;
            if (freq[character] === 2) {
                duplicates++;
            }
        } else {
            freq[character] = 1;
        }
    }
    return duplicates;
}

// Example usage:
console.log(duplicateCount("aabbcde")); 
console.log(duplicateCount("aA11"));    
console.log(duplicateCount("abcdef"));
