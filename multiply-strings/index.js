/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === 0) return '0';
    let sum = '';
    for (let i = num1.length - 1; i >= 0; --i) {
        let inSum = '';
        let carry = 0;
        for(let j = num2.length - 1; j >= 0; --j) {
            let res = num1[i]*num2[j] + carry;
            inSum = `${res % 10}${inSum}`;
            carry = res / 10 | 0; 
        }
        if (carry) {
            inSum = `${carry}${inSum}`;
        }
        inSum = `${inSum}` + '0'.repeat(num1.length - i - 1);  
        const len = Math.max(inSum.length, sum.length);
        const newNum1 = inSum.padStart(len, '0');
        const newNum2 = sum.padStart(len, '0');
        let index = len - 1;
        let res = [];
        while (index >= 0) {
            const resIndex = len - index -1;
            const last = res[resIndex] || 0;
            const current = +newNum1[index] + +newNum2[index] + last;
            res[resIndex] = current % 10;
            if (current / 10 | 0) {
                res[resIndex + 1] = current / 10 | 0;
            }
            index --;
        }
        sum = res.reverse().join('');
    }
    return sum;
};
 console.log(multiply('123456789', '987654321'))