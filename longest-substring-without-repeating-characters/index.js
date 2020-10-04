/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let childStr = '';
//     let max = 0;
//     for (let i = 0; i < s.length; ++i) {
//         const index = childStr.indexOf(s[i]);
//         if (index === -1) {
//             childStr += s[i];
//         } else {
//             max = Math.max(childStr.length, max);
//             childStr = childStr.substring(index + 1) + s[i];
//         }
//     }
//     return max = Math.max(childStr.length, max);
// };
var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            console.log('到删除', s.charAt(i - 1))
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            console.log('============', s.charAt(rk + 1))
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        console.log(occ);
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};

console.log(lengthOfLongestSubstring('dvdf'))