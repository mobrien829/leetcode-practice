// @param {number[]} nums
// @return {number[]}

// this solution got 36 MB (100% less mem) and 68 ms (91.88%)
var runningSum = function (nums) {
  const sumArray = [];
  let currSum = 0;
  nums.forEach((num) => {
    currSum += num;
    sumArray.push(currSum);
  });
  return sumArray;
};
