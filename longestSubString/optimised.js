var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let map = new Map();
    let i = 0;

    for (let j = 0; j < s.length; j++) {
        const char = s[j];
        if (map.has(char) && map.get(char) >= i) {
            i = map.get(char) + 1;
        }
        map.set(char, j);
        max = Math.max(max, j - i + 1);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcdbcbfghj")); 