/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length === 0) return "";
    let dp = [];
    let maxStr = s[0];
    for (let i = s.length - 1; i >= 0 ; --i) {
        dp[i] = []
        for (let j = i; j < s.length; ++j) {
            if(i === j) {
                dp[i][j] = true;
            } else if (j = i + 1 && s[i] === s[j]) {
                dp[i][j] = true;
            } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
            }
            if (dp[i][j] && j-i+1 > maxStr.length) {
                maxStr = s.slice(i, j + 1);
            }
        }
    }
    console.log(dp)
    return maxStr;
};
console.log(longestPalindrome('babad'))