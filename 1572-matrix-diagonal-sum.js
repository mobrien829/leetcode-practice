var diagonalSum = function(mat) {
    let primaryDiag = 0
    let secondaryDiag = 0
    let usedPositions = []
    let k = 0
    for (let i=0; i < mat.length; i++) {
        primaryDiag += mat[i][i]
        usedPositions.push(`${i}, ${i}`)
        }
    for (let i = mat.length-1; i > -1; i--) {
        if (usedPositions.includes(`${i}, ${k}`)) {
            k++
        } else {
            secondaryDiag += mat[i][k]
            k++
        }
    }
    return primaryDiag + secondaryDiag
};