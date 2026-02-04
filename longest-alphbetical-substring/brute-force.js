var longestContinuousSubstring = function(s) {
    let max=1, tempCount=1;
    for (let index = 0; index < s.length; index++) {
        if(s.charCodeAt(index) - s.charCodeAt(index-1) === 1 ){
            tempCount++;
        }
        else{
            tempCount=1;
        }
        max=Math.max(max,tempCount)
    }    
    return max;
};

//let s="abacaba"
//let s = "abcde"
let s="asucse"
console.log(longestContinuousSubstring(s))