var minimumRecolors = function(blocks, k) {
    let n = blocks.length;
    let minRecolors = Infinity;
    for (let i=0; i<=n-k;i++) {
        let whiteCount = 0;
        for (let j=i; j<i+k;j++) {
            if (blocks[j] === 'W') {
                whiteCount++;
            }
        }
        minRecolors = Math.min(minRecolors, whiteCount);
    }
    return minRecolors;
};

let blocks = "WBBWWBBWBW", k = 7;
console.log(minimumRecolors(blocks,k))