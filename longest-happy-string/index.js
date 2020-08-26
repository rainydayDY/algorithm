/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    // 从大到小排序，判断当前字符串是否和快乐字符串最后一个相同，相同的话直接跳过，否则，先从最大的里面取，如果可以取两个，或者取一个，如果当前不是最大的，那就取一个拼接
    // 终止条件是本轮循环没有可以添加的字符串
    let happyStr = '';
    let arr = [{
        str: 'a',
        num: a,
    }, {
        str: 'b',
        num: b,
    }, {
        str: 'c', 
        num: c,
    }]
    while (true) {
        arr = arr.sort((prev, next) => {
            return next.num - prev.num;
        })
        let add = ''; // 本轮没有可以添加的字符串时跳出循环
        for (let i = 0; i < arr.length; ++i) {
            const last = happyStr.slice(-1);
            const { str, num } = arr[i];
            if (str === last) continue;
            let addStr = '';
            if (i === 0) {
                if (num > 1) {
                    addStr = str.repeat(2);
                    arr[i].num -= 2;
                } else if (num === 1) {
                    addStr = str;
                    arr[i].num -= 1;
                }
            } else if (num > 0){
                addStr = str;
                arr[i].num -= 1;
            }
            happyStr += addStr;
            add += addStr;
            break;
        }
        if (!add) break;
    }
    return happyStr;
};
longestDiverseString(1, 1, 7)