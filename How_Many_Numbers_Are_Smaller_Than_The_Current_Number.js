/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let i, j;
    const n = nums.length;
    const arr = nums.map(() => 0);
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (j != i && nums[j] < nums[i]) {
                arr[i]++;
            }
        }
    }
    return arr;
};
