var countGoodRectangles = function(rectangles) {
    let sideLength = rectangles.map(rectangle => Math.min(rectangle[0], rectangle[1]))
    let maxLen = Math.max(...sideLength)
    let squareCounter = 0
    sideLength.forEach(num => num === maxLen ? squareCounter ++ : undefined)
    return squareCounter
};