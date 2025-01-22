function isArraySorted(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input is not an array!");
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

let arr = [1, 2, 3, 4, 5];
console.log(isArraySorted(arr));