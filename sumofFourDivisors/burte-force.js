var sumFourDivisors = function(nums) {
  let answer = 0;

  for (let num of nums) {
    let count = 0;
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
        sum += i;
      }
    }
    if (count === 4) {
      answer += sum;
    }
  }

  return answer;
};

console.log(sumFourDivisors([21,4,7]))