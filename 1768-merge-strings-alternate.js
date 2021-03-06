var mergeAlternately = function(word1, word2) {
    let word1Array = word1.split("")
    let word2Array = word2.split("")
    let newWord = []
    let count = 0
    
    if (word1Array.length > word2Array.length) {
        count = word1Array.length
    } else {
        count = word2Array.length
    }
    
    for (let i = 0; i < count; i++) {
        if (word1Array.length > 0) {
        newWord.push(word1Array[i])
        newWord.push(word2Array[i])
        } else {
            newWord.push(word2Array[i])
        }
    }
    return newWord.join("")
};