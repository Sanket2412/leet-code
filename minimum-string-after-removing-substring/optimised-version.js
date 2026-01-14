var minLength = function(s) {
    const stack = [];
    
    for (let ch of s) {
        const last = stack[stack.length - 1];
        
        if (
            (last === 'A' && ch === 'B') ||
            (last === 'C' && ch === 'D')
        ) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    
    return stack.length;
};

console.log(minLength("ABFCACDB")); 
