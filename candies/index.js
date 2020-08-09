// 题目链接：https://leetcode-cn.com/problems/distribute-candies-to-people/
// func1：暴利分法
var distributeCandiesFunc1 = function(candies, num_people) {
    let restCandies = candies;
    let n = 0;
    let resArr = new Array(num_people).fill(0);
    while (restCandies > 0) {
        const actualNum = Math.min(restCandies, n+1);
        resArr[n%num_people] += actualNum;
        restCandies -= actualNum;
        n++;
    }
    return resArr;
};
// func1：等差数列求和
var distributeCandiesFunc2 = function(candies, num_people) {
    // 分发完整礼物的回合数
    let p = Math.floor(Math.sqrt(candies*2 +0.25) - 0.5);
    // 每个人都分发到完整礼物的回合数
    const rows = p / num_people | 0;
    // 最后一个回合完整礼物的人数
    const cols = p % num_people;
    const remain = candies - p*(p + 1) /  2;
    let resArr = new Array(num_people).fill(0);
    for (let i = 0; i < num_people; ++i) {
        resArr[i] = (i + 1)*rows + rows*(rows - 1)/2*num_people; // 收到完整礼物总和
        if (i < cols) {
            resArr[i] += i + 1 + rows*num_people;
        }
        if (i === cols) {
            resArr[cols] += remain;
        }
    }
    return resArr;
};