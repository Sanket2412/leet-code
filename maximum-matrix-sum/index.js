var maxMatrixSum = function(matrix) {
  let n = matrix.length;
  let sumAbs = 0;
  let negCount = 0;
  let minAbs = Infinity;
  let hasZero = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let val = matrix[i][j];
      sumAbs += Math.abs(val);
      if (val < 0) negCount++;
      if (val === 0) hasZero = true;
      minAbs = Math.min(minAbs, Math.abs(val));
    }
  }
    if (negCount % 2 === 0 || hasZero) {
    return sumAbs;
  }
  return sumAbs - 2 * minAbs;
};
console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]]))