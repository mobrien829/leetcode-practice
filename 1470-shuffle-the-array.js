// /**
//  * @param {number[]} nums
//  * @param {number} n
//  * @return {number[]}
//  */

// below got 100% on memory and 71%-92% on speed
var shuffle = function (nums, n) {
  const shuffledArray = [];
  for (i = 0; i < nums.length / 2; i++) {
    shuffledArray.push(nums[i], nums[i + n]);
  }
  return shuffledArray;
};
