var lengthOfLongestSubstring = function(s) {
    let max=0;
    let string = new Map()
    let i=0,j=0;
    while(i < s.length && j < s.length)
    {
        let tempChar=s[j];
        if(!string.has(tempChar))
        {
            string.add(tempChar);
            if(j-i+1 > max)
            {
            max=j-i +1;
            }
            j++;
        }
        else{
            string.clear();
            i=j;
        }
    }
    return max
};
console.log(lengthOfLongestSubstring("dvdf"));