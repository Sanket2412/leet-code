var makeFancyString = function(s) {
    let result = [];
    
    for (let ch of s) {
        let n = result.length;
        
        // If last two chars are same as current, skip
        if (n >= 2 && result[n-1] === ch && result[n-2] === ch) {
            continue;
        }
        
        result.push(ch);
    }
    
    return result.join('');
};

console.log(makeFancyString("aaabaaaa"))