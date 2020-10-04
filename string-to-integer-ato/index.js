/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let num = '';
  let startIndex = 0;
  for (let i = 0; i < str.length; ++i) {
      if (str[i] !== ' ') {
          startIndex = i;
          if (isNaN(str[i]) && str[i] !== '-' && str[i] !== '+') {
              return 0; // 不能进行有效的转换
          }
          break;
      }
  }
  for (let i = startIndex + 1; i < str.length; ++i) {
    if (str[i] !== ' ' && !isNaN(str[i])) {
       num += str[i];
    } else {
        break;
    }
 }
 num = Number(str[startIndex] + num);
 if (isNaN(num)) return 0;
 const max = Math.pow(2, 31);
 if (num < -max) {
     return -max;
 }
 if (num > max -1) {
     return max - 1;
 }
 return num;
};

console.log(myAtoi("    -88827   5655  U"))