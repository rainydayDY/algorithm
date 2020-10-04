/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// var largestSumAfterKNegations = function(A, K) {
//     let num = 0;
//     let sum = 0;
//     for (let i = 0; i < A.length; ++i) {
//         for (let j = i; j < A.length; ++j) {
//             if (A[i] > A[j]) {
//                 let s = A[i];
//                 A[i] = A[j];
//                 A[j] = s;
//             }
//         }
//     }
//     for (let i = 0; i < A.length; ++i) {
//         if (A[i] < 0) {
//             num = num + 1;
//         }
//     }
//     // 需要取反的情况，对于一个从小到大排序的数组，如果取反次数小于负数的数量，则对所有负数取反。如果取反次数大于负数数量
//     if (K <= num) {
//         for (let i = 0; i < A.length; ++i) {
//             if (i < K) {
//                 A[i] = -A[i];
//             }
//             sum += A[i];
//         }
//     } else {
//         // 取反次数大于负数数量
//         for (let i = 0; i < A.length; ++i) {
//             if (i < num) {
//                 A[i] = -A[i];
//             }
//             sum += A[i];
//         }
//         if ((K - num) % 2 === 1) {
//             const min = Math.min(A[num], A[num - 1]);
//             sum -= min;
//         }
//     }
//     return sum;
// };
var largestSumAfterKNegations = function(A, K) {
    let minNum = undefined;
    let minArr = [];
    let sum = 0;
    for (let i = 0; i < A.length; ++i) {
        if (A[i] < 0) {
            A[i] = -A[i];
            minArr.push(A[i]);
        } else {
            minNum = minNum !== undefined ? Math.min(minNum, A[i]) : A[i]; // 取最小的大于等于0的数
        }
        sum += A[i];
    }
    const len = minArr.length;
    minArr = minArr.sort(function (a,b) {
        return a-b
    })
    if ((K-len) % 2 === 1) {
        sum -= 2 * Math.min(minNum, minArr[0] || minNum);
    }
    for (let i = 0; i < len - K; ++i) {
        sum -= minArr[i] * 2;
    }
    return sum;
};
console.log(largestSumAfterKNegations([4,2,3], 1))
console.log(largestSumAfterKNegations([3,-1,0,2], 3))
console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 2))
console.log(largestSumAfterKNegations([-8,3,-5,-3,-5,-2], 6))