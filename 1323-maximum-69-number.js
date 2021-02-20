var maximum69Number  = function(num) {
    let newNum = undefined
    let numArray = num.toString().split('').map(int => parseInt(int))
    for (i = 0; i < numArray.length; i++) {
        if (!numArray.includes(6)) {
            newNum = num
            break
        }
        else if (numArray[i] === 6) {
            numArray[i] = 9
            newNum = numArray.join('')
            break
        }
    }
    return newNum
};