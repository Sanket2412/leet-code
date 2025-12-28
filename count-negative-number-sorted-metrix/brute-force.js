var countNegatives = function(grid) {
    let count=0;
    let i=0
    while(i < grid.length)
    {
        let arr=grid[i];
        let k=0;
        while(k < arr.length)
        {
            if(arr[k] < 0)
                {
                    count++;
                }  
            k++; 
        }
        i++;
    }
    return count;
};

console.log(countNegatives([[3,2],[1,0]]))