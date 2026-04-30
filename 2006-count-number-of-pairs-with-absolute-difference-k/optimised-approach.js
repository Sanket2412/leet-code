var countKDifference = function(nums, k) {
    let map = new Map();
    let count = 0;

    for (let num of nums) {
        if (map.has(num - k)) {
            count += map.get(num - k);
        }
        if (map.has(num + k)) {
            count += map.get(num + k);
        }

        map.set(num, (map.get(num) || 0) + 1);
    }

    return count;
};