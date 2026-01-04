//Copied from Chatgpt
var numOfWays = function(n) {
    const MOD = 1000000007;
    let a = 6; 
    let b = 6; 

    for (let i = 2; i <= n; i++) {
        const newA = (2 * a + 2 * b) % MOD;
        const newB = (2 * a + 3 * b) % MOD;

        a = newA;
        b = newB;
    }

    return (a + b) % MOD;
};
console.log(numOfWays(5000))
