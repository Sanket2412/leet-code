var similarPairs = function(words) {
    var mappedArray= new Map()

    words.forEach((element) => {
            let tempString=[]
            for (let index = 0; index < element.length; index++) {
                if(!tempString.includes(element[index])){
                    tempString.push(element[index])
                }
            }
            let uniqueString=tempString.sort().join('');
            if(mappedArray.has(uniqueString)){
                mappedArray.set(uniqueString, mappedArray.get(uniqueString) + 1)
            }
            else{
                mappedArray.set(uniqueString,1)
            }
    });
    let count=0;
    mappedArray.forEach((item) => {
    count += (item * (item - 1)) / 2;
});
    return count
};

//["aabb","ab","ba"]
//["aba","aabb","abcd","bac","aabc"]
//["nba","cba","dba"]
console.log(similarPairs(["nba","cba","dba"]))