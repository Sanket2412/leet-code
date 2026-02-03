var minimumRecolors = function(blocks, k) {
    //"WBBWWBBWBW"
//            k
    let n = blocks.length;
    let whiteCount = 0;
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') {
            whiteCount++;
        }
    }
    let minRecolors = whiteCount;
    for (let i = k; i < n; i++) {
        if (blocks[i] === 'W') {
            whiteCount++;
        }
        if (blocks[i - k] === 'W') {
            whiteCount--;
        }
        minRecolors = Math.min(minRecolors, whiteCount);
    }

    return minRecolors;
};
let blocks = "WBBWWBBWBW", k = 7;
console.log(minimumRecolors(blocks,k))
