var maxConsecutive = function(bottom, top, special) {
    special.sort((a, b) => a - b);
    let max = 0;
    max = special[0] - bottom;
    for (let i = 1; i < special.length; i++) {
        let gap = special[i] - special[i - 1] - 1;
        if (gap > max) {
            max = gap;
        }
    }
    let lastGap = top - special[special.length - 1];
    if (lastGap > max) {
        max = lastGap;
    }
    return max;
};
