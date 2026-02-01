var hasSameDigits = function(s) {
    if(s.length === 2){
        return s[0] === s[1]
    }
    let i=0,temp="",tempSum=0;
    while (i +1 < s.length ) {
        tempSum=(Number(s[i])+ Number(s[i+1])) % 10;
        temp=temp+tempSum
        i++;
    }
    return hasSameDigits(temp)
};

//let s = "3902"
// let s = "34789"
let s="1234567890"
console.log(hasSameDigits(s))