var sortColors = function(nums) {
    let zeroCounter=0,oneCounter=0,twoCounter=0;
    for (let element of nums) {
        if(element === 0)
        {
            zeroCounter++;
        }
        else if(element === 1)
        {
            oneCounter++;
        }
        else{
            twoCounter++;
        }
    }  
    for (let index = 0; index < nums.length; index++) {
        if(zeroCounter){
            nums[index]=0;
            zeroCounter--;
            continue;
        }
        else if(oneCounter){
            nums[index]=1;
            oneCounter--;
            continue;
        }
        else{
            nums[index]=2;
            twoCounter--;
        }

    }
    return nums;
};
//[2,0,2,1,1,0]
//[2,0,1]
console.log(sortColors([2,0,1]))