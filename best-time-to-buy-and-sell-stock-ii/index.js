/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let maxPrice = 0;
    // let arr = [prices[0]];
    // let index = 1;
    // while(index < prices.length) {
    //     if (prices[index] > prices[index - 1]) {
    //         arr[1] = prices[index];
    //     } else {
    //         if (arr.length === 2) {
    //             maxPrice += arr[1] - arr[0];
    //         }
    //         arr = [prices[index]];
    //     }
    //     index ++;
    // }
    // if (arr.length === 2) {
    //     maxPrice += arr[1] - arr[0];
    // }
    // return  maxPrice;
    let maxPrice = 0;
    let index = 1;
    while(index < prices.length) {
        if (prices[index] > prices[index - 1]) {
            maxPrice += prices[index] - prices[index - 1];
        }
        index ++;
    }
    return  maxPrice;
};

console.log(maxProfit([7,6,4,3,1]))