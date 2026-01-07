var findMedianSortedArrays = function(nums1, nums2) {
    let nums1Length=nums1.length;
    let nums2Length=nums2.length;
    let i=0,j=0, tempArr=[];
    while(i < nums1Length && j < nums2Length)
    {
        if(nums1[i] < nums2[j])
        {
            tempArr.push(nums1[i])
            i++;
        }
        else
        {
            tempArr.push(nums2[j])
            j++;
        }
    } 
    if(i < nums1Length)
    {
        tempArr.push(...nums1.slice(i))
    }
    if(j < nums2Length)
    {
       tempArr.push(...nums2.slice(j)) 
    }
    if(tempArr.length % 2 === 0)
    {
        let middleValue= tempArr.length / 2;
        let nextMiddleValue=middleValue-1;
        return (tempArr[middleValue] + tempArr[nextMiddleValue]) /2;
    }
    else
    {
        return tempArr[ Math.floor(tempArr.length / 2)]
    }
};
console.log(findMedianSortedArrays([1,2],[3,4]));