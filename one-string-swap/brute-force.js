var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) {
        return true;
    }
    let mismatches = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            mismatches.push(i);
        }
    }
    if (mismatches.length !== 2) {
        return false;
    }

    let i = mismatches[0];
    let j = mismatches[1];
    return (
        s1[i] === s2[j] &&
        s1[j] === s2[i]
    );
};

//let s1 = "bank", s2 = "kanb";
//let s1 = "attack", s2 = "defend"
//let s1 = "kelb", s2 = "kelb"
let s1 = "aaab";
let s2 = "abaa";
console.log(areAlmostEqual(s1,s2))