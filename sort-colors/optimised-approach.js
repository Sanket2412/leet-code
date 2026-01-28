var sortColors = function(nums) {
    let i=0,j= 0,k=nums.length-1;
    while(j <= k){
        if(nums[j] ===0){
            nums[j]=nums[i];
            nums[i]=0;
            i++;
            j++;
            continue;
        }
        else if(nums[j] === 2){
            nums[j]=nums[k];
            nums[k]=2;
            k--;
        }
        else {
            j++
        }
    }
    return nums
};
/*[2,0,2,1,1,0]
   ij        k  
[0,0,2,1,1,2]
ij       k  
[0,0,2,1,1,2]
   ij    k
[0,0,2,1,1,2]
     ij  k
[0,0,1,1,2,2]
     ijk
   */
//[2,0,1]
console.log(sortColors([2,0,1]))