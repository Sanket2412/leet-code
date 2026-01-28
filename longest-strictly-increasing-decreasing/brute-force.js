var longestMonotonicSubarray = function(nums) {
    let increasingStreak=1, decreasingStreak=1,max=1;
    for (let index = 0; index < nums.length; index++) {
        if(index + 1 < nums.length)
        {
        if(nums[index] ===nums[index+1])
        {
            increasingStreak=1;
            decreasingStreak=1;
        }
        else if(nums[index+1] >nums[index])
        {
            increasingStreak++;
            decreasingStreak=1;
        }
        else{
            decreasingStreak++;
            increasingStreak=1;
        }
        }
        max=Math.max(max,Math.max(increasingStreak,decreasingStreak));
    }
    return max;
};
//[1,4,3,3,2]
//[3,3,3,3]
//[3,2,1]
console.log(longestMonotonicSubarray([3,2,1]));