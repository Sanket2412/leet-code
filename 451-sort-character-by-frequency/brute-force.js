var frequencySort = function(s) {
    let mappedObject=new Map()
    for(let i=0; i<s.length;i++){
        let currentCount=mappedObject.get(s[i])
        if(currentCount){
            mappedObject.set(s[i],currentCount+1)
        }
        else {
            mappedObject.set(s[i],1);
        }
    }
    let newArray=[]
    mappedObject.forEach((value,key)=>{
        newArray.push([key,value])
    })
    newArray.sort((a,b)=>(
        b[1]-a[1]
    ))
    let updateString="";
    newArray.forEach((element)=>{
        for(let i=0; i< element[1];i++){
            updateString+=element[0]
        }
    })
    return updateString
};

frequencySort( "tree")