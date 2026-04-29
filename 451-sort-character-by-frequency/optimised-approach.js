var frequencySort = function(s) {
    let freqMap = new Map();
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    let buckets = Array(s.length + 1).fill(null).map(() => []);
    for (let [char, freq] of freqMap) {
        buckets[freq].push(char);
    }
    let result = "";
    for (let i = buckets.length - 1; i > 0; i--) {
        for (let char of buckets[i]) {
            result += char.repeat(i);
        }
    }
    return result;
};