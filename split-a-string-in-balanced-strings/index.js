/**
 * @param {string} s
 * @return {number}
 */
// 这道题的意思要把所有字符都用上，辣鸡
// var balancedStringSplit = function(s) {
//     // 遇到不同的字符做处理
//     let str = s.charAt(0);
//     let index = 1;
//     let sum = 0;
//     let leftLen = 1;
//     while(index < s.length) {
//         if (s[index] !== s[index-1]) {
//             if (str.length === 0) {
//                 str = s[index];
//                 leftLen = 1;
//             } else if (str.length === leftLen){
//                 sum += 1;
//                 str = '';
//                 leftLen = 0;
//             } else {
//                 leftLen = str.length;
//                 str = s[index];
//             }

//         } else {
//             str += s[index];
//             if (str.length <= leftLen) {
//                 console.log(str, leftLen)
//                 sum += 1;
//                 str = '';
//                 leftLen = 0;
//             }
//         }
//         index += 1;
//     }
//     return sum;
// };

// var balancedStringSplit = function(s) {
//     let lNum = 0;
//     let maxNum = 0;
//     for (let i = 0; i < s.length; ++i) {
//         if (s[i] === 'R') {
//             lNum += 1;
//         } else {
//             lNum -= 1;
//         }
//         if (lNum === 0) {
//             maxNum += 1;
//         }
//     }
//     return maxNum;
// };

// console.log(balancedStringSplit('RLRRLLRLRL'))
// console.log(balancedStringSplit('RLLLLRRRLR'))
// console.log(balancedStringSplit('LLLLRRRR'))
// console.log(balancedStringSplit("RLRRRLLRLL"))

// var canArrange = function(arr, k) {
//     let sum = 0;
//     let index = 0;
//     while(index < arr.length) {
//         if (arr[index] !== undefined) {
//             for (let i = 1; i < arr.length; ++i) {
//                 if (arr[i] !== undefined && index !== i && (arr[index] + arr[i])%k === 0) {
//                     sum += 1;
//                     arr[i] = undefined;
//                     arr[index] = undefined;
//                     break;
//                 }
//             }
//         }
//         index += 1;
//     }
//     return sum === arr.length / 2;
// }
// var canArrange = function(arr, k) {
//     let sum = 0;
//     let obj = {};
//     for (let i = 0; i < arr.length; ++i) {
//         arr[i] = (arr[i] % k + k) % k;
//         const target = (k - arr[i]) % k;
//         if (obj[target] > 0) {
//             sum += 1;
//             obj[target] -= 1;
//         } else {
//             obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
//         }
//     }
//     return sum === arr.length / 2;
// }
// console.log(canArrange([1,2,3,4,5,10,6,7,8,9], 5));
// console.log(canArrange([1, 2,3,4,5,6], 7));
// console.log(canArrange([1, 2,3,4,5,6], 10));
// console.log(canArrange([-10, 10], 2));
// console.log(canArrange([-1,1,-2,2,-3,3,-4,4], 3));
// console.log(canArrange([3,8,17,2,5,6], 10))
// console.log(canArrange([-4,-7,5,2,9,1,10,4,-8,-3], 3));

var numWaterBottles = function(numBottles, numExchange) {
    let sum = numBottles;
    while (true) {
        const num = numBottles / numExchange | 0;
        const remain = numBottles % numExchange;
        sum += num;
        numBottles = num + remain;
        if (numBottles < numExchange) {
            break;
        }
    }
    return sum;
};

console.log(numWaterBottles(2, 3))