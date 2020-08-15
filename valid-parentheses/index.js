/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === '') return true;
    let arr = [];
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < s.length; ++i) {
        if (/(\(|\[|{)/.test(s[i])) {
            arr.push(s[i]);
        } else {
            const tail = arr.pop();
            if (s[i] !== obj[tail]) return false;
        }
    }
    return true;
};
console.log(isValid('()'))