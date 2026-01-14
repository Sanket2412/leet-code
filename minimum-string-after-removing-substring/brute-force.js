var minLength = function(s) {
    if(s.length === 0){
        return 0;
    }
    let arr= [];
    let i=0;
    let temp="";
    while(s.length > i)
    {
        if(arr.length !== 0)
        {
            temp=arr[arr.length-1]+s[i];
            if(temp==="AB" || temp==="CD")
            {
                arr.pop();
            }
            else{
                arr.push(s[i]);
            }
        }
        else{
            arr.push(s[i]);
        }
        i++;
    }
    return arr?.length ?? 0;
};
console.log(minLength("ABFCACDB"));