var clearDigits = function(s) {
    let i=0, arr=[]
    while(i < s.length){
        if(isNaN(s[i])){
            arr.push(s[i]);
        }
        else{
            if(arr.length > 0 && isNaN(arr[arr.length-1])){
                arr.pop();
            }
            else{
                arr.push(s[i])
            }
        }
        i++;
    }
    return arr.join("")
};
//"abc"
//"cb34"
//"1a2b"
//"1a2"
console.log(clearDigits("1a2"))