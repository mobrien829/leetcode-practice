var smallerNumbersThanCurrent = function (nums) {
  return nums.map((num) => {
    return nums.filter((compNum) => compNum < num).length;
  });
};
