const largestOfFour = (arr) => {
    let newArr = [];
    let largest = -10000;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] > largest) largest = arr[i][j];

            if (j === arr.length - 1) newArr.push(largest);
            
        }
        largest = -10000;
    }

    return newArr;
}

console.log(largestOfFour(([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
])));