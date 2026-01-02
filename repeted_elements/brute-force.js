var repeatedNTimes = function(nums) {
  if (nums[0] === nums[1] || nums[0] === nums[2]) return nums[0];
  if (nums[1] === nums[2]) return nums[1];

  let candidate = null;
  let count = 0;

  for (let i = 3; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};

console.log(repeatedNTimes([2,1,2,5,3,2])); // 2
