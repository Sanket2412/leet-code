var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelCount = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            vowelCount++;
        }
    }
    let maxVowelCount = vowelCount;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            vowelCount++;
        }
        if (vowels.has(s[i - k])) {
            vowelCount--;
        }
        maxVowelCount = Math.max(maxVowelCount, vowelCount);
    }
    return maxVowelCount;
};
