/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// var minInteger = function(num, k) {
//     let maxCircleNum = 1;
//     let sequentialNum = '';
//     for (let i = 0; i < num.length; ++i) {
//         maxCircleNum = maxCircleNum * (i + 1);
//     }
//     maxCircleNum = Math.min(maxCircleNum - 1, k); // 求当前给出数字能够进行相邻位数交换的最小数，避免重复循环
//     if (maxCircleNum < k) {
//         sequentialNum = num.split('').sort((a, b) => a - b).join('');
//     }
//     let index = 0;
//     while (maxCircleNum > 0 && index < num.length) {
//         const sortNum = Math.min(maxCircleNum + index + 1, num.length); // 找出当前待排序的字符串
//         // 找出当前字符串中最小的数及其索引
//         let minNum = num[index];
//         let minIndex = index;
//         for (let i = index + 1; i < sortNum; ++i) {
//             if (num[i] < minNum) {
//                 minNum = num[i];
//                 minIndex = i;
//             }
//         }
//         if (minIndex !== index) {
//             const s = num[minIndex];
//             num = num.substring(0, index) + num[minIndex] + num.substring(index, minIndex) + num.substring(minIndex + 1);
//             maxCircleNum -= (minIndex - index);
//         };
//         if (num === sequentialNum) break;
//         index += 1;
//     }
//     return num;
// };

// console.log(minInteger('4321', 4))
// // console.log(minInteger('100', 1))
// console.log(minInteger('9438957234785635408', 23))
// console.log(minInteger('22', 22))
// console.log(minInteger('36789', 1000))
// console.log(minInteger('294984148179', 11))
// console.log(minInteger('3142', 4))

/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    while(S.includes('()')) {
        S = S.replace('()', '');
    }
    return S.length;
};
console.log((minAddToMakeValid('())')))
console.log((minAddToMakeValid('(((')))
console.log((minAddToMakeValid('()')))
console.log((minAddToMakeValid('()))((')))
console.log((minAddToMakeValid('(')))
console.log((minAddToMakeValid('')))