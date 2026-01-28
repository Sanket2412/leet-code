function removeCharAt(str, index) {
  return str.slice(0, index) + str.slice(index + 1);
}
var makeFancyString = function(s) {// aaabaaa
    let numberCount=0,i=0,j=1;
    while(i < s.length && j < s.length){
        if(s[i] === s[j])
        {
            numberCount++;
            if(numberCount >= 2)
            {
                s=removeCharAt(s,j);
            }
            j++;
        }
        else{
            i=j;
            j++;
            numberCount=0;
        }
    }
    return s;
};
console.log(makeFancyString("aaabaaaa"))