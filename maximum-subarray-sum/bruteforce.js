var maxAscendingSum = function(nums) {
    let max=nums[0],i=1,sum=nums[0];
    while(i < nums.length){
        if(nums[i] > nums[i-1]){
            sum+=nums[i]
        }
        else{
            sum=nums[i];
        }
        max=Math.max(max,sum);
        i++;
    }
    return max;
};
//[10,20,30,5,10,50]
//[10,20,30,40,50]
console.log(maxAscendingSum([10,20,30,40,50]));