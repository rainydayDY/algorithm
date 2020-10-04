
// ********************************         直接插入排序          ******************

const insertSort = (arr) => {
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < arr[i-1]) {
            const t = arr[i];
            let index = i - 1;
            while(arr[index] > t) {
                arr[index + 1] = arr[index];
                index--;
            }
            arr[index + 1] = t;
        }
    }
    return arr;
}

// console.log(insertSort([50, 10, 90, 30, 70, 40, 80, 60, 20]))
// ********************************         快速排序          ******************
const swap = (arr, low, high) => {
    [arr[high], arr[low]] = [arr[low], arr[high]];
}

const partition = (arr, low, high) => {
    const mid = low + (high - low) / 2 | 0;
    if (arr[high] < arr[low]) swap(arr, low,  high);
    if (arr[high] < arr[mid]) swap(arr, mid, high);
    if (arr[low] < arr[mid]) swap(arr, low, mid);
    const pivot = arr[low];
    while(low < high) {
        while(low < high && arr[high] >= pivot) high --;
        arr[low] = arr[high];
        while(low < high && arr[low] <= pivot) low ++; 
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}
const Qsort = (arr, low, high) => {
    if (high - low > 50) {
        while (low < high) {
            const pivot = partition(arr, low, high);
            Qsort(arr, low, pivot - 1);
            low = pivot + 1;
        }
    } else {
        insertSort(arr);
    }
}
const quickSort = (arr) => {
    Qsort(arr, 0, arr.length - 1);
    return arr;
}

// console.log(quickSort([50, 10, 90, 30, 70, 40, 80, 60, 20]))

// ********************************         冒泡排序          ******************

const bubbleSort = (arr) => {
    let flag = true;
    const len = arr.length;
    for (let i = 0; i < len && flag; ++i) {
        flag = false;
        for (let j = len - 2; j >= i; j--) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([50, 10, 90, 30, 70, 40, 80, 60, 20]))

// ********************************         简单选择排序          ******************
const selectSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; ++i) {
        let minIndex = i;
        for (let j = i + 1; j < len; ++j) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}
// console.log(selectSort([50, 10, 90, 30, 70, 40, 80, 60, 20]))

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    while (low < k) {
        const pivot = partition(arr, low, high);
        if (pivot > k) {
            high = pivot;
        } else {
            low = pivot + 1;
        }
    }
    return arr.slice(0 ,k);
    let maxIndex = 0;
    for (let i = 0; i < k; ++i) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    return arr[maxIndex];
};

// console.log(getLeastNumbers([0,0,1,2,4,2,2,3,1,4], 8))
console.log(getLeastNumbers([3,2,1], 4))
// console.log(getLeastNumbers([0,1,2,1], 3))

// 思路：用快速排序，可以将数组分成两组，一组是比锚点小的，如果这组数的长度小于k，那么从锚点的下一个开始，一直到结尾，如果找到的数长度超过k
