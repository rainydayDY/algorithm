// 通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 最大子序和
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = nums[0];
    let start = 0;
    let end = [];
    for (let i = 1; i < nums.length; ++i) {
        // 加正数会使和越来越大，加负数会使和变小,加上当前值如果大于当前值，
        // 起始值是加上当前值的值大于当前值，说明前面的和是正数，值得加，否则前面的值起反作用，抛弃，sum重新开始记
        // 终止值是继续加上的max变小，并且不会变大
        if (sum + nums[i] > nums[i]) {
            sum = sum + nums[i]
        } else {
            sum = nums[i];
            start = i;
            end = [];
        }
        if (sum < max) {
            end.push(i);
        } else {
            max = sum;
            end = [];
        }
    }
    console.log(nums.slice(start, end[0]))
    return max;
};
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,5,-4]))
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    // 前面的选择的机会多
   const len = nums.length;
   if (!len) return 0;
   let dp0 = nums[0];
   let dp1 = 0;
   let index = 1;
    while(index < len) {
        let tdp0 = Math.max(dp1, dp0);
        dp0 = dp1 + nums[index];
        dp1 = tdp0;
        index += 1;
    }
    return Math.max(dp0, dp1);
};
// 如果有8个数，求出前7个数的大的和以及小的和以及大和最后相加的数的索引
// console.log(massage([1,2,3,1]));
// console.log(massage([2,7,9,3,1]));
// console.log(massage([2,1,4,5,3,1,1,3]));
// console.log(massage([4,5,3,12,13,1]));
// console.log(massage([2,6,4,5,3,12,3]));
// console.log(massage());

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var checkSubarraySum = function(nums, k) {
//     for (let i = 0; i < nums.length; ++i) {
//         let sum = nums[i];
//         for (let j = i + 1; j < nums.length; ++j) {
//             sum += nums[j];
//             if (sum % k === 0 || (sum === 0 && k === 0)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };
// var checkSubarraySum = function(nums, k) {
//     let sum = [];
//     for (let i = 0; i < nums.length; ++i) {
//         for (let j = 0; j < sum.length; ++j) {
//             sum[j] += nums[i];
//             if (sum[j] % k === 0 || (sum[j] === 0 && k === 0)) {
//                 return true;
//             }
//         }
//         sum[i] = nums[i];
//     }
//     return false;
// };
var checkSubarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, -1);
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        if (k !== 0) {
            sum = sum % k;
        }
        if (map.get(sum)) {
            if (i - map.get(sum) > 1) return true;
        } else {
            map.set(sum, i);
        }
    }
    return false;
};
// console.log(checkSubarraySum([23,2,4,6,5], 6));
// console.log(checkSubarraySum([23,2,6,4,7], 6));
// console.log(checkSubarraySum([0,0], 0));
// console.log(checkSubarraySum());

// 背包问题，当前容量的背包可以装到的最大价值的商品的价值
var package = function(weight, price, capacity) {
    let dp = [];
    // dp[0][0] = price[0];
    for (let i = 0; i < capacity; ++i) {
        dp[i] = [];
        const currentCapacity = i + 1;
        for (let j = 0; j < price.length; ++j) {
            if (weight[j] > currentCapacity) {
                if (j === 0) {
                    dp[i][0] = 0
                } else {
                    dp[i][j] = dp[i][j-1];
                }
            } else {
                if (j === 0) {
                    dp[i][0] = price[j];
                } else {
                    const restWeight = currentCapacity - weight[j];
                    // 当前的最大价值等于，上一个网格的最大值和当前商品放入包中的价值加上，剩余包容量能够装得商品的最大价值
                    dp[i][j] = restWeight > 0 && dp[restWeight - 1][j] !== price[j] ? Math.max(price[j] + dp[restWeight - 1][j], dp[i][j-1]) : Math.max(price[j], dp[i][j-1]);
                }
            };
        }
    }
    return dp[capacity - 1][weight.length - 1]
}

// package([4, 3, 1], [3000, 2000, 1500], 4)

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let dp = [];
    for (let i = m; i >= 0; --i) {
        dp[i] = [];
        for (let j = n; j >= 0; --j) {
           dp[i][j] = 0;
        }
    }
    for (let k = 0; k < strs.length; ++k) {
        const len = strs[k].length;
        const zeroNum = strs[k].replace(/1/g, '').length;
        const oneNum = len - zeroNum;
        for (let i = m; i >= zeroNum; --i) {
            for (let j = n; j >= oneNum; --j) {
            dp[i][j] = Math.max(dp[i - zeroNum][j - oneNum] + 1, dp[i][j]);
            }
        }
    }
    return dp[m][n];
}
// console.log(findMaxForm(["11111","100","1101","1101","11000"], 5, 7))
// console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3))
// console.log(findMaxForm(["10", "0", "1"], 1, 1))
// console.log(findMaxForm(["1100","100000","011111"], 6, 6))
// console.log(findMaxForm(["0001","0101","1000","1000"], 9, 3))


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // let start = 0;
    // for (let i = 0; i < s.length; ++i) {
    //     const current = s[i];
    //     const index = t.indexOf(current, start);
    //     if (index !== -1) {
    //         start = index + 1;
    //     } else {
    //         return false;
    //     }
    // }
    // return true;
    let shortArrow = 0;
    let longArrow = 0;
    while(shortArrow < s.length && longArrow < t.length) {
        if (s[shortArrow] === t[longArrow]) {
            shortArrow ++;
            longArrow ++;
        } else {
            longArrow ++;
        }
    }
    console.log(shortArrow, longArrow)
    return shortArrow === s.length;
};

// console.log(isSubsequence('abc', 'ahbgdc'));
// console.log(isSubsequence('axc', 'ahbgdc'));
// console.log(isSubsequence("bb","ahbgdc"));
// console.log(isSubsequence("twn", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn"))

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let max = 0;
    grid.forEach((row, i) => {
        row.forEach((column, j) => {
            const left = grid[i][j - 1];
            const top = grid[i-1] ? grid[i-1][j] : undefined;
            if (left && top) {
                grid[i][j] = Math.max(left, top) + column;
            } else {
                grid[i][j] = (left || top || 0) + column;
            }
            max = grid[i][j];
        })
    })
    return max;
};

// console.log(maxValue([
//     [1,3,1, 6],
//     [1,5,1, 4],
//     [4,2,1, 5]
//   ]))

/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    if (n === 0) return 0;
    let dp = [1, 2, 4];
    for (i = 3; i < n; ++i) {
        dp[i] = (dp[i - 1] + dp[i - 2] + dp[i-3]) % 1000000007;
    }
    return dp[n - 1];
};

// console.log(waysToStep(5))

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    let arr=[0,0,1,2,4];
    if(n<5) return arr[n];
    const max=1e9+7;
    let res=1;
    while(n>=5){
        res=res%max*3;
        n=n-3;
    }
    return  res*n%max;
  };
// console.log(cuttingRope(120))

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    while(true) {
        if (stones.length < 2) break;
        stones = stones.sort((a, b) => a - b);
        const len = stones.length;
        const x = stones[len - 2];
        const y = stones[len - 1];
        if (x === y) {
            stones.length = stones.length - 2;
        } else {
            stones[len - 2] = y - x;
            stones.length = stones.length - 1;
        }
    }

    return stones.length === 1 ? stones[0] : 0;
};

// console.log(lastStoneWeightII([2,7,4,1,8,1, 9]))
console.log(lastStoneWeightII([31,26,33,21,40]))