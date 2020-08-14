/**
 * @param {number[]} A A.length = m + n
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    let mIndex = m -1;
    let nIndex = n - 1;
    let tail = m + n - 1;
    let current = 0;
    while(mIndex >= 0 || nIndex >= 0) {
        if (A[mIndex] > B[nIndex] || nIndex === -1) {
            current = A[mIndex];
            mIndex -= 1;
        } else {
            current = B[nIndex];
            nIndex -= 1;
        }
        A[tail] = current;
        tail -= 1;
    }
    return A;
};

console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3))