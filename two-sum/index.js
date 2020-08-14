var twoSumFun1 = function(nums, target) {
    let leftIndex = 0;
    let rightIndex = 0;
    for(let i = 0; i < nums.length; ++i) {
        for(let j = i + 1; j < nums.length; ++j) {
            if (nums[j] + nums[i] === target) {
                leftIndex = i;
                rightIndex = j;
                break;
            }
        }
    }
    return [leftIndex, rightIndex];
};

var twoSumFun2 = function(nums, target) {
    const obj = {};
    for(let i = 0; i < nums.length; ++i) {
        const leftNum = target - nums[i];
        if (obj[leftNum] !== undefined) {
            return [obj[leftNum], i];
        }
        obj[nums[i]] = i;
    }
};

