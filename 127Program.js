let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(arr);