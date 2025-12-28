var countNegatives = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let row = 0;
    let col = cols - 1;
    let count = 0;

    while (row < rows && col >= 0) {
        if (grid[row][col] < 0) {
            // All elements below this cell in the same column are negative
            count += (rows - row);
            col--; // move left
        } else {
            row++; // move down
        }
    }

    return count;
};

console.log(countNegatives([[3, 2], [1, 0]]));
