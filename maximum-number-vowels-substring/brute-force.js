
  const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
function isVowel(char) {
    return VOWELS.has(char.toLowerCase());
}
var maxVowels = function(s, k) {
    let n=s.length,maxVowelCount=0,vowelCount=0;
    for (let index = 0; index <= n - k; index++) {
        for (let j = index; j < k+index; j++) {
            if(isVowel(s[j])){
                vowelCount++;
            }
        }
        maxVowelCount=Math.max(maxVowelCount,vowelCount);
        vowelCount=0;
    }
    return maxVowelCount;
};
let s = "abciiidef", k = 3;
console.log(maxVowels(s,k))